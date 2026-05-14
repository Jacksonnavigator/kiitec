import { EnquiryForm } from "../components/EnquiryForm";
import { MapEmbed } from "../components/MapEmbed";
import { Link } from "react-router-dom";
import { siteContact } from "../site/contact";

export function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Contact Don Bosco KIITEC</h1>
          <p>Reach the institute by phone, email, or post—or send a message using the form.</p>
        </div>
      </div>

      <div className="section container contact-page-main">
        <div className="contact-page-columns">
          <div className="contact-details-panel">
            <h2 className="contact-details-panel__title">Contact us</h2>
            <p className="contact-details-panel__intro">You can reach us through the following channels:</p>
            <ul className="contact-details-panel__list">
              <li>
                <span className="contact-details-panel__label">Landline</span>{" "}
                <a href={`tel:${siteContact.landlineTel}`}>{siteContact.landlineDisplay}</a>
              </li>
              <li>
                <span className="contact-details-panel__label">Registrar mobile</span>{" "}
                <a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a>
              </li>
              <li>
                <span className="contact-details-panel__label">Mobile</span>{" "}
                <a href={`tel:${siteContact.mobile2Tel}`}>{siteContact.mobile2Display}</a>
              </li>
              <li>
                <span className="contact-details-panel__label">Mobile</span>{" "}
                <a href={`tel:${siteContact.mobile3Tel}`}>{siteContact.mobile3Display}</a>
              </li>
              <li>
                <span className="contact-details-panel__label">Email</span>{" "}
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </li>
              <li>
                <span className="contact-details-panel__label">Website</span>{" "}
                <a href="https://www.kiitec.ac.tz/" target="_blank" rel="noreferrer">
                  {siteContact.websiteDisplay}
                </a>
              </li>
              <li>
                <span className="contact-details-panel__label">Instagram</span>{" "}
                <a href={siteContact.instagramUrl} target="_blank" rel="noreferrer">
                  {siteContact.instagramHandle}
                </a>
              </li>
              <li>
                <span className="contact-details-panel__label">Physical address</span> {siteContact.poBox}
              </li>
            </ul>
            <p className="contact-details-panel__foot">
              <Link to="/about">About KIITEC</Link>
              {" · "}
              <a href={siteContact.mapUrl} target="_blank" rel="noreferrer">
                Open campus location in Google Maps
              </a>
            </p>
          </div>
          <EnquiryForm />
        </div>
      </div>

      <section className="section section-alt" aria-labelledby="contact-map-embed">
        <div className="container">
          <h2 id="contact-map-embed" className="section-heading">
            Campus map
          </h2>
          <p className="section-intro">
            The embedded map uses the environment variable <strong>VITE_MAP_EMBED_URL</strong> in production when you set it to the
            full iframe address from Google Maps (Share → Embed a map). If that variable is empty, a default campus embed is used. Use
            the Google Maps link in the contact panel for turn-by-turn directions in the app.
          </p>
          <MapEmbed title="Kilimanjaro International Institute For Telecommunications Electronics And Computer" />
        </div>
      </section>
    </>
  );
}
