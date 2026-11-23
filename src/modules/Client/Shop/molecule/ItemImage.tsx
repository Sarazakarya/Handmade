"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURES } from "../utils/ShopData";

type Props = {
  images: string[];
  name: string;
  badge: string | null;
};

const ItemImage = ({ images, name, badge }: Props) => {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative aspect-6/5 w-full overflow-hidden rounded-2xl border bg-secondary shadow-sm">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full cozy-bg-brand-pink px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
            {badge}
          </span>
        )}

        <div className="absolute right-4 top-4 flex gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="View full image"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
          >
            <Maximize2 className="size-5 text-primary" />
          </button>
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            aria-label="Add to wishlist"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
          >
            <Heart
              className={cn(
                "size-5",
                liked ? "fill-current cozy-text-brand-pink" : "text-primary",
              )}
            />
          </button>
        </div>
      </div>

      {images.length >= 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={cn(
                "relative size-20 cursor-pointer overflow-hidden rounded-xl border-2 transition sm:size-24",
                active === i
                  ? "border-primary"
                  : "border-transparent opacity-80 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {FEATURES.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-1 rounded-xl border cozy-bg-light-brown px-3 py-5 text-center"
          >
            <Icon className="mb-1 size-6 cozy-text-brand-pink" />
            <span className="text-sm font-bold text-primary">{title}</span>
            <span className="text-xs text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 cursor-pointer rounded-full bg-white/90 p-2"
          >
            <X className="size-5" />
          </button>
          <div className="relative h-[85vh] w-full max-w-4xl">
            <Image
              src={images[active]}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemImage;
