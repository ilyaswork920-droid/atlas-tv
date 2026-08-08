"use client";

import { motion } from "framer-motion";
import { MessageCircle, Download, KeyRound, PlayCircle } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: MessageCircle,
    title: "Subscribe on WhatsApp",
    description: "Message us your chosen plan and we'll confirm your subscription instantly.",
  },
  {
    icon: KeyRound,
    title: "Receive your credentials",
    description: "Get your activation details and app download link straight away.",
  },
  {
    icon: Download,
    title: "Install the app",
    description: "Download and install the IPTV player on your TV, phone or computer.",
  },
  {
    icon: PlayCircle,
    title: "Start watching",
    description: "Enter your credentials once and start streaming immediately.",
  },
];

export function SetupSteps() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading eyebrow="How it works" title="Four simple steps" />

        <RevealGroup className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {steps.map(({ icon: Icon, title, description }, i) => (
            <motion.div key={title} variants={revealItem} className="relative flex flex-col gap-4">
              <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-glow-purple">
                <Icon className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-navy-950 text-[11px] font-bold text-cloud">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-cloud">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
