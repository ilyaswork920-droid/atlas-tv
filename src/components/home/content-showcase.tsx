"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { planWhatsAppMessage } from "@/lib/site-config";

const blocks = [
  {
    eyebrow: "8K Experience",
    title: "Cinema-grade picture, right in your living room",
    description:
      "Stream in true 8K Ultra HD on supported channels and devices, with adaptive bitrate so quality never drops when your connection dips.",
    image: "/images/cinema-seats.jpg",
    alt: "Empty cinema hall with premium red seating representing 8K Ultra HD picture quality",
    bullets: [
      "8K, 4K & Full HD tiers on every plan",
      "10 Mbps minimum for HD, 50+ Mbps for 8K",
      "HEVC H.265 for a sharper picture at lower data",
    ],
    reverse: false,
    planId: "plus",
    planName: "Plus",
    price: 45,
  },
  {
    eyebrow: "Channel Library",
    title: "15,000+ channels, one simple subscription",
    description:
      "German and international entertainment, sports, news and kids channels — all organised in a clean, fast programme guide.",
    image: "/images/content-landscape-tv.jpg",
    alt: "Large smart TV displaying vivid content in a bright modern living room",
    bullets: [
      "German broadcast channels included on every plan",
      "International entertainment, news & kids categories",
      "7-day EPG so you never miss what's on",
    ],
    reverse: true,
    planId: "basic",
    planName: "Basic",
    price: 30,
  },
];

export function ContentShowcase() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-edge flex flex-col gap-24 sm:gap-28">
        {blocks.map((block) => (
          <div
            key={block.title}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
              block.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal direction={block.reverse ? "right" : "left"}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <Image
                  src={block.image}
                  alt={block.alt}
                  width={900}
                  height={720}
                  className="aspect-[5/4] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal direction={block.reverse ? "left" : "right"} delay={0.1}>
              <div className="flex flex-col items-start gap-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-purple-300">
                  {block.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-cloud sm:text-3xl">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">{block.description}</p>
                <ul className="flex flex-col gap-3">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-mist">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <WhatsAppButton
                    message={planWhatsAppMessage(block.planName, block.price)}
                    variant="secondary"
                    showArrow
                  >
                    Learn more
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
