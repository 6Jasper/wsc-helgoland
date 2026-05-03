import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Winterlager" };

type Section = {
  no: string;
  title: string;
  groups?: { sub?: string; items: string[] }[];
  items?: string[];
};

const SECTIONS: Section[] = [
  {
    no: "01",
    title: "Zuständigkeit und Belegung",
    items: [
      "Zuständig für den Platzbetrieb ist der Platzwart. Er ist alleiniger Ansprechpartner in allen Fragen der Platznutzung, Stellplatzzuweisung und Belegungsplanung.",
      "Die Belegung erfolgt ausschließlich nach Zuweisung durch den Platzwart. Eigenmächtiges Aufstellen, Umsetzen oder Tauschen ist nicht gestattet.",
      "Termine für Auf- und Abslippen sowie Kran- und Trailertermine sind rechtzeitig mit dem Platzwart abzustimmen.",
      "Die Lagerzeit ist auf die übliche Winterlagerperiode begrenzt. Eine darüber hinausgehende Nutzung ist nur nach gesonderter Vereinbarung mit dem Vorstand zulässig.",
      "Eine Untervermietung oder Überlassung des Stellplatzes an Dritte ist nicht gestattet.",
    ],
  },
  {
    no: "02",
    title: "Kennzeichnung der Boote",
    items: [
      "Jedes Boot ist deutlich sichtbar mit Bootsname, Name des Eigners und einer aktuellen Telefonnummer zu kennzeichnen.",
      "Bei Wechsel des Eigners, der Anschrift oder der Telefonnummer ist der Platzwart unverzüglich zu informieren.",
      "Boote ohne Kennzeichnung können nach erfolgloser Aufforderung als herrenlos behandelt werden.",
    ],
  },
  {
    no: "03",
    title: "Aufstellung und Bockung",
    items: [
      "Die Aufstellung erfolgt durch den Eigner auf eigene Kosten und Verantwortung. Bockmaterial, Pallen, Stützen und Gurte sind in ausreichender Anzahl, Qualität und Tragfähigkeit bereitzustellen.",
      "Die Standsicherheit ist so zu wählen, dass das Boot auch bei Sturm, Schneelast und gefrorenem Boden sicher steht. Im Zweifel ist fachkundiger Rat einzuholen.",
      "Stapelböcke, Pallen und Stützen sind außerhalb der Lagerzeit beschriftet auf dem hierfür ausgewiesenen Bereich zu lagern. Material ohne Kennzeichnung gilt nach drei Wochen als herrenlos und wird entsorgt.",
      "Masten sind nur in den dafür vorgesehenen Mastenständen oder Ablagen zu lagern, gegen Wegrollen gesichert und mit Eignernamen gekennzeichnet.",
    ],
  },
  {
    no: "04",
    title: "Sturmsicherung und Witterung",
    items: [
      "Persenninge, Planen und Winterabdeckungen sind sturmsicher zu befestigen. Lose Ecken oder unzureichend befestigte Gestänge sind unverzüglich nachzubessern.",
      "Bei angekündigten Sturm- oder Unwetterlagen ist der Eigner verpflichtet, sein Boot und dessen Abdeckung selbst zu prüfen und zu sichern. Der Verein übernimmt keine Sturmwache.",
      "Schäden durch unzureichend gesicherte Boote oder Abdeckungen an Nachbarbooten oder Vereinsanlagen gehen zu Lasten des Verursachers.",
      "Mindestens alle vier Wochen ist eine Kontrolle des Bootes empfohlen.",
    ],
  },
  {
    no: "05",
    title: "Arbeiten am Boot, Umwelt und Gesundheitsschutz",
    groups: [
      {
        sub: "Allgemeines",
        items: [
          "Arbeiten am Boot sind nur am eigenen Stellplatz zulässig. Nachbarstellplätze, Wege und Gemeinschaftsflächen werden nicht zugestellt.",
          "Vor dem Beginn umfangreicher Arbeiten (Schleifen, Lackieren, Laminieren) ist der Platzwart zu informieren.",
        ],
      },
      {
        sub: "Schleifarbeiten, Antifouling, GfK",
        items: [
          "Schleifarbeiten ausschließlich mit angeschlossener Staubabsaugung. Trockenschleifen ohne Absaugung ist nicht zulässig.",
          "Beim Schleifen ist der Boden unter dem Boot mit einer auffangfähigen Plane abzudecken.",
          "Schleifstaub ist nach Arbeitsende vollständig aufzunehmen und als Sondermüll zu entsorgen.",
          "Beim Arbeiten an Antifouling und GfK mindestens Atemschutz Klasse FFP3, Schutzbrille und chemikalienbeständige Handschuhe tragen.",
        ],
      },
      {
        sub: "Lackier- und Farbarbeiten",
        items: [
          "Spritzlackierungen sind im Freien grundsätzlich nicht gestattet. Ausnahmen bedürfen der ausdrücklichen Zustimmung des Platzwarts und sind nur bei geeigneter Witterung mit Einhausung möglich.",
          "Bei Streich- und Rollarbeiten mit lösemittelhaltigen Lacken oder Antifouling ist der Boden mit einer flüssigkeitsdichten Abdeckung zu schützen.",
          "Reste flüssiger Lacke, Lösemittel, Verdünner und Antifouling sind als Sondermüll fachgerecht zu entsorgen.",
        ],
      },
      {
        sub: "Wassergefährdende Stoffe",
        items: [
          "Beim Umgang mit Kraftstoff, Öl, Hydraulikflüssigkeit, Kühl- und Frostschutzmitteln, Lacken, Lösemitteln und Harzen ist der Boden mit Auffangwannen und Bindevliesen zu schützen.",
          "Verschmutzungen sind unverzüglich aufzunehmen, fachgerecht zu entsorgen und zu melden.",
          "Das Ablassen von Bilgenwasser, Altöl, Kraftstoff oder Frostschutzmitteln auf den Platz ist verboten.",
        ],
      },
      {
        sub: "Brandvermeidung im Freien",
        items: [
          "Offenes Feuer, Lagerfeuer und Grillen sind auf dem gesamten Lagerplatz untersagt.",
          "Heißarbeiten (Schweißen, Trennschleifen, Brennschneiden, Heißluftpistole zum Lackabbrennen) bedürfen der vorherigen Genehmigung des Platzwarts. Eine Brandwache mit griffbereitem Feuerlöscher ist während und mindestens zwei Stunden nach den Arbeiten zu stellen.",
          "Mit Lacken, Ölen, Leinöl oder Harzen getränkte Lappen in dicht schließenden Metallbehältern sammeln (Selbstentzündungsgefahr).",
          "Lithium-Ionen-Akkus, Bordbatterien und Elektronik nicht unbeaufsichtigt am Boot laden. Beschädigte oder aufgeblähte Akkus sofort entfernen und sicher im Freien lagern.",
          "Gasflaschen aus dem Boot nehmen oder mit geschlossenem Hauptventil sichern. Eine Lagerung loser Gasflaschen auf dem Platz ist nicht gestattet.",
        ],
      },
    ],
  },
  {
    no: "06",
    title: "Strom und Wasser",
    items: [
      "Stromentnahme nur über die freigegebenen Anschlusspunkte und nur für die Dauer der Anwesenheit. Dauerverbraucher (Heizungen, Entfeuchter, Heizlüfter) sind nicht ohne Genehmigung zulässig.",
      "Verlängerungs- und Trommelkabel im Außenbereich vollständig abrollen, für den Außeneinsatz geeignet (mind. IP44) und so verlegen, dass keine Stolpergefahr besteht.",
      "Defekte Kabel und Stecker sofort außer Betrieb nehmen und melden.",
      "Wasserentnahme sparsam vornehmen. Schläuche nach der Nutzung abkoppeln, entleeren (Frostgefahr) und ordnungsgemäß verstauen.",
    ],
  },
  {
    no: "07",
    title: "Ordnung, Sauberkeit, Müll",
    items: [
      "Die zugewiesenen Stellplätze und die umliegenden Wege sauber halten. Nach Arbeitsende sind Werkzeuge, Material und Abfälle vom Stellplatz und aus den Wegen zu entfernen.",
      "Wege und Feuerwehrzufahrten sind jederzeit freizuhalten.",
      "Fahrzeuge dürfen nur auf den ausgewiesenen Parkflächen abgestellt werden.",
      "Vereinsmüll ist nicht für Sondermüll, Bauschutt, Altlacke, Altöl, Batterien oder Bootsausrüstung bestimmt.",
      "Bei Verlassen nach Aus- oder Einwasserung ist der Platz besenrein zu hinterlassen.",
    ],
  },
];

