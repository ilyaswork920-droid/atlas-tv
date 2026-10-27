"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PlanSelector } from "@/components/pricing/plan-selector";

export function PricingTeaser() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, flexible plans from 1 to 12 months"
          description="No hidden fees, no contracts. Pick the plan that fits how you watch."
        />

        <PlanSelector compact />

        <div className="flex justify-center">
          <Button href="/pricing" variant="ghost" showArrow>
            Compare all plan features
          </Button>
        </div>
      </div>
    </section>
  );
}
