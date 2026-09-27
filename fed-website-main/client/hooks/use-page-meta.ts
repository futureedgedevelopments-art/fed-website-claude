import { useEffect } from "react";

const SITE_NAME = "Future Edge Developments";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Sets the browser tab title and description for the current page. */
export function usePageMeta(title: string, description: string, options: { noindex?: boolean } = {}) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("name", "robots", options.noindex ? "noindex" : "index, follow");
  }, [title, description, options.noindex]);
}
