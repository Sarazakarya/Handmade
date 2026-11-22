"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetProducts } from "./useGetProducts";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSort,
} from "../utils/ShopData";

export type ShopFiltersState = {
  search: string;
  category: ProductCategory;
  price: ProductPriceRange;
  sort: ProductSort;
};

export function useFilterShop() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = (searchParams.get("category") || "all") as ProductCategory;
  const price = (searchParams.get("price") || "all") as ProductPriceRange;
  const sort = (searchParams.get("sort") || "featured") as ProductSort;

  const [searchInput, setSearchInput] = useState(search);

  const filters: ShopFiltersState = {
    search,
    category,
    price,
    sort,
  };

  const setFilter = (newValue: Partial<ShopFiltersState>) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newValue.search !== undefined) {
      if (newValue.search === "") {
        params.delete("search");
      } else {
        params.set("search", newValue.search);
      }
    }

    if (newValue.category !== undefined) {
      if (newValue.category === "all") {
        params.delete("category");
      } else {
        params.set("category", newValue.category);
      }
    }

    if (newValue.price !== undefined) {
      if (newValue.price === "all") {
        params.delete("price");
      } else {
        params.set("price", newValue.price);
      }
    }

    if (newValue.sort !== undefined) {
      if (newValue.sort === "featured") {
        params.delete("sort");
      } else {
        params.set("sort", newValue.sort);
      }
    }

    const query = params.toString();

    if (query === "") {
      router.replace(pathname, { scroll: false });
    } else {
      router.replace(`${pathname}?${query}`, { scroll: false });
    }
  };

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        setFilter({ search: searchInput });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput, search]);

  const { data, isLoading, refetch, isError } = useGetProducts({
    category,
    search,
    price,
    sort,
  });

  return {
    filters,
    setFilter,
    searchInput,
    setSearchInput,
    data,
    isLoading,
    refetch,
    isError,
  };
}
