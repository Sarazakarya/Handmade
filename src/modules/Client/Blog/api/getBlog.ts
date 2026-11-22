import apiClient from "@/services/ApiClient";
import { BlogParams, BlogResponse } from "../Types/Blog";
import { blogUrl } from "@/routes/paths";

export async function getBlog(params: BlogParams) {
  return await apiClient.get<BlogResponse>(blogUrl(params));
}
