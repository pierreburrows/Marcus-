import { useState } from "react";
import { ArrowIcon, FacebookIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { AREA, EMAIL, FACEBOOK, PHONE_DISPLAY, PHONE_TEL, PROJECT_TYPES, WHATSAPP } from "./data";

type Form = { name: string; phone: string; town: string; type: string; details: string };

export function Contact() {
  const [f, setF] = useState<Form>({ name: "", phone: "", town: "", type: PROJECT_TYPES[0], details: "" });
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setF((prev) => ({ ...prev, [k]: e.target.value }));

  const lines = [
    "Hi Marcus, I'd like a quote please.",
    "",
    `Project: ${f.type}`,
    f.name ? `Name: ${f.name}` : "",
    f.phone ? `Phone: ${f.phone}` : "",
    f.town ? `Town: ${f.town}` : "",
    f.details ? `Details: ${f.details}` : "",
  ].filter((l, i) => i < 2 || l !== "");
  const message = lines.join("\n");
  const waHref = `${WHATSAPP}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${f.type}`)}&body=${encodeURIComponent(message)}`;

  return (
    <section className="mfb-section mfb-contact" id="contact" aria-labelledby="mfb-contact-title">
      <div className="mfb-wrap mfb-contact__grid">
        <div className="mfb-contact__info">
          <p className="mfb-eyebrow mfb-eyebrow--paper">Get in touch</p>
          <h2 className="mfb-h2" id="mfb-contact-title">
            Tell Marcus about your project.
          </h2>
          <p className="mfb-contact__lede">
            Send a few photos and a rough idea of sizes. Marcus will get back to you to talk it through and arrange a visit.
          </p>
          <ul className="mfb-contact__list">
            <li>
              <a className="mfb-contact__line mfb-contact__line--big" href={PHONE_TEL}>
                <PhoneIcon className="mfb-ico" />
                <span>{PHONE_DISPLAY}</span>
                <ArrowIcon className="mfb-ico mfb-contact__arrow" />
              </a>
            </li>
            <li>
              <a className="mfb-contact__line" href={`mailto:${EMAIL}`}>
                <MailIcon className="mfb-ico" />
                <span>{EMAIL}</span>
                <ArrowIcon className="mfb-ico mfb-contact__arrow" />
              </a>
            </li>
            <li>
              <a className="mfb-contact__line" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mfb-ico" />
                <span>WhatsApp Marcus</span>
                <ArrowIcon className="mfb-ico mfb-contact__arrow" />
              </a>
            </li>
            <li>
              <a className="mfb-contact__line" href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="mfb-ico" />
                <span>Marcus Field Bespoke on Facebook</span>
                <ArrowIcon className="mfb-ico mfb-contact__arrow" />
              </a>
            </li>
            <li className="mfb-contact__area">
              <PinIcon className="mfb-ico" />
              <span>Working across {AREA}</span>
            </li>
          </ul>
        </div>

        <form className="mfb-form" onSubmit={(e) => e.preventDefault()} aria-labelledby="mfb-form-title">
          <h3 id="mfb-form-title">Ask for a quote</h3>
          <div className="mfb-form__row">
            <label className="mfb-field">
              <span>Your name</span>
              <input type="text" autoComplete="name" value={f.name} onChange={set("name")} />
            </label>
            <label className="mfb-field">
              <span>Phone</span>
              <input type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} />
            </label>
          </div>
          <div className="mfb-form__row">
            <label className="mfb-field">
              <span>Town</span>
              <input type="text" autoComplete="address-level2" value={f.town} onChange={set("town")} />
            </label>
            <label className="mfb-field">
              <span>Project</span>
              <select value={f.type} onChange={set("type")}>
                {PROJECT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mfb-field">
            <span>What would you like made?</span>
            <textarea rows={4} value={f.details} onChange={set("details")} placeholder="Room, rough sizes, style you like, timescale" />
          </label>
          <div className="mfb-form__send">
            <a className="mfb-send-wa" href={waHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mfb-ico" /> Send by WhatsApp
            </a>
            <a className="mfb-send-mail" href={mailHref}>
              <MailIcon className="mfb-ico" /> Send by email
            </a>
          </div>
          <p className="mfb-form__note">
            Your message opens in WhatsApp or your email app, ready to send straight to Marcus. Nothing is stored on this site.
          </p>
        </form>
      </div>
    </section>
  );
}
