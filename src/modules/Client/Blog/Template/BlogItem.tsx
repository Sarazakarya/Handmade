import BlogItemCard from "../molecule/BlogItemCard";
import BlogItemHeader from "../molecule/BlogItemHeader";
import { SlugProps } from "../Types/BlogItem";
import { BlogLinks } from "../utlils/BlogItemData";

const BlogItem = ({ slug }: SlugProps) => {
  return (
    <div className="flex flex-col gap-8">
      <BlogItemHeader links={BlogLinks} slug={slug} />
      <BlogItemCard slug={slug} />
    </div>
  );
};

export default BlogItem;
