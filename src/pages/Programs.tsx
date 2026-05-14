import { Link } from "react-router-dom";
import { diplomaPrograms } from "../data/diplomaPrograms";
import { programsStripPhotos } from "../data/sitePhotos";
import { sponsorshipPdfUrl } from "../site/brand";

const professionalExamples = [
  {
    title: "IT and Security System courses",
    body: "Structured professional pathway—confirm the current syllabus, fees, and intake timing with the registrar.",
  },
] as const;

const longTermDurations = [
  { name: "NACTE diploma programmes (all seven engineering fields below)", duration: "About 3 years (indicative)" },
  { name: "IT and Security System courses (professional)", duration: "About 1 year (indicative)" },
] as const;

const shortTermDurations = [
  { name: "Domestic and Electrical Installation", duration: "About 6 months (indicative)" },
  { name: "Basic Computer Applications", duration: "About 2 months (indicative)" },
] as const;

export function Programs() {
  return (
    <>
      <header className="page-hero page-hero--programs">
        <div className="container">
          <p className="page-hero-eyebrow">Educational offerings</p>
          <h1>Long term &amp; short term courses</h1>
          <p className="page-hero-lede">
            As on the public institute site, courses are grouped into <strong>long term</strong> pathways (NACTE-registered diplomas
            and mid-length professional routes) and <strong>short term</strong> skills programmes. Fees, intakes, and exact module
            lists change by year—the registrar is the source of truth.
          </p>
          <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-primary" to="/apply-here">
              Application form
            </Link>
            <Link className="btn btn-outline-dark" to="/admissions">
              Admissions
            </Link>
          </div>
        </div>
      </header>

      <section className="section container programs-prose-lead" aria-labelledby="explore-offerings">
        <h2 id="explore-offerings" className="programs-heading-upper">
          Explore our educational offerings
        </h2>
        <p className="programs-lead-text">
          Discover long term and short term options with us. Long term courses cover full diplomas and selected professional
          programmes; short term courses build targeted workplace skills in a few months. Scroll for details, then confirm fees and
          intakes before you apply.
        </p>
        <nav className="programs-jump-nav" aria-label="Sections on this page">
          <span className="programs-jump-nav__label">On this page:</span>
          <a href="#long-term-courses">Long term courses</a>
          <a href="#short-term-courses">Short term courses</a>
          <a href="#programme-lengths">Programme lengths</a>
          <a href="#graduates-ceremonies">Graduates &amp; ceremonies</a>
        </nav>
      </section>

      <section className="section section-alt programs-band" aria-labelledby="long-term-courses">
        <div className="container">
          <h2 id="long-term-courses" className="programs-heading-upper programs-heading-upper--ruled">
            Long term courses
          </h2>
          <p className="section-intro">
            Long term training includes <strong>NACTE-registered diploma programmes</strong> across the engineering fields below, and
            representative <strong>professional</strong> routes (for example IT and security systems) that typically run longer than
            short skills courses. Confirm the live catalogue for your intake year.
          </p>
          <h3 className="programs-subheading programs-subheading--inline">Diploma programmes</h3>
          <div className="card-grid programs-diploma-grid">
            {diplomaPrograms.map((d) => (
              <div key={d.title} className="card programs-track-card">
                <h4 className="programs-card-title">{d.title}</h4>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
          <h3 className="programs-subheading programs-subheading--spaced">Professional courses (long term)</h3>
          <p className="section-intro">
            Professional offerings sit between a full diploma and short term skills courses. Example:
          </p>
          <div className="programs-pro-feature">
            {professionalExamples.map((p) => (
              <div key={p.title}>
                <h4 className="programs-card-title">{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container programs-band" aria-labelledby="short-term-courses">
        <h2 id="short-term-courses" className="programs-heading-upper programs-heading-upper--ruled">
          Short term courses
        </h2>
        <p className="section-intro">
          Short term programmes focus on practical skills over weeks or a few months—ideal for quick workplace preparation or as a
          step toward further study. Published examples include installation trades and basic computing; names and intakes vary, so
          confirm what is open with the registrar.
        </p>
        <p className="section-intro">
          Typical examples published on the institute site include <strong>Domestic and Electrical Installation</strong> and{" "}
          <strong>Basic Computer Applications</strong>; other short offerings may be added by intake.
        </p>
      </section>

      <section className="section section-alt programs-band" aria-labelledby="programme-lengths">
        <div className="container">
          <h2 id="programme-lengths" className="programs-heading-upper programs-heading-upper--ruled">
            Programme lengths
          </h2>
          <p className="section-intro">Indicative durations from institute materials—always verify the current cycle with the registrar.</p>
          <h3 className="programs-subheading">Long term — indicative lengths</h3>
          <ul className="programs-duration-board" role="list">
            {longTermDurations.map((row) => (
              <li key={row.name} className="programs-duration-board__row">
                <span className="programs-duration-board__tier programs-duration-board__tier--long-term">Long term</span>
                <span className="programs-duration-board__name">{row.name}</span>
                <span className="programs-duration-board__time">{row.duration}</span>
              </li>
            ))}
          </ul>
          <h3 className="programs-subheading programs-subheading--spaced">Short term — indicative lengths</h3>
          <ul className="programs-duration-board" role="list">
            {shortTermDurations.map((row) => (
              <li key={row.name} className="programs-duration-board__row">
                <span className="programs-duration-board__tier programs-duration-board__tier--short-term">Short term</span>
                <span className="programs-duration-board__name">{row.name}</span>
                <span className="programs-duration-board__time">{row.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container programs-visual-section" aria-labelledby="graduates-ceremonies">
        <h2 id="graduates-ceremonies" className="programs-heading-upper programs-heading-upper--ruled">
          Graduates &amp; ceremonies
        </h2>
        <p className="section-intro">
          Photographs from graduation-style events at the institute—each caption describes the group and setting shown in the image.
        </p>
        <div className="programs-photo-showcase" role="list">
          {programsStripPhotos.map((ph, index) => (
            <figure
              key={ph.src}
              className={`programs-photo-showcase__cell programs-photo-showcase__cell--${index}`}
              role="listitem"
            >
              <div className="programs-photo-showcase__img-wrap">
                <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
              </div>
              <figcaption className="programs-photo-showcase__caption">{ph.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="programs-next-heading">
        <div className="container programs-next-panel">
          <div className="programs-next-panel__main">
            <h2 id="programs-next-heading" className="section-heading">
              Next steps
            </h2>
            <p className="section-intro" style={{ marginBottom: "1.25rem" }}>
              Submit the online-style application form, or contact the registrar for entry requirements, instalment options, and
              sponsorship paperwork.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/apply-here">
                Application form
              </Link>
              <Link className="btn btn-outline-dark" to="/contact#registrar-enquiry">
                Message the registrar
              </Link>
              <Link className="btn btn-outline-dark" to="/admissions">
                Admissions overview
              </Link>
            </div>
          </div>
          <aside className="programs-next-panel__aside" aria-label="Related links">
            <h3 className="programs-next-aside-title">Also helpful</h3>
            <ul className="programs-next-links">
              <li>
                <Link to="/">Homepage FAQ</Link>
                <span className="programs-next-links__hint">Fees and common questions</span>
              </li>
              <li>
                <Link to="/gallery">Photo gallery</Link>
                <span className="programs-next-links__hint">Campus and class imagery</span>
              </li>
              <li>
                <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
                  Sponsorship form 2026 (PDF)
                </a>
                <span className="programs-next-links__hint">Download from the public materials pack</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
