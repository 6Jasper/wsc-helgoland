import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Hafenregeln" };

const SECTIONS = [
  {
    title: "Anlauf und Festmachen",
    items: [
      "Im Südhafen nur nach Vorabstimmung. Unreines Becken, Befahren auf eigene Gefahr und nur nach Einführung durch ein erfahrenes Mitglied.",
      "Im Nordosthafen können freie Plätze in der Regel belegt werden. Beim Hafenmeister melden.",
      "Päckchenbildung ist nicht vorgesehen.",
      "Maximalgeschwindigkeit drei Knoten. Keine Wellen.",
    ],
  },
  {
    title: "Im Hafen",
    items: [
      "Nachtruhe ab 22 Uhr.",
      "Generatoren sind nicht zulässig.",
      "Lackieren und Schleifen am Liegeplatz nicht erlaubt.",
      "Mast legen oder stellen findet nicht im Hafen statt.",
      "Keine besonderen Regelungen für Hunde.",
    ],
  },
  {
    title: "Müll, Strom, Wasser",
    items: [
      "Müllentsorgung über das Mülltrennsystem am Sanitärcontainer.",
      "Strom über Münzeinwurf, im Süd- und Nordosthafen jeweils einige Säulen. Pauschal abgerechnet.",
      "Wasser ist nicht an allen Stegen verfügbar.",
      "Diesel an der Bunkerstation Jörn Rickmers im Binnenhafen, vor den Hummerbuden.",
    ],
  },
  {
    title: "Sicherheit",
    items: [
      "Im Notfall 110 oder 112 wählen.",
      "Seenot über DGzRS, UKW Kanal 16.",
      "Im Brandfall Hafenmeister benachrichtigen, dann 112.",
      "Tauchen im Hafen nur mit Genehmigung.",
    ],
  },
];

export default function RegelnPage() {
  return (
    <>
      <PageHero
        title={<>Was im Hafen gilt, <span style={{ fontWeight: 600 }}>gilt für alle.</span></>}
        lead="Die offizielle Hafenordnung wird derzeit überarbeitet. Bis sie steht: hier die Punkte, die im Alltag zählen."
        image="/img/wsch_topdown.jpg"
        alt="WSCH Steganlage von oben"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="grid gap-10 lg:grid-cols-[1fr_2fr] mb-20 md:mb-28 last:mb-0">
              <Reveal variant="cinematic">
                <div>
                  <div className="text-text-dim text-[11px] tracking-eyebrowWide uppercase">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mt-4 m-0 text-white font-light" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                    {s.title}
                  </h2>
                </div>
              </Reveal>
              <Reveal variant="cinematic" delay={0.1}>
                <ul className="space-y-5">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex gap-5 text-text-body text-[16px] leading-relaxed border-t border-border-subtle pt-5">
                      <span className="text-text-dim text-[12px] mt-[6px] flex-shrink-0 tracking-widest">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
