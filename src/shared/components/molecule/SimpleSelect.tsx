"use client";

import { ChevronDown } from "lucide-react";

type Option = { label: string; value: string };

interface SimpleSelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export function SimpleSelect({
  label,
  options,
  value,
  onChange,
}: SimpleSelectProps) {
  return (
    <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto">
      {label && (
        <span className="shrink-0 whitespace-nowrap text-sm font-bold">
          {label}
        </span>
      )}
      <div className="relative min-w-0 flex-1 sm:w-48 sm:flex-none">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-full min-w-0 appearance-none truncate rounded-md border border-input bg-background pl-3 pr-8 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 opacity-60" />
      </div>
    </div>
  );
}
405