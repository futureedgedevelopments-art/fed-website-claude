import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  Headphones,
  Linkedin,
  Palette,
  Paperclip,
  PenTool,
  PhoneCall,
  Wrench,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import imacMockup from "@/assets/imac-mockup.png";
import bizCardFront from "@/assets/business-card-front.png";
import bizCardBack from "@/assets/business-card-back.png";
import ericPresenting from "@/assets/eric-presenting.jpg";

// Businesses served, per the Clients database in Notion (29 as of Sep 2026)
const BUSINESSES_SERVED = "25+";

/* ── Hero ─────────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative w-full min-h-[760px] overflow-hidden flex items-center pt-[89px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1d5b75f90ac47c09ec85ccbee67407f095cc79e9?width=2880"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[65%]"
        style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0) 90%)" }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col gap-6 max-w-[820px]">
          <GreenDots variant="6" />
          <div className="glass-card p-6 lg:p-8">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] leading-[1.2]">
              WE SAW THE PROBLEM.<br />WE BUILT THE SOLUTION.
            </h1>
          </div>
          <div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
              style={{ minWidth: 227 }}
            >
              See How We Work →
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-end gap-6 lg:gap-8 text-right">
          <div className="text-fed-green font-bold text-2xl lg:text-[32px]">Trusted by {BUSINESSES_SERVED} businesses</div>
          <p className="text-white text-base lg:text-lg leading-[1.6] max-w-[860px]">
            Future Edge Developments was founded on a simple belief — that every business, regardless of size, deserves a powerful online presence without the chaos of juggling a dozen different tools. We're a team of developers, designers, and digital strategists who build smart, all-in-one websites powered by AI automation, lead generation, and real-time mobile control. We don't just build websites. We build growth engines.
          </p>
        </div>
      </div>
    </section>
  );
}
/* ── What Sets Us Apart ───────────────────────────────── */
function SetsApart() {
  return (
    <section
      className="relative w-full py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(49.63% 37.16% at 50% 50%, #3AB984 0%, rgba(29,93,67,0.87) 3.38%, #000 91.47%)",
      }}
    >
      {/* subtle grid overlay */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0c7dfa8258ad245f938d895fca660f23f2d9c7ca?width=2880"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.3]" style={{ textShadow: "2px 6px 4px rgba(0,0,0,0.45)" }}>
            MORE THAN A WEB AGENCY.<br />A FULL GROWTH SYSTEM.
          </h2>
          <GreenDots variant="6" />
          <p className="text-white/90 text-base lg:text-lg leading-[1.6] max-w-[480px]">
            Most agencies hand you a website and walk away. We build the entire system around it — the automations, the lead tools, the CRM, the strategy — so your business keeps growing long after launch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              { title: BUSINESSES_SERVED, subtitle: "BUSINESSES SERVED", desc: "From local startups to scaling SMBs, we've helped clients across industries transform their digital presence." },
              { title: "All-in-One Platform", desc: "No more juggling tools. Everything — your website, CRM, automations, and analytics — lives in one place." },
              { title: "AI-Powered from Day One", desc: "Every site we build comes with smart automations, chatbot workflows, and follow-up sequences built in — not bolted on." },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-[8px] p-4 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5 border border-black/50 hover:border-fed-green hover:shadow-[0_0_18px_rgba(58,185,132,0.35)]"
                style={{ background: "rgba(217,217,217,0.20)" }}
              >
                <div className="font-bold text-[18px] leading-tight text-white transition-colors duration-300 group-hover:text-fed-green">
                  {c.title}
                  {c.subtitle && (
                    <>
                      <br />
                      {c.subtitle}
                    </>
                  )}
                </div>
                <p className="text-white/85 text-xs leading-[1.5]">{c.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
            >
              Get a Free Quote Now →
            </Link>
          </div>
        </div>

        {/* Business cards showcase */}
        <div className="relative flex items-center justify-center min-h-[420px]">
          <img
            src={bizCardBack}
            alt="Future Edge Developments business card back"
            className="absolute w-[78%] max-w-[420px] rounded-[10px] shadow-2xl"
            style={{
              transform: "rotate(-8deg) translate(-12%, -8%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <img
            src={bizCardFront}
            alt="Eric Sullivan business card front"
            className="relative w-[82%] max-w-[440px] rounded-[10px] shadow-2xl"
            style={{
              transform: "rotate(6deg) translate(8%, 6%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
/* ── Mission ──────────────────────────────────────────── */
function Mission() {
  return (
    <section
      className="relative z-10 w-full pt-16 lg:pt-20 pb-24 lg:pb-32 overflow-visible isolate"
      style={{ background: "linear-gradient(0deg, #000 -11.73%, #3AB984 45.92%)" }}
    >
      {/* Circuit board pattern - left */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/47596a47d3616ac33405b7cce45150b722c3c8fe?width=852"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto opacity-80 pointer-events-none select-none hidden md:block"
      />
      {/* Circuit board pattern - right */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/61c1b46bcea5235b2a6b1e49db33d0c2a054cc06?width=852"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto opacity-80 pointer-events-none select-none hidden md:block"
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-16 flex flex-col items-center gap-6 text-center">
        <h2
          className="font-bold text-2xl lg:text-[32px] text-black"
          style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
        >
          OUR MISSION
        </h2>

        <div
          className="rounded-[8px] p-6 lg:p-7 max-w-[635px] w-full"
          style={{
            background: "rgba(245,245,245,0.30)",
            backdropFilter: "blur(4px)",
            boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <p className="text-white text-sm lg:text-base leading-[1.55]">
            We exist to level the playing field. Small and mid-sized businesses deserve the same powerful tools, systems, and digital presence that big companies have — without the complexity, the bloat, or the agency runaround. Future Edge was built to make that possible. We combine smart website design, AI automation, and real strategy into one system so that our clients can focus on what they actually do best — running their business.
          </p>
        </div>

        <p className="text-black italic text-xs lg:text-sm">
          Fueling business growth with innovation. Your catalyst for success.
        </p>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2411a846fc07431b68b5eab2c81595416dd022d0?width=228"
          alt="FED logo"
          className="h-[68px] w-auto object-contain"
          style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
        />
      </div>

      {/* iMac mockup - overhangs into the next section */}
      <div className="relative z-30 mt-10 flex justify-center md:absolute md:mt-0 md:left-[2%] md:bottom-[-160px] lg:left-[3%] lg:bottom-[-220px] md:block pointer-events-none select-none">
        <img
          src={imacMockup}
          alt="FED homepage shown on an iMac"
          className="w-[90%] max-w-[420px] md:w-[440px] md:max-w-none lg:w-[560px] h-auto"
          draggable={false}
        />
      </div>
    </section>
  );
}
/* ── How We Work (3 principles) ───────────────────────── */
const principles = [
  { num: "1", title: "Systems Before Design", desc: "We don't start with how it looks — we start with how it works. Every website we build is engineered around a growth system first, then wrapped in a design that converts." },
  { num: "2", title: "Transparent by Default", desc: "No smoke and mirrors. You'll always know what we're building, why we're building it, and what results to expect. We communicate clearly and move fast." },
  { num: "3", title: "Built to Scale With You", desc: "We're not here for a one-time project. The tools, automations, and strategies we put in place are designed to grow as your business grows — so you never outgrow what we built." },
];

function HowWeWork() {
  return (
    <section className="relative z-0 bg-black pb-16 lg:pb-24 pt-16 md:pt-[140px] lg:pt-[200px] overflow-visible">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">
        <h2 className="text-white text-center font-bold text-2xl lg:text-[36px] mb-12">HOW WE WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {principles.map((p) => (
            <div
              key={p.num}
              className="rounded-[8px] p-7 flex flex-col gap-3 text-center items-center card-dark-gradient"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(58,185,132,0.25)", minHeight: 300 }}
            >
              <div className="text-fed-green font-bold text-[64px] leading-none">{p.num}.</div>
              <h3 className="text-white font-bold text-[20px] leading-tight">{p.title}</h3>
              <p className="text-white/85 text-[13px] leading-[1.6] mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ── Meet the Founder ─────────────────────────────────── */
function FounderSection() {
  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #000 0%, #09271A 50%, #000 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
        <img
          src={ericPresenting}
          alt="Eric Sullivan presenting a Future Edge Developments website"
          className="w-full h-auto rounded-[8px] object-cover"
          style={{
            border: "1px solid rgba(119,199,157,0.5)",
            boxShadow: "0 0 0 1px rgba(119,199,157,0.15), 0 0 24px rgba(58,185,132,0.15)",
          }}
        />
        <div
          className="rounded-[8px] p-6 lg:p-8 flex flex-col gap-4"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(9,39,26,0.6) 100%)",
            border: "1px solid rgba(119,199,157,0.5)",
            boxShadow: "0 0 0 1px rgba(119,199,157,0.15), 0 0 24px rgba(58,185,132,0.15)",
          }}
        >
          <span className="text-white/70 text-sm font-bold uppercase tracking-wider">
            Meet the Founder
          </span>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-white font-bold text-2xl lg:text-[32px] leading-tight tracking-wide">
              ERIC SULLIVAN
            </h2>
            <p className="text-fed-green italic font-medium text-base">Founder &amp; CEO</p>
          </div>
          <p className="text-white/85 text-base leading-[1.7]">
            The engine behind our software and strategy, Eric is the one translating big client needs into smooth digital systems. Whether it's building automated pipelines, troubleshooting tech, or mapping out full-scale brand growth, Eric's always two steps ahead. He's the guy clients talk to when they want real solutions — not fluff — and he makes sure every site, system, and automation runs with purpose.
          </p>
          <a
            href="https://linkedin.com/in/eric-sullivan2113/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 h-[44px] px-6 rounded-[4px] text-fed-green text-sm font-medium transition-all hover:opacity-80"
            style={{ border: "1px solid rgba(119,199,157,0.5)" }}
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

/* ── What It's Like To Work With Us ───────────────────── */
const workSteps = [
  { num: "1", title: "Strategy Call", desc: "We learn your business, your goals, and where you're stuck.", Icon: PhoneCall },
  { num: "2", title: "Custom Proposal", desc: "You get a clear plan built around your needs, not a cookie-cutter package.", Icon: Paperclip },
  { num: "3", title: "Build & Launch", desc: "We handle everything. You stay in the loop, always.", Icon: PenTool },
  { num: "4", title: "Grow Together", desc: "Ongoing support, optimization, and automation as your business scales.", Icon: Headphones },
];

function WorkWithUs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);
  const [box, setBox] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      setBox({ w: cRect.width, h: cRect.height });
      const next: typeof lines = [];
      for (let i = 0; i < cardRefs.current.length - 1; i++) {
        const a = cardRefs.current[i];
        const b = cardRefs.current[i + 1];
        if (!a || !b) continue;
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        // Exit right edge of card N at ~25% down from its top
        const x1 = ar.right - cRect.left;
        const y1 = ar.top - cRect.top + ar.height * 0.25;
        // Enter top edge of card N+1, ~25% in from its left
        const x2 = br.left - cRect.left + br.width * 0.25;
        const y2 = br.top - cRect.top;
        next.push({ x1, y1, x2, y2 });
      }
      setLines(next);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    cardRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const cardClass =
    "group overflow-hidden rounded-[10px] p-6 flex flex-col gap-3 card-dark-gradient transition-all duration-300 hover:[background:linear-gradient(180deg,#3AB984_0%,#1F6B47_100%)]";
  const cardStyle: CSSProperties = {
    border: "1.5px solid rgba(119,199,157,0.85)",
    boxShadow:
      "0 14px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(119,199,157,0.45), 0 0 36px rgba(58,185,132,0.65)",
    minHeight: 250,
  };

  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #09271A 0%, #000 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-right mb-12">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-tight">
            WHAT IT'S LIKE TO WORK WITH US
          </h2>
          <p className="text-fed-green text-base mt-2">From first call to full launch, here's what to expect.</p>
        </div>

        {/* Staggered cards (desktop) */}
        <div
          ref={containerRef}
          className="relative mx-auto hidden lg:block"
          style={{ width: 1118, height: 620 }}
        >
          {/* connector lines computed from measured card positions */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={box.w || 1118}
            height={box.h || 620}
            fill="none"
          >
            <defs>
              <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {lines.map((l, idx) => (
              <path
                key={idx}
                d={`M${l.x1} ${l.y1} H${l.x2} V${l.y2}`}
                stroke="#3AB984"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#greenGlow)"
              />
            ))}
          </svg>

          {workSteps.map((s, i) => {
            const positions = [
              { left: 0, top: 0 },
              { left: 286, top: 90 },
              { left: 572, top: 180 },
              { left: 858, top: 270 },
            ];
            const Icon = s.Icon;
            return (
              <div
                key={s.num}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`absolute w-[260px] ${cardClass}`}
                style={{ ...positions[i], ...cardStyle }}
              >
                <Icon
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 pointer-events-none"
                  size={150}
                  strokeWidth={1.25}
                />
                <div className="relative text-fed-green font-bold text-[56px] leading-none">{s.num}.</div>
                <h3 className="relative text-white font-bold text-[22px] mt-2">{s.title}</h3>
                <p className="relative text-white/85 text-[13px] leading-[1.55]">{s.desc}</p>
              </div>
            );
          })}

          {/* Decorative green dots in bottom-left corner */}
          <div className="absolute left-0 bottom-0">
            <GreenDots variant="6" />
          </div>
        </div>

        {/* Mobile/tablet stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden max-w-[700px] mx-auto">
          {workSteps.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.num}
                className={`relative ${cardClass} p-5`}
                style={{ ...cardStyle, minHeight: 200 }}
              >
                <Icon
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/10 pointer-events-none"
                  size={120}
                  strokeWidth={1.25}
                />
                <div className="relative text-fed-green font-bold text-[40px] leading-none">{s.num}.</div>
                <h3 className="relative text-white font-bold text-[18px] mt-1">{s.title}</h3>
                <p className="relative text-white/85 text-xs leading-[1.5]">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ── Closing CTA ──────────────────────────────────────── */
function ClosingCTA() {
  return (
    <section className="relative w-full bg-black py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          className="relative overflow-hidden rounded-[8px] border border-white"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, #3AB984 100%)",
          }}
        >
          {/* Circuit pattern - right */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f20226c60a49372056fa5ddb1b5af1baad408b69?width=430"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-auto opacity-60 pointer-events-none select-none hidden md:block"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center p-6 lg:p-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-white font-bold text-2xl lg:text-[28px] leading-[1.3]">
                READY TO BUILD SOMETHING GREAT?
              </h2>
              <p className="text-white text-base lg:text-[16px] leading-[1.4] max-w-[480px]">
                Let's talk about your business and what a Future Edge system could look like for you.
              </p>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5228be916b7b6a4697415d648cf0b065701d2e3e?width=528"
                alt="Future Edge Developments"
                className="h-[42px] lg:h-[52px] w-auto object-contain mt-2"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))" }}
              />
            </div>

            <Link
              to="/contact#book"
              className="inline-flex items-center justify-center h-[56px] px-8 rounded-[8px] text-fed-green font-medium text-base bg-black border border-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-black/80 transition w-full md:w-[248px]"
            >
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      <main>
        <AboutHero />
        <SetsApart />
        <Mission />
        <HowWeWork />
        <FounderSection />
        <TeamSection />
        <StoriesSection />
        <IndustriesSection />
        <WorkWithUs />
        <ClosingCTA />
      </main>
    </div>
  );
}
