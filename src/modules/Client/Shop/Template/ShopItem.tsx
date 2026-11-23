"use client";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/shared/components/atoms/Container";
import Title from "@/shared/components/atoms/Title";
import { SlugProps } from "../../Blog/Types/BlogItem";
import BlogItemHeader from "../../Blog/molecule/BlogItemHeader";
import { ShopLinks } from "../utils/ShopData";
import ItemCard from "../molecule/ItemCard";
import ProductLiked from "../molecule/ProductLiked";

const ShopItem = ({ slug }: SlugProps) => {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <div className="mb-8 flex flex-col gap-8">
      <BlogItemHeader links={ShopLinks} slug={slug} />
      <ItemCard slug={slug} />

      <hr className="my-6 cozy-bg-light-brown opacity-50" />

      <Container>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay]}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <Title size="xl" className="font-heading">
                You May Also Like
              </Title>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>

            <ProductLiked slug={slug} />
          </motion.div>
        </Carousel>
      </Container>
    </div>
  );
};

export default ShopItem;
