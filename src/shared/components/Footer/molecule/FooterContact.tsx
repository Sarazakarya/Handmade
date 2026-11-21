import Link from "next/link";
import { contactInfo } from "../utilis/FooterData";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-lg font-bold cozy-text-brown uppercase tracking-wide mb-5">
        Get In Touch
      </h3>

      <ul className="flex flex-col gap-4">
        {contactInfo.map((contact,index) => {
          const Icon = contact.icon;

          return (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <Icon className="cozy-text-brown shrink-0" size={17} />

              {contact.href ? (
                <Link
                  href={contact.href}
                  className="hover:text-pink-500 transition-colors break-all"
                >
                  {contact.text}
                </Link>
              ) : (
                <span>{contact.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterContact;
