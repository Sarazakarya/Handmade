import { Container } from "@/shared/components/atoms/Container";
import { Skeleton } from "@/components/ui/skeleton";

const ItemSkeleton = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <Skeleton className="aspect-6/5 w-full rounded-2xl" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="size-20 rounded-xl sm:size-24" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-4/5" />
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-px w-full" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-8 w-56 rounded-full" />
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-11 w-56 rounded-xl" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
          </div>
          <Skeleton className="h-28 w-full rounded-xl" />
        </div>
      </div>
    </Container>
  );
};

export default ItemSkeleton;
