import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import AboutSection from "@/modules/Client/About/Template/AboutSection";
export const metadata = getSeoMetadata({ title: "About | CozyLoops" });

const page = () => {
  return <AboutSection />;
};

export default page;
