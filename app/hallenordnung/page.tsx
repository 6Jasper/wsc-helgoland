import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Hallenordnung Bootshalle" };

type Section = {
  no: string;
  title: string;
  intro?: string;
  groups?: { sub?: string; items: string[] }[];
  items?: string[];
};

const SECTIONS: Section[] = [
  {
    no: "01",
    title: "Zuständigkeiten und Hallennutzung",
    items: [
      "Zuständig für den Hallenbetrieb ist der Hallenwart.",
      "Termine und Hallennutzung sind beim Hallenwart anzumelden und mit ihm abzustimmen.",
      "Terminverschiebungen oder Tauschabsichten sind mit dem Hallenwart abzusprechen.",
      "Die allgemeine Nutzungsdauer beträgt in der Regel vierzehn Tage. In Ausnahmefällen ist nach Abstimmung mit dem Hallenwart eine längere Nutzungsdauer möglich.",
      "Eine längerfristige Lagerung von Bootszubehör über die Hallennutzung hinaus ist nur mit ausdrücklicher Zustimmung des Hallenwarts zulässig.",
      "Vor Aufnahme von Schleif-, Lackier- oder GfK-Arbeiten ist der Hallenwart über Art und Umfang der Arbeiten zu informieren.",
      "Für Unstimmigkeiten ist der Hallenwart anzusprechen.",
    ],
  },
  {
    no: "02",
    title: "Brandvermeidung",
    groups: [
      {
        sub: "Rauch- und Feuerverbot",
        items: [
          "In der gesamten Halle gilt striktes Rauchverbot. Dies schließt E-Zigaretten ein.",
          "Offenes Feuer (Kerzen, Gaskocher, Lötlampen ohne Genehmigung) ist in der Halle verboten.",
        ],
      },
      {
        sub: "Heißarbeiten",
        items: [
          "Flexen und sonstige Trennschleifarbeiten sind in der Halle grundsätzlich nicht gestattet.",
          "Schweiß- und Lötarbeiten sind nur mit vorheriger Genehmigung des Hallenwarts und unter Einhaltung einer schriftlichen Heißarbeitserlaubnis zulässig.",
          "Während und mindestens zwei Stunden nach Heißarbeiten ist eine Brandwache zu stellen. Ein geeigneter Feuerlöscher muss in unmittelbarer Nähe griffbereit sein.",
          "Brennbare Materialien im Umkreis von mindestens fünf Metern sind vorher zu entfernen oder abzudecken.",
        ],
      },
      {
        sub: "Lagerung brennbarer Flüssigkeiten",
        items: [
          "Lacke, Verdünner, Aceton, Lösemittel, Polyester- und Epoxidharze sowie Härter werden während der Hallennutzung ausschließlich in den dafür vorgesehenen Sicherheitsschränken gelagert und nach Beendigung der Hallennutzung aus dem Gebäude entfernt.",
          "Die Lagermenge je Hallenhälfte ist auf das für die laufende Arbeit notwendige Maß zu beschränken. Großgebinde werden nicht in der Halle aufbewahrt.",
          "Behälter sind stets dicht zu verschließen. Beschädigte oder undichte Gebinde sind sofort dem Hallenwart zu melden.",
          "Gefahrstoffe dürfen nicht im Bereich von Heizkörpern, Schalttafeln oder direkter Sonneneinstrahlung gelagert werden.",
        ],
      },
      {
        sub: "Selbstentzündungsgefahr",
        items: [
          "Mit Lösemitteln, Lacken, Ölen, Leinöl oder Harzen getränkte Lappen, Putztücher und Pinsel werden ausschließlich in dafür vorgesehenen, dicht schließenden Metallbehältern gesammelt.",
          "Sammelbehälter sind nach Arbeitsende zu entleeren oder ins Freie zu bringen. Eine Aufbewahrung in offenen Eimern, Mülltüten oder Kartons ist verboten.",
        ],
      },
      {
        sub: "Elektrische Anlagen und Werkzeuge",
        items: [
          "Defekte Kabel, beschädigte Stecker oder Werkzeuge mit erkennbaren Schäden sind sofort außer Betrieb zu nehmen.",
          "Verlängerungs- und Trommelkabel sind beim Betrieb vollständig abzurollen.",
          "Kabel sind so zu verlegen, dass sie keine Stolperfalle bilden.",
          "Nach Tagesende sind alle elektrischen Geräte vom Netz zu trennen. Das gilt auch für die Stromversorgung außerhalb des Gebäudes stehender Boote.",
        ],
      },
      {
        sub: "Akkus und Ladegeräte",
        items: [
          "Lithium-Ionen-Akkus von Werkzeugen dürfen in der Halle nicht unbeaufsichtigt geladen werden.",
          "Beschädigte, verformte oder aufgeblähte Akkus sind sofort aus der Halle zu entfernen.",
          "Ladevorgänge erfolgen auf nicht brennbarem Untergrund und mit Abstand zu brennbaren Materialien.",
        ],
      },
      {
        sub: "Heizgeräte",
        items: [
          "Mobile Heizgeräte (Heizlüfter, Heizstrahler, Gasheizer, Bautrockner) dürfen nur in Absprache mit dem Hallenwart und nicht unbeaufsichtigt betrieben werden.",
          "Ein Mindestabstand von einem Meter zu brennbaren Materialien ist einzuhalten.",
          "Gasflaschen werden nicht in der Halle gelagert.",
        ],
      },
      {
        sub: "Feuerlöscher und Fluchtwege",
        items: [
          "Standorte der Feuerlöscher, des Verbandkastens und der Notausgänge sind jedem Nutzer bekannt zu machen.",
          "Fluchtwege, Notausgänge und der Zugang zu Feuerlöschern sind jederzeit freizuhalten.",
          "Festgestellte Mängel an Brandschutzeinrichtungen sind dem Hallenwart unverzüglich zu melden.",
        ],
      },
      {
        sub: "Verhalten im Brandfall",
        items: [
          "Personen warnen, gefährdete Bereiche räumen, Halle verlassen.",
          "Feuerwehr alarmieren: 112.",
          "Brand nur bekämpfen, wenn die eigene Sicherheit gewährleistet ist.",
          "Hallenwart und Vorstand sind nach jedem Brand- oder Beinahe-Brandereignis unverzüglich zu informieren.",
        ],
      },
    ],
  },
  {
    no: "03",
    title: "Gesundheitsschutz bei Schleif-, Lackier- und GfK-Arbeiten",
    groups: [
      {
        sub: "Persönliche Schutzausrüstung",
        items: [
          "Jeder Nutzer ist für seine eigene Schutzausrüstung verantwortlich.",
          "Schutzbrille bei Schleif-, Bohr-, Hammer- und Trennarbeiten.",
          "Atemschutzmaske der erforderlichen Filterklasse je nach Tätigkeit.",
          "Chemikalienbeständige Handschuhe (z. B. Nitril) bei Lacken, Harzen und Lösemitteln.",
          "Gehörschutz bei lärmintensiven Arbeiten.",
          "Geschlossene, feste Schuhe in der Halle.",
          "Bei GfK- und Lackierarbeiten zusätzlich Schutzanzug und Kopfbedeckung.",
        ],
      },
      {
        sub: "Schleifarbeiten",
        items: [
          "Schleifarbeiten ausschließlich mit angeschlossener Staubabsaugung.",
          "Beim Schleifen von Antifouling, Altlacken (mögliche Bleihaltigkeit) und GfK ist mindestens Atemschutz Klasse FFP3 zu tragen.",
          "Trockenes Auskehren ohne Absaugung ist nicht zulässig.",
          "Andere Hallennutzer sind vor Beginn größerer Schleifarbeiten zu informieren.",
        ],
      },
      {
        sub: "GfK, Polyester und Epoxidharze",
        items: [
          "Beim Laminieren und beim Anmischen von Harzen sind Schutzbrille, chemikalienbeständige Handschuhe und ein langärmeliger Schutzanzug zu tragen.",
          "Atemschutz mit Kombinationsfilter A2 P3 ist Pflicht.",
          "Auf eine ausreichende Querlüftung ist zu achten. Tore und Fenster sind nach Möglichkeit zu öffnen.",
          "Hautkontakt mit Harzen, insbesondere mit Epoxidharz und dessen Härtern, ist strikt zu vermeiden.",
          "Reste von angemischtem Harz sind ausgehärtet, nicht flüssig, zu entsorgen.",
        ],
      },
      {
        sub: "Lackier-, Farb- und Antifouling-Arbeiten",
        items: [
          "Bei Farb- und Lackierarbeiten ist der Hallenboden mit einer Folie abzudecken.",
          "Lösemittelhaltige Lacke und Antifouling-Beschichtungen erfordern Atemschutz mit Kombinationsfilter A2 P3 sowie chemikalienbeständige Handschuhe.",
          "Antifouling enthält Biozide. Hautkontakt, Einatmen und Verschleppen in andere Bereiche sind strikt zu vermeiden, das gilt insbesondere für die Sanitär- und Clubräume.",
          "Spritzlackierungen nur in Abstimmung mit dem Hallenwart und bei geöffneten Toren bzw. mit aktiver Lüftung.",
          "Während Lackierarbeiten mit lösemittelhaltigen Produkten sind Zündquellen im gesamten Hallenbereich untersagt. Es besteht Explosionsgefahr durch Lösemitteldämpfe.",
        ],
      },
      {
        sub: "Lüftung",
        items: [
          "Bei Arbeiten mit Lösemitteln, Harzen oder Farben ist die Halle ausreichend zu lüften.",
          "Auch nach Arbeitsende ist die Halle so lange zu lüften, bis kein Geruch mehr wahrnehmbar ist.",
        ],
      },
      {
        sub: "Sicherheitsdatenblätter und Erste Hilfe",
        items: [
          "Sicherheitsdatenblätter der verwendeten Stoffe sind vom Nutzer mitzuführen oder an einer für alle einsehbaren Stelle zu hinterlegen.",
          "Standort des Erste-Hilfe-Kastens und der Augenspülflasche ist jedem Nutzer bekannt zu machen.",
          "Entnommenes Material ist dem Hallenwart zu melden.",
        ],
      },
      {
        sub: "Alleinarbeit",
        items: [
          "Arbeiten mit besonderem Gefährdungspotenzial (Lackieren mit Lösemitteln, Laminieren, Heißarbeiten, Arbeiten in Bilge oder Tank) werden nicht allein durchgeführt. Mindestens eine zweite Person muss in Hör- und Rufweite sein.",
        ],
      },
    ],
  },
  {
    no: "04",
    title: "Ordnung und Sauberkeit",
    groups: [
      {
        sub: "Tagesabschluss",
        items: [
          "Stromkabel aufschießen, Gegenstände aus den Gehzonen entfernen.",
          "Schmutzanfall aufkehren.",
          "Schläuche sauber aufschießen.",
          "Ausgetretenes Wasser aufwischen.",
          "Gefahrstoffe ordnungsgemäß verschließen und im Sicherheitsschrank verwahren.",
        ],
      },
      {
        sub: "Werkzeug und Geräte",
        items: [
          "Bohrmaschine nach der Nutzung reinigen.",
          "Waschbecken nach der Nutzung reinigen.",
          "Geliehenes Werkzeug gereinigt an seinen Platz zurücklegen. Defekte dem Hallenwart melden.",
        ],
      },
      {
        sub: "Rückgabe der Hallenhälfte",
        items: [
          "Werkbank geräumt und gereinigt.",
          "Boden gefegt, auch unter den Bänken.",
          "Sämtliche genutzten Gegenstände (Leitern, Hölzer, Bohlen, Bootsinventar, Getränkebehälter, Werkzeugkisten) sachgerecht eingelagert oder entsorgt.",
          "Größeres oder ausgebautes Bootszubehör wird vom Eigentümer ordnungsgemäß entsorgt, ausdrücklich nicht auf dem Platz neben der Halle.",
          "Gegenstände, die länger als drei Wochen in der Halle stehen und nicht zugeordnet werden können, gelten als Müll und werden kostenpflichtig entfernt.",
          "Der nachfolgende Nutzer überprüft den Zustand und spricht den Vorbenutzer auf etwaige Hinterlassenschaften an.",
        ],
      },
      {
        sub: "Nach Veranstaltungen",
        items: [
          "Tische, Bänke und sonstiges Inventar umgehend einlagern (Lagerort Keller).",
          "Hallenboden fegen und wischen, Boden in der Kochecke reinigen und bei Bedarf entfetten.",
          "Die Halle steht spätestens nach drei Tagen wieder zur Nutzung zur Verfügung.",
        ],
      },
      {
        sub: "Weitere Bereiche",
        items: [
          "Die Reinigungspflicht erstreckt sich auf den gekachelten Boden, die Treppe zum Clubraum und zum Keller. Hierfür zeichnet der Hallennutzer der jeweiligen Hallenhälfte verantwortlich.",
        ],
      },
    ],
  },
  {
    no: "05",
    title: "Verstöße",
    items: [
      "Wer in grober oder mutwilliger Weise gegen diese Hallenordnung verstößt, wird zunächst verwarnt.",
      "Bei wiederholten oder besonders schwerwiegenden Verstößen, insbesondere gegen die Bestimmungen zum Brand- und Gesundheitsschutz, kann der Nutzer bis auf weiteres oder dauerhaft von der Hallennutzung ausgeschlossen werden.",
      "Dies gilt unabhängig von zivil- oder strafrechtlichen Folgen.",
    ],
  },
];

