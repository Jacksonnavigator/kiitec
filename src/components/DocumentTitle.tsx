import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { tagline } from "../site/brand";

const base = "Don Bosco KIITEC";

const titles: Record<string, string> = {
  "/": `${base} | ${tagline.replace(/\.$/, "")}`,
  "/about": `About | ${base}`,
  "/programs": `Programs | ${base}`,
  "/admissions": `Apply | ${base}`,
  "/apply-here": `Apply | ${base}`,
  "/campus": `Campus & location | ${base}`,
  "/gallery": `Photo gallery | ${base}`,
  "/news": `News | ${base}`,
  "/contact": `Contact | ${base}`,
};

const descriptions: Record<string, string> = {
  "/":
    "Don Bosco KIITEC — NACTVET-registered technical institute (REG/EOS/027) in Arusha. Diploma and short courses in engineering, electronics, computing, and automation.",
  "/about": "Mission, facilities, and background of Don Bosco KIITEC (KIITEC), a Salesian technical institute in Arusha, Tanzania.",
  "/programs": "Diploma pathways and professional or short courses at KIITEC — computer engineering, renewable energy, electronics, telecommunications, and industrial automation.",
  "/admissions": "Entry criteria, sponsorship, and online application for Don Bosco KIITEC, Arusha.",
  "/apply-here":
    "Admission criteria, application steps, sponsorship PDF, and the application form for Don Bosco KIITEC diploma and short courses.",
  "/campus": "Campus location in Suye, Arusha, facilities, photos, and map for Don Bosco KIITEC.",
  "/gallery": "Browse the full Don Bosco KIITEC photo archive—campus, classes, events, and programme imagery.",
  "/news": "News and initiatives at Don Bosco KIITEC, including partnerships and student opportunities.",
  "/contact": "Phone, email, postal address, campus map, and enquiry form for Don Bosco KIITEC, Arusha.",
};

const defaultDescription = descriptions["/"]!;

export function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    document.title = titles[key] ?? `Page not found | ${base}`;
    const meta = document.getElementById("site-meta-description") as HTMLMetaElement | null;
    if (meta) {
      meta.content =
        descriptions[key] ??
        (titles[key] ? defaultDescription : `Page not found — ${base}, NACTVET-registered technical institute in Arusha, Tanzania.`);
    }
  }, [pathname]);

  return null;
}
