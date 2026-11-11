import { Logo } from "./Logo";
import { AREA, EMAIL, FACEBOOK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "./data";

export function Footer() {
  return (
    <footer className="mfb-footer">
      <div className="mfb-wrap mfb-footer__grid">
        <Logo className="mfb-footer__logo" tagline />
        <div className="mfb-footer__col">
          <h3>Contact</h3>
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div className="mfb-footer__col">
          <h3>Explore</h3>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#work">Gallery</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="mfb-footer__col">
          <h3>Area</h3>
          <p>Carpentry and joinery across {AREA}.</p>
        </div>
      </div>
      <div className="mfb-wrap mfb-footer__base">
        <span>&copy; 2026 Marcus Field Bespoke</span>
        <span>All photos show Marcus's own work.</span>
      </div>
    </footer>
  );
}
