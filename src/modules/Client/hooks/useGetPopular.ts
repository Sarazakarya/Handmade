"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getPopular } from "../api/getPopular";
import { Product } from "../types/Popular";
;

export const useGetPopular = (limit = 4) =>
  useApiQuery<Product[]>({
    queryKey: ["products", "popular", limit],
    queryFn: () => getPopular(limit),
  });
