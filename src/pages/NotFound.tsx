import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="page-hero">
      <div className="container not-found-inner">
        <p className="hero-kicker not-found-kicker">404</p>
        <h1>Page not found</h1>
        <p className="section-intro not-found-text">
          That page does not exist. Use the menu or the links below to continue.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn-outline-dark" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
