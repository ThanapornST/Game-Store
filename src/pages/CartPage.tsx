import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">Your cart is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex items-center">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.developer}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="w-24 text-right">${(item.price * item.quantity).toFixed(2)}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
          <div className="bg-gray-800 rounded-lg p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};