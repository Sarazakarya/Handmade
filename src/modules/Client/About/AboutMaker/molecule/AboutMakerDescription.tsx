"use client";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { Heart } from "@/assets/icons/Icons";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const AboutMakerDescription = () => {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const beat = reduce ? {} : { scale: [1, 1.3, 1] };
  const beatTransition = {
    duration: 1.4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-3"
    >
      <motion.div variants={item}>
        <Text size="md" className="font-bold tracking-wider">
          - Meet The Maker -
        </Text>
      </motion.div>

      <motion.div variants={item}>
        <Title className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          Hello! <span className="text-black">I’m the heart </span>
          <br /> <span className="text-black">of</span>{" "}
          <span className="cozy-text-brand-pink">CozyLoops</span>
        </Title>
      </motion.div>

      <motion.div variants={item} className="flex items-center gap-2">
        <motion.span
          className="h-px w-6 origin-right bg-primary/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.span
          animate={beat}
          transition={beatTransition}
          className="inline-flex"
        >
          <Heart className="size-4 fill-current cozy-text-brand-pink" />
        </motion.span>
        <motion.span
          className="h-px w-16 origin-left bg-primary/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </motion.div>

      <motion.div variants={item}>
        <Text variant="black" size="lg">
          I’m a crochet lover, dreamer, and creator. Every design you see is
          made in my little space, with a lot of love, late nights, and endless
          cups of tea. Thank you for supporting handmade and being a part of
          this beautiful journey.
        </Text>
      </motion.div>

      <motion.div variants={item}>
        <Title>
          <span className="text-black">With Love,</span> <br /> Cozy
          <span className="cozy-text-brand-pink inline-flex items-center gap-2">
            Loops
            <motion.span
              animate={beat}
              transition={beatTransition}
              className="inline-flex"
            >
              <Heart className="size-4 fill-current cozy-text-brand-pink" />
            </motion.span>
          </span>
        </Title>
      </motion.div>
    </motion.div>
  );
};

export default AboutMakerDescription;
