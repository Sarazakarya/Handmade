import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeartDivider from "./HeartDivider";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  buttonLabel: string;
  href: string;
};

const StoryContent = ({ eyebrow, title, text, buttonLabel, href }: Props) => {
  return (
    <div className="flex flex-col justify-center px-8 py-12 lg:px-20 lg:py-16">
      <HeartDivider
        align="center"
        lineClassName="w-16 lg:w-28"
        heartClassName="size-5"
      />

      <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-[#6e2a10] md:text-sm">
        - {eyebrow} -
      </p>

      <Title className="mt-4 text-4xl font-bold leading-tight  md:text-6xl">
        {title}
      </Title>

      <div className="my-8">
        <HeartDivider lineClassName="w-14" heartClassName="size-3.5" />
      </div>

      <Text className="max-w-xl text-base leading-relaxed" size="md">
    {text}
      </Text>

      <Link
        href={href}
        className="mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-[#6e2a10] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#5a220c]"
      >
        {buttonLabel}
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
};

export default StoryContent;
