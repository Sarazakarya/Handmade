"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/modules/Client/types/Popular";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { ButtonsIcon } from "@/shared/components/molecule/ButtonsIcon";

const ProductCard = ({ product }: { product: Product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/4.2] w-full">
        <Image
          src={product.image}
          alt={product.material}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full cozy-bg-brand-pink px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}

        {/* view + heart */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Add to wishlist"
            aria-pressed={liked}
            onClick={() => setLiked((prev) => !prev)}
            className="flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white"
          >
            <Heart
              className={`size-4 transition ${
                liked ? "fill-red-500 text-red-500" : "text-stone-600"
              }`}
            />
          </button>

          <button
            type="button"
            aria-label="Quick view"
            className="flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white"
          >
            <Eye className="size-4 text-stone-600" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6 pb-6 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a0714f]">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-[#6b2a14]">{product.rating}</span>
          </div>
        </div>

        <Title className="truncate text-lg font-bold ">{product.name}</Title>

        <Text className="truncate text-sm text-stone-500">
          {product.description}
        </Text>

        <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-4">
          <Text className="text-2xl font-extrabold ">{product.price} $</Text>

          <ButtonsIcon
            icon={ShoppingBag}
            label="Cart"
            className="flex items-center gap-2 rounded-full  px-5 py-2.5 text-sm font-bold uppercase tracking-wide "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
