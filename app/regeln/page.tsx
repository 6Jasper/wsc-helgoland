import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Hafenregeln" };

const SECTIONS = [
  {
    title: "Anlauf und Festmachen",
    items: [
      "Ein Anlauf des Südhafens ist nur nach vorheriger Abstimmung möglich. Befahren erfolgt auf eigene Gefahr und nur nach Einweisung durch ein erfahrenes Mitglied.",
      "Im Nordosthafen können freie Plätze in der Regel belegt werden. Bitte beim Hafenmeister vor Ort melden.",
      "Päckchenbildung ist nicht vorgesehen.",
      "Höchstgeschwindigkeit drei Knoten. Keine Wellen.",
    ],
  },
  {
    title: "Im Hafen",
    items: [
      "Nachtruhe ab 22 Uhr.",
      "Generatoren sind im Hafen nicht zulässig.",
      "Lackier- und Schleifarbeiten am Liegeplatz sind nicht erlaubt.",
      "Mast legen oder stellen findet nicht im Hafen statt.",
      "Für Hunde gelten keine besonderen Regelungen.",
    ],
  },
  {
    title: "Müll, Strom, Wasser",
    items: [
      "Mülltrennung über das Mülltrennsystem am Sanitärcontainer.",
      "Strom über Münzeinwurf-Säulen, im Süd- und Nordosthafen jeweils einige Säulen vorhanden. Die Stromkosten werden pauschal abgerechnet.",
      "Wasser ist nicht an allen Stegen verfügbar.",
      "Diesel an der Bunkerstation Jörn Rickmers im Binnenhafen, vor den Hummerbuden.",
    ],
  },
  {
    title: "Sicherheit",
    items: [
      "Im Brand- oder Notfall zuerst den Hafenmeister informieren.",
      "Tauchen im Hafen nur mit Genehmigung des Hafenmeisters.",
    ],
  },
];

export default function RegelnPage() {
  return (
    <>
      <PageHero
        title={<>Hafen<span style={{ fontWeight: 600 }}>regeln.</span></>}
        lead="Eine offizielle Hafenordnung wird derzeit überarbeitet. Bis sie veröffentlicht ist, finden Sie hier die Punkte, die im Alltag gelten."
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
                  <h2 className="mt-4 m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                    {s.title}
                  </h2>
                </div>
              </Reveal>
              <Reveal variant="cinematic" delay={0.1}>
                <ul className="space-y-5">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex gap-5 text-text-body text-[16px] leading-relaxed border-t border-border-subtle pt-5">
                      <span className="text-accent-tide font-semibold text-[16px] mt-[1px] flex-shrink-0 w-5 text-center" aria-hidden>×</span>
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
