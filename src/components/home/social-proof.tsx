"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const cities = [
  "Berlin",
  "Munich",
  "Frankfurt",
  "Hamburg",
  "Cologne",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
];

const stats = [
  { value: "2,800+", label: "Customers across Germany" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "15,000+", label: "Live channels included" },
  { value: "99.9%", label: "Server uptime" },
];

export function SocialProof() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/berlin-skyline.jpg"
          alt="Berlin skyline at night with the TV tower, representing My Atlas TV's nationwide coverage in Germany"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      <div className="container-edge relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Made for Germany"
          title="Trusted by streamers in every major German city"
          description="From Berlin to Munich, thousands of customers rely on My Atlas TV every day."
        />

        <RevealGroup className="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4" stagger={0.06}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={revealItem} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs text-muted sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <RevealGroup className="flex flex-wrap items-center justify-center gap-3" stagger={0.04}>
          {cities.map((city) => (
            <motion.span
              key={city}
              variants={revealItem}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist"
            >
              {city}
            </motion.span>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
