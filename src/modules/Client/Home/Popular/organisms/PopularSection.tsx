"use client";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@/shared/components/atoms/Container";
import { Carousel } from "@/components/ui/carousel";
import PopularHeader from "../molecule/PopularHeader";
import PopularSlider from "../molecule/PopularSlider";
import { motion } from "framer-motion";
const PopularSection = () => {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
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
          className="relative"
        >
          {" "}
          <PopularHeader />
          <PopularSlider />
        </motion.div>
      </Carousel>
    </Container>
  );
};

export default PopularSection;
