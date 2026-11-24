import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import HelpSection from "@/modules/Client/Help/Template/HelpSection";

export const metadata = getSeoMetadata({ title: "Help & FAQ | CozyLoops" });
const page = () => {
  return <HelpSection />;
};

export default page;
