
import Link from "next/link";
import { socialLinks } from "../utilis/FooterData";

const FooterSocialLinks = () => {
  return (
    <div className="flex items-center gap-4 mt-6">
      {socialLinks.map((social,index) => {
        const Icon = social.icon;

        return (
          <Link
            key={index}
            href={social.href}
            aria-label={social.name}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center cozy-text-brown hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Icon size={17} />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSocialLinks;
