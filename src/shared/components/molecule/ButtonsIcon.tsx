// src/components/shared/ActionButton.tsx
"use client";

import React, { type ComponentType } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

interface ActionButtonProps
  extends
    React.ComponentProps<typeof Button>,
    VariantProps<typeof buttonVariants> {
  label: string;
  icon?: ComponentType<LucideProps>;
  iconPosition?: "start" | "end";
}

export function ButtonsIcon({
  label,
  icon: IconComponent,
  iconPosition = "start",
  className,
  variant = "default",
  size = "default",
  ...props
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "gap-2 shadow-sm transition-all duration-300 cursor-pointer",
        className,
      )}
      {...props}
    >
      {IconComponent && iconPosition === "start" && (
        <span className="shrink-0 flex items-center justify-center [&_svg]:size-4">
          <IconComponent />
        </span>
      )}

      <span>{label}</span>

      {IconComponent && iconPosition === "end" && (
        <span className="shrink-0 flex items-center justify-center [&_svg]:size-4">
          <IconComponent />
        </span>
      )}
    </Button>
  );
}
