const logos = [
  "https://api.builder.io/api/v1/image/assets/TEMP/f538fca15f1e63df57563c65c62a0acc0a2e6289?width=142",
  "https://api.builder.io/api/v1/image/assets/TEMP/b3b3b5e213960f30c400a1db94853e891c2fff60?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/49b97299befd462d4b6f08589911bee81e3a8076?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/c45fbac72470e0c72989fd54e0c6b4b648051c5d?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/07831d511a54dca1a425c1db47e527a459f563a0?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/b2d2252bb252b2a8f153b88ec5201d3893f2b06b?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/acbf54de7aae3ff1595be46d90fbc8a3740c92df?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/8e3d422e04079b454c867b9d6f7ac12e96cf9fc8?width=196",
  "https://api.builder.io/api/v1/image/assets/TEMP/f561038fd6bd42463a89d3be54dc66532752ad9b?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/5fb181791f67a2c0d82cbd7e2771ffeb24c458d5?width=194",
  "https://api.builder.io/api/v1/image/assets/TEMP/bf3f765347b20de99d5aef517910b393f24ab6c6?width=194",
];

const testimonials = [
  {
    quote:
      '"Future edge has taken my business to the professional level at an affordable price. I never thought managing my leads, customers and invoices could be so easy. The website I was made is extremely well made and has helped me grow my business exponentially."',
    name: "Kyle Baden",
    company: "KM Property Care MA",
  },
  {
    quote:
      '"Everything from professionalism, making sure you\'re satisfied, being helpful, etc. They did a great job making a website for my business! Extremely happy with the outcome. & most importantly being on the team"',
    name: "George Theofanis",
    company: "Foam N Go Detailing",
  },
  {
    quote:
      '"These guys are amazing! They will always put you first and help you out in any way possible. It has made my business more efficient and I\'m extremely happy about the service they provide."',
    name: "Josh Rogato",
    company: "Mistah Clean Mobile Detailing",
  },
  {
    quote:
      '"What an awesome experience! They are professional and very personable as well. My business is my life and their streamlined process has made it so easy for me to focus on what I need to do inside my business without worry since I know they\'re taking care of my website needs."',
    name: "Ryan Phipps",
    company: "Greatness Awaits Coaching",
  },
];

function Star() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#3AB984" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialProof() {
  return (
    <section className="relative w-full" style={{ background: "linear-gradient(180deg, #3AB984 0%, #3AB984 11%, #000 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 lg:pt-24 pb-20">
        <h2 className="text-black font-semibold text-2xl lg:text-[36px] text-center leading-[1.4]" style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}>
          TRUSTED BY SERVICE BUSINESSES READY TO SCALE
        </h2>
      </div>
      <div className="w-full overflow-hidden marquee-mask" style={{ background: "rgba(217,217,217,0.20)", boxShadow: "0 4px 4px rgba(0,0,0,0.25)" }}>
        <div className="flex w-max animate-marquee py-4">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 lg:gap-12 px-4 lg:px-6 shrink-0" aria-hidden={dup === 1}>
              {logos.map((src, i) => (
                <img key={i} src={src} alt="" className="h-[70px] lg:h-[90px] w-auto object-contain shrink-0" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-[8px] bg-black p-6 flex flex-col items-center text-center gap-4"
              style={{ border: "2px solid rgba(0,0,0,0.5)", boxShadow: "2px 4px 4px 2px rgba(245,245,245,0.30)", minHeight: 346 }}
            >
              <p className="text-white text-sm lg:text-base leading-[1.4] flex-1">{t.quote}</p>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
              </div>
              <div>
                <span className="text-white font-semibold text-[20px]">- {t.name} </span>
                <span className="text-fed-green font-semibold text-[18px]">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
