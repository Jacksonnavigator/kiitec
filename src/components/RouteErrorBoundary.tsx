import { isRouteErrorResponse, useRouteError } from "react-router";
import { Link } from "react-router-dom";

export function RouteErrorBoundary() {
  const error = useRouteError();
  let title = "Something went wrong";
  let detail = "Try again in a moment, or return to the home page.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : "Unable to load this page";
    detail = error.statusText || detail;
  } else if (error instanceof Error && import.meta.env.DEV) {
    detail = error.message;
  }

  return (
    <div className="route-error">
      <div className="container not-found-inner">
        <p className="hero-kicker not-found-kicker" style={{ color: "var(--color-crimson)" }}>
          Error
        </p>
        <h1>{title}</h1>
        <p className="section-intro not-found-text">{detail}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Reload page
          </button>
          <Link className="btn btn-outline-dark" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
