"use client";
import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Truck,
  Wheat,
  Zap,
} from "lucide-react";
import Title from "@/shared/components/atoms/Title";
import ItemTabs from "./ItemTabs";
import ShareButton from "@/shared/components/molecule/ShareButton";
import { ButtonsIcon } from "@/shared/components/molecule/ButtonsIcon";
import { ProductDetail } from "../types/shopTypes";



const ItemsDescription = ({ product }: { product: ProductDetail }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold uppercase tracking-[0.2em] cozy-text-brand-pink">
          {product.category}
        </span>
        <Title size="xl" className="font-heading">
          {product.slug}
        </Title>
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="font-bold">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount} customer reviews)
          </span>
        </div>
      </div>

      <hr />

      <div className="flex flex-wrap items-center gap-4">
        <span className="font-heading text-4xl font-extrabold text-primary">
          ₹{product.price}
        </span>
        <span className="text-xl text-muted-foreground line-through">
          ₹{product.oldPrice}
        </span>
        <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
          <span className="size-2 rounded-full bg-green-500" />
          In Stock • Dispatches in 24–48h
        </span>
      </div>

      <hr />

      <div className="flex items-center gap-3 rounded-xl border cozy-bg-light-brown px-4 py-3">
        <Wheat className="size-5 cozy-text-brand-pink" />
        <p className="text-base">
          <b>Material:</b> {product.material}
        </p>
      </div>

      <p className="text-base leading-7 text-muted-foreground">
        {product.description}
      </p>

      <div className="flex items-center gap-4">
        <span className="text-sm font-bold uppercase tracking-wider">
          Quantity:
        </span>
        <div className="flex items-center rounded-xl border cozy-bg-light-brown">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex size-11 cursor-pointer items-center justify-center"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-12 bg-white py-2 text-center font-bold">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            aria-label="Increase quantity"
            className="flex size-11 cursor-pointer items-center justify-center"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ButtonsIcon label="Add to cart" icon={ShoppingBag} size={"xlg"} />
        <ButtonsIcon label="Buy now" icon={Zap} size={"xlg"} variant={"alt"} />
      </div>

      <div className="flex flex-col gap-2 rounded-xl border cozy-bg-light-brown p-5">
        <div className="flex items-center gap-3">
          <Truck className="size-5 cozy-text-brand-pink" />
          <span className="font-bold text-primary">
            Complimentary Free Standard Shipping
          </span>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          Packaged securely in plastic-free recyclable cartons with dried
          botanical accents. Order tracking provided upon dispatch.
        </p>
      </div>

      <ItemTabs />

      <ShareButton />
    </div>
  );
};

export default ItemsDescription;
