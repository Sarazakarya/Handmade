import apiClient from "@/services/ApiClient";
import { API } from "@/routes/paths";
import { PopularResponse, Product } from "../types/Popular";

export async function getPopular(limit = 4): Promise<Product[]> {
  const res = await apiClient.get<PopularResponse>(`${API.popular}?limit=${limit}`);
  return res.items;
}