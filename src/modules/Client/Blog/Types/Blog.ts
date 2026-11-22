import { StaticImageData } from "next/image";

export type BlogSort =
  | "popular"
  | "newest"
  | "oldest"
  | "comments"
  | "read-asc";
export type BlogReadTime = "all" | "quick" | "standard" | "deep";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string | null |StaticImageData;
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  categoryName: string;
  readTime: number;
  date: string;
  commentsCount: number;
  views: number;
  author: BlogAuthor;
  image: string | StaticImageData;
  tags: string[];
};

export type BlogPostDetail = BlogPost & {
  related: BlogPost[];
};

export type BlogResponse = {
  items: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  sort: BlogSort;
};

export type BlogReadTimeOption = {
  id: Exclude<BlogReadTime, "all">;
  label: string; // "Standard (5 – 8 min)"
  min: number;
  max: number | null;
  count: number;
};

export type BlogSortOption = {
  value: BlogSort;
  label: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  count: number;
};

export type BlogFiltersResponse = {
  total: number;
  readTimes: BlogReadTimeOption[];
  sortOptions: BlogSortOption[];
  categories: BlogCategory[];
};

export type BlogParams = {
  search?: string;
  category?: string;
  readTime?: BlogReadTime;
  sort?: BlogSort;
  page?: number;
  limit?: number;
};
