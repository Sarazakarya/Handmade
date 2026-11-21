import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { bottomLinks } from "../utilis/FooterData";

const FooterBottom = () => {
  return (
    <div className="border-t border-[#eadbd2] mt-12 pt-7 pb-8 flex flex-col lg:flex-row justify-between items-center gap-5">
      <p className="text-gray-600 text-sm text-center">
        CozyLoops Studio. Handcrafted Artisan eCommerce Template.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
        {bottomLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-4">
            {index !== 0 && <span className="text-gray-400">•</span>}

            <Link
              href={link.href}
              className="hover:cozy-text-brand-pink transition-colors"
            >
              {link.page}
            </Link>
          </div>
        ))}

        <span className="hidden lg:inline text-gray-400">•</span>

        <p className="text-[#783014]">
          Made with <FaHeart className="inline cozy-text-brand-pink" /> for artisans
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
