import { API } from "@/routes/paths";
import apiClient from "@/services/ApiClient";
import { ShopCategory } from "../types/shopTypes";

export async function getShopCategories() {
  const res = await apiClient.get<{ items: ShopCategory[] }>(API.categories);
  return res.items;
}
