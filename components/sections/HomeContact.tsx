"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HomeContact() {
  return (
    <section className="relative bg-bg-primary text-white overflow-hidden px-6 md:px-14 pt-20 md:pt-[120px] pb-24 md:pb-[160px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(91,169,217,0.12), transparent 70%)" }}
      />
      <Reveal variant="cinematic">
        <div className="relative max-w-container mx-auto text-center">
          <h2
            className="m-0 text-white text-balance font-light"
            style={{ fontSize: "clamp(36px, 4.6vw, 68px)", lineHeight: 1.1, letterSpacing: "-.02em" }}
          >
            Kommen Sie auf einen <span className="font-bold">Schluck Wind vorbei.</span>
          </h2>
          <p className="body-copy mt-6 max-w-xl mx-auto">
            Anfragen erreichen uns am zuverlässigsten per E-Mail. Wir antworten in der Regel binnen achtundvierzig Stunden,
            in der Saison oft schneller, im Winter manchmal etwas länger.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="mailto:kontakt@wsc-helgoland.de"
              className="inline-flex items-center gap-3 px-10 py-5 text-[17px] font-bold rounded-full bg-white text-black hover:bg-text-primary hover:translate-x-1 transition-all duration-300 group"
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
