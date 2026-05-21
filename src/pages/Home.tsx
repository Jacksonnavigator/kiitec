import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationForm } from "../components/ApplicationForm";
import { FaqAccordion } from "../components/FaqAccordion";
import { HomeNewsStrip } from "../components/HomeNewsStrip";
import { StatsStrip } from "../components/StatsStrip";
import { VisualProgramGrid } from "../components/VisualProgramGrid";
import {
  HOME_HERO_SLIDE_INTERVAL_MS,
  diplomaProgramVisuals,
  homeCampusLifePhotos,
  homeFeaturePhotos,
  homeHeroBackgroundSlides,
} from "../data/sitePhotos";
import { mastercardLogoUrl, skillsToFlyPosterUrl, tagline } from "../site/brand";

export function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    homeHeroBackgroundSlides.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setHeroSlide((i) => (i + 1) % homeHeroBackgroundSlides.length);
    }, HOME_HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      <section className="hero hero--photo hero--home-rich hero--slideshow" aria-labelledby="home-hero-title">
        <div className="hero-slideshow" aria-hidden="true">
          {homeHeroBackgroundSlides.map((slide, i) => (
            <div
              key={slide.src}
              className={`hero-slideshow__slide${i === heroSlide ? " hero-slideshow__slide--active" : ""}`}
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ))}
        </div>
        <div className="container hero-home-layout">
          <div className="hero-inner hero-inner--home">
            <p className="hero-kicker">Don Bosco KIITEC · Arusha</p>
            <h1 id="home-hero-title" className="hero-title">
              {tagline}
            </h1>
            <p className="hero-lede">
              Hands-on technical training in telecommunications, electronics, computing, and automation—NACTVET-registered
              (REG/EOS/027), rooted in the Salesian tradition, and supported by partners across Tanzania and beyond.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/programs">
                View programs
              </Link>
              <Link className="btn btn-outline-dark" to="/gallery">
                Browse photo archive
              </Link>
            </div>
          </div>
        </div>
        <nav className="hero-slideshow__nav" aria-label="Hero background photos">
          <ol className="hero-slideshow__dots">
            {homeHeroBackgroundSlides.map((slide, i) => (
              <li key={slide.src}>
                <button
                  type="button"
                  className={`hero-slideshow__dot${i === heroSlide ? " hero-slideshow__dot--active" : ""}`}
                  aria-label={`Show background ${i + 1} of ${homeHeroBackgroundSlides.length}`}
                  aria-current={i === heroSlide ? "true" : undefined}
                  onClick={() => setHeroSlide(i)}
                />
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <StatsStrip />

      <section className="section section-alt">
        <div className="container">
          <HomeNewsStrip />
        </div>
      </section>

      <section className="section container" aria-labelledby="campus-life-home-heading">
        <h2 id="campus-life-home-heading" className="section-heading">
          Labs, teaching spaces &amp; campus
        </h2>
        <p className="section-intro">
          Computer and automation labs, renewable-energy trainers, and outdoor sports—each photo matches the scene it shows.
        </p>
        <div className="photo-mosaic photo-mosaic--home" role="list">
          {homeCampusLifePhotos.map((ph) => (
            <figure key={ph.src} className="photo-mosaic__cell" role="listitem">
              <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
              <figcaption className="photo-mosaic__caption">{ph.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
          <Link className="btn btn-outline-dark" to="/campus">
            Full campus gallery &amp; map
          </Link>
          <Link className="btn btn-outline-dark" to="/gallery">
            All photos
          </Link>
        </div>
      </section>

      <section className="section container" aria-labelledby="spotlight-heading">
        <article className="spotlight spotlight-mastercard">
          <div className="spotlight-body">
            <p className="spotlight-label">Mastercard Foundation</p>
            <h2 id="spotlight-heading" className="spotlight-title">
              &quot;Skills to Fly&quot; — girls in diploma engineering
            </h2>
            <p className="spotlight-text">
              Scholarships for <strong>200 girls</strong> in NACTVET diploma engineering—seven pathways on the official poster. Form
              Four/Six with four passes (min. four D grades), two science subjects.{" "}
              <Link to="/news#skills-to-fly">Read more</Link>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="#application-form">
                Apply now
              </Link>
              <Link className="btn btn-outline-dark" to="/news#skills-to-fly">
                News &amp; initiatives
              </Link>
            </div>
          </div>
          <aside className="spotlight-aside spotlight-aside-brand" aria-label="Partnership">
            <img
              src={mastercardLogoUrl}
              alt="Mastercard Foundation"
              className="spotlight-partner-logo"
              width={300}
              height={284}
              loading="lazy"
            />
            <p className="spotlight-aside-caption">Partnership — Mastercard Foundation &amp; Don Bosco KIITEC.</p>
          </aside>
          <figure className="spotlight-poster">
            <img
              src={skillsToFlyPosterUrl}
              alt="Official Skills to Fly poster: seven diploma engineering courses, scholarship criteria for girls, and institute contact numbers."
              width={1200}
              height={1697}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </article>
      </section>

      <section className="section section-alt apply-page" aria-labelledby="home-apply-heading">
        <div className="container">
          <h2 id="home-apply-heading" className="section-heading section-heading--ruled">
            Apply to KIITEC
          </h2>
          <p className="section-intro">Send your details with the form below.</p>
          <div id="application-form" className="apply-form-wrap apply-form-wrap--centered">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="diploma-heading">
        <div className="container">
          <h2 id="diploma-heading" className="section-heading section-heading--ruled">
            Diploma programmes
          </h2>
          <VisualProgramGrid items={diplomaProgramVisuals} applyLink={false} />
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <p style={{ marginBottom: "0.5rem" }}>
              <Link className="btn btn-primary" to="#application-form">
                Apply for a programme
              </Link>
            </p>
            <p>
              <Link className="btn btn-outline-dark" to="/programs">
                Professional &amp; short courses
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="section-heading section-heading--ruled">
          Life at KIITEC
        </h2>
        <div className="feature-photo-row" role="list">
          {homeFeaturePhotos.map((ph) => (
            <figure key={ph.src} className="feature-photo-card" role="listitem">
              <img src={ph.src} alt={ph.alt} width={640} height={427} loading="lazy" decoding="async" />
              <figcaption>{ph.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="faq-heading">
        <div className="container">
          <FaqAccordion id="faq-heading" />
        </div>
      </section>
    </>
  );
}
