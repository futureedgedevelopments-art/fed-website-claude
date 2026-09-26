import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GreenDots from "@/components/GreenDots";
import Footer from "@/components/Footer";
import { HowWeHelp } from "@/components/home/HowWeHelp";
import { SocialProof } from "@/components/home/SocialProof";
import { Industries } from "@/components/home/Industries";
import { CTA } from "@/components/home/CTA";

/* ── Hero Section ───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative w-full min-h-[669px] overflow-hidden hero-gradient flex items-center">
      {/* Circuit board pattern - left */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/cc0556866514ca6ea9d141250f1d858c41178c12?width=1266"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-auto max-w-[50%] object-cover opacity-50 pointer-events-none select-none"
      />

      {/* Circuit board pattern - right SVG */}
      <svg
        className="absolute right-0 top-0 h-full w-auto opacity-50 pointer-events-none select-none hidden lg:block"
        viewBox="0 0 636 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "44%" }}
      >
        <g opacity="0.5" clipPath="url(#heroClip)">
          <g opacity="0.5">
            <path d="M634.984 594.863H395.173L311.597 511.309H227.672L184.257 467.921H68.1563" stroke="white" strokeMiterlimit="10"/>
            <path d="M356.55 594.863L317.724 556.032H264.407" stroke="white" strokeMiterlimit="10"/>
            <path d="M329.456 594.863L317.172 582.587H196.106L132.479 519H99.6064" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 567.06H411.871L330.531 485.799H256.799" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 536.703H436.787L372.29 472.245H340.288L312.119 444.065H264.407" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 519H455.227L343.744 407.584H264.407" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 495.55H463.91C460.658 495.55 345.196 376.908 345.196 376.908" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 452.191H463.91L377.168 365.503" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 428.364H474.742L442.973 396.614" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 402.36H552.801" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 376.879H506.076" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 296.169L591.685 339.441" stroke="white" strokeMiterlimit="10"/>
            <path d="M442.973 346H483.425L517.024 317.79H613.32" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 249.56L590.03 294.515H482.322" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 214.879L581.434 268.424" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 174.799H608.209L529.685 253.275H471.49L426.188 298.549" stroke="white" strokeMiterlimit="10"/>
            <path d="M576.672 185.624L528.088 234.178H461.732L420.438 275.476" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 155.297H442.973L417.127 129.467H256.799L187.51 198.713" stroke="white" strokeMiterlimit="10"/>
            <path d="M206.937 262.562H310.493L378.475 194.621H538.978L575.336 158.286" stroke="white" strokeMiterlimit="10"/>
            <path d="M391.137 174.799H558.667" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 136.868H506.076" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 111.677L594.096 70.8136H464.462" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 70.8136L614.365 50.237H432.199L408.735 73.6868" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 41.008L620.841 26.8743H488.71" stroke="white" strokeMiterlimit="10"/>
            <path d="M634.984 1.4511H420.438L362.329 59.524" stroke="white" strokeMiterlimit="10"/>
            <path d="M256.799 564.303C261.37 564.303 265.075 560.6 265.075 556.032C265.075 551.464 261.37 547.76 256.799 547.76C252.228 547.76 248.522 551.464 248.522 556.032C248.522 560.6 252.228 564.303 256.799 564.303Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M92.3174 527.271C96.8883 527.271 100.594 523.568 100.594 519C100.594 514.432 96.8883 510.728 92.3174 510.728C87.7465 510.728 84.0411 514.432 84.0411 519C84.0411 523.568 87.7465 527.271 92.3174 527.271Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M59.88 476.192C64.4509 476.192 68.1563 472.489 68.1563 467.921C68.1563 463.353 64.4509 459.65 59.88 459.65C55.3091 459.65 51.6036 463.353 51.6036 467.921C51.6036 472.489 55.3091 476.192 59.88 476.192Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M256.799 452.307C261.37 452.307 265.075 448.604 265.075 444.036C265.075 439.468 261.37 435.765 256.799 435.765C252.228 435.765 248.522 439.468 248.522 444.036C248.522 448.604 252.228 452.307 256.799 452.307Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M257.409 415.856C261.979 415.856 265.685 412.153 265.685 407.584C265.685 403.016 261.979 399.313 257.409 399.313C252.838 399.313 249.132 403.016 249.132 407.584C249.132 412.153 252.838 415.856 257.409 415.856Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M340.114 379.288C344.685 379.288 348.39 375.585 348.39 371.017C348.39 366.449 344.685 362.745 340.114 362.745C335.543 362.745 331.837 366.449 331.837 371.017C331.837 375.585 335.543 379.288 340.114 379.288Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M371.302 368.463C375.873 368.463 379.579 364.76 379.579 360.192C379.579 355.623 375.873 351.92 371.302 351.92C366.732 351.92 363.026 355.623 363.026 360.192C363.026 364.76 366.732 368.463 371.302 368.463Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M438.762 398.704C443.333 398.704 447.038 395.001 447.038 390.432C447.038 385.864 443.333 382.161 438.762 382.161C434.191 382.161 430.486 385.864 430.486 390.432C430.486 395.001 434.191 398.704 438.762 398.704Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M498.352 385.15C502.922 385.15 506.628 381.447 506.628 376.879C506.628 372.311 502.922 368.608 498.352 368.608C493.781 368.608 490.075 372.311 490.075 376.879C490.075 381.447 493.781 385.15 498.352 385.15Z" stroke="white" strokeMiterlimit="10"/>
            <path d="M166.659 598.984L131.608 563.926H17.9756" stroke="white" strokeMiterlimit="10"/>
            <path d="M9.7283 572.197C14.2992 572.197 18.0046 568.494 18.0046 563.926C18.0046 559.358 14.2992 555.654 9.7283 555.654C5.15741 555.654 1.45197 559.358 1.45197 563.926C1.45197 568.494 5.15741 572.197 9.7283 572.197Z" stroke="white" strokeMiterlimit="10"/>
          </g>
          <rect x="424" y="406" width="10" height="10" fill="#3AB984" fillOpacity="0.65"/>
          <rect x="444" y="406" width="10" height="10" fill="#3AB984" fillOpacity="0.65"/>
          <rect x="464" y="406" width="10" height="10" fill="#3AB984" fillOpacity="0.65"/>
          <rect x="454" y="396" width="10" height="10" fill="#3AB984" fillOpacity="0.65"/>
          <rect x="434" y="396" width="10" height="10" fill="#3AB984" fillOpacity="0.65"/>
        </g>
        <defs>
          <clipPath id="heroClip">
            <rect width="636" height="600" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-[89px]">
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[580px] py-10 gap-8">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 xl:w-[55%]">
            {/* Book a Strategy Call button */}
            <div>
              <Link
                to="/contact#book"
                className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-black font-medium text-base transition-all hover:opacity-90"
                style={{ background: "#D9D9D9", minWidth: 286 }}
              >
                Book a Strategy Call →
              </Link>
            </div>

            {/* Hero text glass box */}
            <div className="relative">
              <GreenDots variant="6" />
              <div className="glass-card mt-2 p-5 lg:p-6 w-full max-w-[616px]">
                <h1 className="text-white font-bold text-3xl lg:text-[48px] leading-[1.4]">
                  WE BUILD THE SYSTEMS<br />
                  THAT LET YOU<br />
                  SCALE.
                </h1>
              </div>
            </div>

            {/* Watch How It Works button */}
            <div>
              <Link
                to="/work"
                className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
                style={{ minWidth: 286 }}
              >
                Watch How It Works →
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-1/2 xl:w-[45%]">
            {/* FED Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/54b0b54580dae036577624d6d48cb8be25fef0c8?width=794"
              alt="Future Edge Developments"
              className="w-[260px] lg:w-[340px] xl:w-[397px] h-auto object-contain"
              style={{ filter: "drop-shadow(-8px 16px 20px rgba(0,0,0,0.25))" }}
            />
            {/* Description text */}
            <p className="text-white text-base lg:text-xl xl:text-2xl font-medium text-right leading-[1.4] max-w-[520px]">
              Custom automation,{" "}
              integrations, and digital infrastructure for service{" "}
              businesses ready to stop surviving and start growing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Pain Points Section ────────────────────────────────── */
