"use client";
import Image from "next/image";
import { Container } from "@/shared/components/atoms/Container";
import Title from "@/shared/components/atoms/Title";
import { BlogDates } from "../utlils/BlogItemData";
import { useGetBlogItem } from "../hooks/useGetBlogItem";
import { SlugProps } from "../Types/BlogItem";
import AuthorBox from "./AuthorBox";
import BlogTags from "./BlogTags";
import ReadingStoryCards from "./ReadingStoryCards";
import { story } from "@/assets/images/Images";
import { EmptyState } from "@/core/ui-states";
import BlogItemSkeleton from "./BlogItemSkeleton";
import Text from "@/shared/components/atoms/Text";
import ShareButton from "@/shared/components/molecule/ShareButton";

const BlogItemCard = ({ slug }: SlugProps) => {
  const { data, isError, isLoading } = useGetBlogItem(slug);

  if (isLoading) return <BlogItemSkeleton />;

  if (isError || !data)
    return (
      <Container>
        <EmptyState />
      </Container>
    );


  return (
    <Container>
      <div className="flex flex-wrap items-center gap-4">
        {BlogDates.map((ele) => {
          const Icon = ele.Icon;

          return (
            <div
              key={ele.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="size-4 cozy-text-primary" />
              <span>
                {ele.label === "date"
                  ? data.date
                  : ele.label === "readTime"
                    ? `${data.readTime} min read`
                    : `${data.commentsCount} comments`}
              </span>
            </div>
          );
        })}
      </div>

      <div className="my-8 flex flex-col gap-4">
        <Title size="xl" className="font-heading">
          {data.title}
        </Title>

        <hr className="cozy-bg-light-brown opacity-50" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={data.author.avatar || story}
              alt={data.author.name}
              width={48}
              height={48}
              className="size-12 rounded-full object-cover"
            />

            <span className="text-lg font-bold text-primary">
              {data.author.name}
            </span>
          </div>
        </div>

        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <blockquote className="mt-6 rounded-2xl border-l-4 border-[#e5a9a9] bg-[#f9f2ec] p-6 sm:p-8">
          {data.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-3 text-base font-bold leading-relaxed last:mb-0 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </blockquote>

        <Text className="mt-4 text-base leading-relaxed text-slate-700">
          {data.excerpt}
        </Text>

        <hr className="cozy-bg-light-brown my-4 opacity-50" />

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <BlogTags tags={data.tags} />

          <ShareButton />
        </div>

        {data.related.map((ele, i) => {
          return <AuthorBox data={ele} key={i} />;
        })}

        <hr className="cozy-bg-light-brown my-4 opacity-50" />

        <ReadingStoryCards />
      </div>
    </Container>
  );
};

export default BlogItemCard;
