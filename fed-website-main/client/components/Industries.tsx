import { Link } from "react-router-dom";
// Shared by the Home and About pages. Grouped from the industries in the
// Notion Clients database so the two pages always tell the same story.
const industries = [
  { name: "Towing", desc: "Tow companies and property managers running guest parking and enforcement", href: "https://autotowing.app" },
  { name: "Landscaping", desc: "Landscapers, lawn care, and property maintenance crews", href: "https://autoscaping.com" },
  { name: "Auto Detailing", desc: "Mobile and shop detailers, from solo operators to multi-crew companies", href: "/contact" },
  { name: "Home Services", desc: "Cleaning, junk removal, and crews that live on quotes and bookings", href: "/contact" },
  { name: "Sports & Nonprofits", desc: "Booster clubs, sports programs, and Greek life chapters", href: "/contact" },
  { name: "B2B & Retail", desc: "Data destruction, telecom, security, real estate, apparel, and e-commerce", href: "/contact" },
];

export function Industries() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white text-center font-semibold text-2xl lg:text-[36px] leading-[1.4] mb-10">
          INDUSTRIES WE SERVE
        </h2>

        <div className="rounded-[8px] border border-white overflow-hidden max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className={`flex flex-col items-center text-center p-4 gap-3 ${i > 0 ? "border-l border-white/30" : ""}`}
              >
                <div
                  className="w-full py-3 px-2 text-white font-medium text-[18px] leading-tight min-h-[72px] flex items-center justify-center"
                  style={{ background: i === 0 ? "linear-gradient(90deg, rgba(0,0,0,0.50) 0%, #3AB984 100%)" : "linear-gradient(90deg, rgba(0,0,0,0.50) 0%, #3AB984 100%)" }}
                >
                  {ind.name}
                </div>
                <p className="text-white/85 text-sm leading-[1.4] flex-1 px-2">{ind.desc}</p>
                {ind.href.startsWith("http") ? (
                  <a
                    href={ind.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[32px] w-[128px] rounded-[4px] text-white text-sm font-medium btn-white-gradient mb-2"
                  >
                    Learn More →
                  </a>
                ) : (
                  <Link
                    to={ind.href}
                    className="inline-flex items-center justify-center h-[32px] w-[128px] rounded-[4px] text-white text-sm font-medium btn-white-gradient mb-2"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-8 text-sm">
          <span className="text-white/85">No problem is too big. Don't see your industry here? Just </span>
          <a href="tel:+18447225678" className="text-fed-green font-bold italic hover:underline">give us a call</a>
          <span className="text-white/85">. We're here to help!</span>
        </p>
      </div>
    </section>
  );
}
