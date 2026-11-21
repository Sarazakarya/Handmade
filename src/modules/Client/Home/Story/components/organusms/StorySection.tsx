"use client"
import Image from "next/image";
import { story } from "@/assets/images/Images";
import { motion } from "framer-motion";
import StoryContent from "../molecules/StoryContent";

const StorySection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid overflow-hidden rounded-3xl border border-[#eadccf] bg-[#faf1e8] lg:grid-cols-2">
          <StoryContent
            eyebrow="Handmade with love"
            title={
              <>
                Made by <span className="cozy-text-brand-pink">Hand,</span>
                <br />
                Made to <span className="cozy-text-brand-pink">Keep</span>
              </>
            }
            text="Every CozyLoops piece begins with a simple strand of yarn and a little imagination. From the first loop to the final stitch, each creation is carefully handmade with warmth, patience, and attention to detail."
            buttonLabel="Our Story"
            href="/about"
          />

          <div className="relative min-h-80 lg:min-h-full">
            <Image
              src={story}
              alt="Handmade tag with crochet hook and yarn"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StorySection;
