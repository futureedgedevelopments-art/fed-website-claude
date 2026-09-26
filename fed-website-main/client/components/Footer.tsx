import { Link } from "react-router-dom";
import logo from "@/assets/fed-badge-logo.png";
import { SOCIAL_LINKS } from "@/lib/socials";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok },
];

const services = ["Custom Solutions", "Digital Marketing", "Towing Platform", "Website Development"];

export default function Footer() {
  return (
    <footer
      className="relative w-full pt-10 pb-16"
      style={{ background: "linear-gradient(0deg, #3AB984 0%, #26855E 30.77%, #000 96.15%)", borderTop: "1px solid #fff" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Future Edge Developments" className="w-[140px] h-auto object-contain" style={{ boxShadow: "-8px 16px 20px rgba(0,0,0,0.25)" }} />
        </div>
        <div className="text-center">
          <h4 className="text-fed-green font-medium text-[20px] mb-3">Navigation</h4>
          <ul className="text-white text-xs font-medium space-y-1.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-fed-green transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-fed-green font-medium text-[20px] mb-3">Our Services</h4>
          <ul className="text-white text-xs font-medium space-y-1.5">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-fed-green font-medium text-[20px] mb-3">Connect With Us</h4>
          <ul className="text-white text-xs font-medium space-y-1.5">
            <li><a href="tel:+18447225678" className="hover:text-fed-green transition-colors">Phone: (844) 722-5678</a></li>
            <li><a href="mailto:info@futureedgedev.com" className="hover:text-fed-green transition-colors">Email: info@futureedgedev.com</a></li>
            <li><a href="mailto:support@futureedgedev.com" className="hover:text-fed-green transition-colors">Support: support@futureedgedev.com</a></li>
            {socials.filter((s) => s.href).map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fed-green transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-10 px-6 lg:px-16">
        <div className="border-t border-white/30 pt-4 text-center">
          <span className="text-fed-green text-base font-medium">Powered by Future Edge Developments</span>
        </div>
      </div>
    </footer>
  );
}
