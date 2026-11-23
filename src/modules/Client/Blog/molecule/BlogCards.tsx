"use client";
import { EmptyState, ErrorState } from "@/core/ui-states";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import type { BlogPost } from "../Types/Blog";
import { motion } from "framer-motion";
import { memo } from "react";

type Props = {
  posts: BlogPost[];
  isLoading: boolean;
  isError?: boolean;
  refetch?: () => unknown;
};

const GRID = "grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 xl:grid-cols-4";

const BlogCards = ({ posts, isLoading, isError, refetch }: Props) => {
  if (isError) return <ErrorState onRetry={() => refetch?.()} />;

  if (!isLoading && posts.length === 0) {
    return (
      <EmptyState
        title="No stories found"
        message="Try a different keyword or read time."
      />
    );
  }

  return (
    <div className={GRID}>
      {isLoading
        ? Array.from({ length: 4 }).map((_, i) => <BlogCardSkeleton key={i} />)
        : posts.map((post) => {
            return (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.08,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                <BlogCard key={post.id} post={post ?? []} />
              </motion.div>
            );
          })}
    </div>
  );
};

export default memo(BlogCards);
