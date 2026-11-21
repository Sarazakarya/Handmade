import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  size?: "sm" | "base" | "md" | "lg" | "xl";
  variant?: "primary" | "disabled" | "secondary" | "alt" | "white";
  className?: string;
  children: React.ReactNode;
  isCenter?: boolean;
}

export default function Title({
  size = "xl",
  variant = "primary",
  className,
  children,
  isCenter = false,
}: Props) {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  const variants = {
    primary: "cozy-text-primary",
    disabled: "cozy-text-gray",
    secondary: "cozy-text-brown",
    alt: "cozy-text-brand-pink",
    white: "text-white",
  };

  return (
    <h2
      className={cn(
        "font-bold capitalize",
        sizes[size],
        variants[variant],
        isCenter && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  );
}
