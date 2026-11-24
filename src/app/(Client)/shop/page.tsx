import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ShopSection from "@/modules/Client/Shop/Template/ShopSection";
export const metadata = getSeoMetadata({ title: "Shop | CozyLoops" });

const page = () => {
  return <ShopSection />;
};

export default page;
