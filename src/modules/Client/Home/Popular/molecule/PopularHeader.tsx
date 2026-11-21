import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import Link from "next/link";
import React from "react";

const PopularHeader = () => {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <Text className="mt-12 text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
        - Handcrafted Favorites -
      </Text>

      <div className="flex items-center justify-between">
        <Title>Popular Handmade Creations</Title>

        <div className="flex items-center gap-4">
          <Link href="/" className="cozy-text-brown">
            View All Shop
          </Link>

          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularHeader;
