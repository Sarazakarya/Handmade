"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: StaticImageData;
  alt?: string;
  x?: number; 
  reduce?: boolean | null;
}

const AboutImage = ({
  image,
  alt = "Our story: handmade with love",
  x = 60,
  reduce,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-4/3 w-full overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </motion.div>
  );
};

export default AboutImage;
