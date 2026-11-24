import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type LegalBlock =
  | { type: "p"; text: ReactNode }
  | { type: "list"; items: ReactNode[] }
  | { type: "contact"; rows: { label: string; value: string }[] };

export type LegalSectionData = {
  title: string;
  Icon: LucideIcon;
  blocks: LegalBlock[];
};

export type LegalLink = { label: string; href: string };

export type LegalContent = {
  eyebrow: string;
  title: string;
  meta: string;
  intro: ReactNode;
  sections: LegalSectionData[];
  links: { left: LegalLink; right: LegalLink };
};
