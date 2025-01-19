import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { featuredGames, specialOffers, freeGames, searchOnlyGames } from '../data/games';
import { Game } from '../types/game';

export const Navigation: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  // Combine all games for search, including search-only games
  const allGames = [...featuredGames, ...specialOffers, ...freeGames, ...searchOnlyGames];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allGames.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (game.developer && game.developer.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      window.open(`https://store.steampowered.com/search/?term=${encodedQuery}`, '_blank', 'noopener,noreferrer');
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleGameSelect = (game: Game) => {
    window.open(`https://store.steampowered.com/app/${game.steamAppId}`, '_blank', 'noopener,noreferrer');
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <nav className="bg-gray-800 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 onClick={() => navigate('/')} className="text-2xl font-bold cursor-pointer">Game Store</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games..."
                  className="bg-gray-700 text-white px-4 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                {searchResults.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 bg-gray-800 mt-1 rounded-md shadow-lg max-h-64 overflow-y-auto">
                    {searchResults.map((game) => (
                      <div
                        key={game.id}
                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
                        onClick={() => handleGameSelect(game)}
                      >
                        <img 
                          src={game.image} 
                          alt={game.title} 
                          className="w-8 h-8 object-cover rounded"
                        />
                        <div className="flex-grow">
                          <div className="text-sm font-medium">{game.title}</div>
                          {game.developer && (
                            <div className="text-xs text-gray-400">{game.developer}</div>
                          )}
                        </div>
                        <div className="text-sm">
                          {game.price === 0 ? (
                            <span className="text-green-500">Free</span>
                          ) : (
                            <span>${game.price}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-r-md transition-colors"
              >
                Search
              </button>
            </form>
            <div 
              className="relative cursor-pointer ml-2" 
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
          <User className="w-5 h-5 cursor-pointer" />
          <Menu className="md:hidden w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};