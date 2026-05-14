import { Link } from "react-router-dom";
import { sponsorshipPdfUrl } from "../site/brand";
import { siteContact } from "../site/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">Don Bosco KIITEC</p>
          <p className="footer-text">
            NACTE-registered technical institute (REG/EOS/027) in Moshono, Arusha—engineering and technology training since 2004.
          </p>
          <p className="footer-text" style={{ marginTop: "0.75rem" }}>
            {siteContact.poBox}
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li>
              <Link to="/about">About KIITEC</Link>
            </li>
            <li>
              <Link to="/programs">Diploma &amp; courses</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/apply-here">Application form (apply here)</Link>
            </li>
            <li>
              <Link to="/campus">Campus &amp; location</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Connect</p>
          <ul className="footer-links">
            <li>
              <a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a> (registrar)
            </li>
            <li>
              <a href={`tel:${siteContact.landlineTel}`}>{siteContact.landlineDisplay}</a>
            </li>
            <li>
              <a href={`tel:${siteContact.mobile2Tel}`}>{siteContact.mobile2Display}</a>
            </li>
            <li>
              <a href={`tel:${siteContact.mobile3Tel}`}>{siteContact.mobile3Display}</a>
            </li>
            <li>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </li>
            <li>
              <a href={siteContact.instagramUrl} target="_blank" rel="noreferrer">
                Instagram {siteContact.instagramHandle}
              </a>
            </li>
            <li>
              <a href={siteContact.mapUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </li>
            <li>
              <a href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
                Sponsorship form 2026
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-left">
            <p>© {new Date().getFullYear()} Don Bosco KIITEC. All rights reserved.</p>
            <button
              type="button"
              className="footer-back-top"
              onClick={() => {
                const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
              }}
            >
              Back to top
            </button>
          </div>
          <p className="footer-note">
            Programme details, fees, and intakes can change. Confirm time-sensitive items with the registrar.
          </p>
        </div>
      </div>
    </footer>
  );
}
