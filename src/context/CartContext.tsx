import React, { createContext, useContext, useState } from 'react';
import { Game, CartItem } from '../types/game';

interface CartContextType {
  items: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
  updateQuantity: (gameId: number, quantity: number) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === game.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...game, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== gameId));
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === gameId ? { ...item, quantity } : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}