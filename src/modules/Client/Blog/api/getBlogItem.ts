import { API } from "@/routes/paths";
import apiClient from "@/services/ApiClient";
import { BlogPostResponse } from "../Types/Blog";

export async function getBlogItem(slug: string) {
  return await apiClient.get<BlogPostResponse>(API.blogPost(slug));
}
