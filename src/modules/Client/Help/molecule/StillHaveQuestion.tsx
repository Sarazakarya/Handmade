import Link from "next/link";
import { MessageCircleMore } from "@/assets/icons/Icons";
import { Button } from "@/components/ui/button";

const StillHaveQuestion = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-linear-to-r from-[#6e2a10] to-[#522210] px-6 py-8 shadow-xl sm:px-10 md:flex-row md:items-center">
      <div className="max-w-xl">
        <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
          <MessageCircleMore className="size-6 shrink-0 text-[#f88897]" />
          Still Have a Question?
        </h3>
        <p className="mt-2 text-base leading-7 text-white/80">
          We&rsquo;re always happy to help with yarn options, custom sizes, or
          delivery dates.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-bold uppercase tracking-wider text-primary shadow transition-colors duration-300 hover:bg-brand-pink hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default StillHaveQuestion;
