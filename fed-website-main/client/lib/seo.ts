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
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const US = { "@type": "Country", name: "United States" };

// Organization (not LocalBusiness/ProfessionalService): FED has no public
// storefront address, and LocalBusiness types expect one.
const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "FED",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/logo.png`,
    width: 400,
    height: 400,
    caption: SITE_NAME,
  },
  image: { "@id": LOGO_ID },
  description: PAGE_META["/"].description,
  slogan: "We build the systems that let you scale.",
  foundingDate: BUSINESS.founded,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  areaServed: US,
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/about#eric-sullivan`,
    name: BUSINESS.founder.name,
    jobTitle: BUSINESS.founder.title,
    worksFor: { "@id": ORG_ID },
    sameAs: [BUSINESS.founder.linkedin],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: BUSINESS.supportEmail,
      areaServed: "US",
      availableLanguage: "English",
    },
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
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

const services = [
  {
    id: "custom-solutions",
    name: "Custom Solutions",
    serviceType: "Custom business automation and software development",
    url: canonicalUrl("/services/custom-solutions"),
    description:
      "Custom automation systems, pricing calculators, client portals, internal tools, integrations, and reporting built around how a business actually runs.",
  },
  {
    id: "autotowing",
    name: "AutoTowing",
    serviceType: "Towing and parking enforcement software",
    url: "https://autotowing.app",
    description:
      "Guest parking and tow enforcement platform for towing companies and property managers: permits, property manager portals, tow-eligible queues, and tow and lien notices.",
  },
  {
    id: "autoscaping",
    name: "AutoScaping",
    serviceType: "Landscaping business software",
    url: "https://autoscaping.com",
    description:
      "Front office system for landscaping and property maintenance companies: website, lead capture, quotes, booking, invoicing, and review requests.",
  },
];

function serviceNode(s: (typeof services)[number]) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services#${s.id}`,
    name: s.name,
    serviceType: s.serviceType,
    url: s.url,
    description: s.description,
    provider: { "@id": ORG_ID },
    areaServed: US,
  };
}

function breadcrumbNode(path: string) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const p of parts) {
    acc += `/${p}`;
    items.push({ name: PAGE_META[acc]?.title ?? p, path: acc });
  }
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonicalUrl(it.path),
    })),
  };
}

const PAGE_TYPE: Record<string, string> = {
  "/about": "AboutPage",
  "/contact": "ContactPage",
  "/work": "CollectionPage",
};

/**
 * Structured data for a route as a single connected @graph: the organization,
 * the website, this page, and anything the page is about.
 */
export function jsonLdFor(path: string): object[] {
  const url = canonicalUrl(path);
  const meta = PAGE_META[path];
  const pageNode: Record<string, unknown> = {
    "@type": PAGE_TYPE[path] ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: fullTitle(meta),
    description: meta.description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
  };
  const graph: object[] = [organization, website, pageNode];

  if (path !== "/") {
    graph.push(breadcrumbNode(path));
    pageNode.breadcrumb = { "@id": `${url}#breadcrumb` };
  }
  if (path === "/services") {
    graph.push(...services.map(serviceNode));
    pageNode.mainEntity = {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@id": `${SITE_URL}/services#${s.id}` },
      })),
    };
  }
  if (path === "/services/custom-solutions") {
    graph.push(serviceNode(services[0]));
    pageNode.mainEntity = { "@id": `${SITE_URL}/services#custom-solutions` };
  }
  if (path === "/about") {
    pageNode.mainEntity = { "@id": ORG_ID };
  }
  if (path === "/contact") {
    const faqId = `${url}#faq`;
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return [{ "@context": "https://schema.org", "@graph": graph }];
}
