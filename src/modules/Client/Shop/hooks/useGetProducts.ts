import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getProducts } from "../api/getProducts";
import { ProductsParams } from "@/routes/paths";
import { ProductsResponse } from "../types/shopTypes";

export const useGetProducts = (params: ProductsParams) =>
  useApiQuery<ProductsResponse>({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
