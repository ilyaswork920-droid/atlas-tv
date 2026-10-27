"use client";

import { useState } from "react";
import { Check, Headset, Lock, MessageCircle, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { subscriptionFeatures, subscriptionPlans, planWhatsAppMessage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const trustItems = [
  { icon: Lock, label: "Secure Checkout" },
  { icon: Zap, label: "Instant Activation" },
  { icon: Headset, label: "24/7 Support" },
];

function monthlyPrice(price: number, months = 1) {
  return (price / months).toFixed(2);
}

export function PlanSelector({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState(subscriptionPlans[0].id);
  const selected = subscriptionPlans.find((p) => p.id === selectedId) ?? subscriptionPlans[0];

  return (
    <div className="relative isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 inset-x-0 -z-10 overflow-hidden rounded-[2rem] bg-gradient-to-b from-navy-950 to-black sm:-inset-x-6"
      >
        <div
          className="grid-texture absolute inset-0 opacity-60"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <div className="glow-blob left-[5%] top-[5%] h-72 w-72 bg-blue-600/20" />
        <div className="glow-blob bottom-[5%] right-[5%] h-80 w-80 bg-purple-600/25" />
      </div>

      <Reveal>
        <div
          className={cn(
            "mx-auto max-w-4xl rounded-[28px] border border-purple-400/25 bg-gradient-to-b from-navy-850/90 to-navy-950/90 shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_30px_80px_-30px_rgba(99,102,241,0.45)]",
            compact ? "p-5 sm:p-8" : "p-5 sm:p-8 lg:p-10"
          )}
        >
          <div className="text-center">
            <h2 className={cn("font-display font-semibold text-cloud", compact ? "text-lg" : "text-xl sm:text-2xl")}>
              Select Your Subscription Duration
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              One-time payment. Choose the plan that suits you best.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Subscription duration"
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {subscriptionPlans.map((plan) => {
              const isSelected = plan.id === selected.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedId(plan.id)}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-2xl border text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                    compact ? "px-3 py-4" : "px-3 py-5 sm:py-6",
                    isSelected
                      ? "border-blue-500 bg-gradient-to-b from-blue-600/15 to-purple-600/20 shadow-[0_0_0_1px_rgba(139,92,246,0.6),0_0_32px_-6px_rgba(99,102,241,0.6)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  )}
                >
                  <span className="text-sm font-semibold text-cloud sm:text-base">{plan.name}</span>
                  <span
                    className={cn(
                      "font-display font-bold text-white",
                      compact ? "text-3xl" : "text-3xl sm:text-4xl"
                    )}
                  >
                    €{plan.price}
                  </span>
                  <span className="text-xs text-muted sm:text-sm">
                    €{monthlyPrice(plan.price, plan.months)}/mo
                  </span>
                </button>
              );
            })}
          </div>

          <ul
            className={cn(
              "grid grid-cols-1 gap-x-10 gap-y-3.5 border-t border-white/8 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4",
              compact ? "mt-6 pt-6" : "mt-8 pt-8 sm:px-6"
            )}
          >
            {subscriptionFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[15px] text-mist">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400">
                  <Check className="h-3 w-3 text-navy-950" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <WhatsAppButton
            message={planWhatsAppMessage(selected.name, selected.price, selected.months)}
            size="lg"
            showArrow
            className="mt-8 h-14 w-full from-blue-500 to-purple-500 text-base"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Subscribe Now
            </span>
          </WhatsAppButton>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted">
            {trustItems.map(({ icon: Icon, label }, i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="mr-4 hidden h-4 w-px bg-white/10 sm:block" />}
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
