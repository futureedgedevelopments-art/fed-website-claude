import { useEffect } from "react";
import GreenDots from "@/components/GreenDots";

export function CTA() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]',
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.type = "text/javascript";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-center font-semibold text-2xl lg:text-[36px] leading-[1.4] mb-12">
          <span className="text-white">READY TO STOP </span>
          <span className="text-fed-green">DROWNING</span>
          <span className="text-white"> IN MANUAL WORK?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <GreenDots variant="6" />
            <p className="text-white text-base leading-[1.6]">
              Use the booking calendar to schedule a free consultation with our team. Prefer to call or email? Visit our contact page for more info, or use the buttons below.
            </p>
            <div className="flex flex-col gap-4 max-w-[305px]">
              <a
                href="tel:+18447225678"
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[4px] text-white font-bold text-base"
                style={{ background: "linear-gradient(270deg, rgba(0,0,0,0.50) 0%, #3AB984 100%)", border: "1px solid #fff" }}
              >
                Call Now →
              </a>
              <a
                href="mailto:info@futureedgedev.com"
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[4px] text-white font-bold text-base btn-white-gradient"
                style={{ borderColor: "#fff" }}
              >
                Send Us an Email →
              </a>
            </div>
          </div>

          <div
            className="relative rounded-[8px] overflow-hidden mx-auto w-full p-2 sm:p-3 min-h-[640px] sm:min-h-[720px] lg:min-h-[780px]"
            style={{
              background: "linear-gradient(135deg, rgba(58,185,132,0.18) 0%, rgba(0,0,0,0.50) 100%)",
              border: "1px solid #3AB984",
              boxShadow: "0 10px 40px -10px rgba(58,185,132,0.35)",
            }}
          >
            <div className="rounded-[6px] bg-white" style={{ minHeight: "620px" }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/Sl5NL7IdJJsnQ4zlwjga"
                scrolling="no"
                id="IdbykygYZz3t2UrqD3PR_1778277835934"
                title="Book a consultation"
                style={{ width: "100%", minHeight: "620px", height: "100%", border: "none", display: "block", borderRadius: "6px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
