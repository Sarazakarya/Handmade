"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogReadTime, BlogSort } from "../Types/Blog";

export type BlogFiltersState = {
  search: string;
  readTime: BlogReadTime;
  sort: BlogSort;
};

export function useGetBlogs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const readTime = (searchParams.get("readTime") || "all") as BlogReadTime;
  const sort = (searchParams.get("sort") || "popular") as BlogSort;

  const filters: BlogFiltersState = { search, readTime, sort };

  const setFilter = (newValue: Partial<BlogFiltersState>) => {
    const params = new URLSearchParams(window.location.search);

    if (newValue.search !== undefined) {
      if (newValue.search === "") {
        params.delete("search");
      } else {
        params.set("search", newValue.search);
      }
    }

    if (newValue.readTime !== undefined) {
      if (newValue.readTime === "all") {
        params.delete("readTime");
      } else {
        params.set("readTime", newValue.readTime);
      }
    }

    if (newValue.sort !== undefined) {
      if (newValue.sort === "popular") {
        params.delete("sort");
      } else {
        params.set("sort", newValue.sort);
      }
    }

    const query = params.toString();
    if (query === "") {
      router.replace(pathname, { scroll: false });
    } else {
      router.replace(pathname + "?" + query, { scroll: false });
    }
  };

  return { filters, setFilter };
}
