export interface FilmStripPhoto {
  src: string;
  alt: string;
  title: string;
}

interface PhotoFilmStripProps {
  photos: readonly FilmStripPhoto[];
  ariaLabel?: string;
}

export function PhotoFilmStrip({ photos, ariaLabel = "Campus photography" }: PhotoFilmStripProps) {
  return (
    <section className="photo-film-strip" aria-label={ariaLabel}>
      <div className="photo-film-strip__track" role="list">
        {photos.map((ph) => (
          <figure key={ph.src} className="photo-film-strip__cell" role="listitem">
            <div className="photo-film-strip__img-wrap">
              <img src={ph.src} alt={ph.alt} width={480} height={320} loading="lazy" decoding="async" />
            </div>
            <figcaption className="photo-film-strip__caption">{ph.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
