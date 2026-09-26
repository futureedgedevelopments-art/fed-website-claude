import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  Facebook,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  Palette,
  Paperclip,
  PenTool,
  Phone,
  PhoneCall,
  Wrench,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS } from "@/lib/socials";
import imacMockup from "@/assets/imac-mockup.png";
import bizCardFront from "@/assets/business-card-front.png";
import bizCardBack from "@/assets/business-card-back.png";
import ericPresenting from "@/assets/eric-presenting.jpg";

// Businesses served, per the Clients database in Notion (29 as of Sep 2026)
const BUSINESSES_SERVED = "25+";

// Meet the Team (named bios) is built but hidden for now; while it's off,
// the founder section and the generalized team cards show instead.
const SHOW_TEAM = false;

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
            Future Edge Developments builds the systems behind service businesses: the towing companies, landscapers, detailers, and crews who are great at the work and tired of the paperwork. We swap the spreadsheets, sticky notes, and five disconnected apps for one setup built around how you actually run. The website is where it starts. The system behind it is what keeps you growing.
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
            Most agencies hand you a website and walk away. We build everything around it: the CRM, the automations, the lead follow-up, and the strategy. Your business keeps growing long after launch day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              { title: BUSINESSES_SERVED, subtitle: "BUSINESSES SERVED", desc: "From brand-new startups to crews with years in the field, across towing, landscaping, detailing, and a dozen other industries." },
              { title: "All-in-One Platform", desc: "Your website, CRM, automations, and reporting in one place. No more logging into five apps to run one job." },
              { title: "Automation Built In", desc: "Follow-ups, review requests, and reminders are part of the build from day one, not something bolted on later." },
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
            We exist to level the playing field. Small and mid-sized businesses deserve the same tools and systems the big companies run on, without the complexity, the bloat, or the agency runaround. That's why Future Edge exists. We put the website, the automation, and the strategy into one system so owners can get back to running their business.
          </p>
        </div>

        <p className="text-black italic text-xs lg:text-sm">
          Built for the businesses that keep things running.
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
  { num: "1", title: "Systems Before Design", desc: "We figure out how your business works before we pick a single color. The system comes first, then a design that turns visitors into booked jobs." },
  { num: "2", title: "Transparent by Default", desc: "No smoke and mirrors. You'll always know what we're building, why we're building it, and what to expect from it. Clear answers, fast turnarounds." },
  { num: "3", title: "Built to Scale With You", desc: "We're not here for one project and a handshake. Everything we set up is built to grow with your business, so you never outgrow it." },
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
/* ── Meet The Team ────────────────────────────────────── */
const team = [
  {
    name: "ERIC SULLIVAN",
    role: "Founder & CEO",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/cf7f9140947411eaea149ffbac597c1eb34b3fb7?width=617",
    bio: "Eric turns what a client actually needs into systems that run. Automated pipelines, troubleshooting, full-scale growth plans: if it keeps a business moving, he has already mapped it out. Clients call Eric when they want real answers, not fluff, and he makes sure every site, system, and automation earns its place.",
  },
  {
    name: "MATT BOEN",
    role: "Sales & Client Growth Lead",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/179de4cc0f1a1322fe433a38c26a372de0062425?width=617",
    bio: "Matt's the go-to guy when it comes to connecting with clients and understanding what they truly need. From discovery calls to long-term support, he's all about making sure small businesses feel seen, heard, and supported. Whether he's coming up with marketing ideas or helping a client understand how to scale, Matt brings energy, clarity, and a relentless drive to help every partner win.",
  },
  {
    name: "BRENDAN FOLEY",
    role: "Automation Systems Architect",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/dde6d167bb5a8c638c5b50c38ed494dd038b17d8?width=617",
    bio: "Brendan builds the systems that run behind the scenes. Pipelines, automations, integrations, invoicing workflows. If data needs to move without someone doing it by hand, that's his lane. With a background in design and computer science, he brings a rare blend of technical problem-solving and visual thinking to every build. Brendan is the reason our clients' backend operations actually work how they should.",
  },
  {
    name: "PETER SULLIVAN",
    role: "Operations & Analytics",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b8a756ed2acbfbb568c33d8ce74f739c5729a4c1?width=617",
    bio: "Peter joined FED with a Master's in Business Analytics and got to work right away, troubleshooting live systems and supporting backend operations from day one. He brings analytical rigor to how FED documents, organizes, and optimizes its internal and client-facing processes. As FED scales, Peter ensures the operational foundation keeps pace with growth.",
  },
  {
    name: "JOEY LeCLAIRE",
    role: "Business Development",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/9ba9eaf4953e6be60f1fa3aec066360c9d3e3645?width=617",
    bio: "Joey focuses on identifying and connecting with businesses that are ready to stop leaving growth on the table. With a background in B2B outreach and lead qualification, he knows how to cut through the noise and start real conversations with decision-makers. Joey's job is simple: find the right businesses, ask the right questions, and get them in front of the FED team.",
  },
  {
    name: "WOLF SAMSON",
    role: "Lead Creative Strategist",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/ba18c364e91d5099b97080d68fcd2a27447ab43f?width=617",
    bio: "Wolf is the creative engine behind FED's client-facing work. From brand identity and website builds to content strategy and marketing campaigns, he turns business goals into visual systems that convert. Looking good is the starting point. He also thinks about positioning, messaging, and the UX behind every design decision. When a client's brand needs to compete, Wolf is the one making that happen.",
  },
  {
    name: "COLE SMITH",
    role: "Business Development",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/1ea4500661e66b677f1285dd06296584bcf67765?width=617",
    bio: "Cole handles direct outreach: showing up, building relationships, and creating opportunities through real engagement with business owners. He brings energy and persistence to every conversation, and he's often the first person a future client meets from FED.",
  },
  {
    name: "MICHAEL SULLIVAN",
    role: "Media Specialist & Photography",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/343b722170147678ceec77e2059dd8731ac1146d?width=617",
    bio: "Michael captures the moments that bring our clients' brands to life, behind the lens and in the edit bay. Whether it's shooting content for a new site, filming testimonials, or producing sleek visuals for social campaigns, he makes sure every story looks as good as it sounds. With an eye for detail and a knack for timing, Michael helps transform everyday businesses into standout brands on screen.",
  },
];

