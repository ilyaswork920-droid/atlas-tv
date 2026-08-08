"use client";

import { motion } from "framer-motion";
import { Radio, Clapperboard, Film, Trophy, RotateCcw, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, revealItem } from "@/components/ui/reveal";

const features = [
  {
    icon: Radio,
    title: "Live TV",
    description: "15,000+ live channels covering global, regional and international broadcasts.",
  },
  {
    icon: Clapperboard,
    title: "Movies On-Demand",
    description: "A constantly updated library of blockbuster and classic films in HD & 4K.",
  },
  {
    icon: Film,
    title: "Series & Shows",
    description: "Instant access to full seasons of the shows you love, no waiting required.",
  },
  {
    icon: Trophy,
    title: "Sports Channels",
    description: "Top leagues, Champions League and global sports on dedicated plans.",
  },
  {
    icon: RotateCcw,
    title: "7-Day Catch-Up",
    description: "Missed something? Rewind and replay up to 7 days of broadcasts.",
  },
  {
    icon: CalendarClock,
    title: "Smart EPG Guide",
    description: "A clean electronic programme guide to plan and browse what's on next.",
  },
];

export function StreamingFeatures() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="What you get"
          title="Next-generation streaming, built for everyone"
          description="Everything you need for premium entertainment — live, on-demand and always in high quality."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-navy-900/60 p-7 shadow-card"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/0 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:from-purple-500/25 group-hover:to-blue-500/20"
              />
              <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-lg font-semibold text-cloud">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
