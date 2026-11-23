import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { BlogPostResponse } from "../Types/Blog";
import { getBlogItem } from "../api/getBlogItem";

export const useGetBlogItem = (slug: string) =>
  useApiQuery<BlogPostResponse>({
    queryKey: ["blog-item", slug],
    queryFn: () => getBlogItem(slug ?? []),
  });
