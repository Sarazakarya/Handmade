"use client";

import { newsletter } from "@/assets/images/Images";
import Image from "next/image";
import NewsletterText from "../molecule/NewsletterText";
import { motion } from "framer-motion";

const NewLetterSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8eee6]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Image
          src={newsletter}
          alt="Newsletter"
          className="h-full min-h-105 w-full object-cover object-right"
        />

        <div className="absolute inset-0 bg-white/80 md:hidden" />

        <NewsletterText />
      </motion.div>
    </section>
  );
};

export default NewLetterSection;
