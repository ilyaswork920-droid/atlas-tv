"use client";

import { PlanSelector } from "@/components/pricing/plan-selector";

export function PlanCards() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-edge">
        <PlanSelector />
      </div>
    </section>
  );
}
