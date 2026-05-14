import { homeFaq } from "../data/faq";

export function FaqAccordion({ id = "faq-heading" }: { id?: string }) {
  return (
    <div className="faq-wrap">
      <h2 id={id} className="section-heading">
        FAQ — ask us anything
      </h2>
      <p className="section-intro">Straight answers to common questions—use them as a starting point, then confirm anything time-sensitive with the registrar.</p>
      <div className="faq-list">
        {homeFaq.map((item, index) => (
          <details key={item.title} className="faq-item" name="kiitec-faq" open={index === 0}>
            <summary className="faq-summary">{item.title}</summary>
            <div className="faq-body">
              <p>{item.body}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
