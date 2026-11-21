import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <Card className="gap-0 overflow-hidden rounded-2xl border-0 bg-card py-0 shadow-none">
      <Skeleton className="aspect-4/5 w-full rounded-none" />
      <CardContent className="flex flex-col items-center gap-1 px-3 py-4">
        <Skeleton className="h-5 w-24" />
      </CardContent>
    </Card>
  );
};

export default CategoryCardSkeleton;