import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { BlogParams, BlogResponse } from "../Types/Blog";
import { getBlog } from "../api/getBlog";

export const useGetBlog = (params: BlogParams) =>
  useApiQuery<BlogResponse>({
    queryKey: ["blog", params],
    queryFn: () => getBlog(params ?? []),
  });
