import { NextResponse } from "next/server";
import { reviews } from "./lib/db";

// GET /api/reviews?productId=&limit=
export async function list(req: Request) {
  const sp = new URL(req.url).searchParams;
  const productId = Number(sp.get("productId"));
  const limit = Math.min(Math.max(Number(sp.get("limit")) || 50, 1), 100);
  let items = [...reviews];
  if (sp.get("productId") && Number.isFinite(productId)) items = items.filter((r) => r.productId === productId);
  items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const average = items.length ? Math.round((items.reduce((s, r) => s + r.rating, 0) / items.length) * 10) / 10 : 0;
  return NextResponse.json({ total: items.length, average, items: items.slice(0, limit) });
}
