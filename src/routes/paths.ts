// Single source of truth for API URLs on the frontend.
//   import { API, productsUrl } from "@/routes/paths";
//   const res = await fetch(productsUrl({ category: "pet-animal", search: "panda", sort: "price-asc" }));
export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "/api";

export const API = {
  products: `${API_BASE}/products`,
  product: (idOrSlug: string | number) => `${API_BASE}/products/${idOrSlug}`,
  popular: `${API_BASE}/products/popular`,
  filters: `${API_BASE}/products/filters`,
  categories: `${API_BASE}/categories`,
  categoryProducts: (slug: string) => `${API_BASE}/categories/${slug}/products`,
  reviews: `${API_BASE}/reviews`,
  cart: `${API_BASE}/cart`,
  cartByUser: (userId: string | number) => `${API_BASE}/cart/${userId}`,
  blog: `${API_BASE}/blog`,
  blogPost: (slug: string | number) => `${API_BASE}/blog/${slug}`,
  blogFilters: `${API_BASE}/blog/filters`,
  auth: {
    register: `${API_BASE}/auth/register`,
    login: `${API_BASE}/auth/login`,
    me: `${API_BASE}/auth/me`,
    logout: `${API_BASE}/auth/logout`,
  },
} as const;

export type ProductsParams = {
  category?: string; // slug, or "all"
  search?: string;
  price?: string; // range id from API.filters
  minPrice?: number;
  maxPrice?: number;
  sort?: string; // featured | newest | price-asc | price-desc | rating | name
  badge?: string;
  inStock?: boolean;
  popular?: boolean;
  page?: number;
  limit?: number;
};

/** Builds /api/products?... and skips empty values. */
export function productsUrl(params: ProductsParams = {}): string {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === "" || v === "all") continue;
    sp.set(k, String(v));
  }
  const qs = sp.toString();
  return qs ? `${API.products}?${qs}` : API.products;
}

export type BlogParams = {
  search?: string;
  category?: string; // slug, or "all"
  readTime?: string; // quick | standard | deep | all
  sort?: string; // popular | newest | oldest | comments | read-asc
  page?: number;
  limit?: number;
};

/** Builds /api/blog?... and skips empty values and "all". */
export function blogUrl(params: BlogParams = {}): string {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === "" || v === "all") continue;
    sp.set(k, String(v));
  }
  const qs = sp.toString();
  return qs ? `${API.blog}?${qs}` : API.blog;
}
