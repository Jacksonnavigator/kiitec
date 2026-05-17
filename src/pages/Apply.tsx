import { Link } from "react-router-dom";
import { ApplicationForm } from "../components/ApplicationForm";
import { PagePhotoHero } from "../components/PagePhotoHero";
import { admissionApplicationSteps, admissionCriteriaSummary } from "../data/admissionInfo";
import { legacyImagesBase, sponsorshipPdfUrl } from "../site/brand";

const heroImage = `${legacyImagesBase}/2024/11/DBKiitec-322-scaled.jpg`;

export function Apply() {
  return (
    <>
      <PagePhotoHero imageSrc={heroImage} imageAlt="Graduation at KIITEC" title="Apply to KIITEC">
        <p className="page-hero-lede page-hero-lede--light">Check requirements below, then send your application by email.</p>
      </PagePhotoHero>

      <div className="section container apply-page">
        <div className="apply-page__layout">
          <aside id="admissions" className="apply-guide apply-guide--visual" aria-labelledby="apply-criteria-heading">
            <figure className="apply-guide__photo">
              <img
                src={`${legacyImagesBase}/2025/05/Loc1-768x576.jpg`}
                alt="Students near the KIITEC campus sign"
                width={768}
                height={576}
                loading="lazy"
              />
            </figure>
            <h2 id="apply-criteria-heading" className="apply-guide__title">
              Entry requirements
            </h2>
            <ul className="apply-criteria-block__list">
              {admissionCriteriaSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="apply-criteria-block__title">Steps</h3>
            <ol className="apply-steps">
              {admissionApplicationSteps.map((step, i) => (
                <li key={step}>
                  <span className="apply-steps__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="apply-guide__foot">
              <Link to="/programs">Programs</Link>
              {" · "}
              <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
                Sponsorship PDF
              </a>
              {" · "}
              <Link to="/contact">Contact</Link>
            </p>
          </aside>

          <div id="application-form" className="apply-form-wrap">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </>
  );
}
