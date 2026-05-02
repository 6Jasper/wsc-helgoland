"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HomeRegatta() {
  return (
    <section className="relative bg-bg-surface text-white overflow-hidden px-6 md:px-14 pt-20 md:pt-[140px] pb-20 md:pb-[140px]">
      <div className="relative max-w-container mx-auto grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <Reveal variant="cinematic">
          <div className="relative aspect-[5/4] overflow-hidden rounded">
            <Image
              src="/img/06092025_regatta-19.jpg"
              alt="Boote der Helgoländer Herbstregatta auf glitzerndem Wasser"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal variant="cinematic" delay={0.15}>
          <div>
            <h2
              className="m-0 text-white text-balance font-light"
              style={{
                fontSize: "clamp(34px, 4.4vw, 64px)",
                lineHeight: 1.08,
                letterSpacing: "-.02em",
              }}
            >
              Anfang September. <span className="font-bold">Um Insel und Düne.</span>
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              Die Helgoländer Herbstregatta ist die jährliche Traditionsregatta des Vereins. Eine Wettfahrt für seegängige
              Yachten, Wertung nach Yardstick. Kein Massen-Event, sondern eine Runde im richtigen Maßstab.
            </p>
            <p className="body-copy mt-4 max-w-xl">
              Daneben Pfingsten die Nordseewoche, dazu der Störtebeker Opti-Cup für den Nachwuchs.
            </p>
            <Link
              href="/regatten"
              className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-white text-black hover:bg-text-primary hover:translate-x-1 transition-all duration-300 group"
            >
              <span>Alle Regatten</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
