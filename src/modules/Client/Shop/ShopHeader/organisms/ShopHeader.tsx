"use client";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ShopHero } from "@/assets/images/Images";
import Text from "@/shared/components/atoms/Text";

const ShopHeader = () => {
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
    <div className="relative flex min-h-64 w-full items-center overflow-hidden sm:min-h-72 md:min-h-80 lg:min-h-120">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src={ShopHero}
          alt="Handmade crochet creations"
          fill
          priority
          className="object-cover object-center md:object-right "
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
          <div className="rounded-full bg-white/25 p-2">
            <motion.div variants={item}>
              <Text className="leading-tight tracking-wider font-semibold ">
                Artisan Catalog
              </Text>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <motion.div variants={item}>
              <p className=" font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Made With Care,
              </p>
            </motion.div>
            <motion.div variants={item}>
              <p className="font-heading  text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl cozy-text-brand-pink">
                Stitched With Love
              </p>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <Text className="max-w-md text-sm leading-6 sm:text-base sm:leading-7 md:max-w-lg md:text-lg">
              Explore our complete collection of handmade crochet creations,
              from adorable amigurumi plushies to everlasting floral stems.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopHeader;
