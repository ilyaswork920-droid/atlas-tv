import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { StreamingFeatures } from "@/components/home/streaming-features";
import { Infrastructure } from "@/components/home/infrastructure";
import { ContentShowcase } from "@/components/home/content-showcase";
import { SocialProof } from "@/components/home/social-proof";
import { PriceComparison } from "@/components/home/price-comparison";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { SetupTeaser } from "@/components/home/setup-teaser";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig, plans } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Atlas TV | Premium IPTV Subscription from €30/year",
  description:
    "Stream with Atlas TV: 15,000+ live channels, HD/4K/8K streaming, premium international content. Instant activation, 24/7 WhatsApp support. Free trial available.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Atlas TV | Premium IPTV Subscription from €30/year",
    description:
      "Stream with Atlas TV: 15,000+ live channels, HD/4K/8K streaming, premium international content. Instant activation, 24/7 WhatsApp support.",
    url: siteConfig.url,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IPTV Subscription Service",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  description: siteConfig.description,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} Plan`,
    price: plan.price,
    priceCurrency: "EUR",
    url: `${siteConfig.url}/pricing`,
    availability: "https://schema.org/InStock",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <StreamingFeatures />
      <Infrastructure />
      <ContentShowcase />
      <SocialProof />
      <PriceComparison />
      <PricingTeaser />
      <Testimonials />
      <SetupTeaser />
      <FinalCta />
    </>
  );
}
