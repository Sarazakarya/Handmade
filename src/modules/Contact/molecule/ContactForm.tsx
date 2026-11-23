"use client";

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
import { InputWithIcon } from "@/shared/components/molecule/InputWithIcon";
import { TextareaWithIcon } from "@/shared/components/molecule/TextareaWithIcon";

import { useAlert } from "@/shared/hooks/useAlert";

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
        <InputWithIcon
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your name"
          icon={User}
          iconPosition="end"
          className="h-14 rounded-2xl bg-secondary/50 focus-visible:bg-white"
        />

        <InputWithIcon
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email address"
          icon={Mail}
          iconPosition="end"
          className="h-14 rounded-2xl bg-secondary/50 focus-visible:bg-white"
        />
      </div>

      <InputWithIcon
        type="text"
        name="subject"
        placeholder="Subject"
        aria-label="Subject"
        icon={Tag}
        iconPosition="end"
        className="h-14 rounded-2xl bg-secondary/50 focus-visible:bg-white"
      />

      <TextareaWithIcon
        name="message"
        rows={5}
        placeholder="Your Message"
        aria-label="Your message"
        icon={PenLine}
        iconPosition="end"
        className="min-h-32 resize-none rounded-2xl bg-secondary/50 focus-visible:bg-white"
      />

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
