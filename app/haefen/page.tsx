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
    intro: "Schutz- und Sicherheitshafen des Bundes.",
    image: "/img/wsch_vorhafen.jpg",
    alt: "Vorhafen Helgoland",
    body:
      "Der Vorhafen ist der Schutz- und Sicherheitshafen Helgolands und steht im Eigentum des Bundes. Hier legen die MS Helgoland und die Versorgungsschiffe an. Der Helgolandkai wurde zuletzt komplett neu gebaut. Liegeplätze für Sportboote gibt es im Vorhafen nicht.",
    facts: [
      ["Eigentümer", "Bund"],
      ["Funktion", "Versorgung, Berufsschifffahrt"],
      ["Sportboote", "kein WSCH-Liegeplatz"],
      ["Stand", "Helgolandkai neu gebaut"],
    ],
  },
  {
    name: "Südhafen",
    intro: "Hier liegt eine der beiden Vereinsanlagen des WSCH.",
    image: "/img/wsch_suedhafenluftbild.jpg",
    alt: "Südhafen Helgoland aus der Luft",
    body:
      "Schutzhafen mit der Steganlage des Vereins. Der östliche Bereich der Steganlage gilt als unrein: An der Stelle der heutigen Stege stand bis Kriegsende ein U-Boot-Bunker, dessen Trümmer bis heute im Hafenbecken liegen. Wer hier festmachen möchte, fährt nicht eigenständig ein, sondern wird von einem Mitglied eingewiesen.",
    facts: [
      ["Eigentümer", "Bund"],
      ["Steganlage", "WSCH"],
      ["Hinweis", "Trümmer im Hafenbecken"],
      ["Anlauf", "nur nach Einführung"],
    ],
  },
  {
    name: "Binnenhafen",
    intro: "Gemeindehafen mit Passagieranlandung.",
    image: "/img/wsch_binnenhafen.jpg",
    alt: "Binnenhafen Helgoland mit Hummerbuden",
    body:
      "Der Binnenhafen gehört der Gemeinde Helgoland. Hier legen die Passagierfähren Halunder Jet und Nordlicht an. Sportboote dürfen im Binnenhafen nicht festmachen. Die Bunkerstation für Sportboote liegt direkt vor den Hummerbuden. Der Hafen wurde zuletzt vertieft.",
    facts: [
      ["Eigentümer", "Gemeinde Helgoland"],
      ["Passagierfähren", "Halunder Jet, Nordlicht"],
      ["Sportboote", "Anlegen verboten"],
      ["Diesel", "Bunkerstation"],
    ],
  },
  {
    name: "Nordosthafen",
    intro: "Zweite Vereinsanlage des WSCH.",
    image: "/img/wsch_nordosthafen.jpg",
    alt: "Nordosthafen mit WSCH Liegeplätzen",
    body:
      "Auch der Nordosthafen gehört der Gemeinde. Hier liegt die zweite Steganlage des Vereins, an der vor allem die Motorboote der Mitglieder festmachen. Bei östlichen Winden fährt die Dünenfähre vom Nordosthafen ab. An der Lesehalle gilt Anlegeverbot.",
    facts: [
      ["Eigentümer", "Gemeinde Helgoland"],
      ["Steganlage", "WSCH"],
      ["Hauptnutzer", "Motorbootsparte"],
      ["Hinweis", "Lesehalle, Anlegeverbot"],
    ],
  },
  {
    name: "Landungsbrücke",
    intro: "Anlegestelle für Dünenfähre und Börteboote.",
    image: "/img/wsch_landungsbruecke.jpg",
    alt: "Landungsbrücke Helgoland von oben",
    body:
      "An der Landungsbrücke legt die Dünenfähre an, hier liegen auch die Börteboote. Brücke 3 wurde kürzlich entfernt. Für Sportboote gilt Anlegeverbot.",
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
        title={<>Die <span style={{ fontWeight: 600 }}>Häfen Helgolands.</span></>}
        lead="Die Insel verfügt über fünf Hafenbereiche mit unterschiedlicher Nutzung. Der Wassersportclub Helgoland betreibt seine Vereinsanlagen im Süd- und Nordosthafen."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
        height="medium"
      />

      <div className="bg-bg-primary">
        {HAEFEN.map((h, i) => (
          <section key={h.name} className={`px-6 md:px-14 py-20 md:py-[120px] border-b border-border-subtle ${i % 2 === 1 ? "bg-bg-surface" : ""}`}>
            <div className={`max-w-container mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <Reveal variant="cinematic">
                <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
                  <Image src={h.image} alt={h.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </Reveal>

              <Reveal variant="cinematic" delay={0.1}>
                <div>
                  <div className="text-text-muted text-[15px] mb-4">{h.intro}</div>
                  <h2
                    className="m-0 text-text-primary font-light"
                    style={{ fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}
                  >
                    {h.name}
                  </h2>
                  <p className="body-copy mt-6 max-w-prose">{h.body}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-4 text-[14px]">
                    {h.facts.map(([k, v]) => (
                      <div key={k} className="border-l border-border-subtle pl-4">
                        <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">{k}</dt>
                        <dd className="mt-1 text-text-primary">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/helgoland_panorama-4.jpg" alt="Düne vor Helgoland aus der Luft" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2
                className="m-0 text-text-primary font-light"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}
              >
                Die <span className="font-bold">Düne.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Die Düne ist die kleinere, vorgelagerte Insel von Helgoland. Sie wird über die Dünenfähre erreicht und ist
                weitgehend Naturschutzgebiet. Für Sportboote gilt:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Anlanden an der Düne ist verboten.",
                  "Kitesurfen ist verboten.",
                  "Das Einfahren in den Dünenhafen ist verboten.",
                ].map((it) => (
                  <li key={it} className="flex gap-4 text-text-body text-[15px] md:text-[16px]">
                    <span className="mt-[2px] text-accent-warm font-semibold flex-shrink-0 w-5 text-center" aria-hidden>×</span>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2
              className="m-0 text-text-primary font-light max-w-3xl"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}
            >
              Die Anlage <span className="font-bold">aus der Luft.</span>
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              Drohnenaufnahmen vom Süd- und Nordosthafen.
            </p>
          </Reveal>

          <Reveal variant="cinematic" delay={0.15}>
            <div className="mt-12 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIE.map((g) => (
                <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
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
