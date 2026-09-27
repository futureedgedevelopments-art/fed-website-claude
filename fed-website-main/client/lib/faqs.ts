// Shown on the Contact page and published as FAQPage structured data.
import { BUSINESS } from "@/lib/business";

export const FAQS = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Field-service and small businesses like towing, property care, detailing, and junk removal that are ready to stop doing everything by hand and start growing with real systems behind them.",
  },
  {
    q: "How quickly will I hear back?",
    a: `We reply to every message within 24 hours. Need something right now? Call us at ${BUSINESS.phoneDisplay}.`,
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
