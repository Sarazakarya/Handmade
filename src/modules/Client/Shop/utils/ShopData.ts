import { HandHeart, Leaf, Sparkles } from "@/assets/icons/Icons";

export type ProductPriceRange =
  | "all"
  | "under-200"
  | "200-400"
  | "400-600"
  | "over-600";

export type ProductSort =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "name";

export type ProductCategory =
  | "all"
  | "decor-gifts"
  | "pet-animal"
  | "home-living"
  | "kids-baby"
  | "personalized";

export const ShopLinks = [
  { page: "Home", href: "/" },
  { page: "Shop", href: "/shop" },
];



export const CARE = [
  "Gently hand-wash in cool water using mild yarn-friendly detergent.",
  "Reshape and dry flat in the shade to preserve weave structure.",
  "Avoid bleach, aggressive wringing, or machine tumble drying.",
  "Every creation is 100% handmade and stitch-tension tested for durability.",
];

export const SHIPPING = [
  "Free standard shipping on every order.",
  "Dispatched within 24–48 hours of your order.",
  "Packed in plastic-free, recyclable cartons.",
  "Tracking details are sent as soon as your order ships.",
];

export const REVIEWS = [
  {
    name: "Mona K.",
    rating: 5,
    text: "Exactly like the photos. The stitching is so neat!",
  },
  {
    name: "Nour A.",
    rating: 5,
    text: "Perfect gift, everyone asked where it was from.",
  },
  {
    name: "Salma R.",
    rating: 5,
    text: "Lovely quality and it arrived beautifully packed.",
  },
];

export const TABS = [
  { id: "care", label: "Care & Craft" },
  { id: "shipping", label: "Shipping & Packaging" },
  { id: "reviews", label: `Customer Reviews` },
  { id: "custom", label: "Custom Requests" },
] as const;

export const FEATURES = [
  { Icon: HandHeart, title: "100% Handmade", text: "Stitch by stitch" },
  { Icon: Sparkles, title: "Premium Yarn", text: "Soft milk cotton" },
  { Icon: Leaf, title: "Eco Packed", text: "Zero plastic waste" },]