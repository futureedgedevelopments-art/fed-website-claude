import { useEffect, useRef, useState } from "react";
import { CalendarClock, Headset, LifeBuoy, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── Contact details ────────────────────────────────────── */
const CONTACT_EMAIL = "info@futureedgedev.com";
const SUPPORT_EMAIL = "support@futureedgedev.com";
const CONTACT_PHONE = "(844) 722-5678";

/* ── GoHighLevel embeds ─────────────────────────────────── */
const GHL_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const CONTACT_FORM_ID = "f557KPXDzO76Tbk9kyc8";

const calendars = {
  strategy: {
    tab: "Free Strategy Call",
    title: "BOOK YOUR FREE STRATEGY CALL",
    text: "Pick a time for a free 30-minute call. We'll map out where your time is going and what we'd automate first.",
    src: "https://api.leadconnectorhq.com/widget/booking/Sl5NL7IdJJsnQ4zlwjga",
    iframeId: "DMzg7EzQFyaNQcB2z7Jx_1790434869135",
  },
  support: {
    tab: "Customer Service",
    title: "BOOK A CUSTOMER SERVICE CALL",
    text: "Already working with us? Grab a time with our team and we'll get you sorted.",
    src: "https://api.leadconnectorhq.com/widget/booking/7yXBMy5qDK2XDAo9p6n8",
    iframeId: "DMzg7EzQFyaNQcB2z7Jx_1790434902614",
  },
} as const;

type CalendarKey = keyof typeof calendars;

/** Loads the GHL embed script once; it auto-resizes the form and calendar iframes. */
function useGhlEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

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

/* ── Contact Form (GHL "Contact Us" form) ───────────────── */
function ContactForm() {
  return (
    <div className="glass-dark p-6 lg:p-10 flex flex-col gap-5">
      <h2 className="text-white font-bold text-2xl lg:text-[32px] leading-[1.3]">
        SEND US A MESSAGE
      </h2>
      <p className="text-white/80 text-base -mt-2">
        Fill this out and we'll get back to you within 24 hours.
      </p>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${CONTACT_FORM_ID}`}
        id={`inline-${CONTACT_FORM_ID}`}
        title="Contact Us"
        className="w-full rounded-[3px] border-none"
        style={{ height: 667 }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us"
        data-height="667"
        data-layout-iframe-id={`inline-${CONTACT_FORM_ID}`}
        data-form-id={CONTACT_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
    </div>
  );
}

/* ── Contact Info Sidebar ───────────────────────────────── */
const contactMethods = [
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:+1${CONTACT_PHONE.replace(/\D/g, "")}` },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: LifeBuoy, label: "Client Support", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
];

function ContactInfo({ onBook }: { onBook: (key: CalendarKey) => void }) {
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
        <button
          type="button"
          onClick={() => onBook("strategy")}
          className="self-start inline-flex items-center justify-center h-[48px] px-8 rounded-[4px] text-black font-medium text-base transition-all hover:opacity-90"
          style={{ background: "#D9D9D9" }}
        >
          Book a Strategy Call →
        </button>
      </div>

      {/* Customer service card */}
      <div
        className="card-dark-gradient rounded-[8px] p-6 lg:p-8 flex flex-col gap-4"
        style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)" }}
      >
        <Headset className="w-10 h-10 text-white" />
        <h3 className="text-white font-bold text-xl lg:text-2xl leading-[1.3]">
          ALREADY A CLIENT?
        </h3>
        <p className="text-white text-sm lg:text-base leading-[1.5]">
          Need a hand with your systems? Book a customer service call with
          our team.
        </p>
        <button
          type="button"
          onClick={() => onBook("support")}
          className="self-start inline-flex items-center justify-center h-[48px] px-8 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
        >
          Get Support →
        </button>
      </div>

      {/* Direct contact methods */}
      {contactMethods.map(({ icon: Icon, label, value, href }) => (
        <a key={label} href={href} className="glass-dark p-4 flex items-center gap-4 transition-all hover:border-fed-green">
          <div className="w-12 h-12 rounded-[8px] flex items-center justify-center flex-shrink-0 nav-active">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{label}</span>
            <span className="text-white text-base font-medium">{value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function ContactSection({ onBook }: { onBook: (key: CalendarKey) => void }) {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-start">
        <ContactForm />
        <ContactInfo onBook={onBook} />
      </div>
    </section>
  );
}

/* ── Booking Calendars (GHL) ────────────────────────────── */
function BookingSection({
  active,
  onChange,
  sectionRef,
}: {
  active: CalendarKey;
  onChange: (key: CalendarKey) => void;
  sectionRef: React.RefObject<HTMLElement>;
}) {
  const current = calendars[active];
  return (
    <section ref={sectionRef} id="book" className="bg-black pb-16 lg:pb-20 scroll-mt-[100px]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <GreenDots variant="5" />
        <div className="glass-dark mt-4 p-6 lg:p-10 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(calendars) as CalendarKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => onChange(key)}
                className={`flex items-center justify-center px-6 h-[39px] rounded-lg text-white text-sm font-medium transition-all ${
                  active === key ? "nav-active" : "nav-inactive"
                }`}
              >
                {calendars[key].tab}
              </button>
            ))}
          </div>
          <div>
            <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4]">
              {current.title}
            </h2>
            <p className="text-white/80 text-base mt-2">{current.text}</p>
          </div>
          {/* Only the selected calendar is rendered: the GHL embed script sets
              inline display styles, so hiding an iframe with a class doesn't stick */}
          <iframe
            key={active}
            src={current.src}
            id={current.iframeId}
            title={current.tab}
            allow="payment"
            scrolling="no"
            className="w-full border-none overflow-hidden rounded-[4px]"
            style={{ minHeight: 700 }}
          />
        </div>
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
    a: "Field-service and small businesses — towing, property care, detailing, junk removal, and similar — that are ready to stop doing everything by hand and start growing with real systems behind them.",
  },
  {
    q: "How quickly will I hear back?",
    a: `We reply to every message within 24 hours. Need something right now? Call us at ${CONTACT_PHONE}.`,
  },
  {
    q: "Is the strategy call really free?",
    a: "Yes. It's a free 30-minute, no-pressure conversation to see where automation can make the biggest difference for you. If we're not a fit, we'll tell you.",
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
  useGhlEmbedScript();
  const [calendar, setCalendar] = useState<CalendarKey>("strategy");
  const bookingRef = useRef<HTMLElement>(null);

  const openCalendar = (key: CalendarKey) => {
    setCalendar(key);
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Links like /contact#book land straight on the calendar
  useEffect(() => {
    if (window.location.hash === "#book") bookingRef.current?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <ContactHero />
        <ContactSection onBook={openCalendar} />
        <BookingSection active={calendar} onChange={setCalendar} sectionRef={bookingRef} />
        <NextStepsSection />
        <FaqSection />
      </main>
    </div>
  );
}
