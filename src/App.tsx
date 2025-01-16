import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;