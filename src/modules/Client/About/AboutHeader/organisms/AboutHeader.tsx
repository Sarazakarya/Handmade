"use client";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { slider3 } from "@/assets/images/Images";
import { Button } from "@/components/ui/button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

const AboutHeader = () => {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.14, delayChildren: 0.25 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative flex min-h-105 w-full items-center overflow-hidden sm:min-h-120 md:min-h-137.5 lg:min-h-155">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src={slider3}
          alt="Handmade crochet creations"
          fill
          priority
          className="object-cover object-center md:object-right"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-white/10 md:hidden" />

      <div className="cozy-container relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 py-8 text-center sm:gap-4 md:mx-0 md:items-start md:py-10 md:text-left"
        >
          <div className="flex flex-col">
            <motion.div variants={item}>
              <Title
                size="xl"
                variant="primary"
                className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Made With Yarn,
              </Title>
            </motion.div>
            <motion.div variants={item}>
              <Title
                size="xl"
                variant="alt"
                className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Made For You
              </Title>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <Text className="max-w-md text-sm leading-6 sm:text-base sm:leading-7 md:max-w-lg md:text-lg">
              Discover beautifully handcrafted crochet creations for every
              moment and every home
            </Text>
          </motion.div>

          <motion.div
            variants={item}
            className="flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="w-full px-7 sm:w-auto">
                Shop Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="alt" className="w-full px-7 sm:w-auto">
                Explore Categories
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;
