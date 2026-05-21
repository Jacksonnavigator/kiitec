import { Link } from "react-router-dom";
import { siteContact } from "../site/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">Don Bosco KIITEC</p>
          <p className="footer-text">
            NACTVET-registered technical institute in Arusha, Tanzania.
          </p>
          <p className="footer-text" style={{ marginTop: "0.75rem" }}>
            {siteContact.poBox}
          </p>
        </div>
        <div>
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/apply-here">Apply</Link>
            </li>
            <li>
              <Link to="/campus">Campus</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Contact Us</p>
          <ul className="footer-links">
            <li>
              <a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </li>
            <li>
              <a href={siteContact.mapUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: "1px solid var(--color-line)", marginTop: "2rem", paddingTop: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>
          © 2026 Don Bosco KIITEC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
