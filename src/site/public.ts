import { officialSite } from "./brand";

/**
 * Canonical site URL for SEO and JSON-LD. Set `VITE_PUBLIC_SITE_URL` in `.env.production` to your public origin (no trailing slash).
 */
const raw = (import.meta.env.VITE_PUBLIC_SITE_URL ?? "").trim().replace(/\/+$/, "");
export const canonicalSiteUrl = (raw || officialSite.replace(/\/+$/, "")) as string;
