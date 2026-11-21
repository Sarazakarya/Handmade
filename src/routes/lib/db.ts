import data from "../data/db.json";
import blogData from "../data/blog.json";

export type Category = {
  id: number;
  slug: string;
  name: string;
  icon: string;
  description: string;
  image: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  categoryId: number;
  category: string; // category slug
  price: number;
  oldPrice: number | null;
  badge: string | null;
  rating: number;
  reviewCount: number;
  tags: string[];
  material: string;
  popular: boolean;
  popularOrder: number | null;
  description: string;
  image: string;
  images: string[];
  inStock: boolean;
  stock: number;
  featuredOrder: number;
  createdAt: string;
};

export type Review = {
  id: number;
  productId: number;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type PriceRange = { id: string; label: string; min: number; max: number | null };

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type CartItem = { productId: number; quantity: number };

export const meta = data.meta as unknown as { currency: string; currencySymbol: string; priceRanges: PriceRange[] };
export const categories = data.categories as unknown as Category[];
export const products = data.products as unknown as Product[];
export const reviews = data.reviews as unknown as Review[];

// In-memory, mutable store. Kept on globalThis so Next.js hot reload doesn't wipe it in dev.
// NOT durable on serverless (Vercel): swap for a real DB when you need persistence.
const g = globalThis as unknown as {
  __cozyStore?: { users: User[]; carts: Map<string, CartItem[]> };
};
export const store =
  g.__cozyStore ??
  (g.__cozyStore = {
    users: [...(data.users as unknown as User[])],
    carts: new Map<string, CartItem[]>(),
  });

// ---------- Blog ----------
export type BlogAuthor = { name: string; role: string; avatar: string | null };

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs
  category: string; // category slug
  readTime: number; // minutes
  date: string; // ISO yyyy-mm-dd
  commentsCount: number;
  views: number;
  author: BlogAuthor;
  image: string;
  tags: string[];
};

export type BlogCategory = { slug: string; name: string };
export type ReadTimeRange = { id: string; label: string; min: number; max: number | null };

export const blogReadTimes = blogData.meta.readTimes as unknown as ReadTimeRange[];
export const blogCategories = blogData.categories as unknown as BlogCategory[];
export const blogPosts = blogData.posts as unknown as BlogPost[];
