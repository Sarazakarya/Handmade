"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

import { getShopCategories } from "../api/getCategories";
import { ShopCategory } from "../types/shopTypes";

export const useGetShopCategories = () =>
  useApiQuery<ShopCategory[]>({
    queryKey: ["categories", "shop"],
    queryFn: getShopCategories,
  });
