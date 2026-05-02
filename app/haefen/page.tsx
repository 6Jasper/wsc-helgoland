import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Häfen Helgolands" };

type Hafen = {
  name: string;
  intro: string;
  body: string;
  image: string;
  alt: string;
  facts: [string, string][];
};

const HAEFEN: Hafen[] = [
  {
    name: "Vorhafen",
    intro: "Schutzhafen des Bundes.",
    image: "/img/wsch_vorhafen.jpg",
    alt: "Vorhafen Helgoland im Gegenlicht",
    body:
      "Schutz- und Sicherheitshafen, im Eigentum des Bundes. Hier legen unter anderem die MS Helgoland und die Versorgungsschiffe an. Der Helgolandkai wurde zuletzt komplett neu gebaut. Sportbootliegeplätze des WSCH gibt es hier nicht.",
    facts: [
      ["Eigentümer", "Bund"],
      ["Funktion", "Versorgung, Berufsschifffahrt"],
      ["WSCH", "kein Liegeplatz"],
      ["Stand", "Helgolandkai neu"],
    ],
  },
  {
    name: "Südhafen",
    intro: "Vereinsanlage im unreinen Becken.",
    image: "/img/wsch_suedhafen.jpg",
    alt: "WSCH Steganlage im Südhafen",
    body:
      "Schutzhafen mit Sportbootliegeplätzen und der Steganlage des Vereins. An Stelle der heutigen Stege stand bis 1945 ein U-Boot-Bunker. Dessen Trümmer liegen bis heute im Hafenbecken. Wer hier festmacht, fährt nicht eigenständig ein, sondern wird von einem Mitglied geführt.",
    facts: [
      ["Eigentümer", "Bund"],
      ["Steganlage", "WSCH"],
      ["Untergrund", "unrein, Trümmer"],
      ["Anlauf", "nur nach Einführung"],
    ],
  },
  {
    name: "Binnenhafen",
    intro: "Gemeindehafen, kein Sportboot.",
    image: "/img/wsch_binnenhafen.jpg",
    alt: "Binnenhafen Helgoland mit Hummerbuden",
    body:
      "Hafen der Gemeinde, Anlandung des Halunder Jet und der Nordlicht. Sportboote dürfen nicht festmachen. Hier liegen die Börteboote und die Dünenfähre, hier steht die Bunkerstation für Diesel direkt vor den Hummerbuden. Zuletzt vertieft.",
    facts: [
      ["Eigentümer", "Gemeinde"],
      ["Passagierfähren", "Halunder Jet, Nordlicht"],
      ["Sportboote", "Anlegen verboten"],
      ["Diesel", "Bunkerstation"],
    ],
  },
  {
    name: "Nordosthafen",
    intro: "Vereinsanlage und Motorbootsparte.",
    image: "/img/wsch_nordosthafen.jpg",
    alt: "Nordosthafen mit WSCH Liegeplätzen",
    body:
      "Hafen der Gemeinde, mit der zweiten Steganlage des Vereins. Hier liegen vor allem die Motorboote der Mitglieder. Bei östlichen Winden fährt die Dünenfähre vom Nordosthafen ab. An der Lesehalle gilt Anlegeverbot. Eingerahmt vom Neubau des Aquariums.",
    facts: [
      ["Eigentümer", "Gemeinde"],
      ["Steganlage", "WSCH"],
      ["Hauptnutzer", "Motorbootsparte"],
      ["Hinweis", "Lesehalle, Anlegeverbot"],
    ],
  },
  {
    name: "Landungsbrücke",
    intro: "Düne, Börteboote, Anlegeverbot.",
    image: "/img/wsch_landungsbruecke.jpg",
    alt: "Landungsbrücke Helgoland von oben",
    body:
      "Anlegestelle der Dünenfähre und Liegeplatz der Börteboote. Brücke 3 wurde kürzlich entfernt. Für Sportboote gilt Anlegeverbot.",
    facts: [
      ["Funktion", "Dünenfähre, Börteboote"],
      ["Anlegen", "verboten"],
      ["Stand", "Brücke 3 abgebaut"],
      ["Saisonal", "westliche Wetterlagen"],
    ],
  },
];

const GALERIE = [
  { src: "/img/wsch_topdown.jpg", alt: "Steganlage Südhafen aus der Vogelperspektive" },
  { src: "/img/wsch_liegeplatz.jpg", alt: "WSCH Liegeplätze, Insel im Hintergrund" },
  { src: "/img/wsch_liegeplatzueberblick.jpg", alt: "Übersicht Liegeplätze Südhafen" },
  { src: "/img/wsch_liegeplatz3.jpg", alt: "Steganlage von oben" },
  { src: "/img/wsch_anlagemitclubhaus2.jpg", alt: "Vereinsanlage mit Clubhaus" },
  { src: "/img/wsch_nordosthafen2.jpg", alt: "Nordosthafen Detail" },
];

export default function HaefenPage() {
  return (
    <>
      <PageHero
        title={<>Fünf Häfen, <span style={{ fontWeight: 600 }}>ein Felsen.</span></>}
        lead="Helgoland verteilt seinen Schiffsverkehr auf mehrere Hafenbereiche. Wer wo liegt, hängt von Tiefe, Eigentum und Geschichte ab. Die Vereinsanlagen des WSCH liegen im Süd- und Nordosthafen."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
        height="medium"
      />

      <div className="bg-bg-primary">
        {HAEFEN.map((h, i) => (
          <section key={h.name} className="px-6 md:px-14 py-20 md:py-[120px] border-b border-border-subtle">
            <div className={`max-w-container mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <Reveal variant="cinematic">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image src={h.image} alt={h.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </Reveal>

              <Reveal variant="cinematic" delay={0.1}>
                <div>
                  <div className="text-text-dim text-[14px] mb-4">{h.intro}</div>
                  <h2
                    className="m-0 text-white font-light"
                    style={{ fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}
                  >
                    {h.name}
                  </h2>
                  <p className="body-copy mt-6 max-w-prose">{h.body}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-4 text-[13px]">
                    {h.facts.map(([k, v]) => (
                      <div key={k} className="border-l border-border-subtle pl-4">
                        <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">{k}</dt>
                        <dd className="mt-1 text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="relative bg-bg-surface text-white px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_untiefe2.jpg" alt="Steine im Südhafen bei Niedrigwasser" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2
                className="m-0 text-white font-light"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}
              >
                Im Südhafen liegt <span className="font-bold">Geschichte am Grund.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Bis 1945 stand hier der größte deutsche U-Boot-Bunker der Nordsee. Was nach der Sprengung der Insel 1947 übrig
                blieb, liegt bis heute im Hafenbecken. Bei Niedrigwasser werden Steine, Beton und Eisen sichtbar.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Wer im Südhafen festmachen will, stimmt das vorab mit dem Verein ab und wird von einem Mitglied eingeführt.
                Befahren auf eigene Gefahr.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2
              className="m-0 text-white font-light max-w-3xl"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}
            >
              Die Anlage <span className="font-bold">aus der Luft.</span>
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              Drohnenaufnahmen vom Süd- und Nordosthafen. Wer vom Festland kommt, sieht hier sein Hafenrevier zum ersten Mal.
            </p>
          </Reveal>

          <Reveal variant="cinematic" delay={0.15}>
            <div className="mt-12 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIE.map((g) => (
                <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-soft hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
