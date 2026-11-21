import { Container } from "@/shared/components/atoms/Container";

import { quickLinks, helpLinks, categoryLinks } from "../utilis/FooterData";
import FooterBrand from "../molecule/FooterBrand";
import FooterLinkColumn from "../molecule/FooterLinkColumn";
import FooterContact from "../molecule/FooterContact";
import FooterBottom from "../molecule/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#f8eee8] w-full">
      <Container className="py-12 lg:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_1fr_1.1fr_1fr_1.2fr] gap-10 lg:gap-8">
          <FooterBrand />

          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          <FooterLinkColumn title="Help & Policies" links={helpLinks} />

          <FooterLinkColumn title="Categories" links={categoryLinks} />

          <FooterContact />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
