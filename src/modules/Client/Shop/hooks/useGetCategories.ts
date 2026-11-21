"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { ShopCategory } from "../utils/ShopData";
import { getShopCategories } from "../api/getCategories";

export const useGetShopCategories = () =>
  useApiQuery<ShopCategory[]>({
    queryKey: ["categories", "shop"],
    queryFn: getShopCategories,
  });
