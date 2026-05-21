import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoUrl } from "../site/brand";

const STUDENT_SYSTEM_URL = "https://sis.kiitec.ac.tz/login";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/campus", label: "Campus", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <div className="container container--header-nav nav-row">
          <Link to="/" className="brand" onClick={closeMenu}>
            <img src={logoUrl} alt="Don Bosco KIITEC" className="brand-logo" width={180} height={88} />
            <span className="brand-text">
              <span className="brand-name" lang="en">
                DON BOSCO KIITEC
              </span>
              <span className="brand-reg">NACTVET REG/EOS/027</span>
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
            {nav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
            <a
              href={STUDENT_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="nav-link nav-link--external"
              onClick={closeMenu}
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
