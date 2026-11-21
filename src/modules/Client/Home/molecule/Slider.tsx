"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { imageVariants, SliderData, textVariants } from "@/modules/Client/utills/SliderData";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { Button } from "@/components/ui/button";


export function Slider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const [plugin] = React.useState(() =>
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    }),
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin]}
      className="w-full"
      opts={{ loop: true }}
    >
      <CarouselContent className="ml-0">
        {SliderData.map((ele, index) => {
          const active = !!api && current === index;
          const img = imageVariants[index % imageVariants.length];
          const txt = textVariants[index % textVariants.length];

          return (
            <CarouselItem key={index} className="basis-full pl-0 mb-8">
              <div className="relative flex min-h-105 w-full items-center overflow-hidden sm:min-h-120 md:min-h-137.5 lg:min-h-155">
                <motion.div
                  className="absolute inset-0"
                  initial={img.initial}
                  animate={active ? img.active : img.exit}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  <Image
                    src={ele.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover object-center md:object-right"
                    sizes="100vw"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-white/10 md:hidden" />

                <div className="cozy-container relative z-10 w-full">
                  <motion.div
                    initial={txt.initial}
                    animate={active ? txt.active : txt.exit}
                    transition={{
                      duration: 0.7,
                      delay: active ? 0.3 : 0,
                      ease: "easeOut",
                    }}
                    className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 py-8 text-center sm:gap-4 md:mx-0 md:items-start md:py-10 md:text-left"
                  >
                    <div className="flex flex-col">
                      <Title
                        size="xl"
                        variant="primary"
                        className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
                      >
                        {ele.firstTitle}
                      </Title>
                      <Title
                        size="xl"
                        variant="alt"
                        className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
                      >
                        {ele.SecondTitle}
                      </Title>
                    </div>

                    <Text className="max-w-md text-sm leading-6 sm:text-base sm:leading-7 md:max-w-lg md:text-lg">
                      {ele.description}
                    </Text>

                    <div className="flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
                      <Button size="lg" className="w-full px-7 sm:w-auto">
                        Shop Now
                      </Button>
                      <Button
                        size="lg"
                        variant="alt"
                        className="w-full px-7 sm:w-auto"
                      >
                        Explore Categories
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
