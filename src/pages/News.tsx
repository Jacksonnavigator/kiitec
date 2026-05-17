import { Link } from "react-router-dom";
import { sponsorshipPdfUrl } from "../site/brand";

export function News() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>News</h1>
          <p>Partnerships and downloadable forms.</p>
        </div>
      </div>
      <div className="section container">
        <ul className="news-list">
          <li className="news-item" id="skills-to-fly">
            <span className="news-item-heading">Skills to Fly (Mastercard Foundation)</span>
            <span className="news-meta">
              Scholarships for girls in diploma engineering. Form Four/Six: four passes (min. four D grades), two science subjects.{" "}
              <Link to="/apply-here">Apply</Link>
            </span>
          </li>
          <li className="news-item">
            <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
              Sponsorship application form 2026 (PDF)
            </a>
          </li>
          <li className="news-item">
            <span className="news-item-heading">Programmes</span>
            <span className="news-meta">
              <Link to="/programs">View all programmes</Link> — confirm fees and intakes with the registrar.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
