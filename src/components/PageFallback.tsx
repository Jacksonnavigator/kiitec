export function PageFallback() {
  return (
    <div className="page-fallback" role="status" aria-live="polite" aria-busy="true">
      <span className="page-fallback-spinner" aria-hidden />
      <span className="page-fallback-label">Loading…</span>
      <span className="sr-only">Page content is loading.</span>
    </div>
  );
}
