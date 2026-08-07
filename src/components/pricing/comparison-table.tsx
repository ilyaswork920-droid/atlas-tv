"use client";

import { Check, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Cell = boolean | string;

const rows: { label: string; basic: Cell; plus: Cell; premium: Cell }[] = [
  { label: "Live channels", basic: "15,000+", plus: "15,000+", premium: "15,000+" },
  { label: "Full HD & 4K streaming", basic: true, plus: true, premium: true },
  { label: "8K Ultra HD streaming", basic: false, plus: true, premium: true },
  { label: "7-day catch-up TV", basic: false, plus: true, premium: true },
  { label: "Arabic channel package", basic: false, plus: true, premium: true },
  { label: "Full sports package", basic: false, plus: false, premium: true },
  { label: "Devices at a time", basic: "1", plus: "1", premium: "1" },
  { label: "Support", basic: "24/7 WhatsApp", plus: "Priority WhatsApp", premium: "VIP dedicated" },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-[18px] w-[18px] text-purple-400" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-muted-dark" />
    );
  }
  return <span className="text-sm text-mist">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-edge flex flex-col gap-14">
        <SectionHeading eyebrow="Compare" title="Every feature, side by side" />

        <Reveal>
          <div className="overflow-x-auto rounded-3xl border border-white/8">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/8 bg-navy-900/60">
                  <th className="p-5 text-sm font-semibold text-muted">Feature</th>
                  <th className="p-5 text-center text-sm font-semibold text-cloud">Basic</th>
                  <th className="p-5 text-center text-sm font-semibold text-purple-300">Plus</th>
                  <th className="p-5 text-center text-sm font-semibold text-cloud">Premium</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-white/5 last:border-0",
                      i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    )}
                  >
                    <td className="p-5 text-sm font-medium text-cloud">{row.label}</td>
                    <td className="p-5 text-center">
                      <CellValue value={row.basic} />
                    </td>
                    <td className="p-5 text-center bg-purple-500/5">
                      <CellValue value={row.plus} />
                    </td>
                    <td className="p-5 text-center">
                      <CellValue value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
