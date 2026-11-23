"use client";

import type { ComponentType, ReactNode } from "react";
import {
  Heart,
  Mail,
  PenLine,
  Send,
  Sparkles,
  Tag,
  User,
} from "@/assets/icons/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAlert } from "@/shared/hooks/useAlert";

type IconType = ComponentType<{ className?: string }>;

const INPUT_STYLE =
  "rounded-2xl border bg-secondary/50 px-5 text-base text-primary shadow-none transition placeholder:text-muted-foreground focus-visible:border-primary focus-visible:bg-white focus-visible:ring-0";

const Field = ({
  children,
  Icon,
  className = "",
}: {
  children: ReactNode;
  Icon: IconType;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    {children}
    <Icon className="pointer-events-none absolute right-5 top-4.5 size-5 text-muted-foreground" />
  </div>
);

const ContactForm = () => {
  const { showAlert } = useAlert();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      showAlert("error", "Please fill in all fields");
      return;
    }

    showAlert("success", "Your message has been sent successfully!");
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-[2rem] border bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="mb-4 flex flex-col items-center gap-2 text-center">
        <Heart className="size-6 cozy-text-brand-pink" />
        <h2 className="font-serif text-3xl font-bold text-primary">
          Send Us a Message
        </h2>
        <div className="mt-1 flex items-center gap-3">
          <span className="h-px w-14 bg-primary/20" />
          <Sparkles className="size-4 cozy-text-brand-pink" />
          <span className="h-px w-14 bg-primary/20" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field Icon={User}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your name"
            className={`${INPUT_STYLE} h-14 pr-12`}
          />
        </Field>
        <Field Icon={Mail}>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email address"
            className={`${INPUT_STYLE} h-14 pr-12`}
          />
        </Field>
      </div>

      <Field Icon={Tag}>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
          className={`${INPUT_STYLE} h-14 pr-12`}
        />
      </Field>

      <Field Icon={PenLine}>
        <Textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          aria-label="Your message"
          className={`${INPUT_STYLE} min-h-32 resize-none py-4 pr-12`}
        />
      </Field>

      <Button
        type="submit"
        className="mt-2 h-16 cursor-pointer gap-2 rounded-2xl cozy-bg-brown text-lg font-bold text-white shadow transition hover:cozy-bg-brown hover:opacity-90"
      >
        Send Message
        <Send className="size-5" />
      </Button>
    </form>
  );
};

export default ContactForm;
