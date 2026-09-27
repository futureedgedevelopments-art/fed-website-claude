import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Trees } from "lucide-react";
import GreenDots from "@/components/GreenDots";
import fedBadge from "@/assets/fed-badge-logo.png";

type Service = {
  title: string;
  tagline: string;
  desc: string;
  icon: ReactNode;
  active: boolean;
  cta: { label: string; href: string; external: boolean };
  secondary?: { label: string; href: string };
};

const services: Service[] = [
  {
    title: "CUSTOM\nSOLUTIONS",
    tagline: "Built around how you run.",
    desc: "Pricing engines, client portals, dashboards, and integrations for businesses that have outgrown off-the-shelf tools. Need a website to go with it? We build those too.",
    icon: (
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/aec2950f4bb9b0ebc447f631cbcc4e45ba8b5d09?width=150"
        alt=""
        className="w-[64px] h-[64px] object-contain"
      />
    ),
    active: true,
    cta: { label: "Talk to us", href: "/contact", external: false },
  },
  {
    title: "AUTOTOWING",
    tagline: "Guest parking and tow enforcement, handled.",
    desc: "Permits, property manager portals, tow-eligible queues, and tow and lien notices in one platform for towing companies and property managers. Free trial available.",
    icon: (
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0788c248da3f09c8ae56757d8188a6d4d17e10a3?width=154"
        alt=""
        className="w-[64px] h-[64px] object-contain"
      />
    ),
    active: false,
    cta: { label: "Explore AutoTowing", href: "https://autotowing.app", external: true },
    secondary: { label: "Customer login", href: "https://platform.autotowing.app" },
  },
  {
    title: "AUTOSCAPING",
    tagline: "The front office for landscapers.",
    desc: "Websites, lead capture, quotes, booking, invoicing, and review requests built for landscaping and property maintenance crews. Start with getting found and grow into running the whole operation.",
    icon: <Trees className="w-[64px] h-[64px] text-white" strokeWidth={1.5} />,
    active: false,
    cta: { label: "Explore AutoScaping", href: "https://autoscaping.com", external: true },
  },
];

const ctaClass = "text-white text-center text-sm font-semibold";
const ctaStyle = { textShadow: "0 4px 4px rgba(0,0,0,0.25)" };

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className={`flex flex-col items-center gap-[12px] rounded-[8px] p-6 w-full max-w-[280px] ${s.active ? "card-green-gradient" : "card-dark-gradient"}`}
      style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.07)" }}
    >
      {s.icon}
      <h3 className="text-white text-center font-semibold text-[22px] leading-[28px] whitespace-pre-line">
        {s.title}
      </h3>
      <p className="text-white text-center text-sm font-semibold leading-[20px]">{s.tagline}</p>
      <p className="text-white text-center text-xs font-normal leading-[20px]">{s.desc}</p>
      <div className="mt-auto flex flex-col items-center gap-1">
        {s.cta.external ? (
          <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className={ctaClass} style={ctaStyle}>
            {s.cta.label} →
          </a>
        ) : (
          <Link to={s.cta.href} className={ctaClass} style={ctaStyle}>
            {s.cta.label} →
          </Link>
        )}
        {s.secondary && (
          <a
            href={s.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/75 text-center text-xs underline underline-offset-2 hover:text-white"
          >
            {s.secondary.label}
          </a>
        )}
      </div>
    </div>
  );
}

export function HowWeHelp() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ background: "radial-gradient(94.95% 94.95% at 50% 7.85%, #000 37.99%, #3AB984 100%)" }}
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/06c73d7e9ae7c3c10574b34383d8636328b93c0e?width=1460"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[10%] w-[50%] max-w-[730px] opacity-40 pointer-events-none select-none"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/bb135b22c5c70a3c7698cf0f4c67f9c17442cfeb?width=1460"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[50%] max-w-[730px] opacity-40 pointer-events-none select-none"
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center gap-6">
          <GreenDots variant="6" />
          <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center leading-[1.4] max-w-[820px]">
            THREE WAYS WE TAKE
            <br />
            WORK OFF YOUR PLATE
          </h2>
        </div>

        {/* Desktop: triangular layout with center medallion */}
        <div className="hidden lg:block mt-16">
          <div className="relative mx-auto" style={{ maxWidth: 920, height: 800 }}>
            {/* Triangle connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 920 800"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* top card center -> bottom-left card center -> bottom-right card center -> back */}
              <polygon
                points="460,180 185,630 735,630"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
            </svg>

            {/* Top - Custom Solutions */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 0 }}>
              <ServiceCard s={services[0]} />
            </div>

            {/* Center medallion - positioned at triangle centroid */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: 520 }}>
              <img
                src={fedBadge}
                alt="Future Edge Developments"
                className="w-[150px] h-[150px] object-contain"
                style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.45))" }}
              />
            </div>

            {/* Bottom-left - AutoTowing */}
            <div className="absolute" style={{ left: 45, bottom: 0 }}>
              <ServiceCard s={services[1]} />
            </div>

            {/* Bottom-right - AutoScaping */}
            <div className="absolute" style={{ right: 45, bottom: 0 }}>
              <ServiceCard s={services[2]} />
            </div>
          </div>
        </div>

        {/* Mobile/tablet: stacked */}
        <div className="lg:hidden mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto justify-items-center">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
