import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GALLERY_SECTION_LABELS,
  GALLERY_SECTION_ORDER,
  type GallerySectionId,
  filenameCaption,
  filterAndDedupeManifestImages,
  groupGalleryBySection,
} from "../data/galleryArchive";

type Manifest = { images: string[]; generated?: string };

type LightboxState = { src: string; alt: string } | null;

export function Gallery() {
  const [data, setData] = useState<Manifest | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/images/legacy/manifest.json")
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load gallery list (${r.status})`);
        return r.json();
      })
      .then((j: Manifest) => {
        if (!cancelled) setData(j);
      })
      .catch((e: Error) => {
        if (!cancelled) setErr(e.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const curated = useMemo(() => {
    if (!data?.images?.length) return [];
    return filterAndDedupeManifestImages(data.images);
  }, [data]);

  const bySection = useMemo(() => groupGalleryBySection(curated), [curated]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Photo gallery</h1>
          <p>Campus, labs, events, and student life—click a photo for a larger preview.</p>
        </div>
      </div>
      <div className="section container">
        {err && (
          <p className="section-intro" role="alert">
            {err}
          </p>
        )}
        {!data && !err && <p className="section-intro">Loading gallery…</p>}
        {data && (
          <>
            <p className="section-intro" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
              {curated.length} photos
            </p>

            {GALLERY_SECTION_ORDER.map((sectionId: GallerySectionId) => {
              const items = bySection.get(sectionId) ?? [];
              if (!items.length) return null;
              const meta = GALLERY_SECTION_LABELS[sectionId];
              return (
                <section key={sectionId} className="gallery-album" aria-labelledby={`gallery-${sectionId}-title`}>
                  <header className="gallery-album__head">
                    <h2 id={`gallery-${sectionId}-title`} className="gallery-album__title">
                      {meta.title}
                    </h2>
                    <p className="gallery-album__blurb">{meta.blurb}</p>
                  </header>
                  <div className="gallery-archive" role="list">
                    {items.map((src) => {
                      const name = src.split("/").pop() ?? "photo";
                      const label = decodeURIComponent(name).replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
                      const cap = filenameCaption(src);
                      return (
                        <figure key={src} className="gallery-archive__cell" role="listitem">
                          <button
                            type="button"
                            className="gallery-archive__thumb"
                            onClick={() => setLightbox({ src, alt: label })}
                            aria-haspopup="dialog"
                            aria-label={`Open preview: ${label}`}
                          >
                            <img src={src} alt="" loading="lazy" decoding="async" width={400} height={300} />
                          </button>
                          <figcaption className="gallery-archive__caption">{cap}</figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </>
        )}
      </div>

      {lightbox && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button type="button" className="gallery-lightbox__backdrop" onClick={closeLightbox} aria-label="Close preview" />
          <div className="gallery-lightbox__panel">
            <button type="button" className="gallery-lightbox__close" onClick={closeLightbox}>
              Close
            </button>
            <figure className="gallery-lightbox__figure" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.src} alt={lightbox.alt} className="gallery-lightbox__img" />
            </figure>
          </div>
        </div>
      )}
    </>
  );
}