const painPoints = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/fe1cb3b1dcbfd1d1c007188192f084d4fb5c23e2?width=236",
    alt: "Time management",
    text: "You're spending hours on tasks that should take minutes",
    active: true,
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/63102a7d2634b46f05c76ea3ac22327d2338fe08?width=236",
    alt: "Leads",
    text: "Leads fall through the cracks with no follow-up system in place",
    active: false,
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/1c621960856454eda86dd38acda25f52ac5eef32?width=232",
    alt: "Business work",
    text: "You're working IN the business instead of ON the business",
    active: false,
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/4422ac809046ff754080ddab040214f6502d5ce6?width=232",
    alt: "Business growth",
    text: "Growth feels impossible when you're stuck doing everything yourself",
    active: false,
  },
];

function PainPointsSection() {
  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-white font-bold text-2xl lg:text-[36px] text-center mb-10 lg:mb-14">
          SOUND FAMILIAR?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {painPoints.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-[14px] rounded-[8px] p-[16px_24px] w-full max-w-[238px] ${
                card.active ? "card-green-gradient" : "card-dark-gradient"
              }`}
              style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.07)", overflow: "hidden" }}
            >
              <img
                src={card.icon}
                alt={card.alt}
                className="w-[118px] h-[118px] object-contain flex-shrink-0"
              />
              <p className="text-white text-center text-sm font-normal leading-[20px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Transformation / Solution Section ─────────────────── */
function TransformationSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[888px] overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0b8a6d923ed9dd3f38474aed61c934983608eee8?width=2880"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ backdropFilter: "blur(2px)" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20 flex items-center min-h-[600px] lg:min-h-[888px]">
        <div className="w-full max-w-[640px]">
          {/* Decorative dots */}
          <GreenDots variant="5" />

          {/* Glass card */}
          <div
            className="mt-4 p-8 lg:p-10"
            style={{
              background: "rgba(217,217,217,0.20)",
              border: "1px solid rgba(0,0,0,0.50)",
              borderRadius: 8,
            }}
          >
            <h2 className="text-white font-bold text-2xl lg:text-[36px] leading-[1.4] mb-6">
              WHAT IF YOUR BUSINESS RAN LIKE A MACHINE?
            </h2>
            <ul className="space-y-2">
              {[
                "Leads automatically captured and followed up",
                "Estimates generated in seconds, not hours",
                "Systems that work while you sleep",
                "Finally time to focus on growth, not firefighting",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white text-base lg:text-[24px] font-medium leading-[50px] flex items-start gap-3"
                >
                  <span className="text-fed-green mt-1 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-[52px] px-10 rounded-[4px] text-white font-bold text-base btn-green-gradient transition-all hover:opacity-90"
                style={{ minWidth: 286 }}
              >
                Ready to get to work? →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <PainPointsSection />
        <TransformationSection />
        <HowWeHelp />
        <SocialProof />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
