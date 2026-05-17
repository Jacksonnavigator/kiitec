import type { ReactNode } from "react";

interface PagePhotoHeroProps {
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}

export function PagePhotoHero({ imageSrc, imageAlt = "", eyebrow, title, children }: PagePhotoHeroProps) {
  return (
    <header
      className="page-hero page-hero--image"
      style={{ backgroundImage: `url(${imageSrc})` }}
      aria-label={imageAlt || undefined}
    >
      <div className="page-hero--image__overlay" aria-hidden="true" />
      <div className="container page-hero--image__content">
        {eyebrow ? <p className="page-hero-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
