"use client"
import Image from "next/image";
import { Container } from "@/shared/components/atoms/Container";
import { heartbg, bunnybg, flowerbg } from "@/assets/images/Images";
import ContactForm from "../molecule/ContactForm";
import ContactDescription from "../molecule/ContactDescription";
import ContactFeatures from "../molecule/ContactFeatures";
import { motion } from "framer-motion";

const CIRCLE =
  "pointer-events-none absolute hidden size-56 overflow-hidden rounded-full lg:block";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden cozy-bg-light-brown">
      <div className={`${CIRCLE} -left-24 -top-16`}>
        <Image
          src={flowerbg}
          alt=""
          fill
          sizes="224px"
          className="object-cover"
        />
      </div>
      <div className={`${CIRCLE} bottom-0 left-0`}>
        <Image
          src={heartbg}
          alt=""
          fill
          sizes="224px"
          className="object-cover"
        />
      </div>
      <div className={`${CIRCLE} bottom-0 -right-16 size-64`}>
        <Image
          src={bunnybg}
          alt=""
          fill
          sizes="256px"
          className="object-cover"
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col gap-16 py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ContactDescription />
            <ContactForm />
          </div>

          <div className="lg:px-24">
            <ContactFeatures />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
