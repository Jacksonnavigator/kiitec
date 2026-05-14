import { Link } from "react-router-dom";
import { aboutGalleryPhotos } from "../data/sitePhotos";
import { siteContact } from "../site/contact";

export function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>About Don Bosco KIITEC</h1>
          <p>
            Kilimanjaro International Institute of Telecommunications, Electronics &amp; Computers (KIITEC) is a Don Bosco technical institute in Arusha—registered with NACTE (REG/EOS/027) and shaped by international cooperation.
          </p>
        </div>
      </div>
      <section className="section section-alt" aria-label="Institute photography">
        <div className="container">
          <div className="photo-mosaic photo-mosaic--about" role="list">
            {aboutGalleryPhotos.map((ph) => (
              <figure key={ph.src} className="photo-mosaic__cell" role="listitem">
                <img src={ph.src} alt={ph.alt} width={1024} height={683} loading="lazy" decoding="async" />
                <figcaption className="photo-mosaic__caption">{ph.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div className="section container prose">
        <p>
          <strong>
            Founded in 2004 by French engineers, the institute now graduates technicians across Tanzania with long-running cooperation from FTE (Switzerland) and ADEI (France).
          </strong>{" "}
          Day-to-day learning happens in <strong>Suye</strong>—a short ride from the city centre, near Masai Camp, with Mount Meru as a steady backdrop.
        </p>
        <h2 className="section-heading" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
          Our mission
        </h2>
        <p>
          Our mission is to provide quality hands-on technical training for students in ICTs, Electrical, Renewable Energies, Industrial Automation, and related disciplines. The institute conducts research and consultancy in these fields, and promotes the development and use of modern technology that meets national, regional, and international standards through skills-based, practical-oriented training.
        </p>
        <h2 className="section-heading" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
          Our facilities
        </h2>
        <p>
          The institute offers hostel accommodation alongside modern classrooms, laboratories, and workshops equipped with current technologies. These facilities support hands-on learning and practical experience aligned with workplace expectations.
        </p>
        <p>
          The Mastercard Foundation &quot;Skills to Fly&quot; partnership promotes diploma engineering access for young women across
          the pathways now listed on the public poster—including electrical &amp; computer engineering; electronics &amp;
          telecommunications; electrical &amp; industrial automation; electrical &amp; renewable energy; artificial intelligence
          &amp; machine learning; data science &amp; analytics; and robotics &amp; drones. Read more on the{" "}
          <Link to="/news#skills-to-fly">News</Link> page.
        </p>
        <p>
          The Salesian tradition emphasises holistic formation: professional competence, ethical character, and care for young people—especially those who need a supportive environment to thrive.
        </p>
        <h2 className="section-heading" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
          Contact
        </h2>
        <ul>
          <li>
            Landline:{" "}
            <a href={`tel:${siteContact.landlineTel}`}>{siteContact.landlineDisplay}</a>
          </li>
          <li>
            Registrar mobile:{" "}
            <a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a>
          </li>
          <li>
            Mobile:{" "}
            <a href={`tel:${siteContact.mobile2Tel}`}>{siteContact.mobile2Display}</a>
          </li>
          <li>
            Mobile:{" "}
            <a href={`tel:${siteContact.mobile3Tel}`}>{siteContact.mobile3Display}</a>
          </li>
          <li>
            Email: <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
          </li>
          <li>
            Instagram:{" "}
            <a href={siteContact.instagramUrl} target="_blank" rel="noreferrer">
              {siteContact.instagramHandle}
            </a>
          </li>
          <li>Physical address: {siteContact.poBox}</li>
        </ul>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <Link className="btn btn-primary" to="/contact#registrar-enquiry">
            Message the registrar
          </Link>
          <Link className="btn btn-outline-dark" to="/campus">
            Campus &amp; map
          </Link>
        </div>
      </div>
    </>
  );
}
