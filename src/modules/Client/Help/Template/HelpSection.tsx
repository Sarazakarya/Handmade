"use client";

import { motion } from "framer-motion";
import { Container } from "@/shared/components/atoms/Container";
import HelpTitle from "../molecule/HelpTitle";
import HelpTabs from "../molecule/HelpTabs";
import StillHaveQuestion from "../molecule/StillHaveQuestion";

const HelpSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="cozy-bg-light-brown"
    >
      <Container>
        <div className="flex flex-col gap-8 pt-20 pb-8">
          <HelpTitle />
          <HelpTabs />
          <StillHaveQuestion />
        </div>
      </Container>
    </motion.section>
  );
};

export default HelpSection;
