"use client";
import { CozyLoopsData } from "@/modules/Client/utills/feature";
import { CozyLoopsItem } from "../molecule/CozyLoopsItem";
import { motion } from "framer-motion";
import { Container } from "@/shared/components/atoms/Container";

export function CozyLoops({ bg }: { bg: string }) {
  return (
    <section className={`${bg} py-10 md:py-14`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
            {CozyLoopsData.map((feature, index) => (
              <CozyLoopsItem key={index} {...feature} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
