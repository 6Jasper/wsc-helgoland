import PageHero from "@/components/PageHero";

export const metadata = { title: "Hafenregeln" };

const sections = [
  {
    title: "Anlauf und Festmachen",
    items: [
      "Südhafen: Anlauf nur nach Vorabstimmung. Unreines Gebiet, Befahren auf eigene Gefahr und nur nach Einführung durch ein erfahrenes Vereinsmitglied.",
      "Nordosthafen: freie Plätze können in der Regel belegt werden. Beim Hafenmeister melden.",
      "Päckchenbildung ist nicht vorgesehen.",
      "Maximalgeschwindigkeit im Hafen: 3 Knoten. Keine Wellen.",
    ],
  },
  {
    title: "Verhalten im Hafen",
    items: [
      "Nachtruhe ab 22:00 Uhr.",
      "Generatoren sind nicht zulässig.",
      "Keine besonderen Regelungen für Hunde.",
      "Lackier- und Schleifarbeiten im Hafen sind nicht erlaubt.",
      "Mast legen oder stellen ist nicht erlaubt.",
    ],
  },
  {
    title: "Müll, Strom, Wasser",
    items: [
      "Müllentsorgung über das Mülltrennsystem am Sanitärcontainer.",
      "Strom: Stromsäulen mit Münzeinwurf, im Südhafen einige, im Nordosthafen wenige. Pauschal abgerechnet.",
      "Wasser ist nicht an allen Stegen verfügbar.",
      "Diesel an der Bunkerstation Jörn Rickmers im Binnenhafen, an den Hummerbuden.",
    ],
  },
  {
    title: "Sicherheit",
    items: [
      "Im Notfall 110 (Polizei) oder 112 (Feuerwehr / Rettung) wählen.",
      "Seenotfall: DGzRS, UKW Kanal 16.",
      "Im Brandfall Hafenmeister benachrichtigen, dann 112.",
      "Tauchen im Hafen nur mit Genehmigung des Hafenmeisters.",
    ],
  },
];

export default function RegelnPage() {
  return (
    <>
      <PageHero
        title="Regeln, die für alle gelten."
        lead="Was im Hafen gilt, gilt für alle. Die offizielle Hafenordnung ist in Arbeit, hier finden Sie die wichtigsten Punkte."
        image="/img/wsch_topdown.jpg"
        alt="WSCH Steganlage von oben"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Inhalt</div>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#${i}`} className="text-brand-sand/85 hover:text-brand-sand">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xs text-brand-stone/60">
              Die verbindliche Hafen- und Liegeplatzordnung wird derzeit überarbeitet und mit dem Liegeplatz übergeben.
            </p>
          </aside>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={s.title} id={String(i)} className="scroll-mt-28">
                <div className="text-xs uppercase tracking-[0.2em] text-brand-deep/60">Abschnitt {i + 1}</div>
                <h2 className="mt-2 text-3xl">{s.title}</h2>
                <ul className="mt-5 space-y-3">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex gap-3 rounded-xl border border-brand-deep/10 bg-white p-4 text-sm text-brand-stone/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-deep text-[11px] text-brand-sand">{j + 1}</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
