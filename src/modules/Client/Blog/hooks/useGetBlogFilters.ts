import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { BlogFiltersResponse } from "../Types/Blog";
import { getBlogFilter } from "../api/getBlogFilter";

export const useGetBlogFilters = () =>
  useApiQuery<BlogFiltersResponse>({
    queryKey: ["blog-filters"],
    queryFn: getBlogFilter,
  });
