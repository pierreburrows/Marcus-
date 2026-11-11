import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Intro, Process, Reviews, Services } from "./components/Sections";
import { Stories } from "./components/Stories";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <a className="mfb-skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Stories />
        <Gallery />
        <Reviews />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
