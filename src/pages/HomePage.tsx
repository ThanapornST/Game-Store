import React, { useEffect, useState } from 'react';
import { GameCard } from '../components/GameCard';
import { Game } from '../types/game';
import { fetchGames } from '../services/api';

export const HomePage: React.FC = () => {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [specialOffers, setSpecialOffers] = useState<Game[]>([]);
  const [freeGames, setFreeGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGames() {
      try {
        const [featured, special, free] = await Promise.all([
          fetchGames('featured'),
          fetchGames('special'),
          fetchGames('free'),
        ]);

        setFeaturedGames(featured);
        setSpecialOffers(special);
        setFreeGames(free);
      } catch (error) {
        console.error('Error loading games:', error);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading games...</div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Featured Games */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Featured & Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Free Games */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Free Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
};