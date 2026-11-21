import { cn } from "cn";
import React from "react";


interface Props {
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  variant?:
    | "primary"
    | "disabled"
    | "secondary"
    | "alt"
    | "white"
    | "cream"
    | "brand-pink"
    | "gray"
    | "black"
    | "brown"
    | "teal"
    | "orange"
    | "green"
    | "purple"
    | "blue";
  className?: string;
  children: React.ReactNode;
  isCenter?: boolean;
}

export default function Text({
  size = "base",
  variant = "primary",
  className = "",
  children,
  isCenter = false,
}: Props) {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    md: "text-md", 
    lg: "text-lg",
    xl: "text-xl",
  };

  const variants = {
    primary: "text-foreground",
    disabled: "text-muted-foreground opacity-50",
    secondary: "text-secondary-foreground",
    alt: "text-primary",
    white: "text-white",
    cream: "text-cream",
    "brand-pink": "text-brand-pink",
    gray: "text-custom-gray",
    black: "text-custom-black",
    brown: "text-custom-brown",
    teal: "ds-text-teal",
    orange: "ds-text-orange",
    green: "ds-text-green",
    purple: "ds-text-purple",
    blue: "ds-text-blue",
  };

  return (
    <p
      className={cn(
        variants[variant],
        sizes[size],
        isCenter ? "text-center" : "",
        className,
      )}
    >
      {children}
    </p>
  );
}
