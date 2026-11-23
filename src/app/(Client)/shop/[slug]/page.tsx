import ShopItem from "@/modules/Client/Shop/Template/ShopItem";

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