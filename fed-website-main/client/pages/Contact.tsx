import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── Contact details — TODO: replace with real FED details ─ */
const CONTACT_EMAIL = "hello@futureedgedev.com";
const CONTACT_PHONE = "(555) 555-5555";
const CONTACT_LOCATION = "Serving service businesses nationwide";

/* ── Hero Section ───────────────────────────────────────── */
function ContactHero() {
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
          <div className="glass-card p-5 lg:p-6 w-full max-w-[760px]">
            <h1 className="text-white font-bold text-3xl lg:text-[48px] leading-[1.4]">
              LET'S BUILD YOUR<br />
              NEXT SYSTEM.
            </h1>
          </div>
          <p className="text-white text-base lg:text-xl font-medium leading-[1.4] max-w-[640px]">
            Tell us where your business is getting stuck. We'll show you
            exactly what we'd automate first — no fluff, no pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Form ───────────────────────────────────────── */
const services = [
  "Workflow Automation",
  "CRM & Lead Follow-Up",
  "Integrations",
  "Website & Digital Infrastructure",
  "Not sure yet",
];

const inputClass =
  "w-full h-[48px] px-4 rounded-[4px] bg-black/50 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-fed-green focus:ring-1 focus:ring-fed-green transition-colors";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to the CRM / form endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-dark p-8 lg:p-10 flex flex-col items-center text-center gap-4 min-h-[480px] justify-center">
        <CheckCircle2 className="w-16 h-16 text-fed-green" />
        <h3 className="text-white font-bold text-2xl lg:text-[28px]">
          MESSAGE RECEIVED.
        </h3>
        <p className="text-white/80 text-base max-w-[400px]">
          Thanks for reaching out. Someone from our team will get back to you
          within one business day.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
        >
          Back to Home →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-dark p-6 lg:p-10 flex flex-col gap-5">
      <h2 className="text-white font-bold text-2xl lg:text-[32px] leading-[1.3]">
        SEND US A MESSAGE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Name
          <input name="name" required autoComplete="name" placeholder="Jane Smith" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Business Name
          <input name="company" autoComplete="organization" placeholder="Smith Landscaping" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" className={inputClass} />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-white">
        What do you need help with?
        <select name="service" defaultValue="" required className={`${inputClass} appearance-none`}>
          <option value="" disabled>
            Select one
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-black">
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-white">
        Tell us about your business
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What's eating up your time right now? What would you automate if you could?"
          className={`${inputClass} h-auto py-3 resize-none`}
        />
      </label>

      <button
        type="submit"
        className="self-start inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
        style={{ minWidth: 286 }}
      >
        Send Message →
      </button>
    </form>
  );
}

/* ── Contact Info Sidebar ───────────────────────────────── */
const contactMethods = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\D/g, "")}` },
  { icon: MapPin, label: "Location", value: CONTACT_LOCATION },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Strategy call card */}
      <div
        className="card-green-gradient rounded-[8px] p-6 lg:p-8 flex flex-col gap-4"
        style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)" }}
      >
        <CalendarClock className="w-10 h-10 text-white" />
        <h3 className="text-white font-bold text-xl lg:text-2xl leading-[1.3]">
          PREFER TO TALK IT THROUGH?
        </h3>
        <p className="text-white text-sm lg:text-base leading-[1.5]">
          Book a free 30-minute strategy call. We'll map out where your time
          is going and what we'd automate first.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Strategy%20Call`}
          className="self-start inline-flex items-center justify-center h-[48px] px-8 rounded-[4px] text-black font-medium text-base transition-all hover:opacity-90"
          style={{ background: "#D9D9D9" }}
        >
          Book a Strategy Call →
        </a>
      </div>

      {/* Direct contact methods */}
      {contactMethods.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <>
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center flex-shrink-0 nav-active">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{label}</span>
              <span className="text-white text-base font-medium">{value}</span>
            </div>
          </>
        );
        return href ? (
          <a key={label} href={href} className="glass-dark p-4 flex items-center gap-4 transition-all hover:border-fed-green">
            {content}
          </a>
        ) : (
          <div key={label} className="glass-dark p-4 flex items-center gap-4">
            {content}
          </div>
        );
      })}
    </div>
  );
}

function ContactSection() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

/* ── What Happens Next ──────────────────────────────────── */
const steps = [
  {
    title: "We Listen",
    text: "A quick call to understand your business, your bottlenecks, and your goals.",
  },
  {
    title: "We Map It Out",
    text: "You get a clear plan showing what we'll build and the time it'll save you.",
  },
  {
    title: "We Build",
    text: "We design, integrate, and test your systems — you keep running the business.",
  },
  {
    title: "You Scale",
    text: "Your business runs like a machine, and you finally get to focus on growth.",
  },
];

function NextStepsSection() {
  return (
    <section className="bg-black pb-16 lg:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center mb-10 lg:mb-14">
          WHAT HAPPENS NEXT?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex flex-col items-center gap-[14px] rounded-[8px] p-[24px] w-full max-w-[280px] ${
                i === 0 ? "card-green-gradient" : "card-dark-gradient"
              }`}
              style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)" }}
            >
              <span className="text-white font-extrabold text-[48px] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-bold text-lg uppercase">{step.title}</h3>
              <p className="text-white text-center text-sm leading-[20px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Service businesses — landscaping, towing, home services, and more — that are ready to stop doing everything by hand and start growing with real systems behind them.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We respond to every message within one business day, usually much sooner.",
  },
  {
    q: "Is the strategy call really free?",
    a: "Yes. It's a no-pressure conversation to see where automation can make the biggest difference for you. If we're not a fit, we'll tell you.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle the build, the integrations, and the setup. You just tell us how your business runs.",
  },
];

function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden hero-gradient py-16 lg:py-20">
      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-16">
        <GreenDots variant="6" />
        <div className="glass-dark mt-4 p-6 lg:p-10">
          <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4] mb-4">
            QUESTIONS?
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-white/30">
                <AccordionTrigger className="text-white text-left text-base lg:text-lg font-medium hover:no-underline hover:text-fed-green">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm lg:text-base leading-[1.6]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <ContactHero />
        <ContactSection />
        <NextStepsSection />
        <FaqSection />
      </main>
    </div>
  );
}
