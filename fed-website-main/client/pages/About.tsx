import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  Handshake,
  Linkedin,
  Palette,
  Wrench,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";

/* ── Hero Section ───────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden hero-gradient">
      {/* Circuit board pattern - left */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/cc0556866514ca6ea9d141250f1d858c41178c12?width=1266"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[50%] object-cover opacity-50 pointer-events-none select-none"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-[89px]">
        <div className="flex flex-col items-center text-center py-16 lg:py-24 gap-6">
          <GreenDots variant="5" />
          <div className="glass-card p-5 lg:p-6 w-full max-w-[860px]">
            <h1 className="text-white font-bold text-3xl lg:text-[48px] leading-[1.4]">
              WE BUILD FOR THE BUSINESSES<br className="hidden sm:block" />{" "}
              THAT KEEP THINGS RUNNING.
            </h1>
          </div>
          <p className="text-white text-base lg:text-xl font-medium leading-[1.4] max-w-[720px]">
            Future Edge Developments builds software, automation, and marketing
            systems for field-service and small businesses — the towing
            companies, landscapers, detailers, and crews who are too busy doing
            the work to fight their own tools.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ──────────────────────────────────────────────── */
const stats = [
  { value: "2023", label: "Founded" },
  { value: "25+", label: "Businesses served" },
  { value: "15", label: "Industries" },
  { value: "2+ yrs", label: "Longest client relationship" },
];

