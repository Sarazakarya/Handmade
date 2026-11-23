"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { CARE, REVIEWS, SHIPPING, TABS } from "../utils/ShopData";

type TabId = (typeof TABS)[number]["id"];

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="flex list-disc flex-col gap-3 pl-5 text-base leading-7 marker:text-muted-foreground">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const ItemTabs = () => {
  const [tab, setTab] = useState<TabId>("care");

  return (
    <div>
      <div className="grid grid-cols-2 border-b sm:grid-cols-4 s md:grid-cols-2 lg:grid-cols-4">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "-mb-px flex cursor-pointer items-center justify-center border-b-2 px-2 pb-3 pt-1 text-center text-sm font-semibold leading-tight transition",
              tab === t.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-primary",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        {tab === "care" && <Bullets items={CARE} />}
        {tab === "shipping" && <Bullets items={SHIPPING} />}

        {tab === "reviews" && (
          <div className="flex flex-col gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{r.name}</span>
                  <span className="flex">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {tab === "custom" && (
          <div className="flex flex-col items-start gap-4">
            <p className="text-base leading-7">
              Want a different colour, size or a personalised detail? Tell us
              your idea and we will crochet it just for you.
            </p>
            <a
              href="/contact"
              className="rounded-xl cozy-bg-brown px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Request a custom piece
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemTabs;
