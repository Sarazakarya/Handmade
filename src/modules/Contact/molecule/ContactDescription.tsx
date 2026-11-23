import { Heart } from "@/assets/icons/Icons";
import { ITEMS } from "../utlils/ContactData";

const ContactDescription = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide cozy-text-brand-pink">
        We&rsquo;d love to hear from you
        <Heart className="size-4 fill-current" />
      </span>

      <h1 className="font-serif text-5xl font-bold text-primary md:text-6xl">
        Contact Us
      </h1>

      <p className="max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
        Have a question, custom request, or just want to say hello? We&rsquo;re
        here for you. Reach out and we&rsquo;ll get back to you as soon as
        possible.
      </p>

      <ul className="mt-2 flex flex-col gap-5">
        {ITEMS.map(({ Icon, label, value }) => (
          <li key={label} className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#f4e6dc]">
              <Icon className="size-5 text-primary" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <p className="wrap-break-word text-lg font-bold text-primary">
                {value}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDescription;
