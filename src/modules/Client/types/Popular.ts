export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  badge: string | null;
  rating: number;
  reviewCount: number;
  material: string;
  tags: string[];
  description: string;
  image: string;
  images: string[];
  inStock: boolean;
  popular: boolean;
};

export type PopularResponse = {
  total: number;
  items: Product[];
};
