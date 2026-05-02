"use client";

import { Reveal } from "@/components/ui/Reveal";

const FACTS = [
  { value: "1965", label: "Gründungsjahr" },
  { value: "70 km", label: "Festland bis zum Felsen" },
  { value: "5", label: "Hafenbereiche auf Helgoland" },
  { value: "2", label: "Vereinsanlagen Süd- und Nordosthafen" },
];

export function HomeFacts() {
  return (
    <section className="relative bg-bg-primary text-white overflow-hidden px-6 md:px-14 pt-20 md:pt-[120px] pb-20 md:pb-[120px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91,169,217,0.08), transparent 70%)" }}
      />
      <div className="relative max-w-container mx-auto">
        <Reveal variant="cinematic">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8">
            {FACTS.map((f) => (
              <div key={f.label} className="border-l border-border-subtle pl-5 md:pl-7">
                <div
                  className="text-white font-light"
                  style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-.02em" }}
                >
                  {f.value}
                </div>
                <div className="mt-3 text-[12px] tracking-eyebrowWide uppercase text-text-dim">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
