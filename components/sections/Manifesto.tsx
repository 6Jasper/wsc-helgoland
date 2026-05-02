"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section className="relative bg-bg-primary text-white overflow-hidden px-6 md:px-14 pt-24 md:pt-[160px] pb-12 md:pb-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(91,169,217,0.12), transparent 70%)",
        }}
      />
      <div className="relative max-w-stage mx-auto">
        <Reveal variant="cinematic">
          <p
            className="m-0 text-white"
            style={{
              fontWeight: 300,
              fontSize: "clamp(26px, 3.2vw, 48px)",
              lineHeight: 1.3,
              letterSpacing: "-.02em",
              textWrap: "balance",
            }}
          >
            <span style={{ fontWeight: 700 }}>Hier kommt niemand zufällig vorbei.</span>{" "}
            Wer in Helgoland festmacht, hat sich entschieden. Der WSCH ist ein Verein im klassischen Sinn: ehrenamtlich, eigen, ein
            bisschen ruppig. Stege werden selbst gebaut, das Clubhaus selbst betrieben, und der Hafen will gelernt sein.{" "}
            <span style={{ fontWeight: 700 }}>Aber wer einmal Mitglied ist, bleibt.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
