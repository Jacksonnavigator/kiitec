import { Link } from "react-router-dom";

export interface VisualProgramItem {
  title: string;
  meta?: string;
  imageSrc: string;
  imageAlt: string;
}

interface VisualProgramGridProps {
  items: readonly VisualProgramItem[];
  applyLink?: boolean;
}

export function VisualProgramGrid({ items, applyLink = true }: VisualProgramGridProps) {
  return (
    <>
      <div className="visual-program-grid" role="list">
        {items.map((item) => (
          <article key={item.title} className="visual-program-card" role="listitem">
            <div className="visual-program-card__media">
              <img src={item.imageSrc} alt={item.imageAlt} width={640} height={427} loading="lazy" decoding="async" />
            </div>
            <div className="visual-program-card__body">
              <h3 className="visual-program-card__title">{item.title}</h3>
              {item.meta ? <p className="visual-program-card__meta">{item.meta}</p> : null}
            </div>
          </article>
        ))}
      </div>
      {applyLink ? (
        <p className="visual-program-grid__cta">
          <Link className="btn btn-primary" to="/apply-here#application-form">
            Apply for a programme
          </Link>
        </p>
      ) : null}
    </>
  );
}
