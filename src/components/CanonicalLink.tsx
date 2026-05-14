import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalSiteUrl } from "../site/public";

const LINK_ID = "kiitec-canonical";

export function CanonicalLink() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const path = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const href = `${canonicalSiteUrl}${path === "/" ? "/" : path}${search}`;
    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = LINK_ID;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [pathname, search]);

  useEffect(
    () => () => {
      document.getElementById(LINK_ID)?.remove();
    },
    []
  );

  return null;
}
