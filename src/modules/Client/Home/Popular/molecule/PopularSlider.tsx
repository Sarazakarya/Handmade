"use client";

import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./PopularCard";
import { useGetPopular } from "@/modules/Client/hooks/useGetPopular";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ErrorState } from "@/core/ui-states";

const ITEM_CLASS = "basis-full sm:basis-1/2 lg:basis-1/3 mb-4";

const PopularSlider = () => {
  const { data, isLoading, isError, refetch } = useGetPopular();

  if (isError) return <ErrorState onRetry={refetch} />;
  return (
    <CarouselContent>
      {isLoading
        ? Array.from({ length: 4 }).map((_, i) => (
            <CarouselItem key={i} className={ITEM_CLASS}>
              <div className="p-1">
                <ProductCardSkeleton />
              </div>
            </CarouselItem>
          ))
        : data?.map((product) => (
            <CarouselItem key={product.id} className={ITEM_CLASS}>
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
    </CarouselContent>
  );
};

export default PopularSlider;
