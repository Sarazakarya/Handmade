"use client";
type Props = {
  tags: string[];
};
const BlogTags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="mr-1 text-xs font-bold tracking-wider text-slate-600 uppercase">
        TAGS:
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="cursor-pointer rounded-full border border-[#e6dcd2] bg-[#faf6f2] px-4 py-1.5 text-xs font-medium text-[#7c3f1d] transition-colors hover:bg-[#f2e8df]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default BlogTags;
