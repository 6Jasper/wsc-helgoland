"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SOFT_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function HomeHero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-[640px] md:min-h-[760px]" style={{ height: "100vh" }}>
      <div
        className="absolute inset-0"
        style={{
          transform: phase >= 1 ? "scale(1.0)" : "scale(1.06)",
          transition: `transform 12s ${SOFT_EASE}`,
          willChange: "transform",
        }}
      >
        <Image
          src="/img/06092025_regatta-19.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(.62) contrast(1.04)" }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,.7) 100%)",
        }}
      />

      <div className="absolute z-[4] left-6 right-6 bottom-16 md:left-14 md:right-14 md:bottom-24">
        <h1
          className="m-0 text-white"
          style={{
            fontWeight: 300,
            fontSize: "clamp(44px, 7.6vw, 120px)",
            lineHeight: 1.0,
            letterSpacing: "-.025em",
            maxWidth: "16ch",
            textWrap: "pretty",
            textIndent: "-0.04em",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 1.6s ${SOFT_EASE}, transform 1.6s ${SOFT_EASE}`,
          }}
        >
          Wassersportclub
          <br />
          <span style={{ fontWeight: 600 }}>Helgoland.</span>
        </h1>
        <p
          className="text-white/90 text-[15px] md:text-[18px]"
          style={{
            margin: 0,
            marginTop: "clamp(20px, 3vw, 32px)",
            fontWeight: 400,
            lineHeight: 1.55,
            maxWidth: 640,
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 1.4s ${SOFT_EASE}, transform 1.4s ${SOFT_EASE}`,
          }}
        >
          Seit 1965 organisieren wir den Sportbootverkehr auf der Insel. Vereinsanlagen im Süd- und Nordosthafen, ein Clubhaus,
          die Helgoländer Herbstregatta und die Mitveranstaltung der Nordseewoche.
        </p>
        <div
          className="mt-9 flex flex-wrap gap-3"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(8px)",
            transition: `opacity 1.0s ${SOFT_EASE}, transform 1.0s ${SOFT_EASE}`,
          }}
        >
          <Link
            href="/gastlieger"
            className="inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold rounded-full bg-white text-text-primary hover:bg-bg-surface hover:translate-x-1 transition-all duration-300 group"
          >
            <span>Informationen für Gastlieger</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/mitgliedschaft"
            className="inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold rounded-full border border-white/40 text-white hover:border-white hover:translate-x-1 transition-all duration-300 group"
          >
            <span>Mitglied werden</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
