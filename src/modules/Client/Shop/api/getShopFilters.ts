import { API } from "@/routes/paths";
import apiClient from "@/services/ApiClient";
import { ShopFiltersResponse } from "../types/shopTypes";

export async function getShopFilters() {
  return await apiClient.get<ShopFiltersResponse>(API.filters);
}
