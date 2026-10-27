import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PlanCards } from "@/components/pricing/plan-cards";
import { PriceComparison } from "@/components/home/price-comparison";
import { Guarantees } from "@/components/pricing/guarantees";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig, subscriptionPlans } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Subscription Germany | Plans from €20",
  description:
    "Compare IPTV Germany subscription plans from 1 to 12 months, starting at €20. 15,000+ channels, HD/4K/8K streaming, catch-up TV and more. Buy IPTV Germany with instant activation.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "IPTV Subscription Germany | Plans from €20",
    description:
      "Compare IPTV Germany subscription plans from 1 to 12 months, starting at €20. 15,000+ channels, HD/4K/8K streaming and instant activation.",
    url: `${siteConfig.url}/pricing`,
  },
};

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `${siteConfig.name} Subscription Plans`,
  itemListElement: subscriptionPlans.map((plan, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: `${plan.name} Plan`,
    price: plan.price,
    priceCurrency: "EUR",
    url: `${siteConfig.url}/pricing`,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: `${siteConfig.name} ${plan.name} Plan`,
      description: plan.features.join(", "),
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <PricingHero />
      <PlanCards />
      <PriceComparison />
      <Guarantees />
      <FinalCta />
    </>
  );
}
