"use client";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MessageCircle } from "lucide-react";
import { BlogPost } from "../Types/Blog";
import {story} from "@/assets/images/Images"

const MOCK_POST: BlogPost = {
  id: 1,
  slug: "art-of-mindful-stitches",
  title:
    "The Art of Mindful Stitches: Why Crochet is the Antidote to Digital Overload",
  excerpt:
    "In a world of constant notifications and screens, the rhythmic cadence of loop, yarn over, and pull through offers a gentle reset for a busy mind.",
  content: [],
  category: "behind-the-stitches",
  categoryName: "Behind The Stitches",
  readTime: 7,
  date: "2026-08-06",
  commentsCount: 31,
  views: 1840,
  author: {
    name: "Aanya Verma",
    role: "Founder & Lead Crocheter",
    avatar: story,
  },
  image: story,
  tags: ["mindfulness", "wellness"],
};

type Props = { post?: BlogPost };

const BlogCard = ({ post = MOCK_POST }: Props) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md">
      {/* image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-4/3 w-full overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
          {post.categoryName}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
          <Clock className="size-3" />
          {post.readTime} min read
        </span>
      </Link>

      {/* body */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="size-4" />
            {post.commentsCount}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-primary">
            {post.title}
          </h3>
        </Link>

        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
          {post.excerpt}
        </p>

        {/* author + read */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex min-w-0 items-center gap-2">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="size-8 rounded-full object-cover"
              />
            ) : (
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                {post.author.name}
              </span>
            )}
            <span className="truncate text-sm font-semibold">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex shrink-0 items-center gap-1 text-sm font-semibold cozy-text-brand-pink"
          >
            Read <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default memo(BlogCard);
