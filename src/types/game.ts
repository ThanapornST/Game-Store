export interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
  originalPrice?: number;
  description?: string;
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  tags?: string[];
  rating?: number;
  steamAppId: number;
}

export interface CartItem extends Game {
  quantity: number;
}