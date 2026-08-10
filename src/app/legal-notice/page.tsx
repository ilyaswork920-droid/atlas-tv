import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice for Atlas TV (myatlastv.com): website publisher, hosting provider and contact information.",
  alternates: { canonical: "/legal-notice" },
  openGraph: {
    title: `Legal Notice | ${siteConfig.name}`,
    description:
      "Legal notice for Atlas TV (myatlastv.com): website publisher, hosting provider and contact information.",
    url: `${siteConfig.url}/legal-notice`,
  },
};

const sections = [
  {
    h2: "Website Publisher",
    body: [
      `This website (${siteConfig.domain}) is published and operated by ${siteConfig.name}. For any question regarding the identity of the publisher, ownership of the site, or official correspondence, please contact us at ${siteConfig.supportEmail}.`,
    ],
  },
  {
    h2: "Hosting",
    body: [
      "This website is hosted by Vercel Inc., a cloud infrastructure provider. Vercel is responsible for the technical hosting of the site's content and is not involved in the editorial content published on it.",
    ],
  },
  {
    h2: "Intellectual Property",
    body: [
      `All content on this website — including text, graphics, logos, and the ${siteConfig.name} brand — is the property of ${siteConfig.name} unless otherwise stated, and may not be reproduced without prior written consent.`,
    ],
  },
  {
    h2: "Liability",
    body: [
      `${siteConfig.name} strives to keep the information on this website accurate and up to date, but cannot guarantee the absence of errors or omissions. Use of this website is at your own responsibility.`,
    ],
  },
  {
    h2: "Contact",
    body: [
      `For any legal enquiry related to this website, you can reach us by email at ${siteConfig.supportEmail} or via WhatsApp at ${siteConfig.whatsapp.numberDisplay}.`,
    ],
  },
];

export default function LegalNoticePage() {
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
            <span className="text-mist">Legal Notice</span>
          </nav>
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
            Legal Notice
          </h1>
          <p className="max-w-xl text-balance text-base text-muted sm:text-lg">
            Publisher, hosting and contact information for {siteConfig.domain}.
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
