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
