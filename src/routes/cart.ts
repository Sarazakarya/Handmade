import { NextResponse } from "next/server";
import { products, store } from "./lib/db";

function view(userId: string) {
  const lines = (store.carts.get(userId) ?? []).flatMap((l) => {
    const product = products.find((p) => p.id === l.productId);
    return product ? [{ ...l, product, lineTotal: product.price * l.quantity }] : [];
  });
  return {
    userId,
    items: lines,
    itemCount: lines.reduce((s, l) => s + l.quantity, 0),
    total: lines.reduce((s, l) => s + l.lineTotal, 0),
  };
}

// POST /api/cart  { userId, productId, quantity? }
export async function add(req: Request) {
  const { userId, productId, quantity } = await req.json().catch(() => ({}));
  const qty = Number.isFinite(Number(quantity)) ? Math.floor(Number(quantity)) : 1;
  if (!userId) return NextResponse.json({ message: "userId is required" }, { status: 400 });
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
  if (!product.inStock) return NextResponse.json({ message: "Product is out of stock" }, { status: 409 });
  if (qty < 1) return NextResponse.json({ message: "quantity must be at least 1" }, { status: 400 });

  const key = String(userId);
  const cart = store.carts.get(key) ?? [];
  const line = cart.find((l) => l.productId === product.id);
  if (line) line.quantity += qty;
  else cart.push({ productId: product.id, quantity: qty });
  store.carts.set(key, cart);
  return NextResponse.json(view(key), { status: 201 });
}

// GET /api/cart/:userId
export async function get(_req: Request, ctx: { params: Promise<{ userId: string }> }) {
  const { userId } = await ctx.params;
  return NextResponse.json(view(userId));
}

// DELETE /api/cart/:userId
export async function clear(_req: Request, ctx: { params: Promise<{ userId: string }> }) {
  const { userId } = await ctx.params;
  store.carts.delete(userId);
  return NextResponse.json(view(userId));
}
