"use client";
import { ErrorState } from "@/core/ui-states";
import CategoriesHeader from "../molecule/CategoriesHeader";
import CategoryCard from "../molecule/CategoryCard";
import CategoryCardSkeleton from "../molecule/CategoryCardSkeleton";
import { useGetCategories } from "@/modules/Client/hooks/useGetCategories";

const CategoriesSection = () => {
  const { data, isError, isLoading, refetch } = useGetCategories();

  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <section className="bg-secondary py-16 mt-8">
      <div className="cozy-container flex flex-col gap-10">
        <CategoriesHeader title="Shop Our Categories" text="Shop By Category" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <CategoryCardSkeleton key={i} />
              ))
            : data?.map((c) => <CategoryCard key={c.slug} {...c} />)}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
