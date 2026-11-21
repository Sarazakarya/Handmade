"use client";
import { FeaturesData } from "@/modules/Client/utills/feature";
import { FeatureItem } from "../molecule/FeatureItem";
import { motion } from "framer-motion";
import { Container } from "@/shared/components/atoms/Container";

export function Features({ bg }: { bg: string }) {
  return (
    <section className={`${bg}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
            {FeaturesData.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
