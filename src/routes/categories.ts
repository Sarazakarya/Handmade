import { NextResponse } from "next/server";
import { categories, products } from "./lib/db";
import { queryFromUrl, queryProducts } from "./products";

// GET /api/categories : category pills with live counts (+ an "All" entry)
export async function list() {
  const withCount = categories.map((c) => ({
    ...c,
    count: products.filter((p) => p.categoryId === c.id).length,
  }));
  return NextResponse.json({
    total: products.length,
    items: [
      { id: 0, slug: "all", name: "All Creations", icon: "yarn", description: "", image: null, count: products.length },
      ...withCount,
    ],
  });
}

// GET /api/categories/:slug/products  (accepts the same query params as /api/products)
export async function productsBySlug(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return NextResponse.json({ message: "Category not found" }, { status: 404 });
  const result = queryProducts(queryFromUrl(new URL(req.url), slug));
  return NextResponse.json({ category, ...result });
}
