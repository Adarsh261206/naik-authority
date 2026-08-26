import { useState } from "react";
import { advocate, mailHref, telHref } from "@/data/site";
import { img } from "@/data/images";

export function ConsultForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const dark = variant === "dark";
  const label = dark ? "text-ondarkmuted" : "text-inkmuted";
  const field = dark
    ? "border-b border-ondark/25 bg-transparent py-3 text-ondark placeholder:text-ondarkmuted/60 focus:border-bronze"
    : "border-b border-beige bg-transparent py-3 text-ink placeholder:text-inkmuted/60 focus:border-bronze";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nContact: ${contact}\n\n${message}`;
    window.location.href = `mailto:${advocate.email}?subject=${encodeURIComponent(
      "Consultation enquiry",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={`eyebrow ${label}`}>Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={`mt-2 w-full outline-none ${field}`}
          />
        </label>
        <label className="block">
          <span className={`eyebrow ${label}`}>Phone or email</span>
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="How to reach you"
            className={`mt-2 w-full outline-none ${field}`}
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className={`eyebrow ${label}`}>What do you need help with?</span>
        <textarea
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your requirement"
          className={`mt-2 w-full resize-none outline-none ${field}`}
        />
      </label>
      <button
        type="submit"
        className={`mt-9 rounded-[3px] px-8 py-4 text-sm transition-colors duration-200 ${
          dark ? "bg-cream text-espresso hover:bg-bronze hover:text-cream" : "bg-espresso text-cream hover:bg-brown"
        }`}
      >
        Send enquiry
      </button>
    </form>
  );
}

export function ConsultSection() {
  return (
    <section id="consult" className="relative isolate scroll-mt-24 overflow-hidden bg-espresso">
      <img
        src={img.consultation}
        alt=""
        aria-hidden="true"
        width={1408}
        height={1008}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/95 to-espresso/85" />
      <div className="mx-auto grid w-full max-w-[1500px] gap-14 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div>
          <p className="eyebrow text-bronze">09 — Consultation</p>
          <h2 className="mt-6 display-lg text-ondark">
            Let&apos;s discuss
            <br />
            what you <span className="italic text-bronze">need.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ondarkmuted">
            Share a short outline of your requirement and it will be reviewed before the consultation.
          </p>
          <div className="mt-10 space-y-2">
            <a href={telHref} className="link-quiet block font-display text-3xl text-ondark">
              {advocate.phone}
            </a>
            <a href={mailHref} className="link-quiet block text-sm text-ondarkmuted">
              {advocate.email}
            </a>
          </div>
        </div>
        <ConsultForm />
      </div>
    </section>
  );
}
