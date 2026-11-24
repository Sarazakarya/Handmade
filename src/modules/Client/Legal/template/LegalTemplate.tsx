import { Container } from "@/shared/components/atoms/Container";
import LegalSection from "../molecule/LegalSection";
import LegalFooterLinks from "../molecule/LegalFooterLinks";
import type { LegalContent } from "../types/Legal";

const LegalTemplate = ({ content }: { content: LegalContent }) => (
  <section className="cozy-bg-light-brown py-10 md:py-16">
    <Container>
      <article className="rounded-[2rem] border bg-white p-6 shadow-sm sm:p-10 lg:p-14">
        <header className="flex flex-col gap-2 border-b pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] cozy-text-brand-pink">
            {content.eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-extrabold text-primary md:text-5xl">
            {content.title}
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            {content.meta}
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-10">
          <p className="text-base leading-8 text-foreground/80 md:text-lg">
            {content.intro}
          </p>

          {content.sections.map((section, i) => (
            <LegalSection key={section.title} section={section} index={i} />
          ))}
        </div>

        <LegalFooterLinks
          left={content.links.left}
          right={content.links.right}
        />
      </article>
    </Container>
  </section>
);

export default LegalTemplate;
