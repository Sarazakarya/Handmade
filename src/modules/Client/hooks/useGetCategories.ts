"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { Category } from "../types/Categories";
import { getCategories } from "../api/getCategories";

export const useGetCategories = () =>
  useApiQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
