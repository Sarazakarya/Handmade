import { Product } from "../../types/Popular";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSort,
} from "../utils/ShopData";

export type ProductsResponse = {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  sort: string;
};

export type ShopCategory = {
  id: number;
  slug: string;
  name: string;
  icon: string;
  count: number;
};

export type ShopFiltersResponse = {
  currency: string;
  currencySymbol: string;
  priceRanges: { id: string; label: string; min: number; max: number | null }[];
  sortOptions: { value: string; label: string }[];
};
export type ShopFiltersState = {
  searchP: string;
  category: ProductCategory;
  sort: ProductSort;
  price: ProductPriceRange;
};

// Product
export type ProductBase = {
  id: number;
  slug: string;
  name: string;
  categoryId: number;
  category: string; 
  price: number;
  oldPrice: number | null;
  badge: string | null;
  rating: number;
  reviewCount: number;
  tags: string[];
  description: string;
  image: string;
  images: string[];
  inStock: boolean;
  stock: number;
  featuredOrder: number;
  createdAt: string;
  material: string;
  popular: boolean;
  popularOrder: number | null;
};

export type ProductDetail = ProductBase & {
  related: ProductBase[];
};


export type Review = {
  id: number;
  productId: number;
  author: string;
  rating: number;
  comment: string;
  createdAt: string; //
};

export type ReviewsResponse = {
  total: number;
  average: number;
  items: Review[];
};

// POST /api/cart
export type AddToCartBody = {
  userId: number | string;
  productId: number;
  quantity: number;
};

export type CartResponse = {
  userId: string;
  itemCount: number;
  total: number;
};
