"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldHalf, Server, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

const points = [
  {
    icon: Gauge,
    title: "8K Ultra HD",
    description: "Full 7680×4320 resolution support on compatible devices and channels.",
  },
  {
    icon: ShieldHalf,
    title: "Anti-Freeze Technology",
    description: "Adaptive bitrate buffering keeps your stream smooth, even on unstable networks.",
  },
  {
    icon: Server,
    title: "EU Streaming Servers",
    description: "Low-latency delivery from European edge nodes for consistently fast streams.",
  },
  {
    icon: Cpu,
    title: "HEVC H.265 Codec",
    description: "Efficient compression for sharper picture quality at lower bandwidth.",
  },
];

export function Infrastructure() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="glow-blob left-[-160px] top-1/3 h-[420px] w-[420px] bg-blue-500/15" />
      <div className="container-edge relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Engineered for a flawless picture"
          description="Premium infrastructure behind every stream — built to stay fast, stable and sharp."
        />

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={revealItem}
              className="group flex flex-col gap-4 bg-navy-950 p-8 transition-colors duration-300 hover:bg-navy-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-glow-purple">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-cloud">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
