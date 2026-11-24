import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ContactSection from "@/modules/Contact/Template/ContactSection";
export const metadata = getSeoMetadata({ title: "Contact | CozyLoops" });

const page = () => {
  return <ContactSection />;
};

export default page;
