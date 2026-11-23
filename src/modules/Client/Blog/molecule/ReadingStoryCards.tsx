"use client";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import BlogCards from "./BlogCards";
import { useGetBlog } from "../hooks/useGetBlog";
import { defaultFilters } from "../utlils/BlogItemData";

const ReadingStoryCards = () => {
  const { data, isLoading, isError, refetch } = useGetBlog(defaultFilters);
  const posts = data?.items?.slice(0, 4) ?? [];
  return (
    <div className="flex flex-col gap-4">
      <Text variant="brand-pink" className="font-heading">
        - Continue Reading -
      </Text>
      <div className="flex justify-between flex-col md:flex-row">
        <Title>More Handcrafted Stories</Title>
        <Link
          href={"/blog"}
          className="flex gap-2 text-sm font-heading items-center hover:opacity-45 duration-230 translate "
        >
          View All <MoveRight size={20} />
        </Link>
      </div>
      <BlogCards
        posts={posts ?? []}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />
    </div>
  );
};

export default ReadingStoryCards;
