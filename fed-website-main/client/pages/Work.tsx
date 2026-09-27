import { Link } from "react-router-dom";
import {
  Check,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Recycle,
  Rocket,
  Sparkles,
  Trees,
  Truck,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { CTA } from "@/components/home/CTA";

// Every case study here is drawn from the Proof Point and Systems Built fields
// in the Notion Clients database. Client names are intentionally left out.

type CaseStudy = {
  industry: string;
  title: string;
  Icon: typeof Truck;
  problem: string;
  built: string[];
  result: string;
  quote?: { text: string; by: string };
  cta: { label: string; href: string };
};

const featured: CaseStudy[] = [
  {
    industry: "Towing",
    title: "A guest permit platform for a towing company",
    Icon: Truck,
    problem:
      "Guest parking permits across hundreds of properties, with no simple way to know who was allowed to park and who was eligible for a tow.",
    built: [
      "Guest permit registration with an instant approval status",
      "Property manager dashboards with role-based access",
      "Driver and manager logins",
      "Automatic permit rules: 24-hour passes, monthly caps, back-to-back limits",
      "QR code signage at every property",
    ],
    result: "200+ properties running on one platform, with every step from registration to tow on record.",
    cta: { label: "See the demo", href: "https://platform.autotowing.app" },
  },
  {
    industry: "Landscaping",
    title: "Leads that qualify themselves",
    Icon: Trees,
    problem: "Driving out to look at every lead before he could even give a quote.",
    built: [
      "Website with before and after sliders",
      "Text-based lead qualification: property size, service type, and photos before scheduling",
      "Estimates, invoices, and payment tracking",
      "A pipeline from quote to booked to completed to paid to review",
      "Review requests that go out on their own",
    ],
    result:
      "No more driving out to look at a patch of grass. He has since referred two more landscaping companies to us.",
    quote: {
      text: "I never thought managing my leads, customers and invoices could be so easy.",
      by: "Owner, landscaping company",
    },
    cta: { label: "Explore AutoScaping", href: "https://autoscaping.com" },
  },
  {
    industry: "Mobile Detailing",
    title: "A client journey that runs itself",
    Icon: Sparkles,
    problem: "The owner was stuck chasing quotes and paperwork instead of growing his team.",
    built: [
      "A multi-step quote calculator: 5 service types, vehicle-based pricing, add-ons, and travel fees",
      "Automation from the first quote request to the final review request",
      "Booking and calendar integration",
      "Estimates, invoicing, and payments",
      "An owner dashboard with revenue tracking",
    ],
    result: "The owner focuses on scaling his team instead of chasing paperwork.",
    quote: {
      text: "It has made my business more efficient and I'm extremely happy about the service they provide.",
      by: "Owner, mobile detailing company",
    },
    cta: { label: "Build something like this", href: "/services/custom-solutions" },
  },
];

const moreBuilds = [
  {
    industry: "Auto Detailing",
    title: "An owner dashboard",
    Icon: LayoutDashboard,
    text: "A real-time dashboard with 11 widgets tracking revenue, appointments, review rates, and conversions, plus an invoice-to-review pipeline that runs on its own.",
  },
  {
    industry: "Data Destruction",
    title: "Lead gen and review requests",
    Icon: Recycle,
    text: "Lead generation plus an automated review and referral system. Requests go out on day 0, 3, and 7, referrals are captured and tracked, and results are reported monthly.",
  },
  {
    industry: "High School Boosters",
    title: "A platform coaches actually use",
    Icon: ClipboardList,
    text: "Coaches check their budget, submit reimbursements, and get announcements from their phone. Reimbursement requests notify the right people automatically.",
  },
  {
    industry: "Fraternity Chapter",
    title: "A system that survives turnover",
    Icon: GraduationCap,
    text: "Events, alumni outreach, QR attendance tracking, and document storage, with a leadership handoff built in so nothing resets when the exec board changes.",
  },
  {
    industry: "Junk Removal",
    title: "Launched in two weeks",
    Icon: Rocket,
    text: "From zero online presence to a live website, CRM, and booking system in two weeks, with training videos so the owner could run it from day one.",
  },
  {
    industry: "Auto Detailing",
    title: "Two years and counting",
    Icon: Users,
    text: "Our longest client relationship. Started with a website, now runs his entire lead flow through our system, and has referred multiple clients to us.",
  },
];

/* ── Hero ───────────────────────────────────────────────── */
function WorkHero() {
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
            <h1 className="text-white font-bold text-3xl lg:text-[48px] leading-[1.4]">
              REAL SYSTEMS.<br />
              REAL BUSINESSES.
            </h1>
          </div>
          <p className="text-white text-base lg:text-xl font-medium leading-[1.4] max-w-[680px]">
            A look at what we've built for the service businesses we work with. The problem, what
            we built, and what changed.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Featured case studies ──────────────────────────────── */
function CaseStudyCard({ c, index }: { c: CaseStudy; index: number }) {
  const external = c.cta.href.startsWith("http");
  const ctaClass =
    "self-start inline-flex items-center justify-center h-[48px] px-7 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90";
  return (
    <div
      className="rounded-[8px] p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12"
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(135deg, rgba(58,185,132,0.3) 0%, rgba(0,0,0,0.6) 70%)"
            : "linear-gradient(135deg, rgba(217,217,217,0.14) 0%, rgba(0,0,0,0.6) 70%)",
        border: "1px solid rgba(119,199,157,0.45)",
        boxShadow: "0 0 24px rgba(58,185,132,0.12)",
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[8px] flex items-center justify-center nav-active">
            <c.Icon className="w-6 h-6 text-white" />
          </div>
          <span className="px-3 py-1 rounded-[4px] text-white text-xs font-bold uppercase tracking-wider nav-inactive">
            {c.industry}
          </span>
        </div>
        <h3 className="text-white font-bold text-2xl lg:text-[32px] leading-tight">{c.title}</h3>
        <div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">The Problem</p>
          <p className="text-white text-base leading-[1.6]">{c.problem}</p>
        </div>
        <div>
          <p className="text-fed-green text-xs font-bold uppercase tracking-wider mb-1">The Result</p>
          <p className="text-white text-base leading-[1.6]">{c.result}</p>
        </div>
        {c.quote && (
          <blockquote className="border-l-2 border-fed-green pl-4">
            <p className="text-white/90 text-base italic leading-[1.6]">"{c.quote.text}"</p>
            <footer className="text-white/60 text-sm mt-1">{c.quote.by}</footer>
          </blockquote>
        )}
        {external ? (
          <a href={c.cta.href} target="_blank" rel="noopener noreferrer" className={ctaClass}>
            {c.cta.label} →
          </a>
        ) : (
          <Link to={c.cta.href} className={ctaClass}>
            {c.cta.label} →
          </Link>
        )}
      </div>
      <div>
        <p className="text-fed-green text-xs font-bold uppercase tracking-wider mb-3">What We Built</p>
        <ul className="flex flex-col gap-3">
          {c.built.map((b) => (
            <li key={b} className="flex items-start gap-3 text-white text-base leading-[1.55]">
              <Check className="w-5 h-5 text-fed-green flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeaturedSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center mb-10 lg:mb-14">
          FEATURED BUILDS
        </h2>
        <div className="flex flex-col gap-10 lg:gap-14">
          {featured.map((c, i) => (
            <CaseStudyCard key={c.title} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── More builds ────────────────────────────────────────── */
function MoreBuildsSection() {
  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ background: "radial-gradient(80% 80% at 50% 0%, #0b3d2a 0%, #000 70%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center">MORE THINGS WE'VE BUILT</h2>
        <p className="text-white/80 text-base lg:text-lg text-center max-w-[720px] mx-auto mt-4 mb-10 lg:mb-14">
          Different industries, same goal: less time on the process, more time on the business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreBuilds.map((b) => (
            <div key={b.title} className="glass-dark p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center nav-active">
                  <b.Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider">{b.industry}</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">{b.title}</h3>
              <p className="text-white/85 text-sm leading-[1.6]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function Work() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      <main>
        <WorkHero />
        <FeaturedSection />
        <MoreBuildsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
