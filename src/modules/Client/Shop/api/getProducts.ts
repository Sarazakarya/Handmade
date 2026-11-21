import apiClient from "@/services/ApiClient";
import { productsUrl, type ProductsParams } from "@/routes/paths";
import { ProductsResponse } from "../utils/ShopData";

export async function getProducts(
  params: ProductsParams,
): Promise<ProductsResponse> {
  return apiClient.get<ProductsResponse>(productsUrl(params));
}
