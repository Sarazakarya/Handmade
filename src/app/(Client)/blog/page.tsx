import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import BlogSection from "@/modules/Client/Blog/Template/BlogSetion";
export const metadata = getSeoMetadata({ title: "Blog | CozyLoops" });

const page = () => {
  return <BlogSection />;
};

export default page;
