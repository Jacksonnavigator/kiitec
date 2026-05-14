import { Link } from "react-router-dom";
import { homeNewsItems } from "../data/homeNews";

export function HomeNewsStrip() {
  return (
    <div className="news-strip-block">
      <h2 id="home-news-heading" className="section-heading">
        News &amp; deadlines
      </h2>
      <p className="section-intro">News, partnerships, and downloadable forms from Don Bosco KIITEC.</p>
      <ul className="news-strip">
        {homeNewsItems.map((item) => (
          <li key={item.title} className="news-strip-item">
            <span className="news-strip-date">{item.date}</span>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="news-strip-title">
                {item.title}
              </a>
            ) : (
              <Link to={item.href} className="news-strip-title">
                {item.title}
              </Link>
            )}
            <span className="news-strip-meta">{item.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
