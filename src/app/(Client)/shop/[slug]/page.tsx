import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ShopItem from "@/modules/Client/Shop/Template/ShopItem";
export const metadata = getSeoMetadata({ title: "Shop | CozyLoops" });

interface Props {
  params: Promise<{ slug: string }>;
}

const page = async ({params}:Props) => {
    const{slug} =await params
  return (
   <ShopItem slug={slug}/>
  )
}

export default page