function StatsSection() {
  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center text-center rounded-[8px] p-6 ${
              i === 0 ? "card-green-gradient" : "card-dark-gradient"
            }`}
            style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)" }}
          >
            <span className="text-white font-extrabold text-3xl lg:text-[44px] leading-none">
              {stat.value}
            </span>
            <span className="text-white text-sm lg:text-base font-medium mt-3">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Our Story ──────────────────────────────────────────── */
function StorySection() {
  return (
    <section className="bg-black pb-16 lg:pb-20">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <GreenDots variant="6" />
        <div className="glass-dark mt-4 p-6 lg:p-10 flex flex-col gap-5">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4]">
            THE PATTERN IS USUALLY THE SAME.
          </h2>
          <p className="text-white/85 text-base lg:text-lg leading-[1.7]">
            A business is running on legacy tools, spreadsheets, or manual
            process. Leads slip through, quotes take hours, and the owner is
            stuck doing admin at night instead of growing the company.
          </p>
          <p className="text-white/85 text-base lg:text-lg leading-[1.7]">
            We replace that with something custom-built around how the business
            actually runs — then layer marketing systems on top so the growth
            has somewhere to go. Plenty of our clients started with just a
            website and now run their whole operation through what we built.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Founder ────────────────────────────────────────────── */
function FounderSection() {
  return (
    <section className="relative w-full overflow-hidden hero-gradient py-16 lg:py-20">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-center">
        <div className="relative mx-auto w-full max-w-[340px]">
          <img
            src="/eric-sullivan.jpg"
            alt="Eric Sullivan, Founder and CEO of Future Edge Developments"
            className="w-full h-auto rounded-[8px] object-cover"
            style={{
              border: "1px solid #3AB984",
              boxShadow: "0 12px 24px rgba(0,0,0,0.35)",
            }}
          />
        </div>
        <div className="glass-dark p-6 lg:p-10 flex flex-col gap-4">
          <span className="text-white/70 text-sm font-bold uppercase tracking-wider">
            Meet the Founder
          </span>
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.3]">
            ERIC SULLIVAN
          </h2>
          <p className="text-white/70 text-base font-medium -mt-2">
            Founder / CEO
          </p>
          <p className="text-white/85 text-base lg:text-lg leading-[1.7]">
            Eric started Future Edge Developments in 2023 to give service
            businesses the kind of systems usually reserved for companies with
            an in-house tech team — and to make sure what gets built actually
            gets used.
          </p>
          <a
            href="https://linkedin.com/in/eric-sullivan2113/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 h-[44px] px-6 rounded-[4px] text-white text-sm font-medium nav-inactive transition-all hover:opacity-90"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── The Team (generalized) ─────────────────────────────── */
const disciplines = [
  {
    icon: Bot,
    title: "Automation & Systems",
    text: "CRMs, pipelines, and the automations that move a lead from first click to paid invoice without anyone chasing it.",
  },
  {
    icon: Palette,
    title: "Creative & Brand",
    text: "Websites, visuals, and content that make a local business look like the obvious choice.",
  },
  {
    icon: BarChart3,
    title: "Operations & Analytics",
    text: "Dashboards and reporting so owners can see revenue, bookings, and reviews at a glance.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    text: "Setup, training, and ongoing support so the systems keep working long after launch.",
  },
];

function TeamSection() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center">
          A SMALL TEAM THAT BUILDS BIG SYSTEMS
        </h2>
        <p className="text-white/80 text-base lg:text-lg text-center max-w-[720px] mx-auto mt-4 mb-10 lg:mb-14">
          A hands-on crew covering every piece of the build — you work directly
          with the people putting your systems together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {disciplines.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-[14px] rounded-[8px] p-6 w-full max-w-[300px] card-dark-gradient"
              style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)" }}
            >
              <div className="w-14 h-14 rounded-[8px] flex items-center justify-center nav-active">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg uppercase">{title}</h3>
              <p className="text-white text-sm leading-[20px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who We've Helped ───────────────────────────────────── */
const stories = [
  {
    industry: "Landscaping",
    problem: "Driving out to look at every lead before he could even give a quote.",
    built: "Leads now qualify themselves by text — property size, service type, and photos — before he picks up the phone. Estimates, invoicing, and review requests run on autopilot.",
  },
  {
    industry: "Towing",
    problem: "Guest parking permits for 200+ properties managed through legacy software.",
    built: "A full permit management platform with property manager dashboards, automatic rule enforcement, and a clean trail from registration to tow.",
  },
  {
    industry: "Mobile Detailing",
    problem: "The owner was stuck chasing quotes and paperwork instead of growing his team.",
    built: "A custom quote calculator and a client journey that runs itself — from the first quote request to the final review request.",
  },
  {
    industry: "High School Boosters",
    problem: "Coaches had no easy way to see budgets or get reimbursed.",
    built: "A mobile-friendly platform where coaches check their budget, submit reimbursements, and get announcements from their phone.",
  },
  {
    industry: "Fraternity Chapter",
    problem: "Everything reset every year when the exec board turned over.",
    built: "A chapter management system — events, alumni outreach, attendance, documents — with a leadership handoff built in.",
  },
  {
    industry: "Junk Removal",
    problem: "A brand-new business with zero online presence.",
    built: "A fully launched website, CRM, and booking system in two weeks.",
  },
];

function StoriesSection() {
  return (
    <section className="bg-black pb-16 lg:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center">
          WHO WE'VE HELPED
        </h2>
        <p className="text-white/80 text-base lg:text-lg text-center max-w-[720px] mx-auto mt-4 mb-10 lg:mb-14">
          Different industries, same story: too much time on the process, not
          enough on the business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.industry} className="glass-dark p-6 flex flex-col gap-4">
              <span className="self-start px-3 py-1 rounded-[4px] text-white text-xs font-bold uppercase tracking-wider nav-active">
                {story.industry}
              </span>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">
                  The Problem
                </p>
                <p className="text-white text-base leading-[1.5]">{story.problem}</p>
              </div>
              <div>
                <p className="text-fed-green text-xs font-bold uppercase tracking-wider mb-1">
                  What We Built
                </p>
                <p className="text-white/85 text-sm leading-[1.6]">{story.built}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industries ─────────────────────────────────────────── */
const industries = [
  "Towing",
  "Landscaping",
  "Property Maintenance",
  "Auto Detailing",
  "Junk Removal",
  "Cleaning",
  "Data Destruction & E-Waste",
  "Sports & Athletics",
  "Non-Profits",
  "Greek Life",
  "Telecom",
  "Security",
  "Real Estate",
  "Custom Apparel",
  "E-Commerce",
];

function IndustriesSection() {
  return (
    <section className="bg-black pb-16 lg:pb-20">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-white font-bold text-xl lg:text-[28px] mb-8">
          INDUSTRIES WE'VE WORKED IN
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-lg text-white text-sm font-medium nav-inactive"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Clients Stay ───────────────────────────────────── */
const reasons = [
  {
    title: "Built around you",
    text: "No cookie-cutter templates. Every system is mapped to how your business actually runs.",
  },
  {
    title: "Start small, grow into it",
    text: "Most clients start with a website. Several now run their whole operation through what we built.",
  },
  {
    title: "Referral-driven",
    text: "Our clients refer other business owners to us — landscapers send landscapers, detailers send detailers.",
  },
];

function WhySection() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden bg-black">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0b8a6d923ed9dd3f38474aed61c934983608eee8?width=2880"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="w-full max-w-[720px]">
          <GreenDots variant="5" />
          <div className="glass-dark mt-4 p-8 lg:p-10">
            <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4] mb-6">
              WHY CLIENTS STICK AROUND
            </h2>
            <div className="flex flex-col gap-5">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <Handshake className="w-6 h-6 text-fed-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg">{r.title}</h3>
                    <p className="text-white/85 text-base leading-[1.6]">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact#book"
                className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
              >
                Book a Free Strategy Call →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-black font-medium text-base transition-all hover:opacity-90"
                style={{ background: "#D9D9D9" }}
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <AboutHero />
        <StatsSection />
        <StorySection />
        <FounderSection />
        <TeamSection />
        <StoriesSection />
        <IndustriesSection />
        <WhySection />
      </main>
    </div>
  );
}
