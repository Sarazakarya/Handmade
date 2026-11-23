import {
  Home,
  Heart,
  ShoppingBag,
  UserRound,
  ShieldCheck,
  CircleHelp,
  ReceiptText,
  CreditCardMinus,
} from "@/assets/icons/Icons";
export const Links = [
  { page: "Home", href: "/" },
  { page: "About", href: "/about" },
  { page: "Blog", href: "/blog" },
  { page: "Shop", href: "/shop" },
  { page: "Contact", href: "/contact" },
  { page: "Pages", href: "/pages" },
];

export const NavbarIcons = [
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingBag, label: "Cart", href: "/cart" },
  { icon: UserRound, label: "Account", href: "/account" },
];

export const LinksMobile = [
  { page: "Home", href: "/" },
  { page: "About", href: "/about" },
  { page: "Blog", href: "/blog" },
  { page: "Shop", href: "/shop" },
  { page: "Contact", href: "/contact" },
  { page: "Pages", href: "" },
  { page: "Sign In", href: "/sign-in" },
  { page: "Register", href: "/register" },
];

export const NavbarFooterLink = [
  { icon: Home, page: "Home", href: "/" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingBag, label: "Cart", href: "/cart" },
  { icon: UserRound, label: "Sign In", href: "/sign-in" },
];

export interface NavPageLink {
  page: string;
  href: string;
  Icon: typeof ShieldCheck;
  badge?: string;
}

export const LinksPages: NavPageLink[] = [
  {
    page: "Help & FAQ",
    href: "/help-faq",
    Icon: CircleHelp,
  },
  {
    page: "Privacy Policy",
    href: "/privacy-policy",
    Icon: ShieldCheck,
  },
  {
    page: "Terms & Conditions",
    href: "/terms-conditions",
    Icon: ReceiptText,
  },
  {
    page: "Checkout",
    href: "/checkout",
    Icon: CreditCardMinus,
  },
];
