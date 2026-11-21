import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "@/assets/icons/Icons";

export const quickLinks = [
  { page: "Home", href: "/", highlight: true },
  { page: "Shop Catalog", href: "/shop" },
  { page: "Our Story", href: "/our-story" },
  { page: "Crochet Blog", href: "/blog" },
  { page: "Contact Us", href: "/contact" },
];

export const helpLinks = [
  { page: "Checkout Demo", href: "/", badge: "Live" },
  { page: "Track Your Order", href: "/" },
  { page: "FAQs & Support", href: "/" },
  { page: "Privacy Policy", href: "/" },
  { page: "Terms & Conditions", href: "/" },
];

export const categoryLinks = [
  { page: "Decor & Gifts", href: "/" },
  { page: "Amigurumi Pets", href: "/" },
  { page: "Home & Living", href: "/g" },
  { page: "Kids & Baby", href: "/" },
  { page: "Custom Commissions", href: "/" },
];

export const socialLinks = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Pinterest", href: "#", icon: FaPinterestP },
  { name: "YouTube", href: "#", icon: FaYoutube },
];

export const contactInfo = [
  {
    text: "cozyloops.crochet@gmail.com",
    href: "mailto:cozyloops.crochet@gmail.com",
    icon: FaEnvelope,
  },
  {
    text: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: FaPhone,
  },
  {
    text: "Cairo,Egypt",
    href: null,
    icon: FaMapMarkerAlt,
  },
];

export const bottomLinks = [
  { page: "Privacy Policy", href: "/" },
  { page: "Terms of Service", href: "/" },
  { page: "FAQs", href: "/" },
];
