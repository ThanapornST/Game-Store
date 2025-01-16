import { featuredGames, specialOffers, freeGames } from '../data/games';
import { Game } from '../types/game';

export async function fetchGames(category: 'featured' | 'special' | 'free'): Promise<Game[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  switch (category) {
    case 'featured':
      return featuredGames;
    case 'special':
      return specialOffers;
    case 'free':
      return freeGames;
    default:
      return [];
  }
}