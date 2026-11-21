import Link from "next/link";

interface FooterLink {
  page: string;
  href: string;
  highlight?: boolean;
  badge?: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold cozy-text-brown uppercase tracking-wide mb-5">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {links.map((link,index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`inline-flex items-center gap-3 transition-colors duration-200 hover:text-pink-500 ${
                link.highlight ? "text-pink-400 font-semibold" : "text-gray-700"
              }`}
            >
              {link.page}

              {link.badge && (
                <span className="text-xs text-pink-400">{link.badge}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
