import apiClient from "@/services/ApiClient";
import { ProductDetail } from "../types/shopTypes";
import { API } from "@/routes/paths";

export const getProduct = (slug: string): Promise<ProductDetail> => {
  return apiClient.get<ProductDetail>(API.product(slug));
};
