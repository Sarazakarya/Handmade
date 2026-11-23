import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { ProductDetail } from "../types/shopTypes";
import { getProduct } from "../api/getProduct";

export const useGetProduct = (slug: string) =>
  useApiQuery<ProductDetail>({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
  });