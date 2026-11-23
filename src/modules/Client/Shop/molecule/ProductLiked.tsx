"use client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "../../Home/Popular/molecule/PopularCard";
import ProductCardSkeleton from "../../Home/Popular/molecule/ProductCardSkeleton";
import { useGetProduct } from "../hooks/useGetProduct";

const ITEM_CLASS = "basis-full sm:basis-1/2 lg:basis-1/3";

const ProductLiked = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetProduct(slug);
  const related = data?.related ?? [];

  return (
    <CarouselContent>
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <CarouselItem key={i} className={ITEM_CLASS}>
              <div className="p-1">
                <ProductCardSkeleton />
              </div>
            </CarouselItem>
          ))
        : related.map((product) => (
            <CarouselItem key={product.id} className={ITEM_CLASS}>
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
    </CarouselContent>
  );
};

export default ProductLiked;