export default function HallenordnungPage() {
  return (
    <>
      <PageHero
        title={<>Hallen<span style={{ fontWeight: 600 }}>ordnung.</span></>}
        lead="Diese Ordnung regelt die Nutzung der Bootshalle. Schwerpunkte sind die Sicherheit aller Nutzer, die Vermeidung von Bränden und der Gesundheitsschutz bei Schleif-, Lackier- und GfK-Arbeiten."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="WSCH Vereinsanlage"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <Reveal variant="cinematic">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Inhalt</div>
              <ul className="space-y-2">
                {SECTIONS.map((s) => (
                  <li key={s.no}>
                    <a
                      href={`#abschnitt-${s.no}`}
                      className="text-[13px] text-text-muted hover:text-text-primary transition-colors block py-1"
                    >
                      <span className="text-text-dim mr-2">{s.no}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/dokumente/wsch-hallenordnung.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Datei herunterladen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
              <p className="mt-6 text-[12px] text-text-dim leading-relaxed">
                Jeder Hallennutzer erkennt diese Ordnung mit Beginn der Nutzung verbindlich an und ist für die Einhaltung
                selbst und durch eingewiesene Helfer verantwortlich.
              </p>
            </aside>
          </Reveal>

          <div className="space-y-20 md:space-y-24">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.no} variant="cinematic" delay={Math.min(i * 0.04, 0.25)}>
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
                            <h3 className="text-text-primary text-[18px] md:text-[22px] font-semibold tracking-tightish mb-5">
                              {g.sub}
                            </h3>
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
          </div>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
