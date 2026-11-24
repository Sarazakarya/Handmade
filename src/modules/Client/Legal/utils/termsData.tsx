import { Copyright, HandHeart, PackageX, Receipt, Sparkles, Truck } from "lucide-react";
import type { LegalContent } from "../types/Legal";

export const TERMS: LegalContent = {
  eyebrow: "Customer Agreement",
  title: "Terms & Conditions",
  meta: "Last Updated: September 28, 2026 • Valid for all purchases on CozyLoops",
  intro:
    "Welcome to CozyLoops. By accessing our website, browsing our handcrafted catalog, or placing an order, you agree to be bound by the following terms, conditions, and store guidelines.",
  sections: [
    {
      title: "Nature of Handcrafted Goods",
      Icon: HandHeart,
      blocks: [
        {
          type: "p",
          text: "Every piece sold on CozyLoops is handmade by skilled individual knitters. Because our creations are not mass-produced in factories, slight variations in yarn dye lot, size dimensions (±1 to 1.5 cm), and stitch tension are natural characteristics of genuine handwork. These subtle nuances are celebrated as hallmarks of handcrafted artistry.",
        },
      ],
    },
    {
      title: "Orders & Pricing",
      Icon: Receipt,
      blocks: [
        {
          type: "p",
          text: "All prices listed on the store are in Indian Rupees (₹) unless specified otherwise. We reserve the right to modify prices or discontinue items without prior notice. An order is deemed confirmed only after successful payment authorization or confirmation of Cash on Delivery details.",
        },
      ],
    },
    {
      title: "Custom & Personalized Commissions",
      Icon: Sparkles,
      blocks: [
        {
          type: "p",
          text: "Custom orders, such as personalized initials, specific color requests, or custom amigurumi dolls, require artisan lead time (typically 3–5 business days). Once work on a personalized order has commenced, cancellations or returns are not accepted unless the finished piece arrives physically damaged.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      Icon: Truck,
      blocks: [
        {
          type: "p",
          text: "We deliver packages using trusted logistics partners. Estimated delivery dates (3 to 7 business days for standard delivery) are estimates and may occasionally be subject to carrier delays, festive peak seasons, or adverse weather conditions. CozyLoops provides tracking details for every fulfilled shipment.",
        },
      ],
    },
    {
      title: "Damaged Shipments & Claims",
      Icon: PackageX,
      blocks: [
        {
          type: "p",
          text: "In the unlikely event that your package is damaged during shipping, you must contact our team within 7 calendar days of delivery with an unboxing photograph. We will promptly arrange a replacement or issue a full refund to your original payment method.",
        },
      ],
    },
    {
      title: "Intellectual Property",
      Icon: Copyright,
      blocks: [
        {
          type: "p",
          text: "All photography, branding, logo designs, custom crochet patterns, and written copy published on this website are the proprietary property of CozyLoops and protected under applicable copyright and intellectual property laws.",
        },
      ],
    },
  ],
  links: {
    left: { label: "← View Privacy Policy", href: "/privacy-policy" },
    right: { label: "Continue Shopping →", href: "/shop" },
  },
};