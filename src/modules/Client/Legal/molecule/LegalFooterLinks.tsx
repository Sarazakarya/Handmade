import Link from "next/link";
import type { LegalLink } from "../types/Legal";

type Props = { left: LegalLink; right: LegalLink };

const LegalFooterLinks = ({ left, right }: Props) => (
  <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
    <Link
      href={left.href}
      className="font-bold text-primary underline underline-offset-4 transition hover:opacity-80"
    >
      {left.label}
    </Link>
    <Link
      href={right.href}
      className="font-bold text-primary transition hover:underline"
    >
      {right.label}
    </Link>
  </div>
);

export default LegalFooterLinks;
