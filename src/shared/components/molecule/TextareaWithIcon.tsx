// src/components/molecules/TextareaWithIcon.tsx
"use client";

import React, { type ComponentType } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

interface TextareaWithIconProps extends React.ComponentProps<typeof Textarea> {
  icon?: ComponentType<LucideProps>;
  iconPosition?: "start" | "end";
  iconClassName?: string;
}

export function TextareaWithIcon({
  icon: IconComponent,
  iconPosition = "end",
  className,
  iconClassName,
  ...props
}: TextareaWithIconProps) {
  return (
    <div className="relative flex w-full">
      {IconComponent && iconPosition === "start" && (
        <span className="pointer-events-none absolute top-3.5 left-3.5 flex items-center justify-center cozy-text-brown/60">
          <IconComponent className={cn("size-4", iconClassName)} />
        </span>
      )}

      <Textarea
        className={cn(
          "min-h-28 rounded-xl border-border bg-background transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-brand-pink/50 focus-visible:border-brand-pink",
          textareaSpacing(IconComponent, iconPosition),
          className,
        )}
        {...props}
      />

      {IconComponent && iconPosition === "end" && (
        <span className="pointer-events-none absolute top-3.5 right-3.5 flex items-center justify-center cozy-text-brown/60">
          <IconComponent className={cn("size-4", iconClassName)} />
        </span>
      )}
    </div>
  );
}

function textareaSpacing(icon: unknown, position: "start" | "end") {
  if (!icon) return "px-4 py-3";
  return position === "start" ? "!pl-10 !pr-4 py-3" : "!pl-4 !pr-10 py-3";
}
