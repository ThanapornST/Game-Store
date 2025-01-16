import React from 'react';
import { Download, PlusCircle, Star } from 'lucide-react';
import { Game } from '../types/game';
import { useCart } from '../context/CartContext';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { addToCart } = useCart();

  const getSteamUrl = (appId: number) => {
    return `https://store.steampowered.com/app/${appId}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
      <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{game.title}</h3>
        
        {game.developer && (
          <p className="text-sm text-gray-400 mb-2">
            by {game.developer}
          </p>
        )}
        
        {game.description && (
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {game.description}
          </p>
        )}

        {game.rating && (
          <div className="flex items-center space-x-1 mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">{game.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {game.discount > 0 && (
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                -{game.discount}%
              </span>
            )}
            {game.price === 0 ? (
              <span className="text-green-500 font-semibold">Free</span>
            ) : (
              <>
                <span className="text-lg">${game.price}</span>
                {game.originalPrice && game.originalPrice !== game.price && (
                  <span className="text-gray-400 line-through text-sm">
                    ${game.originalPrice}
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <a
            href={getSteamUrl(game.steamAppId)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>View on Steam</span>
          </a>
          {game.price > 0 && (
            <button 
              onClick={() => addToCart(game)}
              className="flex items-center justify-center space-x-1 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};