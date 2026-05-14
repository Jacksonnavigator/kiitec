import { useEffect } from "react";
import { canonicalSiteUrl } from "../site/public";
import { siteContact } from "../site/contact";

const SCRIPT_ID = "kiitec-org-jsonld";

export function OrganizationJsonLd() {
  useEffect(() => {
    const el = document.createElement("script");
    el.id = SCRIPT_ID;
    el.type = "application/ld+json";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Don Bosco KIITEC",
      alternateName: "Kilimanjaro International Institute of Telecommunications, Electronics and Computers",
      url: canonicalSiteUrl,
      description:
        "NACTE-registered technical institute (REG/EOS/027) in Arusha, Tanzania. Engineering and technology training.",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteContact.poBox,
        addressLocality: "Arusha",
        addressRegion: "Arusha Region",
        addressCountry: "TZ",
      },
      telephone: [siteContact.phoneE164, siteContact.mobile2Tel, siteContact.mobile3Tel, siteContact.landlineTel],
      email: siteContact.email,
      sameAs: [siteContact.instagramUrl, "https://www.kiitec.ac.tz/"],
    });
    document.head.appendChild(el);
    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
}
