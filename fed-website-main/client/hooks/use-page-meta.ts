import { useEffect } from "react";
import { canonicalUrl, fullTitle, type PageMeta } from "@/lib/seo";
import { useLocation } from "react-router-dom";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Keeps the tab title, description, and social tags in sync during client-side
 * navigation. The same values are baked into each page's HTML at build time.
 */
export function usePageMeta(meta: PageMeta) {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = fullTitle(meta);
    document.title = title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", meta.description);
    setMeta("name", "robots", meta.noindex ? "noindex" : "index, follow");
    if (!meta.noindex) {
      setMeta("property", "og:url", canonicalUrl(pathname));
      setCanonical(canonicalUrl(pathname));
    }
  }, [meta, pathname]);
}
