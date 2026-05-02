"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HomeContact() {
  return (
    <section className="relative bg-bg-surface text-text-primary overflow-hidden px-6 md:px-14 pt-20 md:pt-[120px] pb-24 md:pb-[160px]">
      <Reveal variant="cinematic">
        <div className="relative max-w-container mx-auto text-center">
          <h2
            className="m-0 text-text-primary text-balance font-light"
            style={{ fontSize: "clamp(36px, 4.6vw, 68px)", lineHeight: 1.1, letterSpacing: "-.02em" }}
          >
            Sie erreichen uns <span className="font-bold">per E-Mail.</span>
          </h2>
          <p className="body-copy mt-6 max-w-xl mx-auto">
            Eine öffentliche Telefonnummer haben wir nicht. Anfragen beantworten wir in der Regel binnen 48 Stunden, in der Saison
            häufig schneller.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="mailto:kontakt@wsc-helgoland.de"
              className="inline-flex items-center gap-3 px-10 py-5 text-[17px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
            >
              <span>kontakt@wsc-helgoland.de</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
