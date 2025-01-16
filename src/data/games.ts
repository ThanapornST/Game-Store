import { Game } from '../types/game';

export const featuredGames: Game[] = [
  {
    id: 1446780,
    steamAppId: 1446780,
    title: "Monster Hunter Rise",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=300&fit=crop",
    developer: "CAPCOM Co., Ltd.",
    rating: 4.5,
    description: "Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you'll become a hunter.",
    discount: 0
  },
  {
    id: 1091500,
    steamAppId: 1091500,
    title: "Cyberpunk 2077",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
    discount: 50,
    originalPrice: 119.99,
    developer: "CD PROJEKT RED",
    rating: 4.2,
    description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City"
  },
  {
    id: 292030,
    steamAppId: 292030,
    title: "The Witcher 3: Wild Hunt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
    developer: "CD PROJEKT RED",
    rating: 4.9,
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will."
  }
];

export const specialOffers: Game[] = [
  {
    id: 1245620,
    steamAppId: 1245620,
    title: "Elden Ring",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1548484352-ea579e5233a8?w=500&h=300&fit=crop",
    discount: 20,
    originalPrice: 74.99,
    developer: "FromSoftware Inc.",
    rating: 4.7,
    description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring"
  },
  {
    id: 1174180,
    steamAppId: 1174180,
    title: "Red Dead Redemption 2",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?w=500&h=300&fit=crop",
    discount: 33,
    originalPrice: 89.99,
    developer: "Rockstar Games",
    rating: 4.8,
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores"
  },
  {
    id: 2050650,
    steamAppId: 2050650,
    title: "Resident Evil 4",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&h=300&fit=crop",
    developer: "CAPCOM Co., Ltd.",
    rating: 4.8,
    description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City."
  }
];

export const freeGames: Game[] = [
  {
    id: 570,
    steamAppId: 570,
    title: "Dota 2",
    price: 0,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
    developer: "Valve",
    rating: 4.5,
    description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes."
  },
  {
    id: 440,
    steamAppId: 440,
    title: "Team Fortress 2",
    price: 0,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
    developer: "Valve",
    rating: 4.7,
    description: "The most highly-rated free game of all time!"
  }
];