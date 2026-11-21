import { Home, Heart, ShoppingBag, UserRound } from "lucide-react";
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
  { page: "Pages", href: "/pages" },
  { page: "Sign In", href: "/sign-in" },
  { page: "Register", href: "/register" },
];

export const NavbarFooterLink = [
  { icon: Home, page: "Home", href: "/" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingBag, label: "Cart", href: "/cart" },
  { icon: UserRound, label: "Sign In", href: "/sign-in" },
];
