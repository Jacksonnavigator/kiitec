import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoUrl, sponsorshipPdfUrl } from "../site/brand";
import { siteContact } from "../site/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/apply-here", label: "Apply here" },
  { to: "/campus", label: "Campus" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container container--header-nav utility-bar__inner">
          <p className="utility-bar__meta">
            <span className="utility-bar__meta-loc">Arusha, Tanzania</span>
            <span className="utility-bar__meta-sep" aria-hidden="true">
              ·
            </span>
            <span className="utility-bar__meta-reg">NACTE REG/EOS/027</span>
          </p>
          <div className="utility-actions">
            <ul className="utility-contact" aria-label="Quick contact">
              <li>
                <a className="utility-pill" href={`tel:${siteContact.phoneE164}`}>
                  <span className="utility-pill__text">{siteContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a className="utility-pill" href={`mailto:${siteContact.email}`}>
                  <span className="utility-pill__text">{siteContact.email}</span>
                </a>
              </li>
            </ul>
            <a className="utility-sponsor" href={sponsorshipPdfUrl} target="_blank" rel="noreferrer">
              Sponsorship form 2026
            </a>
          </div>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container container--header-nav nav-row">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={logoUrl} alt="Don Bosco KIITEC" className="brand-logo" width={180} height={88} />
            <span className="brand-name" lang="en">
              DON BOSCO KIITEC
            </span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
          </button>
          <nav id="primary-nav" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
