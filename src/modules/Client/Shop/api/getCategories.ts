import { API } from "@/routes/paths";
import { ShopCategory } from "../utils/ShopData";
import apiClient from "@/services/ApiClient";

export async function getShopCategories() {
  const res = await apiClient.get<{ items: ShopCategory[] }>(API.categories);
  return res.items;
}
