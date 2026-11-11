type LogoProps = { className?: string; tagline?: boolean; tone?: "ink" | "paper"; decorative?: boolean };

export function Logo({ className, tagline = false, tone = "ink", decorative = false }: LogoProps) {
  const ink = tone === "ink" ? "#151515" : "#FBF7F2";
  const grey = tone === "ink" ? "#5C5852" : "#CFC8BD";
  return (
    <svg
      className={className}
      viewBox={tagline ? "74 326 1112 562" : "96 326 1066 466"}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "Marcus Field Bespoke"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="110,792 110,566 418,346 678,520" fill="none" stroke={ink} strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="10" />
      <text x="198" y="688" textLength="954" lengthAdjust="spacingAndGlyphs" fontFamily="Montserrat, Arial, sans-serif" fontWeight="700" fontSize="128" fill={ink}>MARCUS FIELD</text>
      <line x1="200" y1="746" x2="346" y2="746" stroke={grey} strokeWidth="3" />
      <line x1="976" y1="746" x2="1128" y2="746" stroke={grey} strokeWidth="3" />
      <text x="388" y="768" textLength="542" lengthAdjust="spacing" fontFamily="Montserrat, Arial, sans-serif" fontWeight="500" fontSize="60" fill={grey}>BESPOKE</text>
      {tagline ? (
        <text x="92" y="864" textLength="1074" lengthAdjust="spacing" fontFamily="Montserrat, Arial, sans-serif" fontWeight="500" fontSize="29" fill={ink}>
          CARPENTRY  |  JOINERY  |  HOME IMPROVEMENTS
        </text>
      ) : null}
    </svg>
  );
}

export function RoofMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <polyline points="3,40 3,24 30,4 52,19" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="miter" />
    </svg>
  );
}
