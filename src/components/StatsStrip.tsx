import { logoUrl } from "../site/brand";

const stats = [
  { value: "2004", label: "Founded — French engineers & global partners", accent: "gold" as const },
  { value: "REG/EOS/027", label: "NACTVET-registered technical institute", accent: "red" as const },
  { value: "200", label: 'Young women in "Skills to Fly" engineering cohort', accent: "green" as const },
  { value: "6 km", label: "From Arusha city centre (Suye campus)", accent: "sky" as const },
] as const;

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Institute at a glance">
      <div
        className="stats-strip__pattern"
        aria-hidden="true"
        style={{ backgroundImage: `url(${logoUrl})` }}
      />
      <div className="container stats-strip-inner">
        {stats.map((s) => (
          <article key={s.value} className={`stats-strip-item stats-strip-item--${s.accent}`}>
            <div className="stats-strip-card">
              <p className="stats-strip-value">{s.value}</p>
              <p className="stats-strip-label">{s.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
