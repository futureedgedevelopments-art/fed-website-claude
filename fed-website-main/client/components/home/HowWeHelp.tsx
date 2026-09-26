import { Link } from "react-router-dom";
import GreenDots from "@/components/GreenDots";
import fedBadge from "@/assets/fed-badge-logo.png";

const services = [
  {
    title: "CUSTOM\nSOLUTIONS",
    desc: "Custom automation systems, pricing engines, client portals, workflow tools, internal dashboards, integrations",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/aec2950f4bb9b0ebc447f631cbcc4e45ba8b5d09?width=150",
    active: true,
  },
  {
    title: "TOWING\nPLATFORM",
    desc: "All-in-one platform: permit management, property manager portals, dispatch, invoicing, driver tracking, reporting",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/0788c248da3f09c8ae56757d8188a6d4d17e10a3?width=154",
    active: false,
  },
  {
    title: "DIGITAL\nMARKETING",
    desc: "Websites, SEO, Google Business optimization, CRM setup, lead generation, branding, social media presence",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/356dee3e31f8f64c039dcc750f9a0fb4ec687eb0?width=154",
    active: false,
  },
];

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <div
      className={`flex flex-col items-center gap-[14px] rounded-[8px] p-6 w-full max-w-[260px] ${s.active ? "card-green-gradient" : "card-dark-gradient"}`}
      style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.07)" }}
    >
      <img src={s.icon} alt="" className="w-[64px] h-[64px] object-contain" />
      <h3 className="text-white text-center font-semibold text-[22px] leading-[28px] whitespace-pre-line">
        {s.title}
      </h3>
      <p className="text-white text-center text-xs font-normal leading-[20px]">{s.desc}</p>
      <Link
        to="/services"
        className="text-white text-center text-sm font-semibold mt-auto"
        style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
      >
        Learn More →
      </Link>
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
            THREE WAYS WE TRANSFORM
            <br />
            YOUR OPERATIONS
          </h2>
        </div>

        {/* Desktop: triangular layout with center medallion */}
        <div className="hidden lg:block mt-16">
          <div className="relative mx-auto" style={{ maxWidth: 920, height: 640 }}>
            {/* Triangle connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 920 640"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* top card center (460, 130) -> bottom-left (175, 510) -> bottom-right (745, 510) -> back */}
              <polygon
                points="460,130 175,510 745,510"
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
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: 383 }}>
              <img
                src={fedBadge}
                alt="Future Edge Developments"
                className="w-[150px] h-[150px] object-contain"
                style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.45))" }}
              />
            </div>

            {/* Bottom-left - Towing */}
            <div className="absolute" style={{ left: 45, bottom: 0 }}>
              <ServiceCard s={services[1]} />
            </div>

            {/* Bottom-right - Digital Marketing */}
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
