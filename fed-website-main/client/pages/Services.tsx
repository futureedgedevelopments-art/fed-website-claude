import { Link } from "react-router-dom";
import { Check, Trees, Truck, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/home/CTA";

type Action = { label: string; href: string; primary?: boolean };

type Offering = {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  Icon: typeof Truck;
  points: string[];
  actions: Action[];
};

const offerings: Offering[] = [
  {
    id: "custom-solutions",
    name: "Custom Solutions",
    tagline: "Built around how you run.",
    intro:
      "When off-the-shelf tools stop fitting, we build the system that does. Every build starts with your problem, not our menu.",
    Icon: Wrench,
    points: [
      "Pricing calculators and estimate tools",
      "Automated workflows and follow-up systems",
      "Client portals and dashboards",
      "Internal operations tools",
      "Integrations between the tools you already use",
      "Reporting that shows leads, revenue, and job status at a glance",
    ],
    actions: [
      { label: "See Custom Solutions", href: "/services/custom-solutions", primary: true },
      { label: "Book a Strategy Call", href: "/contact#book" },
    ],
  },
  {
    id: "autotowing",
    name: "AutoTowing",
    tagline: "Guest parking and tow enforcement, handled.",
    intro:
      "A guest parking command center for towing companies and the property managers they work with. The whole loop, from registration to tow, in one place.",
    Icon: Truck,
    points: [
      "Guests register their car and see approval right away on a public status page",
      "Rules enforce themselves: permit length, back-to-back limits, banned plates",
      "Expired permits become tow-eligible, with a clean audit trail",
      "Property manager portals scoped to each property",
      "Expiring-soon, tow, and lien notices",
      "Your branding on the whole platform",
    ],
    actions: [
      { label: "Explore AutoTowing", href: "https://autotowing.app", primary: true },
      { label: "Book a Demo", href: "https://autotowing.app/demo" },
      { label: "Customer Login", href: "https://platform.autotowing.app" },
    ],
  },
  {
    id: "autoscaping",
    name: "AutoScaping",
    tagline: "The front office for landscapers.",
    intro:
      "Built for landscaping and property maintenance crews. Start with getting found online and grow into running the whole operation through one system.",
    Icon: Trees,
    points: [
      "Website and Google Business Profile setup",
      "Lead capture with instant auto-response",
      "Quotes, estimates, and appointment booking with reminders",
      "Review requests that go out on their own",
      "Invoicing and a full job pipeline, from quote to paid",
      "Three packages: The Front Office, Full Crew, and The Whole Operation",
    ],
    actions: [{ label: "Explore AutoScaping", href: "https://autoscaping.com", primary: true }],
  },
];

function ActionLink({ action }: { action: Action }) {
  const className = action.primary
    ? "inline-flex items-center justify-center h-[48px] px-7 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
    : "inline-flex items-center justify-center h-[48px] px-7 rounded-[4px] text-white font-medium text-base nav-inactive transition-all hover:opacity-90";
  const label = `${action.label} →`;
  return action.href.startsWith("http") ? (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <Link to={action.href} className={className}>
      {label}
    </Link>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden hero-gradient">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/cc0556866514ca6ea9d141250f1d858c41178c12?width=1266"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[50%] object-cover opacity-50 pointer-events-none select-none"
      />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-[89px]">
        <div className="flex flex-col items-center text-center py-16 lg:py-24 gap-6">
          <GreenDots variant="5" />
          <div className="glass-card p-5 lg:p-6 w-full max-w-[760px]">
            <h1 className="text-white font-bold text-3xl lg:text-[48px] leading-[1.4]">WHAT WE BUILD</h1>
          </div>
          <p className="text-white text-base lg:text-xl font-medium leading-[1.4] max-w-[680px]">
            Two platforms built for the industries we know best, and custom systems for everyone else.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {offerings.map((o) => (
              <a
                key={o.id}
                href={`#${o.id}`}
                className="flex items-center justify-center px-6 h-[39px] rounded-lg text-white text-sm font-medium nav-inactive transition-all hover:opacity-90"
              >
                {o.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Offerings ──────────────────────────────────────────── */
function OfferingsSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 flex flex-col gap-10 lg:gap-14">
        {offerings.map((o, i) => (
          <div
            key={o.id}
            id={o.id}
            className="scroll-mt-[110px] rounded-[8px] p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start"
            style={{
              background:
                i === 0
                  ? "linear-gradient(135deg, rgba(58,185,132,0.35) 0%, rgba(0,0,0,0.6) 70%)"
                  : "linear-gradient(135deg, rgba(217,217,217,0.14) 0%, rgba(0,0,0,0.6) 70%)",
              border: "1px solid rgba(119,199,157,0.45)",
              boxShadow: "0 0 24px rgba(58,185,132,0.12)",
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-[8px] flex items-center justify-center nav-active">
                <o.Icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-tight uppercase">{o.name}</h2>
              <p className="text-fed-green font-semibold text-lg">{o.tagline}</p>
              <p className="text-white/85 text-base leading-[1.7]">{o.intro}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {o.actions.map((a) => (
                  <ActionLink key={a.label} action={a} />
                ))}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {o.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white text-base leading-[1.55]">
                  <Check className="w-5 h-5 text-fed-green flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function Services() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      <main>
        <ServicesHero />
        <OfferingsSection />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
