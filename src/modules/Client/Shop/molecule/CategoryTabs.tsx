"use client";
import {
  Baby,
  Flower2,
  Home,
  PawPrint,
  Shapes,
  Sparkles,
} from "@/assets/icons/Icons";
import { cn } from "@/lib/utils";
import { Container } from "@/shared/components/atoms/Container";
import { useGetShopCategories } from "../hooks/useGetCategories";
import { memo } from "react";

const ICONS = {
  yarn: Shapes,
  vase: Flower2,
  paw: PawPrint,
  home: Home,
  baby: Baby,
  sparkles: Sparkles,
} as const;

type Props = { active: string; onChange: (slug: string) => void };

const CategoryTabs = ({ active, onChange }: Props) => {
  const { data } = useGetShopCategories();

  return (
    <Container>
      {" "}
      <div className="flex flex-wrap gap-3">
        {data?.map((c) => {
          const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Shapes;
          const isActive = active === c.slug;
          return (
            <button
              key={c.slug}
              onClick={() => onChange(c.slug)}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-2 py-2 font-semibold transition cursor-pointer",
                isActive
                  ? "cozy-bg-brown text-white shadow-md"
                  : "bg-white text-primary hover:bg-secondary",
              )}
            >
              <Icon className="size-4" />
              {c.name}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  isActive ? "bg-white/25" : "bg-secondary",
                )}
              >
                {c.count}
              </span>
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default memo(CategoryTabs);
