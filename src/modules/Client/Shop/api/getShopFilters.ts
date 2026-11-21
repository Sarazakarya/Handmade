import { API } from "@/routes/paths";
import { ShopFiltersResponse } from "../utils/ShopData";
import apiClient from "@/services/ApiClient";

export async function getShopFilters() {
  return await apiClient.get<ShopFiltersResponse>(API.filters);
}
