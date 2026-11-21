import apiClient from "@/services/ApiClient";
import { API } from "@/routes/paths";
import { CategoriesResponse } from "../types/Categories";

export async function getCategories() {
  const res = await apiClient.get<CategoriesResponse>(API.categories);
  return res.items.filter((c) => c.slug !== "all");
}
