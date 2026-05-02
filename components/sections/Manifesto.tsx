"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section className="relative bg-bg-primary text-text-primary overflow-hidden px-6 md:px-14 pt-24 md:pt-[160px] pb-12 md:pb-20">
      <div className="relative max-w-stage mx-auto">
        <Reveal variant="cinematic">
          <p
            className="m-0"
            style={{
              fontWeight: 300,
              fontSize: "clamp(24px, 2.9vw, 42px)",
              lineHeight: 1.35,
              letterSpacing: "-.02em",
              textWrap: "balance",
              color: "rgba(14,23,34,0.9)",
            }}
          >
            Helgoland liegt rund 70 Kilometer vor der Küste, mitten in der Deutschen Bucht. Der Wassersportclub Helgoland kümmert
            sich seit 1965 um die Sportbootliegeplätze auf der Insel und betreibt zwei Vereinsanlagen, eine im Südhafen und eine
            im Nordosthafen.{" "}
            <span style={{ fontWeight: 700 }}>
              Wir sind ein eingetragener Verein mit ehrenamtlichem Vorstand und aktiven Mitgliedern.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
