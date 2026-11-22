import { Product } from "../../types/Popular";

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

export type ProductPriceRange =
  | "all"
  | "under-200"
  | "200-400"
  | "400-600"
  | "over-600";

export type ProductSort =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "name";

export type ProductCategory =
  | "all"
  | "decor-gifts"
  | "pet-animal"
  | "home-living"
  | "kids-baby"
  | "personalized";

export type ShopFiltersState = {
  searchP: string;
  category: ProductCategory;
  sort: ProductSort;
  price: ProductPriceRange;
};
