import { Link } from "react-router-dom";
import { PagePhotoHero } from "../components/PagePhotoHero";
import { legacyImagesBase } from "../site/brand";
import { aboutGalleryPhotos } from "../data/sitePhotos";

const heroImage = `${legacyImagesBase}/2023/06/Kiitec-welcome.jpeg`;

export function About() {
  return (
    <>
      <PagePhotoHero imageSrc={heroImage} imageAlt="KIITEC laboratory entrance" title="About Don Bosco KIITEC">
        <p className="page-hero-lede page-hero-lede--light">
          NACTVET-registered technical institute (REG/EOS/027) in Arusha — training technicians since 2004.
        </p>
      </PagePhotoHero>

      <section className="section container" aria-label="Institute photography">
        <div className="photo-mosaic photo-mosaic--about" role="list">
          {aboutGalleryPhotos.map((ph) => (
            <figure key={ph.src} className="photo-mosaic__cell" role="listitem">
              <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
              <figcaption className="photo-mosaic__caption">{ph.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container visual-split-stack">
          <article className="visual-split">
            <div className="visual-split__media">
              <img
                src={aboutGalleryPhotos[0].src}
                alt={aboutGalleryPhotos[0].alt}
                width={1024}
                height={683}
                loading="lazy"
              />
            </div>
            <div className="visual-split__text">
              <h2 className="section-heading">Our story</h2>
              <p>
                Founded in 2004 by French engineers, KIITEC works with FTE (Switzerland) and ADEI (France) to graduate technicians
                across Tanzania. The campus sits in <strong>Suye</strong>, near Mount Meru.
              </p>
            </div>
          </article>
          <article className="visual-split visual-split--reverse">
            <div className="visual-split__media">
              <img
                src={aboutGalleryPhotos[1].src}
                alt={aboutGalleryPhotos[1].alt}
                width={1024}
                height={683}
                loading="lazy"
              />
            </div>
            <div className="visual-split__text">
              <h2 className="section-heading">Mission &amp; facilities</h2>
              <p>
                Hands-on training in ICT, electrical, renewable energy, and industrial automation—with modern labs, hostels, and
                workshops shaped by the Salesian tradition.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/programs">
                  View programs
                </Link>
                <Link className="btn btn-outline-dark" to="/campus">
                  Campus tour
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
