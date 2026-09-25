import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))" }}
    >
      {/* Desktop nav */}
      <div className="hidden md:flex items-stretch h-[89px] relative overflow-visible">
        {/* Left logo area */}
        <div className="flex items-center pl-3 pr-6 z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2fa9b429da4dce59c47700c0a38d0bd294175274?width=418"
            alt="Future Edge Developments"
            className="h-[70px] w-auto object-contain"
          />
        </div>

        {/* Center nav — visually lower shelf */}
        <div className="flex-1 flex items-end pb-2 justify-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center justify-center px-6 h-[39px] rounded-lg text-white text-sm font-medium transition-all whitespace-nowrap ${
                isActive(link.path) ? "nav-active" : "nav-inactive"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right spacer to keep nav centered */}
        <div className="w-[240px]" />

        {/* White border line at bottom of nav */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "rgba(255,255,255,0.85)" }}
        />
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-[70px] px-4 border-b border-white/20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2fa9b429da4dce59c47700c0a38d0bd294175274?width=418"
            alt="Future Edge Developments"
            className="h-[50px] w-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
        {mobileOpen && (
          <div className="bg-black border-b border-white/20 px-4 pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-center px-6 h-[42px] rounded-lg text-white text-sm font-medium transition-all ${
                  isActive(link.path) ? "nav-active" : "nav-inactive"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
