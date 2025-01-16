import React, { useState } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      window.open(`https://store.steampowered.com/search/?term=${encodedQuery}`, '_blank', 'noopener,noreferrer');
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-gray-800 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 onClick={() => navigate('/')} className="text-2xl font-bold cursor-pointer">Game Store</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Your Store</a>
            <a href="#" className="hover:text-gray-300">New & Noteworthy</a>
            <a href="#" className="hover:text-gray-300">Categories</a>
            <a href="#" className="hover:text-gray-300">Points Shop</a>
            <a href="#" className="hover:text-gray-300">News</a>
            <a href="#" className="hover:text-gray-300">Labs</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              className="bg-gray-700 text-white px-4 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-r-md transition-colors"
            >
              Search
            </button>
          </form>
          <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
          <User className="w-5 h-5 cursor-pointer" />
          <Menu className="md:hidden w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};