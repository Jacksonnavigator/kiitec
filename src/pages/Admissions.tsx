import { Link } from "react-router-dom";
import { sponsorshipPdfUrl } from "../site/brand";

export function Admissions() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Admissions</h1>
          <p>
            Start from published requirements and fees, then confirm the exact intake you want with the registrar—especially if you need instalments or sponsorship paperwork.
          </p>
        </div>
      </div>
      <div className="section container prose">
        <p>
          Indicative programme lengths, example professional routes, and the duration board all live on the{" "}
          <Link to="/programs">Programs</Link> page so they stay in one authoritative place.
        </p>
        <p>
          The homepage FAQ answers common questions about fees and payment flexibility; use it alongside Programs, then validate anything time-sensitive with the registrar.
        </p>
        <p>
          For sponsorship, download the{" "}
          <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
            sponsorship application form 2026 (PDF)
          </a>
          .
        </p>
        <div className="hero-actions" style={{ marginTop: "1rem" }}>
          <Link className="btn btn-primary" to="/apply-here">
            Application form
          </Link>
          <Link className="btn btn-outline-dark" to="/contact#registrar-enquiry">
            Message the registrar
          </Link>
          <Link className="btn btn-outline-dark" to="/contact">
            All contact options
          </Link>
        </div>
      </div>
    </>
  );
}
