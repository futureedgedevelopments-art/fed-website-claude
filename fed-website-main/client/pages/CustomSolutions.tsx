import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { CTA } from "@/components/home/CTA";
import heroImg from "@/assets/team-laptop.jpg";
import transformationImg from "@/assets/team-dashboard.jpg";
import iconCalculator from "@/assets/icon-calculator.png";
import iconWorkflow from "@/assets/icon-workflow.png";
import iconPortal from "@/assets/icon-portal.png";
import iconOps from "@/assets/icon-ops.png";
import iconIntegrations from "@/assets/icon-integrations.png";
import iconReporting from "@/assets/icon-reporting.png";
import iconCall from "@/assets/icon-call.png";
import fedLogo from "@/assets/fed-logo-dark-bg.png";
import iconPainClock from "@/assets/icon-pain-clock.png";
import iconPainChart from "@/assets/icon-pain-chart.png";
import iconPainPerson from "@/assets/icon-pain-person.png";
import iconPainHourglass from "@/assets/icon-pain-hourglass.png";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PAGE_META } from "@/lib/seo";



const painPoints = [
  {
    title: (
      <>
        You're spending your Sunday doing{" "}
        <span className="text-fed-green">quotes</span> instead of being with your family.
      </>
    ),
    body: "Manual estimating and follow-ups are eating the time that should be yours.",
    icon: iconPainClock,
  },
  {
    title: (
      <>
        You know a <span className="text-fed-green">lead</span> fell through the cracks. You just don't know which one.
      </>
    ),
    body: "Without a real system, opportunities disappear and you only find out too late.",
    icon: iconPainChart,
  },
  {
    title: (
      <>
        You hired someone just to do <span className="text-fed-green">data entry</span> you hate.
      </>
    ),
    body: "Your team is doing human work that a system should be handling automatically.",
    icon: iconPainPerson,
  },
  {
    title: (
      <>
        You could grow faster if you just had <span className="text-fed-green">more time</span>.
      </>
    ),
    body: "The business depends too heavily on you, and there aren't enough hours in the day.",
    icon: iconPainHourglass,
  },
];

const transformationBullets = [
  <><strong>Leads captured and followed up automatically</strong>, so nothing slips through</>,
  <><strong>Estimates and quotes generated in minutes</strong>, not hours</>,
  <>Your team <strong>focused on real work</strong>, not copy-paste busywork</>,
  <>Systems running in the background while you <strong>focus on growth</strong></>,
  <>A business that doesn't shut down when you're not in the room</>,
];

const serviceCards = [
  {
    n: "#1.",
    title: "Custom Pricing Calculators & Estimate Tools",
    body: "Turn a 45-minute quoting process into a 2-minute one. We build tools that generate accurate estimates automatically based on your real pricing logic.",
    icon: iconCalculator,
  },
  {
    n: "#2.",
    title: "Automated Workflows & Follow-Up Systems",
    body: "Never lose a lead to a missed follow-up again. We build the sequences that nurture, respond, and convert while you focus on the work.",
    icon: iconWorkflow,
  },
  {
    n: "#3.",
    title: "Client Portals & Dashboards",
    body: "Give your clients a professional, branded portal to view proposals, sign contracts, track progress, and communicate, all in one place.",
    icon: iconPortal,
  },
  {
    n: "#4.",
    title: "Internal Operations Tools",
    body: "Custom-built tools for the way your team actually works: scheduling, task management, reporting, and internal communication.",
    icon: iconOps,
  },
  {
    n: "#5.",
    title: "Custom Integrations",
    body: "We connect your CRM, scheduling software, invoicing tools, and other platforms into one seamless flow. No more switching tabs or re-entering data.",
    icon: iconIntegrations,
  },
  {
    n: "#6.",
    title: "Data Tracking & Reporting Systems",
    body: "Know your numbers. We build reporting dashboards that give you real-time visibility into leads, revenue, job status, and team performance.",
    icon: iconReporting,
  },
];


