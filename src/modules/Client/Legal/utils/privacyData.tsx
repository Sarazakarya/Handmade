import { Eye, FileText, Lock, Mail, ShieldCheck } from "lucide-react";
import type { LegalContent } from "../types/Legal";

const B = ({ children }: { children: React.ReactNode }) => (
  <b className="font-semibold text-foreground">{children}</b>
);

export const PRIVACY: LegalContent = {
  eyebrow: "Legal & Trust",
  title: "Privacy Policy",
  meta: "Last Updated: September 28, 2026 • Effective Date: March 1, 2026",
  intro: (
    <>
      At <B>CozyLoops</B> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take your
      personal data privacy seriously. This Privacy Policy outlines how your personal information is
      collected, used, shared, and safeguarded when you visit or make a purchase from our artisan
      eCommerce store.
    </>
  ),
  sections: [
    {
      title: "Information We Collect",
      Icon: Eye,
      blocks: [
        {
          type: "p",
          text: "When you purchase handcrafted items or browse our store, we collect several categories of information:",
        },
        {
          type: "list",
          items: [
            <><B>Customer Identity Data:</B> Your name, billing address, shipping delivery address, email address, and phone number.</>,
            <><B>Transactional Data:</B> Items purchased, order value, payment status, and order fulfillment history.</>,
            <><B>Device &amp; Technical Data:</B> Your IP address, browser type, operating system, and pages viewed to optimize browsing speed.</>,
            <><B>Customization Notes:</B> Any initials, monogram letters, or gift messages you submit for personalized orders.</>,
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      Icon: Lock,
      blocks: [
        { type: "p", text: "We process your personal information for specific legitimate purposes:" },
        {
          type: "list",
          items: [
            "To fulfill and dispatch your handcrafted crochet orders and provide delivery updates.",
            "To process simulated or real payments securely without storing sensitive CVVs.",
            "To answer inquiries and provide dedicated customer assistance via email or WhatsApp.",
            "To screen our orders for potential risk, fraud, or misuse.",
            "With your consent, to notify you about new limited yarn drops and seasonal discount codes.",
          ],
        },
      ],
    },
    {
      title: "Data Protection & Security",
      Icon: ShieldCheck,
      blocks: [
        {
          type: "p",
          text: "We employ industry-standard 256-bit SSL encryption across all checkout operations. We do not store raw credit card numbers or sensitive verification codes on our servers. All transactional communications are transmitted directly to verified, PCI-DSS certified payment processors.",
        },
      ],
    },
    {
      title: "Cookies & Local Storage",
      Icon: FileText,
      blocks: [
        {
          type: "p",
          text: (
            <>
              CozyLoops utilizes modern client-side storage technologies, such as browser{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em]">
                localStorage
              </code>
              , to retain your Shopping Cart items, Wishlist favorites, and session authentication
              state across visits. You may clear your browser cookies and storage at any time
              through your browser settings.
            </>
          ),
        },
      ],
    },
    {
      title: "Your Rights & Inquiries",
      Icon: Mail,
      blocks: [
        {
          type: "p",
          text: "Depending on your location, you may hold rights to request access to the personal data we hold about you, request corrections, or request deletion. If you have questions regarding this Privacy Policy, please contact our privacy compliance team at:",
        },
        {
          type: "contact",
          rows: [
            { label: "Email", value: "privacy@cozyloops.com" },
            { label: "Artisan Studio", value: "CozyLoops Crafts, Mumbai, Maharashtra, India" },
          ],
        },
      ],
    },
  ],
  links: {
    left: { label: "Read Terms of Service →", href: "/terms-conditions" },
    right: { label: "Return Home", href: "/" },
  },
};