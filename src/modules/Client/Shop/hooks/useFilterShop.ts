"use client";

import { useEffect, useState } from "react";
import { useGetProducts } from "./useGetProducts";

export const useFilterShop = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("featured");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, refetch, isError } = useGetProducts({
    category,
    search: debounced,
    price,
    sort,
  });
  return {
    category,
    setCategory,
    search,
    setSearch,
    price,
    setPrice,
    sort,
    setSort,
    data,
    isLoading,
    refetch,
    isError,
  };
};
