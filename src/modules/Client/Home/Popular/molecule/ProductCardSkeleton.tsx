import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#eadccf] bg-white">
      <Skeleton className="aspect-square w-full rounded-none" />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-14" />
        </div>

        <Skeleton className="mt-4 h-5 w-4/5" />

        <Skeleton className="mt-2 h-3 w-3/5" />

        <div className="my-4 h-px bg-[#f1e4d8]" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
