import { Heart } from "@/assets/icons/Icons";

type Props = {
  align?: "center" | "start";
  lineClassName?: string;
  heartClassName?: string;
};

const HeartDivider = ({
  align = "start",
  lineClassName = "w-16",
  heartClassName = "size-4",
}: Props) => {
  return (
    <div
      className={`flex items-center gap-3 cozy-text-brand-pink  ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className={`h-px bg-[#f0829b]/60 ${lineClassName}`} />
      <Heart className={heartClassName} />
      <span className={`h-px bg-[#f0829b]/60 ${lineClassName}`} />
    </div>
  );
};

export default HeartDivider;
