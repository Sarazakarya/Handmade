import { CalendarDays, Clock, MessageCircle } from "@/assets/icons/Icons";
import { LucideIcon } from "lucide-react";
import { BlogParams } from "../Types/Blog";

export const BlogLinks = [
  { page: "Home", href: "/" },
  { page: "Blog", href: "/blog" },
];

type BlogDate = {
  label: string;
  Icon: LucideIcon;
};

export const BlogDates: BlogDate[] = [
  { label: "date", Icon: CalendarDays },
  { label: "readTime", Icon: Clock },
  { label: "commentsCount", Icon: MessageCircle },
];

export const defaultFilters: BlogParams = {
  search: "",
  readTime: "all",
  sort: "popular",
};
