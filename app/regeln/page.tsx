import PageHero from "@/components/PageHero";

export const metadata = { title: "Hafenregeln" };

const sections = [
  {
    title: "Anlauf und Festmachen",
    items: [
      "Anmeldung beim Hafenmeister auf UKW Kanal 11, sobald Helgoland in Sichtweite ist.",
      "Liegeplatz wird zugewiesen. Eigenmächtiges Belegen freier Plätze nicht zulässig.",
      "Im Päckchen: Leinen über See, Stromkabel sauber führen, gegenseitige Rücksicht.",
      "Maximalgeschwindigkeit im Hafen: 3 Knoten. Keine Wellen.",
    ],
  },
  {
    title: "Verhalten im Hafen",
    items: [
      "Nachtruhe ab 22:00 Uhr. Crew-Abende dürfen sein, Schreiäußerungen nicht.",
      "Generatoren und laute Maschinen ab 21:00 Uhr nicht mehr betreiben.",
      "Hunde an Land an der Leine.",
      "Grillen nur in dafür ausgewiesenen Bereichen.",
    ],
  },
  {
    title: "Müll, Strom, Wasser",
    items: [
      "Mülltrennung in den Containern am Hafenkopf.",
      "Strom CEE-blau, eigenes Kabel mitbringen, kein Schuko-Adapter dauerhaft.",
      "Wasser sparsam verwenden, kein Bootswaschen mit Schlauch in der Hauptsaison.",
      "Fäkalientanks ausschließlich über die Absauganlage entleeren.",
    ],
  },
  {
    title: "Sicherheit",
    items: [
      "Schwimmwesten bei Kindern auf den Stegen Pflicht.",
      "Feuerlöscher und Rettungsringe sind Standorte einzuhalten, nicht entfernen.",
      "Im Brand- oder Notfall: Hafenmeister rufen, dann 112.",
      "Tauchen im Hafen nur mit Genehmigung des Hafenmeisters.",
    ],
  },
  {
    title: "Veränderungen",
    items: [
      "Reparaturarbeiten an Bord ja, Schleifen und Lackieren in der Saison nur mit Absprache.",
      "Mastlegen oder -stellen nur mit Anmeldung.",
      "Tender bitte am vorgesehenen Steg sichern, nicht am Stegkopf.",
    ],
  },
];

export default function RegelnPage() {
  return (
    <>
      <PageHero
        title="Regeln, die für alle gelten."
        lead="Was im Hafen gilt, gilt für alle. Bewährte Hafenregeln, kurz formuliert."
        image="https://picsum.photos/seed/wsc-regeln-hero/2000/1100"
        alt="Hafen aus der Vogelperspektive"
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
              Verbindliche Hafenordnung liegt im Hafenbüro aus und wird mit dem Liegeplatz übergeben.
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
