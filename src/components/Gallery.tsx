import { useEffect, useRef, useState } from "react";
import { CATEGORIES, GALLERY, photo, type Cat } from "./data";
import { ChevronIcon, CloseIcon } from "./Icons";

export function Gallery() {
  const [cat, setCat] = useState<Cat | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const items = cat === "all" ? GALLERY : GALLERY.filter((g) => g.cat === cat);
  const count = items.length;

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % count));
      else if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + count) % count));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, count]);

  const current = open === null ? null : items[open];
  const big = current ? photo(current.n) : null;

  return (
    <section className="mfb-section mfb-gallery" id="work" aria-labelledby="mfb-gallery-title">
      <div className="mfb-wrap">
        <div className="mfb-gallery__head">
          <h2 className="mfb-h2" id="mfb-gallery-title">
            The work
          </h2>
          <div className="mfb-chips" role="group" aria-label="Filter photos">
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" className="mfb-chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mfb-gallery__count" aria-live="polite">
          {count} photos of real jobs by Marcus
        </p>
        <ul className="mfb-masonry">
          {items.map((g, i) => {
            const p = photo(g.n);
            return (
              <li key={g.n} className="mfb-masonry__item">
                <button type="button" className="mfb-tile" onClick={() => setOpen(i)} aria-label={`View larger: ${g.alt}`}>
                  <img src={p.thumb} alt={g.alt} loading="lazy" decoding="async" width={p.w} height={p.h} />
                  <span className="mfb-tile__cap">{g.alt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {current && big ? (
        <div className="mfb-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setOpen(null)}>
          <figure className="mfb-lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={big.src} alt={current.alt} width={big.w} height={big.h} />
            <figcaption>
              <span>{current.alt}</span>
              <span className="mfb-lightbox__count">
                {(open ?? 0) + 1} / {count}
              </span>
            </figcaption>
          </figure>
          <button ref={closeRef} type="button" className="mfb-lightbox__btn mfb-lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>
            <CloseIcon className="mfb-ico" />
          </button>
          <button
            type="button"
            className="mfb-lightbox__btn mfb-lightbox__prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i - 1 + count) % count));
            }}
          >
            <ChevronIcon className="mfb-ico" dir="left" />
          </button>
          <button
            type="button"
            className="mfb-lightbox__btn mfb-lightbox__next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i + 1) % count));
            }}
          >
            <ChevronIcon className="mfb-ico" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
