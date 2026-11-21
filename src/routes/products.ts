import { NextResponse } from "next/server";
import { categories, meta, products, type Product } from "./lib/db";

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name", label: "Name: A to Z" },
] as const;

type Sort = (typeof SORT_OPTIONS)[number]["value"];

const num = (v: string | null): number | null => {
  if (v === null || v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

export type ProductQuery = {
  category?: string | null; // slug, "all" or empty = all
  search?: string | null;
  price?: string | null; // price range id from /api/products/filters
  minPrice?: number | null;
  maxPrice?: number | null;
  sort?: string | null;
  badge?: string | null;
  inStock?: boolean;
  popular?: boolean;
  page?: number | null;
  limit?: number | null;
};

export function queryFromUrl(url: URL, fixedCategory?: string): ProductQuery {
  const sp = url.searchParams;
  return {
    category: fixedCategory ?? sp.get("category"),
    search: sp.get("search") ?? sp.get("q"),
    price: sp.get("price"),
    minPrice: num(sp.get("minPrice")),
    maxPrice: num(sp.get("maxPrice")),
    sort: sp.get("sort"),
    badge: sp.get("badge"),
    inStock: sp.get("inStock") === "true" || sp.get("inStock") === "1",
    popular: sp.get("popular") === "true" || sp.get("popular") === "1",
    page: num(sp.get("page")),
    limit: num(sp.get("limit")),
  };
}

/** Pure filtering/sorting/pagination logic shared by every list endpoint. */
export function queryProducts(q: ProductQuery) {
  let items: Product[] = [...products];

  // category
  const cat = (q.category ?? "").trim().toLowerCase();
  if (cat && cat !== "all") items = items.filter((p) => p.category === cat);

  // search: every word must match name, description, tags or category name
  const words = (q.search ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length) {
    const catName = new Map(categories.map((c) => [c.slug, c.name.toLowerCase()]));
    items = items.filter((p) => {
      const hay = [p.name, p.description, p.tags.join(" "), catName.get(p.category) ?? ""]
        .join(" ")
        .toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }

  // price (range id, or explicit min/max)
  let min = q.minPrice ?? null;
  let max = q.maxPrice ?? null;
  const range = meta.priceRanges.find((r) => r.id === q.price);
  if (range) {
    min = range.min;
    max = range.max;
  }
  if (min !== null) items = items.filter((p) => p.price >= min!);
  if (max !== null) items = items.filter((p) => (range ? p.price < max! : p.price <= max!));

  if (q.badge) items = items.filter((p) => p.badge?.toLowerCase() === q.badge!.toLowerCase());
  if (q.popular) items = items.filter((p) => p.popular);
  if (q.inStock) items = items.filter((p) => p.inStock);

  // sort
  const sort: Sort = SORT_OPTIONS.some((s) => s.value === q.sort) ? (q.sort as Sort) : "featured";
  const by: Record<Sort, (a: Product, b: Product) => number> = {
    featured: (a, b) => a.featuredOrder - b.featuredOrder,
    newest: (a, b) => b.createdAt.localeCompare(a.createdAt),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  items.sort(by[sort]);

  // pagination
  const limit = Math.min(Math.max(Math.floor(q.limit ?? 20), 1), 100);
  const total = items.length;
  const totalPages = Math.max(Math.ceil(total / limit), 1);
  const page = Math.min(Math.max(Math.floor(q.page ?? 1), 1), totalPages);
  const paged = items.slice((page - 1) * limit, page * limit);

  return { items: paged, total, page, limit, totalPages, hasNext: page < totalPages, sort };
}

// GET /api/products?category=&search=&price=&minPrice=&maxPrice=&sort=&badge=&inStock=&page=&limit=
export async function list(req: Request) {
  return NextResponse.json(queryProducts(queryFromUrl(new URL(req.url))));
}

// GET /api/products/popular?limit=4 : the "Popular Handmade Creations" slider
export async function popular(req: Request) {
  const limit = Math.min(Math.max(Number(new URL(req.url).searchParams.get("limit")) || 8, 1), 50);
  const items = products
    .filter((p) => p.popular)
    .sort((a, b) => (a.popularOrder ?? 99) - (b.popularOrder ?? 99))
    .slice(0, limit);
  return NextResponse.json({ total: items.length, items });
}

// GET /api/products/:id   (id is the numeric id or the slug)
export async function getById(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const product = products.find((p) => String(p.id) === id || p.slug === id);
  if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  return NextResponse.json({ ...product, related });
}

// GET /api/products/filters : everything the shop toolbar needs in one call
export async function filters() {
  return NextResponse.json({
    currency: meta.currency,
    currencySymbol: meta.currencySymbol,
    priceRanges: meta.priceRanges,
    sortOptions: SORT_OPTIONS,
    badges: [...new Set(products.map((p) => p.badge).filter(Boolean))],
    minPrice: Math.min(...products.map((p) => p.price)),
    maxPrice: Math.max(...products.map((p) => p.price)),
  });
}
