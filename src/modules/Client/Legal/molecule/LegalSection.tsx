import type { LegalSectionData } from "../types/Legal";
import LegalContactBox from "./LegalContactBox";

type Props = { section: LegalSectionData; index: number };

const LegalSection = ({ section, index }: Props) => {
  const Icon = section.Icon;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="flex items-center gap-3 font-heading text-xl font-bold text-primary md:text-2xl">
        <Icon className="size-5 shrink-0 cozy-text-brand-pink" />
        {index + 1}. {section.title}
      </h2>

      {section.blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p
              key={i}
              className="text-base leading-8 text-foreground/80 md:text-lg"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={i}
              className="flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-muted-foreground marker:text-foreground md:text-base"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }

        return <LegalContactBox key={i} rows={block.rows} />;
      })}
    </section>
  );
};

export default LegalSection;
