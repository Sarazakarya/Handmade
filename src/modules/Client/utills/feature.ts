import {
  HandHeart,
  Sprout,
  Star,
  Leaf,
  HandCoins,
  Palette,
  BuildingComplex,
} from "@/assets/icons/Icons";
import type { LucideIcon } from "lucide-react";
import { slider1, slider2, slider3 } from "@/assets/images/Images";

export type FeatureType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FeaturesData: FeatureType[] = [
  {
    icon: HandHeart,
    title: "Handmade With Love",
    description: "Each piece is carefully handcrafted.",
  },
  {
    icon: Sprout,
    title: "Premium Quality Yarn",
    description: "Soft, durable and skin-friendly for everyday use.",
  },
  {
    icon: Star,
    title: "Perfect for Gifting",
    description: "Thoughtful handmade gifts for your loved ones.",
  },
  {
    icon: Leaf,
    title: "Made Sustainably",
    description: "Eco-friendly yarns and mindful packaging.",
  },
];

export const categories = [
  {
    id: 1,
    name: "Dresses",
    image: slider1,
    slug: "dresses",
    productsCount: 25,
  },
  {
    id: 2,
    name: "Bags",
    image: slider2,
    slug: "bags",
    productsCount: 18,
  },
  {
    id: 3,
    name: "Shoes",
    image: "/images/shoes.jpg",
    slug: "shoes",
    productsCount: 32,
  },
  {
    id: 4,
    name: "Accessories",
    image: slider3,
    slug: "accessories",
    productsCount: 14,
  },
  {
    id: 5,
    name: "Jewelry",
    image: "/images/jewelry.jpg",
    slug: "jewelry",
    productsCount: 20,
  },
];

export const CozyLoopsData: FeatureType[] = [
  {
    icon: HandCoins,
    title: "Made With Care",
    description: "Every stitch is a step towards perfection.",
  },
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Thoughtful Patterns made to stand out.",
  },
  {
    icon: BuildingComplex,
    title: "Small Business",
    description: "Proudly made in India by passionate creators.",
  },
  {
    icon: Leaf,
    title: "Made Sustainably",
    description: "Eco-friendly yarns and mindful packaging.",
  },
];
