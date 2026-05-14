import { Link } from "react-router-dom";
import { CampusGallery } from "../components/CampusGallery";
import { MapEmbed } from "../components/MapEmbed";
import { siteContact } from "../site/contact";

export function Campus() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Campus, facilities &amp; location</h1>
          <p>
            KIITEC describes a purpose-built learning environment in Arusha—quiet, secure, and wired for technical training—with practical labs, workshops, and student life supported by the surrounding community.
          </p>
        </div>
      </div>

      <section className="section container" aria-labelledby="campus-photos-heading">
        <h2 id="campus-photos-heading" className="section-heading">
          Campus in pictures
        </h2>
        <p className="section-intro">Campus photography from Don Bosco KIITEC.</p>
        <p style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
          <Link className="btn btn-outline-dark" to="/gallery">
            Open full photo archive
          </Link>
        </p>
        <CampusGallery />
      </section>

      <section className="section section-alt" aria-labelledby="map-heading">
        <div className="container">
          <h2 id="map-heading" className="section-heading">
            Map
          </h2>
          <p className="section-intro">
            Live search-based map below; scroll to <strong>Plan a visit</strong> for the navigation pin and travel tips.
          </p>
          <MapEmbed title="Kilimanjaro International Institute For Telecommunications Electronics And Computer" />
        </div>
      </section>

      <div className="section container split">
        <div className="prose">
          <h2 className="section-heading" style={{ fontSize: "1.35rem" }}>
            Our location
          </h2>
          <p>
            Don Bosco KIITEC is located in Suye, a peaceful and fast-growing area of Arusha, just 6 km from the city center. Nestled at the foot of Mount Meru near Masai Camp, the campus offers a calm, secure environment ideal for technical learning.
          </p>
          <p>
            The area is well-connected by public transport, with affordable options like dala-dalas, bodabodas, and taxis. Students enjoy nearby hostels, shops, eateries, and healthcare services—all in a friendly, supportive community. KIITEC&apos;s serene setting, cool climate, and accessibility make it an ideal place for academic and personal growth.
          </p>
        </div>
        <div className="contact-block">
          <h2 className="section-heading" style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
            Plan a visit
          </h2>
          <p style={{ margin: "0 0 1rem", color: "var(--color-ink-muted)", fontSize: "0.95rem" }}>
            Confirm visiting hours and appointments before you travel.
          </p>
          <div className="stack-buttons">
            <a className="btn btn-primary" href={siteContact.mapUrl} target="_blank" rel="noreferrer">
              Open Google Maps pin
            </a>
            <Link className="btn btn-outline-dark" to="/contact">
              All contact options
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
