import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/shared/components/atoms/Text";
interface Props {
  name: string;
  image: string ;
  slug: string;
}

const CategoryCard = ({ name, image, slug }: Props) => {
  return (
    <Link href={`/shop?category=${slug}`} className="group block">
      <Card className="gap-0 overflow-hidden rounded-2xl border-0 bg-card py-0 shadow-none transition-shadow group-hover:shadow-md">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="flex flex-col items-center gap-1 px-3 py-4 cozy-bg-brand-pink">
          <Text variant="white" className="font-bold">
            {name}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
