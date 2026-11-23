"use client";
import { Container } from "@/shared/components/atoms/Container";
import { ErrorState } from "@/core/ui-states";
import ItemImage from "./ItemImage";
import ItemsDescription from "./ItemsDescription";
import ItemSkeleton from "./ItemSkeleton";
import { SlugProps } from "../../Blog/Types/BlogItem";
import { useGetProduct } from "../hooks/useGetProduct";

const ItemCard = ({ slug }: SlugProps) => {
  const { data, isError, isLoading, refetch } = useGetProduct(slug);

  if (isError) return <ErrorState onRetry={() => refetch()} />;
  if (isLoading || !data) return <ItemSkeleton />;

  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
        <ItemImage
          name={data.name}
          badge={data.badge}
          images={data.images.length ? data.images : [data.image]}
        />
        <ItemsDescription product={data} />
      </div>
    </Container>
  );
};

export default ItemCard;
