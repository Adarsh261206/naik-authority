import { useState, type FormEvent } from "react";
import { advocate, mailHref, services, telHref, whatsappHref } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "requirement", string>>;

const fieldClass =
  "w-full border-b border-onink/20 bg-transparent pb-3 pt-2 text-onink placeholder:text-onink-muted/50 outline-none transition-colors duration-200 focus:border-gold";

export function ConsultForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{8,15}$/.test(get("phone"))) next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Please enter a valid email address.";
    if (!get("requirement")) next.requirement = "Please select a requirement.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Business / Organization: ${get("business") || "—"}`,
      `Requirement: ${get("requirement")}`,
      "",
      get("message") || "—",
    ].join("\n");

    window.location.href = `mailto:${advocate.email}?subject=${encodeURIComponent(
      `Consultation request — ${get("requirement")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-10 md:grid-cols-2">
      <Field id="name" label="Name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" className={fieldClass} placeholder="Full name" />
      </Field>
      <Field id="phone" label="Phone" error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Mobile number" />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@company.com" />
      </Field>
      <Field id="business" label="Business / Organization">
        <input id="business" name="business" autoComplete="organization" className={fieldClass} placeholder="Optional" />
      </Field>
      <Field id="requirement" label="Requirement" error={errors.requirement}>
        <select id="requirement" name="requirement" defaultValue="" className={`${fieldClass} appearance-none`}>
          <option value="" disabled className="bg-ink">
            Select an area
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-ink">
              {s.title}
            </option>
          ))}
          <option value="Other" className="bg-ink">
            Other
          </option>
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field id="message" label="Message">
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder="Briefly describe your requirement"
          />
        </Field>
      </div>

      <div className="md:col-span-2 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          data-cursor="consult"
          className="border border-gold/60 px-8 py-5 label-micro text-gold transition-colors duration-200 hover:bg-gold hover:text-ink active:scale-[0.99] disabled:opacity-40"
        >
          Request consultation →
        </button>
        <div className="flex flex-wrap gap-6">
          <a href={telHref} className="label-micro text-onink-muted link-underline hover:text-onink">
            Call office
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="label-micro text-onink-muted link-underline hover:text-onink"
          >
            WhatsApp
          </a>
          <a href={mailHref} className="label-micro text-onink-muted link-underline hover:text-onink">
            Email
          </a>
        </div>
      </div>

      <p aria-live="polite" className="md:col-span-2 text-sm text-gold">
        {sent ? "Your email client has been opened with the details. Send it to complete the request." : ""}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-micro block text-onink-muted/70">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      <p className={`mt-2 text-xs ${error ? "text-destructive" : "text-transparent"}`}>{error ?? "·"}</p>
    </div>
  );
}
