import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "./data";

const LINKS: [string, string][] = [
  ["#services", "Services"],
  ["#projects", "Projects"],
  ["#work", "Gallery"],
  ["#reviews", "Reviews"],
  ["#contact", "Contact"],
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className={`mfb-nav${solid || open ? " is-solid" : ""}`}>
      <div className="mfb-wrap mfb-nav__bar">
        <a href="#top" className="mfb-nav__logo" aria-label="Marcus Field Bespoke, back to top" onClick={() => setOpen(false)}>
          <Logo decorative />
        </a>
        <nav aria-label="Main" className="mfb-nav__nav">
          <ul className="mfb-nav__links">
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="mfb-nav__call" href={PHONE_TEL}>
          <PhoneIcon className="mfb-ico" />
          <span>{PHONE_DISPLAY}</span>
        </a>
        <button
          type="button"
          className={`mfb-nav__menu${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mfb-sheet"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
      <div id="mfb-sheet" className={`mfb-sheet${open ? " is-open" : ""}`} hidden={!open}>
        <ul className="mfb-sheet__links">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mfb-sheet__actions">
          <a className="mfb-sheet__call" href={PHONE_TEL}>
            <PhoneIcon className="mfb-ico" /> Call {PHONE_DISPLAY}
          </a>
          <a className="mfb-sheet__wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="mfb-ico" /> WhatsApp Marcus
          </a>
        </div>
      </div>
    </>
  );
}
