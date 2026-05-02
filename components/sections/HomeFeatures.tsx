"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Feature = {
  href: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    href: "/haefen",
    title: "Fünf Häfen, ein Felsen",
    body: "Vorhafen, Südhafen, Binnenhafen, Nordosthafen, Landungsbrücke. Wer wo liegen darf, wer trockenfällt, wo der Sportbootverkehr nichts zu suchen hat.",
    image: "/img/wsch_topdown.jpg",
    alt: "WSCH Steganlage am Südhafen aus der Luft",
  },
  {
    href: "/gastlieger",
    title: "Vor dem Anlauf",
    body: "Kein Marina-Betrieb. Im Südhafen liegen U-Boot-Trümmer, im Nordosthafen vergibt der Hafenmeister freie Plätze. Was Sie wissen sollten, bevor Sie die Insel sehen.",
    image: "/img/wsch_suedhafen.jpg",
    alt: "Südhafen mit WSCH Vereinsanlage",
  },
  {
    href: "/regatten",
    title: "Drei Termine im Jahr",
    body: "Pfingsten Nordseewoche, Anfang September Herbstregatta, dazu der Störtebeker Opti-Cup. Mehr Wettfahrt geht auf einer Insel von dieser Größe nicht.",
    image: "/img/06092025_regatta-32.jpg",
    alt: "Yacht unter vollen Segeln vor Helgoland",
  },
  {
    href: "/mitgliedschaft",
    title: "Aufnahme",
    body: "Zwei Bürgen, ein Antrag, zwei bis drei Monate. Entscheidung in der Spartenversammlung. Wer mitanpackt, gehört dazu.",
    image: "/img/wsch_anlagemitclubhaus.jpg",
    alt: "Vereinsanlage mit Clubhaus",
  },
  {
    href: "/clubhaus",
    title: "Clubhaus",
    body: "Vereinsraum am Südhafen. Kein öffentlicher Restaurantbetrieb, kein Touristen-WC. Treffpunkt für Mitglieder und geladene Gäste.",
    image: "/img/wsch_clubhaus.jpg",
    alt: "WSCH Clubhaus mit Schriftzug",
  },
  {
    href: "/regeln",
    title: "Hafenregeln",
    body: "Drei Knoten, Nachtruhe ab 22 Uhr, kein Generator, kein Schleifen, kein Mast legen. Was im Hafen gilt, gilt für alle.",
    image: "/img/wsch_liegeplatzueberblick.jpg",
    alt: "WSCH Liegeplätze von oben",
  },
];

export function HomeFeatures() {
  return (
    <section className="relative bg-bg-primary text-white overflow-hidden px-6 md:px-14 pt-20 md:pt-[140px] pb-20 md:pb-[140px]">
      <Reveal variant="cinematic">
        <div className="relative max-w-container mx-auto mb-14">
          <SectionHeader
            title="Sechs Wege"
            titleAccent="in den Verein."
            subtitle="Sortiert nach dem, was die meisten zuerst suchen. Alles andere bleibt zwei Klicks entfernt."
            maxSubtitle={760}
          />
        </div>
      </Reveal>

      <Reveal variant="cinematic" delay={0.15}>
        <div className="relative max-w-container mx-auto grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded bg-bg-surface"
            >
              <Image
                src={f.image}
                alt={f.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                style={{ filter: "brightness(.65)" }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(7,11,15,.92) 0%, rgba(7,11,15,.4) 45%, rgba(7,11,15,.05) 80%)",
                }}
              />
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <h3 className="text-white text-[24px] md:text-[28px] font-semibold leading-tight tracking-tightish">{f.title}</h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-[36ch]">{f.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-accent-tide group-hover:text-white transition-colors">
                  weiterlesen
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
