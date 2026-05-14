/**
 * Canonical origin fallback (SEO, JSON-LD). Set `VITE_PUBLIC_SITE_URL` in production.
 * Institute images and PDFs are mirrored under `public/` — refresh with `npm run download:media`.
 */
export const defaultPublicOrigin = "https://kiitec.ac.tz" as const;

/** Trailing slash — canonical URL default in `public.ts`. */
export const officialSite = `${defaultPublicOrigin}/` as const;

/** Locally served mirror of former `wp-content/uploads/…` (see `scripts/download-wp-media.mjs`). */
export const legacyImagesBase = "/images/legacy" as const;

/** PDFs and other non-image downloads. */
export const publicDocumentsBase = "/documents" as const;

export const tagline = "Engineering Excellence Unleashed." as const;

export const logoUrl = `${legacyImagesBase}/2023/06/cropped-KIITEC-LOGO-300x146.png` as const;

export const sponsorshipPdfUrl = `${publicDocumentsBase}/2026/03/SPONSORSHIP-APPLICATION-FORM-2026.pdf` as const;

export const mastercardLogoUrl = `${legacyImagesBase}/2025/09/MASTERCARD.png` as const;

/** Official partnership poster (Skills to Fly) — mirrored under `public/images/promo/`. */
export const skillsToFlyPosterUrl = "/images/promo/skills-to-fly-poster.png" as const;

/** Home “Our facilities” only — kept off other page mosaics to avoid repeating the same photo everywhere. */
export const facilitiesHighlightUrl = `${legacyImagesBase}/2023/06/labs.jpeg` as const;

/**
 * Google Maps iframe `src` for embedded campus map.
 * In production, set `VITE_MAP_EMBED_URL` in Render to the full `src` from Google Maps → Share → Embed a map (most reliable).
 * Default: HTTPS embed pinned near the Suye / Moshono campus (Arusha).
 */
const DEFAULT_MAP_EMBED =
  "https://www.google.com/maps?q=-3.3678,36.6895&z=16&hl=en&gl=tz&output=embed";

export function getMapEmbedUrl(): string {
  const fromEnv = import.meta.env.VITE_MAP_EMBED_URL;
  if (typeof fromEnv === "string" && fromEnv.trim()) return fromEnv.trim();
  return DEFAULT_MAP_EMBED;
}

export const heroBackgroundUrl = `${legacyImagesBase}/2025/05/IMG_6384-1536x1024.jpg` as const;
