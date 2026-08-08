"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const guides = [
  {
    device: "Smart TV (Samsung / LG)",
    steps: [
      "Open your TV's app store and install an IPTV player app (we'll recommend one).",
      "Launch the app and select 'Add playlist' or 'Enter Xtream login'.",
      "Enter the credentials we send you on WhatsApp.",
      "Save and start browsing your channels.",
    ],
  },
  {
    device: "Amazon Fire TV Stick",
    steps: [
      "Search for and install the recommended IPTV app from the Amazon App Store.",
      "Open the app and choose 'Login' or 'Add playlist'.",
      "Enter your username, password and server URL.",
      "Confirm and start watching instantly.",
    ],
  },
  {
    device: "Android TV / TV Box",
    steps: [
      "Install the IPTV app via Google Play or a downloaded APK we provide.",
      "Open the app and select Xtream Codes login.",
      "Enter your activation details exactly as sent.",
      "Tap connect and enjoy your channels.",
    ],
  },
  {
    device: "iPhone & Android",
    steps: [
      "Download the recommended IPTV app from the App Store or Google Play.",
      "Open the app and tap 'Add new user' or 'Login'.",
      "Enter your credentials and confirm.",
      "Start streaming on the go, on Wi-Fi or mobile data.",
    ],
  },
  {
    device: "Windows & Mac",
    steps: [
      "Download and install the recommended IPTV player for desktop.",
      "Open the app and select 'Login with Xtream Codes'.",
      "Enter your username, password and server URL.",
      "Click connect and start watching on your computer.",
    ],
  },
];

export function DeviceGuides() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading eyebrow="Quick guides" title="Step-by-step for your device" />

        <Reveal className="mx-auto w-full max-w-3xl">
          <div className="flex flex-col gap-3">
            {guides.map((guide, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={guide.device}
                  className="overflow-hidden rounded-2xl border border-white/8 bg-navy-900/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-cloud">
                      {guide.device}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-mist"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ol className="flex flex-col gap-3 px-6 pb-6">
                          {guide.steps.map((step, idx) => (
                            <li key={step} className="flex items-start gap-3 text-sm text-mist">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-[11px] font-semibold text-purple-300">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
