export const siteConfig = {
  name: "Atlas TV",
  shortName: "Atlas TV",
  domain: "myatlastv.com",
  url: "https://myatlastv.com",
  description:
    "Premium IPTV subscription with 15,000+ live channels, HD, 4K & 8K streaming, local & international content, and instant activation. Trusted by thousands of streamers worldwide.",
  locale: "en",
  themeColor: "#0b0e1c",
  supportEmail: "support@myatlastv.com",
  whatsapp: {
    numberDisplay: "+44 7723 781927",
    numberIntl: "447723781927",
  },
  social: {
    whatsapp: "https://wa.me/447723781927",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Setup Guide", href: "/setup-guide" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  badge?: string;
  devices: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Formule 1 écran – 12 mois",
    price: 30,
    period: "/year",
    devices: "1 device at a time",
    features: [
      "15,000+ live channels",
      "Local & international channels",
      "Full HD & 4K streaming",
      "7-day EPG programme guide",
      "Stable anti-freeze servers",
      "24/7 WhatsApp support",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    tagline: "Formule 2 écrans – 12 mois",
    price: 45,
    period: "/year",
    badge: "Most Popular",
    devices: "2 devices at a time",
    highlighted: true,
    features: [
      "Everything in Basic, plus:",
      "8K Ultra HD streaming",
      "7-day catch-up TV & replay",
      "Arabic channel package",
      "Priority EU streaming servers",
      "Priority WhatsApp support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Formule 3 écrans – 12 mois",
    price: 55,
    period: "/year",
    badge: "Best Value",
    devices: "3 devices at a time",
    features: [
      "Everything in Plus, plus:",
      "Full sports channel package",
      "VIP dedicated support line",
      "Early access to new channels",
      "Highest-priority server routing",
      "Free setup assistance",
    ],
  },
];

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.numberIntl}?text=${encoded}`;
}

export function planWhatsAppMessage(planName: string, price: number) {
  return `Hi! I'm interested in the ${planName} plan (€${price}/year) on ${siteConfig.domain}. Can you help me get started?`;
}

export const trialWhatsAppMessage = `Hi! I'd like to start my free trial with Atlas TV. Can you send me the details?`;
export const setupHelpWhatsAppMessage = `Hi! I need help setting up Atlas TV on my device. Can you assist me?`;
export const generalWhatsAppMessage = `Hi! I have a question about Atlas TV. Can you help me?`;
