import { Link } from "react-router-dom";
import { sponsorshipPdfUrl } from "../site/brand";

export function News() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>News &amp; initiatives</h1>
          <p>Partnerships, downloadable forms, and programme news from Don Bosco KIITEC.</p>
        </div>
      </div>
      <div className="section container">
        <ul className="news-list">
          <li className="news-item" id="skills-to-fly">
            <span className="news-item-heading">Mastercard Foundation &quot;Skills to Fly&quot; at KIITEC</span>
            <span className="news-meta">
              Up to 200 girls supported in diploma engineering—including electrical &amp; computer; electronics &amp;
              telecommunications; electrical &amp; industrial automation; electrical &amp; renewable energy; artificial intelligence
              &amp; machine learning; data science &amp; analytics; and robotics &amp; drones—with emphasis on access and gender equity
              in STEM. Poster criteria: Form Four or Six, four passes (minimum four D grades), two science subjects among passes;
              priority for motivated applicants from vulnerable environments.
            </span>
          </li>
          <li className="news-item">
            <span className="news-item-heading">From Fr. Sebastian, Director Don Bosco KIITEC</span>
            <span className="news-meta">
              &quot;Mastercard Foundation&apos;s support is a beacon of hope for many talented young women who would otherwise be denied access to technical education… Through this partnership, we are nurturing the next generation of female engineers who will drive innovation, uplift communities, and shape Africa&apos;s technological future.&quot;
            </span>
          </li>
          <li className="news-item">
            <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
              Sponsorship application form 2026
            </a>
            <span className="news-meta">Official PDF for sponsors and applicants.</span>
          </li>
          <li className="news-item">
            <span className="news-item-heading">Diploma, professional, and short-course ladders</span>
            <span className="news-meta">
              Structured ladders and timings are maintained on <Link to="/programs">Programs</Link>; cross-check fees and intake windows with the registrar when you plan to apply.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
