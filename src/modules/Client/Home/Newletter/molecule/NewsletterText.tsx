"use client"
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { ButtonsIcon } from "@/shared/components/molecule/ButtonsIcon";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";


const NewsletterText = () => {
  return (
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <p className="inline-block rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a2e12] md:text-sm">
            Handcrafted with love
          </p>

          <Title className="mt-5 text-4xl font-bold leading-tight ">
            Handmade Happiness Just For You!
          </Title>

          <Text className="mt-4 md:text-md">
            Join our artisan community to receive exclusive pattern previews,
            seasonal launches, and a 10% discount on your next handcrafted
            order.
          </Text>

          <form className="mt-8 flex w-full max-w-140 items-center gap-2 rounded-full bg-white p-1.5 shadow-md">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="Enter your email address..."
                className="h-11 w-full bg-transparent pl-11 pr-2 text-sm outline-none"
              />
            </div>
            <ButtonsIcon label="Get 10% off" icon={ArrowRight} />
          </form>

          <Link
            href="/shop"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a2e12] hover:underline"
          >
            Or browse collection directly
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterText;