const mathRows = [
  { task: "Writing a quote manually", time: "45 min", freq: "5x/week", year: "195 hours" },
  { task: "Following up with leads by hand", time: "20 min", freq: "10x/week", year: "173 hours" },
  { task: "Manually entering job data", time: "15 min", freq: "Daily", year: "91 hours" },
  { task: "Scheduling appointments", time: "25 min", freq: "10x/week", year: "217 hours" },
];

const scalingTestimonials = [
  {
    quote: '"Future edge has taken my business to the professional level at an affordable price. I never thought managing my leads, customers and invoices could be so easy. The website I was made is extremely well made and has helped me grow my business exponentially."',
    name: "Kyle Baden",
    company: "KM Property Care MA",
  },
  {
    quote: '"Everything from professionalism, making sure you\'re satisfied, being helpful, etc. They did a great job making a website for my business! Extremely happy with the outcome. & most importantly being on the team"',
    name: "George Theofanis",
    company: "Foam N Go Detailing",
  },
  {
    quote: '"These guys are amazing! They will always put you first and help you out in any way possible. It has made my business more efficient and I\'m extremely happy about the service they provide."',
    name: "Josh Rogato",
    company: "Mistah Clean Mobile Detailing",
  },
  {
    quote: '"What an awesome experience! They are professional and very personable as well. My business is my life and their streamlined process has made it so easy for me to focus on what I need to do inside my business without worry since I know they\'re taking care of my website needs."',
    name: "Ryan Phipps",
    company: "Greatness Awaits Coaching",
  },
];

const processSteps = [
  {
    n: "1.",
    title: "Discovery Call",
    body: "We learn your business inside and out: the bottlenecks, the manual work, the goals. No cookie-cutter intake forms.",
  },
  {
    n: "2.",
    title: "System Design",
    body: "We map out the exact solution: what it does, how it connects, and what the end result looks like for your team.",
  },
  {
    n: "3.",
    title: "Build & Integrate",
    body: "We build the system and connect it to your existing tools. You stay informed without being buried in the technical details.",
  },
  {
    n: "4.",
    title: "Launch & Train",
    body: "We hand off a fully working system and make sure your team knows how to use it. No documentation dumps, just real walkthroughs.",
  },
  {
    n: "5.",
    title: "Ongoing Support",
    body: "As your business grows, your systems evolve. We're here for updates, optimizations, and new builds.",
  },
];

