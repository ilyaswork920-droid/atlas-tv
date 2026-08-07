"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const cable = [
  "€60+ per month",
  "12–24 month contracts",
  "Limited channel packages",
  "Extra equipment rental fees",
  "Slow customer support",
];

const iptv = [
  "From €30 per year",
  "No long-term contract",
  "15,000+ channels included",
  "Works on devices you already own",
  "24/7 WhatsApp support",
];

export function PriceComparison() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why switch"
          title="Save up to €690 a year vs. cable & satellite"
          description="Traditional TV locks you into expensive contracts. IPTV Germany IPTV doesn't."
        />

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/8 bg-navy-900/50 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Cable / Satellite
              </h3>
              <ul className="flex flex-col gap-4">
                {cable.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-purple-400/30 bg-navy-900 p-8 shadow-glow-purple">
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-2xl"
              />
              <h3 className="relative text-sm font-semibold uppercase tracking-wide text-purple-300">
                IPTV Germany IPTV
              </h3>
              <ul className="relative flex flex-col gap-4">
                {iptv.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cloud">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted"
        >
          Estimated annual savings based on average German cable/satellite pricing of €60+/month vs.
          our Basic plan at €30/year.
        </motion.p>
      </div>
    </section>
  );
}
