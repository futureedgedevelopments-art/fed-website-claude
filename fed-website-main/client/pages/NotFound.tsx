import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { NOT_FOUND_META } from "@/lib/seo";

export default function NotFound() {
  const location = useLocation();
  usePageMeta(NOT_FOUND_META);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      <main>
        <section className="relative w-full overflow-hidden hero-gradient">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cc0556866514ca6ea9d141250f1d858c41178c12?width=1266"
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-auto max-w-[50%] object-cover opacity-50 pointer-events-none select-none"
          />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-[89px]">
            <div className="flex flex-col items-center text-center py-20 lg:py-32 gap-6">
              <GreenDots variant="5" />
              <div className="glass-card p-5 lg:p-6 w-full max-w-[640px]">
                <p className="text-fed-green font-bold text-5xl lg:text-[72px] leading-none">404</p>
                <h1 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4] mt-3">
                  THIS PAGE DOESN'T EXIST.
                </h1>
              </div>
              <p className="text-white text-base lg:text-xl font-medium leading-[1.4] max-w-[560px]">
                The link may be old or mistyped. Let's get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
                >
                  Back to Home →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-black font-medium text-base transition-all hover:opacity-90"
                  style={{ background: "#D9D9D9" }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
