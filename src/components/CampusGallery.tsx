import { campusGalleryPhotos } from "../data/sitePhotos";

export function CampusGallery() {
  return (
    <div className="campus-gallery-wrap">
      <ul className="campus-gallery" aria-label="Campus photography">
        {campusGalleryPhotos.map((item) => (
          <li key={item.src} className="campus-gallery-item">
            <figure className="campus-figure">
              <img src={item.src} alt={item.alt} width={700} height={525} loading="lazy" decoding="async" />
            </figure>
          </li>
        ))}
      </ul>
      <p className="campus-gallery-note">Campus photography from Don Bosco KIITEC.</p>
    </div>
  );
}
