import { useRef, useState, type KeyboardEvent } from "react";
import { STORIES, photo } from "./data";

export function Stories() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const story = STORIES[active];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % STORIES.length;
    else if (e.key === "ArrowLeft") next = (active - 1 + STORIES.length) % STORIES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = STORIES.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="mfb-section mfb-stories" id="projects" aria-labelledby="mfb-stories-title">
      <div className="mfb-wrap">
        <div className="mfb-stories__head">
          <div>
            <p className="mfb-eyebrow">Before and after</p>
            <h2 className="mfb-h2" id="mfb-stories-title">
              From bare wall to built-in.
            </h2>
          </div>
          <p className="mfb-stories__intro">Follow recent jobs from the first measure to the finished piece.</p>
        </div>

        <div className="mfb-tabs" role="tablist" aria-label="Projects" onKeyDown={onKey}>
          {STORIES.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`mfb-tab-${s.id}`}
              aria-selected={i === active}
              aria-controls="mfb-story-panel"
              tabIndex={i === active ? 0 : -1}
              className="mfb-tab"
              onClick={() => setActive(i)}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div id="mfb-story-panel" role="tabpanel" aria-labelledby={`mfb-tab-${story.id}`} className="mfb-story" key={story.id}>
          <p className="mfb-story__summary">{story.summary}</p>
          <ol className="mfb-rail">
            {story.steps.map((st, i) => {
              const p = photo(st.n);
              return (
                <li key={st.n} className="mfb-step">
                  <div className="mfb-step__img">
                    <img src={p.thumb} alt={st.text} loading="lazy" decoding="async" width={p.w} height={p.h} />
                  </div>
                  <div className="mfb-step__cap">
                    <span className="mfb-step__no">{String(i + 1).padStart(2, "0")}</span>
                    <strong>{st.label}</strong>
                    <span className="mfb-step__text">{st.text}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
