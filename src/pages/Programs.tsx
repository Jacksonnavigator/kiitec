import { Link } from "react-router-dom";
import { PagePhotoHero } from "../components/PagePhotoHero";
import { VisualProgramGrid } from "../components/VisualProgramGrid";
import { legacyImagesBase } from "../site/brand";
import { diplomaProgramVisuals, programsStripPhotos, shortCourseVisuals } from "../data/sitePhotos";

const heroImage = `${legacyImagesBase}/2023/06/labs.jpeg`;

export function Programs() {
  return (
    <>
      <PagePhotoHero imageSrc={heroImage} imageAlt="KIITEC training laboratories" eyebrow="Educational offerings" title="Programs">
        <p className="page-hero-lede page-hero-lede--light">
          NACTE diplomas, professional pathways, and short skills courses—confirm fees and intakes with the registrar.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
          <Link className="btn btn-primary" to="/apply-here#application-form">
            Apply
          </Link>
          <Link className="btn btn-outline-light" to="/gallery">
            Campus photos
          </Link>
        </div>
      </PagePhotoHero>

      <section className="section container" aria-labelledby="diplomas-heading">
        <h2 id="diplomas-heading" className="section-heading section-heading--ruled">
          Diploma programmes
        </h2>
        <VisualProgramGrid items={diplomaProgramVisuals} />
      </section>

      <section className="section section-alt" aria-labelledby="other-heading">
        <div className="container">
          <h2 id="other-heading" className="section-heading section-heading--ruled">
            Professional &amp; short courses
          </h2>
          <VisualProgramGrid items={shortCourseVisuals} applyLink={false} />
          <p className="section-intro" style={{ marginTop: "0.5rem" }}>
            <Link to="/contact#registrar-enquiry">Contact the registrar</Link> for the current catalogue.
          </p>
        </div>
      </section>

      <section className="section container" aria-labelledby="graduates-heading">
        <h2 id="graduates-heading" className="section-heading section-heading--ruled">
          Graduates &amp; ceremonies
        </h2>
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
    </>
  );
}
