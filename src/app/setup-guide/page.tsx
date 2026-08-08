import type { Metadata } from "next";
import { SetupHero } from "@/components/setup/setup-hero";
import { SetupSteps } from "@/components/setup/setup-steps";
import { DevicesGrid } from "@/components/setup/devices-grid";
import { DeviceGuides } from "@/components/setup/device-guides";
import { SetupHelpCta } from "@/components/setup/setup-help-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "IPTV Setup Guide | Install on Smart TV, Fire Stick, Mobile & PC",
  description:
    "Step-by-step IPTV Germany setup guide for Samsung, LG, Fire TV Stick, Android TV, iPhone, Android and PC. Get streaming in under 5 minutes with WhatsApp support.",
  alternates: { canonical: "/setup-guide" },
  openGraph: {
    title: "IPTV Setup Guide | Install on Smart TV, Fire Stick, Mobile & PC",
    description:
      "Step-by-step IPTV Germany setup guide for every device. Get streaming in under 5 minutes.",
    url: `${siteConfig.url}/setup-guide`,
  },
};

export default function SetupGuidePage() {
  return (
    <>
      <SetupHero />
      <SetupSteps />
      <DevicesGrid />
      <DeviceGuides />
      <SetupHelpCta />
    </>
  );
}
