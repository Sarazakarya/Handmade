import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "../providers/AppProviders";
import { Nunito_Sans, Poppins } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CozyLoops",
  description:
    "Handcrafted crochet creations made stitch by stitch to bring warmth, beauty, and heartfelt charm to your everyday life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${poppins.variable}  h-full antialiased `}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
