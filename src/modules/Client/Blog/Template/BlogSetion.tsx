"use client";

import { Suspense } from "react";
import BlogHeader from "../molecule/BlogHeader";
import BlogFilters from "../molecule/BlogFilters";
import BlogCards from "../molecule/BlogCards";
import { useGetBlog } from "../hooks/useGetBlog";
import { useGetBlogs } from "../hooks/useGetBlogs";
import BlogCardSkeleton from "../molecule/BlogCardSkeleton";
import { Container } from "@/shared/components/atoms/Container";

const BlogSectionContent = () => {
  const { filters, setFilter } = useGetBlogs();

  const { data, isLoading, isError, refetch } = useGetBlog(filters);

  return (
    <div className="flex flex-col gap-8">
      <BlogHeader />

      <BlogFilters
        filters={filters}
        setFilter={setFilter}
        total={data?.total ?? 0}
      />

      <BlogCards
        posts={data?.items ?? []}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />
    </div>
  );
};

const BlogSection = () => {
  return (
    <Suspense
      fallback={
        <Container>
          {Array.from({ length: 4 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </Container>
      }
    >
      <BlogSectionContent />
    </Suspense>
  );
};

export default BlogSection;
