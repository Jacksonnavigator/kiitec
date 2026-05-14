const stats = [
  { value: "2004", label: "Founded — French engineers & global partners" },
  { value: "REG/EOS/027", label: "NACTE-registered technical institute" },
  { value: "200", label: 'Young women in "Skills to Fly" engineering cohort' },
  { value: "6 km", label: "From Arusha city centre (Suye campus)" },
] as const;

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Institute at a glance">
      <div className="container stats-strip-inner">
        {stats.map((s) => (
          <div key={s.value} className="stats-strip-item">
            <div className="stats-strip-value">{s.value}</div>
            <div className="stats-strip-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
