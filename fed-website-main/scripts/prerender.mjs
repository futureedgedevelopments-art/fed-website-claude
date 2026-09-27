// Pre-renders every route to static HTML after `vite build` so search engines
// and AI crawlers get real content, per-page titles, canonical URLs, and
// structured data without running JavaScript. Also writes sitemap.xml,
// robots.txt, and a 404 page.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist/spa");
const ssrEntry = path.join(root, "dist/ssr/entry-server.js");

const {
  render,
  PAGE_META,
  NOT_FOUND_META,
  PRERENDER_ROUTES,
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  fullTitle,
  canonicalUrl,
  jsonLdFor,
} = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keeps "</script>" inside JSON from closing the tag early.
const jsonForScript = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

function headFor(route, meta) {
  const title = fullTitle(meta);
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex" : "index, follow"}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];
  if (!meta.noindex) {
    tags.push(`<link rel="canonical" href="${canonicalUrl(route)}" />`);
    tags.push(`<meta property="og:url" content="${canonicalUrl(route)}" />`);
    for (const block of jsonLdFor(route)) {
      tags.push(`<script type="application/ld+json">${jsonForScript(block)}</script>`);
    }
  }
  return tags.join("\n    ");
}

function buildPage(route, meta) {
  // Drop the template's default SEO tags; each page gets its own set.
  let html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, "")
    .replace(/<meta\s+property="og:[^"]*"[\s\S]*?\/>\s*/g, "")
    .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?\/>\s*/g, "")
    .replace(/<!-- Link previews[\s\S]*?-->\s*/, "");
  html = html.replace("</head>", `    ${headFor(route, meta)}\n  </head>`);
  const appHtml = render(route);
  if (!html.includes('<div id="root"></div>')) throw new Error("Template is missing an empty #root");
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
}

for (const route of PRERENDER_ROUTES) {
  const out = route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");
  write(out, buildPage(route, PAGE_META[route]));
  console.log(`prerendered ${route}`);
}

write(path.join(distDir, "404.html"), buildPage("/404", NOT_FOUND_META));
console.log("prerendered 404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map(
  (r) => `  <url>
    <loc>${canonicalUrl(r)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
write(path.join(distDir, "sitemap.xml"), sitemap);

const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "Googlebot",
  "DuckDuckBot",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
];
const robots = `# Search engines and AI assistants are welcome to read and cite this site.
User-agent: *
Allow: /

${aiCrawlers.map((ua) => `User-agent: ${ua}\nAllow: /`).join("\n\n")}

Sitemap: ${SITE_URL}/sitemap.xml
`;
write(path.join(distDir, "robots.txt"), robots);
console.log("wrote sitemap.xml and robots.txt");

// llms.txt: a plain-language summary for AI assistants (https://llmstxt.org).
const page = (r) => `[${PAGE_META[r].title}](${canonicalUrl(r)}): ${PAGE_META[r].description}`;
const llms = `# ${SITE_NAME}

> ${PAGE_META["/"].description}

Future Edge Developments (FED) was founded in 2023 by Eric Sullivan. We build software, automation, and marketing systems for field-service and small businesses such as towing, landscaping and property maintenance, auto detailing, cleaning, and junk removal. The usual pattern: a business is running on manual process, spreadsheets, or disconnected tools, and we replace that with a system built around how it actually runs.

## Products and services

- [AutoTowing](https://autotowing.app): guest parking and tow enforcement platform for towing companies and property managers. Guest permit registration with a public status page, automatic permit rules, tow-eligible queues with an audit trail, property manager portals, and tow and lien notices. Free trial available.
- [AutoScaping](https://autoscaping.com): front office system for landscaping and property maintenance companies. Website and Google Business Profile, lead capture, quotes and booking, invoicing, a full job pipeline, and review requests. Three packages: The Front Office, Full Crew, and The Whole Operation.
- ${page("/services/custom-solutions")}

## Pages

${PRERENDER_ROUTES.filter((r) => r !== "/services/custom-solutions").map((r) => `- ${page(r)}`).join("\n")}

## Contact

- Phone: (844) 722-5678
- Email: info@futureedgedev.com
- Support: support@futureedgedev.com
- Free 30-minute strategy call: ${canonicalUrl("/contact")}
`;
write(path.join(distDir, "llms.txt"), llms);
console.log("wrote llms.txt");
