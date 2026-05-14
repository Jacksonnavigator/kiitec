import { sponsorshipPdfUrl } from "../site/brand";

export const homeNewsItems = [
  {
    date: "March 2026",
    title: "Sponsorship application form published",
    href: sponsorshipPdfUrl,
    external: true,
    meta: "Download the 2026 sponsorship application (PDF).",
  },
  {
    date: "2025–2026",
    title: "“Skills to Fly” with the Mastercard Foundation",
    href: "/news#skills-to-fly",
    external: false,
    meta: "Scholarship-focused diploma pathways—including AI/ML, data science, robotics & drones, and electrical combinations.",
  },
  {
    date: "Year-round",
    title: "Diploma, professional, and short courses",
    href: "/programs",
    external: false,
    meta: "Programme types and published durations—confirm intakes with the registrar.",
  },
] as const;
