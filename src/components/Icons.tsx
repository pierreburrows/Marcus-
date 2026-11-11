type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const PhoneIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M5 3.5h3l1.6 4.2-2.1 1.4a11 11 0 0 0 7.4 7.4l1.4-2.1 4.2 1.6v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.7a2 2 0 0 1 2-2.2z" /></svg>
);
export const MailIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
);
export const WhatsAppIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" /><path d="M9 8.5c0 3.5 2.6 6.5 6.4 6.6l.8-1.6-2-1-.9.9a4.5 4.5 0 0 1-2.2-2.2l.9-.9-1-2L9.4 8z" /></svg>
);
export const FacebookIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.4H7.8v3h2.6V21z" /></svg>
);
export const PinIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></svg>
);
export const ArrowIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const PauseIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><rect x="7" y="5" width="3.2" height="14" /><rect x="13.8" y="5" width="3.2" height="14" /></svg>
);
export const PlayIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);
export const CloseIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M5 5l14 14M19 5 5 19" /></svg>
);
export const ChevronIcon = ({ className, dir = "right" }: P & { dir?: "left" | "right" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>{dir === "right" ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}</svg>
);
