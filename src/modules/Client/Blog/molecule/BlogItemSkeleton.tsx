
import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/shared/components/atoms/Container";

const BlogItemSkeleton = () => {
  return (
    <Container>


      <div className="my-8 flex flex-col gap-4">
        <Skeleton className="h-10 w-3/4" />

        <hr className="cozy-bg-light-brown opacity-50" />

        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="h-5 w-36" />
        </div>

        <Skeleton className="mt-4 aspect-video w-full rounded-3xl" />

        <div className="mt-6 flex flex-col gap-3 rounded-2xl p-6 sm:p-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <hr className="cozy-bg-light-brown my-4 opacity-50" />

        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>

        <Skeleton className="mt-4 h-28 w-full rounded-2xl" />

        <hr className="cozy-bg-light-brown my-4 opacity-50" />

        <Skeleton className="h-7 w-64" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col gap-3">
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogItemSkeleton;
