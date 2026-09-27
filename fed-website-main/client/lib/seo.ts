// Single source for SEO: page titles and descriptions, the canonical domain,
// and the structured data (JSON-LD) search engines and AI assistants read.
// Used at runtime (usePageMeta) and at build time (scripts/prerender.mjs).
import { SOCIAL_LINKS } from "@/lib/socials";
import { FAQS } from "@/lib/faqs";
import { BUSINESS } from "@/lib/business";

export { BUSINESS };

/** Canonical domain for the site. Change here if the site moves. */
export const SITE_URL = "https://futureedgedev.com";
export const SITE_NAME = "Future Edge Developments";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;


export type PageMeta = { title: string; description: string; noindex?: boolean };

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: SITE_NAME,
    description:
      "We build the systems that let service businesses scale: custom automation, integrations, and platforms like AutoTowing and AutoScaping.",
  },
  "/services": {
    title: "Services",
    description:
      "Custom Solutions, AutoTowing, and AutoScaping. Software and automation built for towing companies, landscapers, and service businesses.",
  },
  "/services/custom-solutions": {
    title: "Custom Solutions",
    description:
      "Pricing calculators, automated workflows, client portals, and integrations built around how your business actually runs.",
  },
  "/work": {
    title: "Our Work",
    description:
      "Real systems for real businesses. See what we've built for towing companies, landscapers, detailers, and more.",
  },
  "/about": {
    title: "About",
    description:
      "Meet the team building the systems behind service businesses. Founded in 2023 by Eric Sullivan.",
  },
  "/contact": {
    title: "Contact",
    description: "Book a free 30-minute strategy call or send us a message. We reply within 24 hours.",
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page Not Found",
  description: "This page doesn't exist. Head back home or get in touch with Future Edge Developments.",
  noindex: true,
};

/** Routes that are pre-rendered to static HTML at build time and listed in the sitemap. */
export const PRERENDER_ROUTES = Object.keys(PAGE_META);

export function fullTitle(meta: PageMeta) {
  return meta.title === SITE_NAME ? SITE_NAME : `${meta.title} | ${SITE_NAME}`;
}

export function canonicalUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  description: PAGE_META["/"].description,
  slogan: "We build the systems that let you scale.",
  foundingDate: BUSINESS.founded,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  areaServed: { "@type": "Country", name: "United States" },
  founder: {
    "@type": "Person",
    name: BUSINESS.founder.name,
    jobTitle: BUSINESS.founder.title,
    sameAs: [BUSINESS.founder.linkedin],
  },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: BUSINESS.phone, email: BUSINESS.email },
    { "@type": "ContactPoint", contactType: "customer support", email: BUSINESS.supportEmail },
  ],
  sameAs: Object.values(SOCIAL_LINKS).filter(Boolean),
  brand: [
    { "@type": "Brand", name: "AutoTowing", url: "https://autotowing.app" },
    { "@type": "Brand", name: "AutoScaping", url: "https://autoscaping.com" },
  ],
  knowsAbout: [
    "Business process automation",
    "CRM setup and automation",
    "Custom software for service businesses",
    "Towing and parking enforcement software",
    "Landscaping business software",
    "Lead capture and follow-up automation",
    "Estimates, invoicing, and review automation",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: { "@id": ORG_ID },
};

const services = [
  {
    name: "Custom Solutions",
    url: canonicalUrl("/services/custom-solutions"),
    description:
      "Custom automation systems, pricing calculators, client portals, internal tools, integrations, and reporting built around how a business actually runs.",
  },
  {
    name: "AutoTowing",
    url: "https://autotowing.app",
    description:
      "Guest parking and tow enforcement platform for towing companies and property managers: permits, property manager portals, tow-eligible queues, and tow and lien notices.",
  },
  {
    name: "AutoScaping",
    url: "https://autoscaping.com",
    description:
      "Front office system for landscaping and property maintenance companies: website, lead capture, quotes, booking, invoicing, and review requests.",
  },
];

function serviceJsonLd(s: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    url: s.url,
    description: s.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

function breadcrumb(path: string) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const p of parts) {
    acc += `/${p}`;
    items.push({ name: PAGE_META[acc]?.title ?? p, path: acc });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonicalUrl(it.path),
    })),
  };
}

/** Structured data blocks for a given route. */
export function jsonLdFor(path: string): object[] {
  const blocks: object[] = [organization, website];
  if (path !== "/") blocks.push(breadcrumb(path));
  if (path === "/services") blocks.push(...services.map(serviceJsonLd));
  if (path === "/services/custom-solutions") blocks.push(serviceJsonLd(services[0]));
  if (path === "/contact") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  if (path === "/about") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url: canonicalUrl("/about"),
      about: { "@id": ORG_ID },
    });
  }
  return blocks;
}
