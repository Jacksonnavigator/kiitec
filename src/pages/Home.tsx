import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaqAccordion } from "../components/FaqAccordion";
import { HomeNewsStrip } from "../components/HomeNewsStrip";
import { StatsStrip } from "../components/StatsStrip";
import {
  HOME_HERO_SLIDE_INTERVAL_MS,
  homeCampusLifePhotos,
  homeDiplomaShowcasePhotos,
  homeHeroBackgroundSlides,
  homeHeroCollagePhotos,
} from "../data/sitePhotos";
import { facilitiesHighlightUrl, logoUrl, mastercardLogoUrl, skillsToFlyPosterUrl, tagline } from "../site/brand";
import { siteContact } from "../site/contact";
import { diplomaPrograms } from "../data/diplomaPrograms";

// ── Static data ────────────────────────────────────────────────────────────

interface WhyCard {
  heading: string;
  body: string;
}

const whyCards: WhyCard[] = [
  {
    heading: "Hands-on engineering",
    body: "Training in ICTs, electrical, renewable energies, industrial automation, and related disciplines—with research and consultancy in these fields.",
  },
  {
    heading: "Accessible pathways",
    body: "Budget-friendly fees, instalment plans, and sponsorship opportunities help keep programmes financially feasible.",
  },
  {
    heading: "Supportive campus life",
    body: "A calm setting near Mount Meru in Suye—well connected by dala-dala, bodaboda, and taxi—with hostels, shops, eateries, and healthcare nearby.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────

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
      {/* Hero — rotating full-bleed backgrounds (5 slides, 10s each) plus collage */}
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
            <p className="hero-kicker">Salesian institute · Arusha</p>
            <h1 id="home-hero-title" className="hero-title">
              {tagline}
            </h1>
            <p className="hero-lede">
              Hands-on technical training in telecommunications, electronics, computing, and automation—NACTE-registered
              (REG/EOS/027), rooted in the Salesian tradition, and supported by partners across Tanzania and beyond.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/programs">View programs</Link>
              <Link className="btn btn-outline-dark" to="/apply-here">Application form</Link>
              <Link className="btn btn-outline-dark" to="/admissions">How to apply</Link>
              <Link className="btn btn-outline-dark" to="/gallery">Browse photo archive</Link>
            </div>
          </div>
          <aside className="home-hero-collage" aria-label="Campus photography preview">
            {homeHeroCollagePhotos.map((ph, i) => (
              <figure key={ph.src} className={`home-hero-collage__tile home-hero-collage__tile--${i + 1}`}>
                <img
                  src={ph.src}
                  alt={ph.alt}
                  width={640}
                  height={480}
                  sizes="(min-width: 960px) 25vw, 40vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : undefined}
                />
                <figcaption className="home-hero-collage__caption">{ph.title}</figcaption>
              </figure>
            ))}
          </aside>
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

      {/* Full-width film strip — more of the migrated library before the first text-heavy block */}
      <section className="home-hero-strip" aria-label="Campus and laboratory photography">
        <div className="home-hero-strip__scroll" role="list">
          {homeCampusLifePhotos.map((ph) => (
            <figure key={ph.src} className="home-hero-strip__cell" role="listitem">
              <div className="home-hero-strip__img-wrap">
                <img src={ph.src} alt={ph.alt} width={400} height={267} loading="lazy" decoding="async" />
              </div>
              <figcaption className="home-hero-strip__caption">{ph.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* News */}
      <section className="section section-alt">
        <div className="container">
          <HomeNewsStrip />
        </div>
      </section>

      {/* Campus life photos */}
      <section className="section container" aria-labelledby="campus-life-home-heading">
        <h2 id="campus-life-home-heading" className="section-heading">Labs, teaching spaces &amp; campus</h2>
        <p className="section-intro">
          Computer and automation labs, renewable-energy trainers, and outdoor sports—each photo matches the scene it shows.
        </p>
        {/* CSS handles hover scale: .photo-mosaic__cell { overflow: hidden }
            .photo-mosaic__cell img { transition: transform .3s ease }
            .photo-mosaic__cell:hover img { transform: scale(1.04) }       */}
        <div className="photo-mosaic photo-mosaic--home" role="list">
          {homeCampusLifePhotos.map((ph) => (
            <figure key={ph.src} className="photo-mosaic__cell" role="listitem">
              <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
              <figcaption className="photo-mosaic__caption">{ph.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
          <Link className="btn btn-outline-dark" to="/campus">Full campus gallery &amp; map</Link>
          <Link className="btn btn-outline-dark" to="/gallery">All photos</Link>
        </div>
      </section>

      {/* Mastercard spotlight — poster reflects current diploma list & scholarship lines */}
      <section className="section container" aria-labelledby="spotlight-heading">
        <article className="spotlight spotlight-mastercard">
          <div className="spotlight-body">
            <p className="spotlight-label">Mastercard Foundation</p>
            <h2 id="spotlight-heading" className="spotlight-title">
              &quot;Skills to Fly&quot; — girls in diploma engineering
            </h2>
            <p className="spotlight-text">
              Don Bosco KIITEC and the Mastercard Foundation run <strong>Skills to Fly</strong> to widen access for young women into
              NACTE-registered diploma engineering—including the seven pathways now promoted on the official poster (electrical &amp;
              computer; electronics &amp; telecommunications; electrical &amp; industrial automation; electrical &amp; renewable energy;
              artificial intelligence &amp; machine learning; data science &amp; analytics; robotics &amp; drones).
            </p>
            <p className="spotlight-text">
              <strong>Scholarship focus (poster):</strong> applicants should have completed <strong>Form Four or Form Six</strong> with
              at least <strong>four passes</strong> and a minimum of <strong>four D grades</strong>; among those passes, at least{" "}
              <strong>two subjects must be sciences</strong> (for example Physics, Chemistry, Biology, or Mathematics). Priority is given
              to girls from <strong>vulnerable environments</strong> who show potential, motivation, and commitment to technical study.
            </p>
            <p className="spotlight-text">
              &quot;Mastercard Foundation&apos;s support is a beacon of hope for many talented young women who would otherwise be denied
              access to technical education,&quot; said Fr. Sebastian, Director Don Bosco KIITEC.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/apply-here">
                Apply now
              </Link>
              <Link className="btn btn-outline-dark" to="/news#skills-to-fly">
                News &amp; initiatives
              </Link>
            </div>
          </div>
          <aside className="spotlight-aside spotlight-aside-brand" aria-label="Partnership">
            <img src={mastercardLogoUrl} alt="Mastercard Foundation" className="spotlight-partner-logo" width={300} height={284} loading="lazy" />
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

      {/* Diploma programmes */}
      <section className="section section-alt" aria-labelledby="diploma-heading">
        <div className="container">
          <h2 id="diploma-heading" className="section-heading">Diploma programmes &amp; focus areas</h2>
          <p className="section-intro">
            Engineering pathways and partnership context are summarised on the{" "}
            <Link to="/programs">programs overview</Link>.
          </p>
          <div className="diploma-photo-grid">
            {homeDiplomaShowcasePhotos.map((ph) => (
              <figure key={ph.src} className="diploma-photo">
                <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
                <figcaption>{ph.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="card-grid diploma-card-grid">
            {diplomaPrograms.map((c) => (
              <div key={c.title} className="card">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.75rem" }}>
            <Link className="btn btn-primary" to="/programs">Full programs overview</Link>
          </p>
        </div>
      </section>

      {/* About snippet */}
      <section className="section container" aria-labelledby="about-snippet-heading">
        <div className="split about-snippet-split">
          <div>
            <h2 id="about-snippet-heading" className="section-heading">About us</h2>
            <p className="section-intro" style={{ marginBottom: "1rem" }}>
              <strong>
                Founded in 2004 with French engineering roots, KIITEC today works with partners such as FTE (Switzerland) and ADEI (France) while training technicians for Tanzania and the region.
              </strong>{" "}
              Registration, mission, and facilities are covered in depth on <Link to="/about">About KIITEC</Link>.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/about">About KIITEC</Link>
              <Link className="btn btn-outline-dark" to="/programs">Programme ladders</Link>
            </div>
          </div>
          <div className="about-snippet-logo-wrap">
            <img src={logoUrl} alt="Don Bosco KIITEC" width={300} height={146} loading="lazy" decoding="async" className="about-snippet-logo" />
          </div>
        </div>
      </section>

      {/* Programme ladders — durations live in FAQ + Programs to avoid repeating the same tables */}
      <section className="section section-alt" aria-labelledby="ladders-heading">
        <div className="container">
          <h2 id="ladders-heading" className="section-heading">Diploma, professional &amp; short ladders</h2>
          <p className="section-intro">
            Names, tiers, and indicative timings are listed on <Link to="/programs">Programs</Link> and in the FAQ below—each in one place so the page does not restate the same figures twice.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/programs">Open programmes page</Link>
            <a className="btn btn-outline-dark" href="#faq-heading">
              Jump to FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section section-alt" aria-labelledby="facilities-home-heading">
        <div className="container split">
          <div>
            <h2 id="facilities-home-heading" className="section-heading">Our facilities</h2>
            <p className="section-intro" style={{ marginBottom: "1rem" }}>
              Hostel accommodation, modern classrooms, laboratories, and workshops with up-to-date equipment support
              hands-on learning that reflects real workplaces.
            </p>
            <Link className="btn btn-primary" to="/campus">Campus, map &amp; photos</Link>
          </div>
          <figure className="facilities-highlight">
            <img
              src={facilitiesHighlightUrl}
              alt="Electronics and telecommunications laboratory with oscilloscopes, workstations, and test equipment along the windows."
              width={1024}
              height={683}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section container" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="section-heading">Why students choose KIITEC</h2>
        <p className="section-intro">
          From enrolment through graduation: what students notice about teaching style, costs, and day-to-day life on campus.
        </p>
        <div className="card-grid">
          {whyCards.map((c) => (
            <div key={c.heading} className="card">
              <h3>{c.heading}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" aria-labelledby="faq-heading">
        <div className="container">
          <FaqAccordion id="faq-heading" />
        </div>
      </section>

      {/* Visit / Contact */}
      <section className="section container" aria-labelledby="visit-heading">
        <div className="split">
          <div>
            <h2 id="visit-heading" className="section-heading">Visit Arusha&apos;s technical campus</h2>
            <p className="section-intro" style={{ marginBottom: "1rem" }}>
              Don Bosco KIITEC is located in Suye—about six kilometres from Arusha city centre—near Masai Camp and
              Mount Meru. KIITEC&apos;s serene setting, cool climate, and accessibility support academic and personal
              growth.
            </p>
            <Link className="btn btn-outline-dark" to="/campus">Campus &amp; location</Link>
          </div>
          <div className="contact-block">
            <dl>
              <dt>Landline</dt>
              <dd><a href={`tel:${siteContact.landlineTel}`}>{siteContact.landlineDisplay}</a></dd>
              <dt>Mobile (line 2)</dt>
              <dd><a href={`tel:${siteContact.mobile2Tel}`}>{siteContact.mobile2Display}</a></dd>
              <dt>Mobile (line 3)</dt>
              <dd><a href={`tel:${siteContact.mobile3Tel}`}>{siteContact.mobile3Display}</a></dd>
              <dt>Registrar mobile</dt>
              <dd><a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a></dd>
              <dt>Email</dt>
              <dd><a href={`mailto:${siteContact.email}`}>{siteContact.email}</a></dd>
              <dt>Postal address</dt>
              <dd>{siteContact.poBox}</dd>
              <dt>Google Maps</dt>
              <dd><a href={siteContact.mapUrl} target="_blank" rel="noreferrer">Campus pin</a></dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}