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
    title: "Die Häfen Helgolands",
    body: "Die Insel hat fünf Hafenbereiche. Welche Häfen es gibt, wer sie betreibt und wo Sportboote liegen dürfen.",
    image: "/img/wsch_topdown.jpg",
    alt: "WSCH Steganlage am Südhafen aus der Luft",
  },
  {
    href: "/gastlieger",
    title: "Informationen für Gastlieger",
    body: "Helgoland ist keine Marina. Wir geben freie Plätze unserer Mitglieder frei. Was vor dem Anlauf zu wissen ist.",
    image: "/img/wsch_liegeplatz.jpg",
    alt: "WSCH Liegeplätze mit Insel im Hintergrund",
  },
  {
    href: "/regatten",
    title: "Regatten und Wettfahrten",
    body: "Helgoländer Herbstregatta, Nordseewoche zu Pfingsten und der Störtebeker Opti-Cup für den Nachwuchs.",
    image: "/img/06092025_regatta-32.jpg",
    alt: "Yacht unter vollen Segeln vor Helgoland",
  },
  {
    href: "/mitgliedschaft",
    title: "Mitglied werden",
    body: "Wer Mitglied werden möchte, stellt einen Antrag mit zwei Bürgen. Über die Aufnahme entscheidet die Spartenversammlung.",
    image: "/img/wsch_anlagemitclubhaus.jpg",
    alt: "Vereinsanlage mit Clubhaus",
  },
  {
    href: "/clubhaus",
    title: "Das Clubhaus",
    body: "Vereinsraum am Südhafen für Mitglieder und geladene Gäste. Kein öffentlicher Restaurantbetrieb.",
    image: "/img/wsch_clubhaus.jpg",
    alt: "WSCH Clubhaus",
  },
  {
    href: "/regeln",
    title: "Hafenregeln",
    body: "Geschwindigkeit, Nachtruhe, Strom, Müll. Was im Hafen erlaubt ist und was nicht.",
    image: "/img/wsch_liegeplatzueberblick.jpg",
    alt: "WSCH Liegeplätze von oben",
  },
];

export function HomeFeatures() {
  return (
    <section className="relative bg-bg-primary overflow-hidden px-6 md:px-14 pt-20 md:pt-[140px] pb-20 md:pb-[140px]">
      <Reveal variant="cinematic">
        <div className="relative max-w-container mx-auto mb-14">
          <SectionHeader
            title="Alles auf"
            titleAccent="einen Blick."
            subtitle="Die wichtigsten Themen direkt von der Startseite. Alles andere liegt zwei Klicks entfernt."
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
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded bg-bg-surface shadow-soft"
            >
              <Image
                src={f.image}
                alt={f.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(14,23,34,.92) 0%, rgba(14,23,34,.4) 45%, rgba(14,23,34,.05) 80%)",
                }}
              />
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <h3 className="text-white text-[24px] md:text-[28px] font-semibold leading-tight tracking-tightish">{f.title}</h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-white/85 leading-relaxed max-w-[36ch]">{f.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                  weiterlesen
                  <span className="transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
