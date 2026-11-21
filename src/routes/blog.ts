import { NextResponse } from "next/server";
import { blogCategories, blogPosts, blogReadTimes, type BlogPost } from "./lib/db";

export const BLOG_SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "comments", label: "Most Discussed" },
  { value: "read-asc", label: "Shortest Read" },
] as const;

type Sort = (typeof BLOG_SORT_OPTIONS)[number]["value"];

const num = (v: string | null): number | null => {
  if (v === null || v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

export type BlogQuery = {
  search?: string | null;
  category?: string | null; // slug or "all"
  readTime?: string | null; // quick | standard | deep | all
  sort?: string | null;
  page?: number | null;
  limit?: number | null;
};

const categoryName = (slug: string) => blogCategories.find((c) => c.slug === slug)?.name ?? slug;

// adds categoryName so the card can show the badge without another request
const view = (p: BlogPost) => ({ ...p, categoryName: categoryName(p.category) });

/** Filtering / sorting / pagination shared by the list endpoint. */
export function queryBlog(q: BlogQuery) {
  let items = [...blogPosts];

  // category
  const cat = (q.category ?? "").trim().toLowerCase();
  if (cat && cat !== "all") items = items.filter((p) => p.category === cat);

  // read time
  const range = blogReadTimes.find((r) => r.id === q.readTime);
  if (range) {
    items = items.filter(
      (p) => p.readTime >= range.min && (range.max === null || p.readTime <= range.max),
    );
  }

  // search: every word must match title, excerpt, tags, author or category
  const words = (q.search ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length) {
    items = items.filter((p) => {
      const hay = [p.title, p.excerpt, p.tags.join(" "), p.author.name, categoryName(p.category)]
        .join(" ")
        .toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }

  // sort
  const sort: Sort = BLOG_SORT_OPTIONS.some((s) => s.value === q.sort) ? (q.sort as Sort) : "popular";
  const by: Record<Sort, (a: BlogPost, b: BlogPost) => number> = {
    popular: (a, b) => b.views - a.views,
    newest: (a, b) => b.date.localeCompare(a.date),
    oldest: (a, b) => a.date.localeCompare(b.date),
    comments: (a, b) => b.commentsCount - a.commentsCount,
    "read-asc": (a, b) => a.readTime - b.readTime,
  };
  items.sort(by[sort]);

  // pagination
  const limit = Math.min(Math.max(Math.floor(q.limit ?? 12), 1), 50);
  const total = items.length;
  const totalPages = Math.max(Math.ceil(total / limit), 1);
  const page = Math.min(Math.max(Math.floor(q.page ?? 1), 1), totalPages);
  const paged = items.slice((page - 1) * limit, page * limit).map(view);

  return { items: paged, total, page, limit, totalPages, hasNext: page < totalPages, sort };
}

// GET /api/blog?search=&category=&readTime=&sort=&page=&limit=
export async function list(req: Request) {
  const sp = new URL(req.url).searchParams;
  return NextResponse.json(
    queryBlog({
      search: sp.get("search") ?? sp.get("q"),
      category: sp.get("category"),
      readTime: sp.get("readTime"),
      sort: sp.get("sort"),
      page: num(sp.get("page")),
      limit: num(sp.get("limit")),
    }),
  );
}

// GET /api/blog/filters : read-time options, sort options and categories (with counts)
export async function filters() {
  return NextResponse.json({
    total: blogPosts.length,
    readTimes: blogReadTimes.map((r) => ({
      ...r,
      count: blogPosts.filter((p) => p.readTime >= r.min && (r.max === null || p.readTime <= r.max)).length,
    })),
    sortOptions: BLOG_SORT_OPTIONS,
    categories: blogCategories.map((c) => ({
      ...c,
      count: blogPosts.filter((p) => p.category === c.slug).length,
    })),
  });
}

// GET /api/blog/:slug : one post (id also works) + related posts
export async function getBySlug(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const post = blogPosts.find((p) => p.slug === slug || String(p.id) === slug);
  if (!post) return NextResponse.json({ message: "Post not found" }, { status: 404 });
  const related = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
    .map(view);
  return NextResponse.json({ ...view(post), related });
}
