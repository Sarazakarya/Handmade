import Image from "next/image";
import { logo } from "@/assets/images/Images";
import FooterSocialLinks from "./FooterSocialLinks";

const FooterBrand = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="CozyLoops Logo"
        width={200}
        height={75}
        className="object-contain w-52 h-auto"
      />

      <p className="mt-5 text-gray-700 leading-7 max-w-xs">
        Handcrafted crochet creations made stitch by stitch to bring warmth,
        beauty, and heartfelt charm to your everyday life.
      </p>

      <FooterSocialLinks />
    </div>
  );
};

export default FooterBrand;
