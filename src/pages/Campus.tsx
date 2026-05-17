import { Link } from "react-router-dom";
import { CampusGallery } from "../components/CampusGallery";
import { MapEmbed } from "../components/MapEmbed";
import { PagePhotoHero } from "../components/PagePhotoHero";
import { legacyImagesBase } from "../site/brand";
import { campusGalleryPhotos } from "../data/sitePhotos";
import { siteContact } from "../site/contact";

const heroImage = `${legacyImagesBase}/2025/05/new4-1024x683.jpg`;

export function Campus() {
  return (
    <>
      <PagePhotoHero imageSrc={heroImage} imageAlt="KIITEC main gate and signboard" title="Campus &amp; location">
        <p className="page-hero-lede page-hero-lede--light">Suye, Arusha — labs, hostels, and student life at the foot of Mount Meru.</p>
      </PagePhotoHero>

      <section className="section container" aria-labelledby="campus-gallery-heading">
        <h2 id="campus-gallery-heading" className="section-heading section-heading--ruled">
          Campus gallery
        </h2>
        <CampusGallery />
        <p style={{ marginTop: "1rem" }}>
          <Link className="btn btn-outline-dark" to="/gallery">
            Full photo archive
          </Link>
        </p>
      </section>

      <section className="section section-alt container">
        <div className="visual-split">
          <div className="visual-split__media visual-split__media--tall">
            <img
              src={`${legacyImagesBase}/2025/05/DB-Kiitec-28-1024x684.jpg`}
              alt="Main entrance to the Centre of Excellence building"
              width={1024}
              height={683}
              loading="lazy"
            />
          </div>
          <div className="visual-split__text">
            <h2 className="section-heading">Plan a visit</h2>
            <p>
              About 6 km from Arusha city centre—connected by dala-dala, bodaboda, and taxi. Confirm visiting hours before you
              travel.
            </p>
            <MapEmbed title="Don Bosco KIITEC, Arusha" />
            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <a className="btn btn-primary" href={siteContact.mapUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
              <Link className="btn btn-outline-dark" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