const VERTRAG_ECKDATEN = [
  ["Vertragsbeginn", "Individuell, nach Zuweisung des Stellplatzes durch den Platzwart"],
  ["Vertragsdauer", "Befristet bis 30. April des Folgejahres"],
  ["Verlängerung", "Stillschweigend um jeweils ein weiteres Jahr (1. Mai bis 30. April)"],
  ["Kündigungsfrist", "Drei Monate zum Ende des Vertragsjahres (30. April), in Textform"],
  ["Außerordentliche Kündigung", "Aus wichtigem Grund jederzeit beidseitig"],
  ["Räumungsfrist", "30 Tage nach Vertragsende, Stellplatz besenrein zu übergeben"],
  ["Nutzungsentgelt", "Nach jeweils gültiger Gebührenordnung des Vereins, jährlich im Voraus"],
  ["Versicherung", "Bootshaftpflicht mit ausreichender Deckung, Nachweis auf Verlangen"],
  ["Pfandrecht", "Vertragliches Pfandrecht des Vereins an Boot, Mast und Zubehör"],
];

export default function WinterlagerPage() {
  return (
    <>
      <PageHero
        title={<>Winterlager <span style={{ fontWeight: 600 }}>im Freien.</span></>}
        lead="Der vereinseigene Lagerplatz für Boote in der Winterperiode. Belegung, Aufstellung und Pflege des Stellplatzes regelt die Platzordnung, die Vertragsmodalitäten der Nutzungsvertrag."
        image="/img/wsch_anlagemitclubhaus2.jpg"
        alt="WSCH Vereinsanlage"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <Reveal variant="cinematic">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Platzordnung</div>
              <ul className="space-y-2">
                {SECTIONS.map((s) => (
                  <li key={s.no}>
                    <a href={`#abschnitt-${s.no}`} className="text-[13px] text-text-muted hover:text-text-primary transition-colors block py-1">
                      <span className="text-text-dim mr-2">{s.no}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
                <li className="pt-3 mt-3 border-t border-border-subtle">
                  <a href="#nutzungsvertrag" className="text-[13px] text-text-muted hover:text-text-primary transition-colors block py-1">
                    Nutzungsvertrag
                  </a>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href="/dokumente/wsch-platzordnung-winterlager.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
                >
                  <span>Platzordnung (DOCX)</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
                <a
                  href="/dokumente/wsch-nutzungsvertrag-winterlager.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
                >
                  <span>Nutzungsvertrag (DOCX)</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
              </div>
            </aside>
          </Reveal>

          <div className="space-y-20 md:space-y-24">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.no} variant="cinematic" delay={Math.min(i * 0.03, 0.25)}>
                <article id={`abschnitt-${s.no}`} className="scroll-mt-32">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Abschnitt {s.no}</div>
                  <h2 className="mt-2 m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                    {s.title}
                  </h2>

                  {s.items && (
                    <ul className="mt-8 space-y-4">
                      {s.items.map((it, j) => (
                        <li key={j} className="flex gap-4 text-text-body text-[15px] md:text-[16px] leading-relaxed border-t border-border-subtle pt-5">
                          <span className="text-accent-tide font-semibold mt-[2px] flex-shrink-0 w-5 text-center" aria-hidden>×</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.groups && (
                    <div className="mt-10 space-y-12">
                      {s.groups.map((g, k) => (
                        <div key={k}>
                          {g.sub && (
                            <h3 className="text-text-primary text-[18px] md:text-[22px] font-semibold tracking-tightish mb-5">{g.sub}</h3>
                          )}
                          <ul className="space-y-4">
                            {g.items.map((it, j) => (
                              <li key={j} className="flex gap-4 text-text-body text-[15px] md:text-[16px] leading-relaxed border-t border-border-subtle pt-5">
                                <span className="text-accent-tide font-semibold mt-[2px] flex-shrink-0 w-5 text-center" aria-hidden>×</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}

            <Reveal variant="cinematic">
              <article id="nutzungsvertrag" className="scroll-mt-32 border-t border-border-subtle pt-20">
                <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Vertrag</div>
                <h2 className="mt-2 m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                  Nutzungsvertrag <span className="font-bold">Winterlager.</span>
                </h2>
                <p className="body-copy mt-6 max-w-prose">
                  Für die Nutzung des Winterlagerplatzes schließt jeder Nutzer einen schriftlichen Nutzungsvertrag mit dem
                  Verein ab. Die Platzordnung oben ist Anlage und Bestandteil dieses Vertrages.
                </p>

                <div className="mt-10">
                  {VERTRAG_ECKDATEN.map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8 border-t border-border-subtle py-5">
                      <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase sm:w-56 sm:flex-shrink-0">{k}</div>
                      <div className="text-text-primary text-[15px] md:text-[16px] sm:flex-1">{v}</div>
                    </div>
                  ))}
                </div>

                <p className="body-copy mt-8 max-w-prose">
                  Der vollständige Vertragstext einschließlich der Regelungen zu Aufstellung, Versicherung, Haftung,
                  Pfandrecht und Ersatzvornahme bei aufgegebenen Booten steht als DOCX zum Download bereit.
                </p>

                <a
                  href="/dokumente/wsch-nutzungsvertrag-winterlager.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
                >
                  <span>Nutzungsvertrag herunterladen</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
