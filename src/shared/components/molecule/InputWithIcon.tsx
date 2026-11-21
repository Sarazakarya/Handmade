// src/components/molecules/InputWithIcon.tsx
"use client";

import React, { type ComponentType } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { LucideIcon, LucideProps } from "lucide-react";

interface InputWithIconProps extends React.ComponentProps<typeof Input> {
  icon?: ComponentType<LucideProps>;
  iconPosition?: "start" | "end";
  iconClassName?: string;
}

export function InputWithIcon({
  icon: IconComponent,
  iconPosition = "start",
  className,
  iconClassName,
  ...props
}: InputWithIconProps) {
  return (
    <div className="relative flex items-center w-full">
      {IconComponent && iconPosition === "start" && (
        <span className="absolute left-3.5 flex items-center justify-center pointer-events-none cozy-text-brown/60">
          <IconComponent className={cn("size-4", iconClassName)} />
        </span>
      )}
      <Input
        className={cn(
          "h-11 rounded-xl border-border bg-background transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-brand-pink/50 focus-visible:border-brand-pink",
          iconComponentSpacing(IconComponent, iconPosition),
          className,
        )}
        {...props}
      />

      {IconComponent && iconPosition === "end" && (
        <span className="absolute right-3.5 flex items-center justify-center pointer-events-none cozy-text-brown/60">
          <IconComponent className={cn("size-4", iconClassName)} />
        </span>
      )}
    </div>
  );
}

function iconComponentSpacing(icon: any, position: string) {
  if (!icon) return "px-4";

  return position === "start" ? "!pl-10 !pr-4" : "!pl-4 !pr-10";
}
