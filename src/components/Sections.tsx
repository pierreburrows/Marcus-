import { RoofMark } from "./Logo";
import { FacebookIcon } from "./Icons";
import { FACEBOOK, PROCESS, REVIEWS, SERVICES, photo } from "./data";

export function Intro() {
  return (
    <section className="mfb-section mfb-intro" aria-labelledby="mfb-intro-title">
      <div className="mfb-wrap mfb-intro__grid">
        <h2 className="mfb-intro__statement" id="mfb-intro-title">
          Every home has its quirks. <em>Good joinery is built around them.</em>
        </h2>
        <div className="mfb-intro__side">
          <p>
            Marcus Field Bespoke is a Hertfordshire carpenter making fitted furniture and joinery that looks like it was always
            meant to be there. From floor-to-ceiling wardrobes to a hidden pet flap, every piece is measured, made and fitted with
            care.
          </p>
          <ul className="mfb-proof">
            <li>
              <RoofMark className="mfb-proof__mark" />
              <div>
                <strong>Made to measure</strong>
                <span>Designed for your room, not adapted from a catalogue.</span>
              </div>
            </li>
            <li>
              <RoofMark className="mfb-proof__mark" />
              <div>
                <strong>Uneven walls welcome</strong>
                <span>Scribed tight to wonky walls, sloping ceilings and old beams.</span>
              </div>
            </li>
            <li>
              <RoofMark className="mfb-proof__mark" />
              <div>
                <strong>Tidy and professional</strong>
                <span>Clear communication, a clean site and details done properly.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="mfb-section mfb-services" id="services" aria-labelledby="mfb-services-title">
      <div className="mfb-wrap">
        <div className="mfb-services__head">
          <h2 className="mfb-h2" id="mfb-services-title">
            What Marcus builds
          </h2>
          <p>Carpentry, joinery and home improvements, from a single door to a whole wall of storage.</p>
        </div>
        <ul className="mfb-services__grid">
          {SERVICES.map((s, i) => {
            const p = photo(s.n);
            return (
              <li key={s.title} className="mfb-service">
                <div className="mfb-service__img">
                  <img src={p.thumb} alt="" loading="lazy" decoding="async" width={p.w} height={p.h} />
                </div>
                <span className="mfb-service__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="mfb-section mfb-reviews" id="reviews" aria-labelledby="mfb-reviews-title">
      <div className="mfb-wrap">
        <div className="mfb-reviews__head">
          <h2 className="mfb-h2" id="mfb-reviews-title">
            What clients say
          </h2>
          <a className="mfb-reviews__fb" href={FACEBOOK} target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="mfb-ico" /> Recommended on Facebook
          </a>
        </div>
        <div className="mfb-reviews__grid">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="mfb-review">
              <RoofMark className="mfb-review__mark" />
              <blockquote>
                <p>{r.quote}</p>
              </blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>Facebook recommendation</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="mfb-section mfb-process" aria-labelledby="mfb-process-title">
      <div className="mfb-wrap">
        <h2 className="mfb-h2" id="mfb-process-title">
          How it works
        </h2>
        <ol className="mfb-process__row">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="mfb-process__step">
              <span className="mfb-process__no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