function MeetTheTeam() {
  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #000 0%, #09271A 50%, #000 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white text-center font-bold text-2xl lg:text-[36px] mb-12 lg:mb-16">
          MEET THE TEAM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1100px] mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-[8px] p-5 flex flex-col items-center text-center gap-3"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(9,39,26,0.6) 100%)",
                border: "1px solid rgba(119,199,157,0.5)",
                boxShadow: "0 0 0 1px rgba(119,199,157,0.15), 0 0 24px rgba(58,185,132,0.15)",
              }}
            >
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="text-white font-bold text-[18px] leading-tight tracking-wide">{m.name}</h3>
                <p className="text-fed-green italic font-medium text-sm">{m.role}</p>
              </div>
              <img
                src={m.img}
                alt={m.name}
                className="w-full max-w-[280px] aspect-[3/4] object-cover rounded-[6px]"
                style={{ border: "1px solid rgba(119,199,157,0.4)" }}
              />
              <p className="text-white/85 text-xs leading-[1.5] max-w-[320px]">{m.bio}</p>
              <div className="flex items-center justify-center gap-2 w-full pt-1">
                <a href="#" aria-label="LinkedIn" className="flex items-center justify-center h-9 w-12 rounded-[4px] text-fed-green hover:bg-fed-green/10 transition" style={{ border: "1px solid rgba(119,199,157,0.5)" }}><Linkedin size={16} /></a>
                <a href="tel:+18447225678" aria-label="Phone" className="flex items-center justify-center h-9 w-12 rounded-[4px] text-fed-green hover:bg-fed-green/10 transition" style={{ border: "1px solid rgba(119,199,157,0.5)" }}><Phone size={16} /></a>
                <a href="mailto:info@futureedgedev.com" aria-label="Email" className="flex items-center justify-center h-9 w-12 rounded-[4px] text-fed-green hover:bg-fed-green/10 transition" style={{ border: "1px solid rgba(119,199,157,0.5)" }}><Mail size={16} /></a>
              </div>
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
            Eric turns what a client actually needs into systems that run. Automated pipelines, troubleshooting, full-scale growth plans: if it keeps a business moving, he has already mapped it out. Clients call Eric when they want real answers, not fluff, and he makes sure every site, system, and automation earns its place.
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
          A hands-on crew covering every piece of the build. You work directly
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
    built: "Leads now answer a few texts about property size, service type, and photos before he ever picks up the phone. Estimates, invoicing, and review requests run on their own.",
  },
  {
    industry: "Towing",
    problem: "Guest parking permits for 200+ properties managed through legacy software.",
    built: "A full permit management platform with property manager dashboards, automatic rule enforcement, and a clean trail from registration to tow.",
  },
  {
    industry: "Mobile Detailing",
    problem: "The owner was stuck chasing quotes and paperwork instead of growing his team.",
    built: "A custom quote calculator and a client journey that runs itself, from the first quote request to the final review request.",
  },
  {
    industry: "High School Boosters",
    problem: "Coaches had no easy way to see budgets or get reimbursed.",
    built: "A mobile-friendly platform where coaches check their budget, submit reimbursements, and get announcements from their phone.",
  },
  {
    industry: "Fraternity Chapter",
    problem: "Everything reset every year when the exec board turned over.",
    built: "A chapter management system for events, alumni outreach, attendance, and documents, with a leadership handoff built in.",
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
/* ── Stay In The Loop ─────────────────────────────────── */
const socials = [
  { name: "INSTAGRAM", handle: "@futureedgdev", desc: "Behind the scenes, client spotlights, and team updates.", Icon: Instagram, href: SOCIAL_LINKS.instagram },
  { name: "LINKEDIN", handle: "Future Edge Developments", desc: "Industry insights, company news, and professional updates.", Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
  { name: "FACEBOOK", handle: "Future Edge Developments", desc: "Client features, business tips, and company updates delivered straight to your feed.", Icon: Facebook, href: SOCIAL_LINKS.facebook },
  { name: "TIKTOK", handle: "@futureedgedevelopments", desc: "Quick tips, tech breakdowns, and a look at how we build growth systems for real businesses.", Icon: Headphones, href: SOCIAL_LINKS.tiktok },
];

function StayInLoop() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4] mb-4">STAY IN THE LOOP</h2>
          <p className="text-fed-green font-medium text-base lg:text-[20px] leading-[1.4] max-w-[830px] mx-auto">
            Follow along as we build, share insights, and spotlight the businesses we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
          <ul className="flex flex-col gap-3">
            {socials.map(({ name, handle, desc, Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-[6px] p-2 -mx-2 hover:bg-white/5 transition-colors"
                >
                  <span
                    className="flex items-center justify-center h-9 w-9 rounded-[6px] text-fed-green shrink-0 mt-0.5 group-hover:bg-fed-green/10 transition-colors"
                    style={{ border: "1px solid rgba(119,199,157,0.5)" }}
                  >
                    <Icon size={16} />
                  </span>
                  <span className="leading-[1.4]">
                    <span className="text-fed-green font-semibold text-sm">{name}</span>
                    <span className="text-white font-medium text-sm"> {handle}</span>
                    <span className="text-white/80 font-normal italic text-xs"> · {desc}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 lg:items-end lg:min-w-[220px]"
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center h-[44px] px-6 rounded-[8px] text-white font-semibold text-base btn-green-gradient hover:opacity-90 transition w-full lg:w-[200px]"
            >
              Our Newsletter →
            </button>
            <p className="text-white/85 italic font-light text-xs leading-[1.4] lg:text-right max-w-[200px]">
              Practical automation and growth tips, plus FED updates, straight to your inbox.
            </p>
          </form>
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
        {SHOW_TEAM ? (
          <MeetTheTeam />
        ) : (
          <>
            <FounderSection />
            <TeamSection />
          </>
        )}
        <StoriesSection />
        <IndustriesSection />
        <WorkWithUs />
        <StayInLoop />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
