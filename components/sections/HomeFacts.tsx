"use client";

import { Reveal } from "@/components/ui/Reveal";

const FACTS = [
  { value: "1965", label: "Gründungsjahr" },
  { value: "70 km", label: "Festland zur Insel" },
  { value: "5", label: "Hafenbereiche auf Helgoland" },
  { value: "2", label: "Vereinsanlagen, Süd- und Nordosthafen" },
];

export function HomeFacts() {
  return (
    <section className="relative bg-bg-primary text-text-primary overflow-hidden px-6 md:px-14 pt-20 md:pt-[120px] pb-20 md:pb-[120px]">
      <div className="relative max-w-container mx-auto">
        <Reveal variant="cinematic">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="rounded bg-bg-surface shadow-soft border border-border-subtle p-7 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[220px]"
              >
                <div
                  className="text-text-primary font-light"
                  style={{ fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: 1, letterSpacing: "-.02em" }}
                >
                  {f.value}
                </div>
                <div className="mt-6 text-[12px] tracking-eyebrowWide uppercase text-text-dim">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
