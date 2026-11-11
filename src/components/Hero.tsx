import { useEffect, useRef, useState } from "react";
import { ArrowIcon, PauseIcon, PhoneIcon, PlayIcon } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, asset } from "./data";

const FILM = {
  uhd: asset("assets/hero/hero-2160.mp4"),
  hd: asset("assets/hero/hero-1080.mp4"),
  sd: asset("assets/hero/hero-720.mp4"),
  poster: asset("assets/hero/hero-poster.jpg"),
  still: asset("assets/hero/hero-finished.jpg"),
};

type Conn = { saveData?: boolean };

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPaused(true);
      return;
    }
    const conn = (navigator as Navigator & { connection?: Conn }).connection;
    const px = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
    const src = conn?.saveData ? FILM.sd : px > 2200 ? FILM.uhd : px > 1000 ? FILM.hd : FILM.sd;
    v.muted = true;
    v.src = src;
    v.load();
    const attempt = v.play();
    if (attempt) attempt.catch(() => setPaused(true));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) {
      setReduced(false);
      if (!v.src) {
        v.muted = true;
        v.src = FILM.hd;
      }
    }
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section className="mfb-hero" id="top" aria-labelledby="mfb-hero-title">
      <div className="mfb-hero__media">
        <video
          ref={videoRef}
          className="mfb-hero__video"
          poster={FILM.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
        {reduced ? <img className="mfb-hero__still" src={FILM.still} alt="" /> : null}
      </div>

      <div className="mfb-wrap mfb-hero__inner">
        <div className="mfb-hero__copy">
          <svg className="mfb-hero__roof" viewBox="0 0 260 84" aria-hidden="true">
            <polyline points="2.5,86 2.5,66 106,2.5 190,57" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter" />
          </svg>
          <p className="mfb-hero__eyebrow">
            <span className="mfb-nw">Carpentry</span>
            <span className="mfb-sep" aria-hidden="true">|</span>
            <span className="mfb-nw">Joinery</span>
            <span className="mfb-sep" aria-hidden="true">|</span>
            <span className="mfb-nw">Home Improvements</span>
          </p>
          <h1 className="mfb-hero__title" id="mfb-hero-title">
            <span>Bespoke carpentry,</span> <span className="mfb-hero__accent">built to fit.</span>
          </h1>
          <p className="mfb-hero__lede">
            Fitted wardrobes, media walls, panelling and made-to-measure joinery for homes across Hertfordshire.
          </p>
          <div className="mfb-hero__actions">
            <a className="mfb-call" href={PHONE_TEL}>
              <PhoneIcon className="mfb-ico" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <a className="mfb-quote-link" href="#contact">
              Ask for a quote <ArrowIcon className="mfb-ico" />
            </a>
          </div>
        </div>
        <button type="button" className="mfb-hero__pause" onClick={toggle} aria-label={paused ? "Play the film" : "Pause the film"}>
          {paused ? <PlayIcon className="mfb-ico" /> : <PauseIcon className="mfb-ico" />}
        </button>
      </div>
    </section>
  );
}