export default function CustomSolutions() {
  usePageMeta(PAGE_META["/services/custom-solutions"]);
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      <main>
        {/* HERO */}
        <section
          className="relative w-full min-h-[720px] flex items-center pt-[120px] pb-20 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16">
            <div
              className="rounded-[8px] p-8 lg:p-12 max-w-[860px] backdrop-blur-[6px]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <h1 className="text-white font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight uppercase">
                Stop wasting hours on work that should take seconds.
              </h1>
            </div>

            <div className="mt-10 flex flex-col gap-4 max-w-[320px]">
              <a
                href="#book"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[8px] text-white font-semibold text-base btn-green-gradient"
                style={{ border: "1px solid #fff" }}
              >
                Book a Strategy Call →
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[8px] text-white font-semibold text-base bg-black/60"
                style={{ border: "1px solid rgba(255,255,255,0.4)" }}
              >
                See How It Works
              </a>
            </div>

            <div className="mt-16 max-w-[820px] ml-auto text-right">
              <h2 className="text-fed-green font-bold text-[28px] md:text-[34px] mb-4">Custom Solutions</h2>
              <p className="text-white/85 text-base md:text-lg leading-[1.6]">
                We design and build custom automation systems, workflows, and digital infrastructure so your business can scale without adding chaos. If your business runs on manual work, spreadsheets, and memory, we build the system that replaces all of it.
              </p>
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="relative w-full py-20 lg:py-28 bg-black overflow-hidden">
          {/* Grid background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(58,185,132,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(58,185,132,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Center radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(40% 50% at 50% 50%, rgba(58,185,132,0.35) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
          {/* Vignette to fade grid at edges */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 40%, #000 100%)",
            }}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-16">
            <h2 className="text-white font-bold text-2xl md:text-[34px] text-center leading-[1.3] mb-14 uppercase">
              Your business is capable of more. But right now,
              <br /> you're the bottleneck…
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {painPoints.map((p, i) => (
                <div
                  key={i}
                  className="relative rounded-[8px] p-7 min-h-[280px] flex flex-col overflow-hidden"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(58,185,132,0.5)",
                  }}
                >
                  <p className="text-white font-bold text-lg leading-[1.4] max-w-[60%] relative z-10">{p.title}</p>
                  <p className="text-white/75 text-sm leading-[1.6] mt-auto pt-6 max-w-[60%] relative z-10">{p.body}</p>
                  <img
                    src={p.icon}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute right-5 bottom-5 w-[140px] h-[140px] object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className="relative w-full bg-black py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            <h2 className="text-white font-bold text-2xl md:text-[34px] text-center leading-[1.3] mb-12 uppercase">
              Imagine your business running like it was designed to
            </h2>

            {/* Full-width image with green border */}
            <div
              className="rounded-[8px] overflow-hidden aspect-[16/8] bg-cover bg-center mb-14"
              style={{
                backgroundImage: `url(${transformationImg})`,
                border: "2px solid hsl(var(--fed-green) / 0.7)",
              }}
            />

            {/* Bullets left, logo right */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
              <ul className="flex flex-col gap-6">
                {transformationBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-4 text-white text-base md:text-lg leading-[1.55]">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-fed-green text-2xl font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={fedLogo}
                  alt="Future Edge Developments"
                  className="w-[260px] md:w-[320px] h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section
          className="relative w-full py-20 lg:py-28"
          style={{
            background: "radial-gradient(80% 80% at 50% 0%, #0b3d2a 0%, #000 70%)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-14">
              <h2 className="text-white font-bold text-2xl md:text-[34px] uppercase leading-[1.3]">
                Built for the way your business actually works.
              </h2>
              <p className="text-fed-green text-base md:text-lg mt-3">
                Every system we build is designed from scratch around your operations, not adapted from a template.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
              {serviceCards.map((s) => (
                <div
                  key={s.n}
                  className="card-green-gradient rounded-[8px] p-7 lg:p-8 flex flex-col min-h-[340px]"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-white/40 font-bold text-[56px] leading-none">{s.n}</div>
                    <img src={s.icon} alt="" loading="lazy" width={90} height={90} className="w-[90px] h-[90px] object-contain" />
                  </div>
                  <h3 className="text-white font-bold text-xl leading-[1.3] mt-6">{s.title}</h3>
                  <p className="text-white/85 text-sm leading-[1.6] mt-4">{s.body}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href="#book"
                      className="inline-flex items-center justify-center h-[40px] px-5 rounded-[6px] bg-black/60 text-white text-sm font-medium border border-white/15 hover:bg-black/80 transition"
                    >
                      Talk to us about this →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Don't see what you're looking for */}
            <div
              className="mt-10 rounded-[8px] p-7 lg:p-8 grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-6 items-center"
              style={{
                background: "linear-gradient(90deg, rgba(58,185,132,0.25) 0%, rgba(0,0,0,0.6) 100%)",
                border: "1px solid rgba(58,185,132,0.4)",
              }}
            >
              <img src={iconCall} alt="" loading="lazy" width={140} height={140} className="w-[140px] h-[140px] object-contain mx-auto md:mx-0" />
              <div>
                <h3 className="text-fed-green font-bold text-xl mb-2">Don't see exactly what you're looking for?</h3>
                <p className="text-white/85 text-sm leading-[1.6]">
                  Every business is different, and some problems don't fit neatly into a service card. If you have a specific challenge, workflow, or idea in mind, let's talk. We build custom, and that means we start with your problem, not our menu.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-[44px] px-5 rounded-[6px] bg-black text-white text-sm font-semibold border border-white/30"
                >
                  Give Us A Call →
                </Link>
                <span className="text-white/60 text-xs italic">Or book a free strategy call and walk us through it.</span>
              </div>
            </div>
          </div>
        </section>

        {/* TWO-MINUTE MATH */}
        <section className="relative w-full bg-black py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            <h2 className="text-white font-bold text-2xl md:text-[34px] text-center leading-[1.3] mb-12 uppercase">
              <span className="text-fed-green">Two minutes</span> doesn't sound like much…
              <br /> until you do the math.
            </h2>

            <div
              className="rounded-[14px] p-2 md:p-2.5"
              style={{ background: "#77C79D", border: "2px solid #3AB984", boxShadow: "0 0 0 1px rgba(58,185,132,0.4), 0 20px 60px -20px rgba(58,185,132,0.4)" }}
            >
              {/* Header row */}
              <div className="grid grid-cols-4 gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                {["Task", "Time per occurrence", "Frequency", "Time per Year"].map((h) => (
                  <div
                    key={h}
                    className="text-black font-bold text-center text-sm md:text-base py-5 px-2 flex items-center justify-center leading-tight"
                  >
                    {h}
                  </div>
                ))}
              </div>

              {/* Data rows */}
              <div className="flex flex-col gap-1.5 md:gap-2">
                {mathRows.map((r) => (
                  <div key={r.task} className="grid grid-cols-4 gap-1.5 md:gap-2">
                    <div className="bg-black text-white text-center text-sm md:text-base rounded-[8px] py-5 px-3 flex items-center justify-center">
                      {r.task}
                    </div>
                    <div className="bg-black text-center rounded-[8px] py-5 px-3 flex items-center justify-center">
                      <span className="text-fed-green font-bold text-lg md:text-xl">{r.time.split(" ")[0]}</span>
                      <span className="text-white font-bold text-sm md:text-base ml-1">{r.time.split(" ")[1]}</span>
                    </div>
                    <div className="bg-black text-white text-center text-sm md:text-base rounded-[8px] py-5 px-3 flex items-center justify-center">
                      {r.freq}
                    </div>
                    <div className="bg-black text-white font-bold text-center text-sm md:text-base rounded-[8px] py-5 px-3 flex items-center justify-center">
                      {r.year}
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="grid grid-cols-4 gap-1.5 md:gap-2 mt-1">
                  <div className="text-black font-bold text-sm md:text-base py-5 px-4 flex items-center">
                    Total time lost →
                  </div>
                  <div />
                  <div />
                  <div className="text-center py-3 px-2 flex flex-col items-center justify-center leading-tight">
                    <span className="text-red-600 font-bold text-lg md:text-xl">676+</span>
                    <span className="text-black font-bold text-sm md:text-base">hours/year</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white/85 text-base italic mt-8">
              That's <span className="text-fed-green not-italic font-semibold">over 16 full work weeks</span> spent on tasks a system could handle.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="#book"
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[8px] text-white font-semibold text-base btn-green-gradient"
                style={{ border: "1px solid #fff" }}
              >
                Let's Build You a System. Book a Strategy Call →
              </a>
            </div>
          </div>
        </section>

        <ProcessSection />

        {/* TESTIMONIALS / SCALING */}
        <section
          className="relative w-full py-20 lg:py-28 overflow-hidden"
          style={{ background: "radial-gradient(80% 80% at 50% 0%, #0b3d2a 0%, #000 70%)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(58,185,132,0.6) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-16">
            <h2 className="text-white font-bold text-2xl md:text-[34px] text-right leading-[1.3] mb-12 uppercase">
              Businesses that stopped surviving
              <br /> and started <span className="text-fed-green">SCALING.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {scalingTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-[8px] bg-black p-6 flex flex-col items-center text-center gap-4"
                  style={{
                    border: "1px solid rgba(119,199,157,0.55)",
                    boxShadow: "0 0 24px rgba(58,185,132,0.25), 2px 4px 4px 2px rgba(245,245,245,0.18)",
                    minHeight: 346,
                  }}
                >
                  <p className="text-white text-sm leading-[1.5] flex-1">{t.quote}</p>
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#3AB984" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ))}
                  </div>
                  <div className="leading-tight">
                    <span className="text-white font-semibold text-[17px]">- {t.name} </span>
                    <span className="text-fed-green font-semibold text-[15px] block mt-1">{t.company}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Hours Saved for Clients", num: "15000+", pct: 100 },
                { label: "Custom Systems Built", num: "100+", pct: 100 },
                { label: "Manual Tasks Automated", num: "5000+", pct: 100 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="relative h-[56px] rounded-[6px] bg-white/10 overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div
                    className="absolute inset-y-0 left-0 flex items-center px-5"
                    style={{ width: `${s.pct}%`, backgroundColor: "#3AB984" }}
                  >
                    <span className="text-black font-bold text-base whitespace-nowrap">
                      <span className="font-extrabold">{s.num}</span> {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Booking */}
        <div id="book">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ── Our Process: diagonal staircase (matches About page) ── */
function ProcessSection() {
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
      const next: { x1: number; y1: number; x2: number; y2: number }[] = [];
      for (let i = 0; i < cardRefs.current.length - 1; i++) {
        const a = cardRefs.current[i];
        const b = cardRefs.current[i + 1];
        if (!a || !b) continue;
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        const x1 = ar.right - cRect.left;
        const y1 = ar.top - cRect.top + ar.height * 0.25;
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

  const positions = [
    { left: 0, top: 0 },
    { left: 220, top: 80 },
    { left: 440, top: 160 },
    { left: 660, top: 240 },
    { left: 880, top: 320 },
  ];
  const W = 1120;
  const H = 620;

  return (
    <section
      id="process"
      className="relative w-full py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #000 0%, #09271A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-right mb-12">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] uppercase leading-tight">
            How it works: Our Process
          </h2>
          <p className="text-fed-green text-base mt-2">
            From problem to built. Here's how we do it.
          </p>
        </div>

        {/* Desktop staircase */}
        <div
          ref={containerRef}
          className="relative mx-auto hidden lg:block"
          style={{ width: W, height: H }}
        >
          <svg
            className="absolute inset-0 pointer-events-none"
            width={box.w || W}
            height={box.h || H}
            fill="none"
          >
            <defs>
              <filter id="processGreenGlow" x="-50%" y="-50%" width="200%" height="200%">
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
                filter="url(#processGreenGlow)"
              />
            ))}
          </svg>

          {processSteps.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`absolute w-[230px] ${cardClass}`}
              style={{ ...positions[i], ...cardStyle }}
            >
              <div className="relative text-fed-green font-bold text-[52px] leading-none">{s.n}</div>
              <h3 className="relative text-white font-bold text-[20px] mt-1">{s.title}</h3>
              <p className="relative text-white/85 text-[12.5px] leading-[1.55]">{s.body}</p>
            </div>
          ))}

          <div className="absolute left-0 bottom-0">
            <GreenDots variant="6" />
          </div>
        </div>

        {/* Mobile / tablet stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden max-w-[700px] mx-auto">
          {processSteps.map((s) => (
            <div key={s.n} className={`relative ${cardClass} p-5`} style={{ ...cardStyle, minHeight: 200 }}>
              <div className="relative text-fed-green font-bold text-[40px] leading-none">{s.n}</div>
              <h3 className="relative text-white font-bold text-[18px] mt-1">{s.title}</h3>
              <p className="relative text-white/85 text-xs leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
