import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { type ProductsResponse } from "../utils/ShopData";
import { getProducts } from "../api/getProducts";
import { ProductsParams } from "@/routes/paths";

export const useGetProducts = (params: ProductsParams) =>
  useApiQuery<ProductsResponse>({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
