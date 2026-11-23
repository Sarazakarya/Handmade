"use client";
import { Container } from "@/shared/components/atoms/Container";
import { InputWithIcon } from "@/shared/components/molecule/InputWithIcon";
import { SimpleSelect } from "@/shared/components/molecule/SimpleSelect";
import { Search } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { useGetBlogFilters } from "../hooks/useGetBlogFilters";
import { BlogFiltersState } from "../hooks/useGetBlogs";
import { BlogReadTime, BlogSort } from "../Types/Blog";

interface Props {
  filters: BlogFiltersState;
  setFilter: (newValue: Partial<BlogFiltersState>) => void;
  total: number | undefined;
}

const BlogFilters = ({ filters, setFilter, total }: Props) => {
  const [search, setSearch] = useState(filters.search);

  const { data } = useGetBlogFilters();

  const sortOptions =
    data?.sortOptions.map((s) => ({ label: s.label, value: s.value })) ?? [];

  const readTimeOptions = [
    { label: "All Lengths", value: "all" },
    ...(data?.readTimes.map((r) => ({ label: r.label, value: r.id })) ?? []),
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() !== filters.search) {
        setFilter({ search: search.trim() });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Container>
      <div className="rounded-3xl border cozy-bg-light-brown p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
            <InputWithIcon
              icon={Search}
              placeholder="Search keywords, yarn, guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-72"
            />
            <div className="w-full min-w-0 sm:w-auto">
              <SimpleSelect
                label="Read Time:"
                options={readTimeOptions}
                value={filters.readTime}
                onChange={(v) => setFilter({ readTime: v as BlogReadTime })}
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-wrap items-center gap-3 lg:w-auto lg:justify-end">
            <span className="shrink-0 whitespace-nowrap text-sm">
              <b>{total ?? 0}</b> {total === 1 ? "story" : "stories"}
            </span>

            <div className="min-w-0 flex-1 sm:flex-none">
              <SimpleSelect
                label="Sort:"
                options={sortOptions}
                value={filters.sort}
                onChange={(v) => setFilter({ sort: v as BlogSort })}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(BlogFilters);
