import { getMapEmbedUrl } from "../site/brand";

export function MapEmbed({ title }: { title: string }) {
  return (
    <div className="map-embed-wrap">
      <iframe
        className="map-embed-frame"
        src={getMapEmbedUrl()}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
