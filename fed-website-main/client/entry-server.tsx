// Build-time entry used by scripts/prerender.mjs to render each route to HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./AppRoutes";

export { PAGE_META, NOT_FOUND_META, PRERENDER_ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, fullTitle, canonicalUrl, jsonLdFor } from "./lib/seo";

export function render(url: string) {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
}
