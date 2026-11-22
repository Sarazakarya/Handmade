"use client";
import { EmptyState, ErrorState } from "@/core/ui-states";
import { Container } from "@/shared/components/atoms/Container";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import type { BlogPost } from "../Types/Blog";


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
    <Container>
      <div className={GRID}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))
          : posts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </Container>
  );
};

export default BlogCards;
