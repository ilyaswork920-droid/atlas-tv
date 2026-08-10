import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Atlas TV (myatlastv.com): what information we collect, how it is used, and how to contact us about your data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Privacy policy for Atlas TV (myatlastv.com): what information we collect, how it is used, and how to contact us about your data.",
    url: `${siteConfig.url}/privacy-policy`,
  },
};

const sections = [
  {
    h2: "Information We Collect",
    body: [
      `When you use the contact form on ${siteConfig.domain}, we collect the information you provide, such as your name, email address and message. When you reach out via WhatsApp, that conversation takes place on WhatsApp's own platform and is subject to WhatsApp's (Meta's) privacy policy.`,
    ],
  },
  {
    h2: "How We Use Your Information",
    body: [
      "We use the information you provide solely to respond to your enquiry, offer support, and help you with your subscription or setup. We do not sell your personal information to third parties.",
    ],
  },
  {
    h2: "Cookies & Tracking",
    body: [
      `${siteConfig.name} does not use advertising cookies or third-party tracking scripts on this website. Only the technical functionality required for the site to work is used.`,
    ],
  },
  {
    h2: "Third-Party Services",
    body: [
      "This website is hosted by Vercel Inc., which may process standard technical logs (such as IP address and request data) as part of delivering the site. Messages sent via WhatsApp are handled by WhatsApp/Meta under their own privacy terms.",
    ],
  },
  {
    h2: "Your Rights",
    body: [
      `You may request access to, correction of, or deletion of any personal information you have shared with us at any time by contacting ${siteConfig.supportEmail}.`,
    ],
  },
  {
    h2: "Contact",
    body: [
      `If you have any questions about this privacy policy or how your information is handled, please contact us at ${siteConfig.supportEmail} or via WhatsApp at ${siteConfig.whatsapp.numberDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[170px] pb-14 sm:pt-[188px] sm:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-30" />
        <div
          aria-hidden
          className="glow-blob left-1/2 top-[-220px] h-[460px] w-[680px] -translate-x-1/2 bg-purple-600/25"
        />
        <div className="container-edge relative flex flex-col items-start gap-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-mist">Privacy Policy</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg">
            What information we collect on {siteConfig.domain}, and how it is used.
          </p>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-28">
        <div className="container-edge">
          <div className="mx-auto flex max-w-2xl flex-col gap-12">
            {sections.map((section, i) => (
              <Reveal key={i}>
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-[1.75rem]">
                    {section.h2}
                  </h2>
                  <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
                    {section.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-purple-300 transition-colors hover:text-white"
              >
                ← Back to homepage
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
