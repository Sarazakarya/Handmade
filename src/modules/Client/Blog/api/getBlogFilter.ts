import { API } from "@/routes/paths";
import apiClient from "@/services/ApiClient";
import { BlogFiltersResponse } from "../Types/Blog";

export async function getBlogFilter() {
  return await apiClient.get<BlogFiltersResponse>(API.blogFilters);
}
