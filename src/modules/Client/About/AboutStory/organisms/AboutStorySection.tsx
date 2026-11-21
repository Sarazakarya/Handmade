"use client";
import { Heart } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/shared/components/atoms/Container";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import story from "@/assets/images/story.png";
import AboutImage from "../molecule/AboutImage";

const AboutStorySection = () => {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-12 lg:py-16">
        {/* text side */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="text-lg font-bold uppercase tracking-wide text-primary">
              Our Story
            </span>
            <span className="h-px w-6 bg-primary/30" />
            <motion.span
              animate={reduce ? {} : { scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <Heart className="size-4 fill-current cozy-text-brand-pink" />
            </motion.span>
            <span className="h-px w-16 bg-primary/30" />
          </motion.div>

          <motion.div variants={item}>
            <Title
              size="xl"
              variant="primary"
              className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            >
              A Small Dream That
              <br />
              Grew With <span className="cozy-text-brand-pink">Love</span>
            </Title>
          </motion.div>

          <motion.div variants={item}>
            <Text className="max-w-xl text-base leading-7 sm:text-lg">
              CozyLoops began with a simple love for yarn and creativity. What
              started as a few handmade gifts for family and friends soon turned
              into a passion for crafting beautiful, meaningful pieces for homes
              and hearts around the world.
            </Text>
          </motion.div>

          {/* values badge */}
          <motion.div variants={item} className="mt-2 flex items-center gap-5">
            <div className="relative size-24 shrink-0">
              {/* floating circle */}
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0], rotate: [-6, 6, -6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex size-full items-center justify-center rounded-full bg-amber-100/80 p-5 shadow-inner dark:bg-amber-950/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-full w-full text-amber-700 dark:text-amber-400"
                  fill="currentColor"
                >
                  <motion.path
                    initial={{ opacity: 0.7, scale: 0.9, rotate: 0 }}
                    animate={
                      reduce
                        ? {}
                        : {
                            opacity: [0.75, 1, 0.75],
                            scale: [0.9, 1.08, 0.9],
                            rotate: [0, 12, 0],
                          }
                    }
                    style={{ transformOrigin: "256px 256px" }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    d="M338.6 27.83c-8.1-.03-14.8 2.23-20.9 6.37-19.1 12.88-32.9 49.62-39.4 103.4l10.7 9c15.1-43.5 29.9-88.7 57.2-118.14-2.7-.42-5.2-.63-7.6-.63zm27.3 6.7C338.2 60.14 321.3 109.5 303.8 159l10.8 9.1c11.2-24 22.3-49.1 35.1-71.07 11.5-19.85 24.5-37.4 41.2-48.43-9.1-6.1-17.4-10.75-25-14.07zm40.8 25.68c-15.2 7.85-28.7 24.06-41 45.09 26.3-16.06 44.7-24.41 59.7-29.18-3.3-3.05-6.8-6.16-10.6-9.33-2.7-2.31-5.4-4.49-8.1-6.58zm33.4 30.48c-19 4.43-42.7 14.21-91.3 46.91-3.3 6.7-6.4 13.5-9.6 20.3 39.6-19 81.7-41.1 119.1-43.4-4.3-7.3-10.3-15.29-18.2-23.81zm24.8 41.71c-6 0-12.5.9-19.4 2.4-7.4 9-12.5 21.3-15 33.7-1.5 7.1-2 14.3-1.9 20.7 18.1-10.2 30.1-21.1 35.1-32.4 3.4-7.5 4.3-15.3 2.1-24.4h-.9zm-45 9.9c-9.4 3.4-19.3 7.5-29.4 11.9-10.4 20.1-14.8 39.9-15.2 57.2 13.2-4.2 25.1-8.7 35.7-13.4-1.2-10-.6-21.4 1.8-33.1 1.5-7.6 3.9-15.2 7.1-22.6zM269.8 154l-19.3 23 84.2 70.7 19.3-23-84.2-70.7zm96.3 11.3c-11.8 5.5-23.6 11.1-35.3 16.4l26.9 22.5c.9-12.4 3.6-25.5 8.4-38.9zm-127.2 25.5l-50.1 59.7 84.3 70.7 50.1-59.7-84.3-70.7zm178.3 24.6c-10.4 4.5-21.9 8.7-34.2 12.6 8.2.9 18.7 2.4 29.4 4.8 11.2 2.5 22.4 6.2 30.3 10.6 7.9 4.5 11.8 9.1 12.4 13.7v.1c.8 6.3-.4 10.8-3.2 15.2-2.8 4.4-7.6 8.7-14.1 12.8-13.2 8-33.1 14.5-53.7 21-20.5 6.6-41.8 13.1-58.8 22.9-17 9.9-30.6 24.7-30.3 45.1.2 19.1 11.8 35.5 27.1 49.2 15.3 13.7 34.8 25.3 54.2 34.9 38.8 19.1 77.2 30.3 77.2 30.3l5-17.2s-37.2-10.9-74.2-29.3c-18.5-9.1-36.9-20.2-50.2-32.1-13.3-12-20.9-24.3-21.1-36-.2-12.8 7.1-21 21.3-29.3 14.3-8.2 34.7-14.8 55.3-21.3 20.6-6.5 41.4-13 57.6-22.9 8-4.9 15.1-10.8 19.9-18.5 4.9-7.6 7.1-17.1 5.8-27.1-1.6-12.5-10.8-21.2-21.3-27.2-10.2-5.8-22.4-9.5-34.4-12.3zm-239.9 48.9l-19.3 23 84.2 70.7 19.3-23-84.2-70.7zm-40.6 36.3c-13.2 4.2-25.2 8.7-35.7 13.4 1.2 10 .6 21.4-1.83 33.1-1.55 7.6-3.88 15.3-7.14 22.6 9.47-3.4 19.37-7.5 29.47-11.9 10.4-20.1 14.8-39.9 15.2-57.2zm17.6 7.2c-.9 12.4-3.6 25.5-8.4 38.9 11.8-5.5 23.6-11.1 35.2-16.4l-5.2-4.4-21.6-18.1zm-70.85 15c-18.08 10.2-30.14 21.1-35.17 32.4-3.35 7.5-4.27 15.3-2.07 24.4 6.27.1 13.1-.8 20.37-2.4 7.37-9 12.44-21.3 14.96-33.7 1.47-7.1 2.03-14.3 1.91-20.7zm113.95 21.1c-11.2 24-22.3 49.1-35.1 71.1-11.5 19.8-24.5 37.3-41.1 48.4 9 6.1 17.3 10.7 24.9 14.1 27.7-25.6 44.6-75 62.1-124.5l-10.8-9.1zm-24.6 10.2c-39.6 19-81.77 41.1-119.05 43.4 4.28 7.3 10.29 15.3 18.15 23.8 19.08-4.4 42.7-14.3 91.3-46.9 3.3-6.7 6.4-13.5 9.6-20.3zm50.2 11.3c-15.1 43.5-29.9 88.7-57.2 118.1 11.6 1.9 20.5-.3 28.5-5.7 19.1-12.9 32.9-49.6 39.4-103.4l-10.7-9zm-76.7 41.3c-26.3 16.1-44.7 24.4-59.73 29.1 3.35 3.1 6.88 6.2 10.67 9.4 2.75 2.3 5.46 4.5 8.06 6.6 15.2-7.9 28.7-24 41-45.1z"
                  />
                </svg>
              </motion.div>
            </div>

            <motion.div
              variants={list}
              className="flex flex-col gap-1 text-base leading-6 sm:text-lg"
            >
              <Text size="sm">
                Made With Patience. <br />
                Created With Purpose. <br /> Loved By You.
              </Text>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* image side */}
        <AboutImage reduce={reduce} image={story} x={60} />
      </div>
    </Container>
  );
};

export default AboutStorySection;
