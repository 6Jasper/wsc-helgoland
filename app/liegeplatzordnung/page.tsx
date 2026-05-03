import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Liegeplatzordnung" };

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
    title: "Grundsätze, Zuteilung und Verleihung",
    items: [
      "Liegeplätze werden ausschließlich an Mitglieder vergeben, die ihren ersten Wohnsitz auf Helgoland haben und sich hier gewöhnlich aufhalten. Bei Wegfall einer dieser Voraussetzungen ist der Vorstand unverzüglich zu informieren.",
      "Ein Rechtsanspruch auf einen Liegeplatz besteht nicht, insbesondere nicht, wenn keine Liegeplätze mehr verfügbar sind oder eine Zuweisung wegen Länge, Breite oder Tiefgang nicht möglich ist.",
      "Die Zuteilung erfolgt durch den Spartenvorstand im Zusammenwirken mit den Hafenmeistern. Diese Personen sind in allen Hafenangelegenheiten weisungsberechtigt.",
      "Ein Anspruch auf einen bestimmten Liegeplatz besteht nicht. Aus betrieblichen Gründen kann ein anderer Liegeplatz zugewiesen werden.",
      "Bei Neuanschaffung eines Bootes ist die Bootsgröße im Verhältnis zum bisherigen Liegeplatz mit Vorstand und Hafenmeistern abzustimmen.",
      "Der Liegeplatz wird vom Verein nur verliehen. Es entsteht weder Eigentum noch ein Sondernutzungsrecht. Eine Übertragung durch Verkauf, Erbgang oder sonstige Rechtsnachfolge ist nicht möglich.",
      "Bei Verkauf, Verschenkung oder Aufgabe des Bootes fällt der Liegeplatz an den Verein zurück.",
      "Die Vergabe ist an die Ableistung der jährlichen Arbeitsdienste gebunden. Bei nicht abgeleisteten Arbeitsdiensten kann der Liegeplatz nach vorheriger Mahnung entzogen werden.",
    ],
  },
  {
    no: "02",
    title: "Belegung und Nichtbenutzung",
    items: [
      "Wird der Liegeplatz länger als einen Tag nicht benutzt, ist dies dem Hafenmeister zu melden. Der Platz kann dann mit Gastliegern belegt werden.",
      "Bei der Rückkehr ist der Hafenmeister rechtzeitig vorab zu informieren, damit ein etwaiger Gastlieger umverholt werden kann.",
      "Erlöse aus der Belegung mit Gastliegern stehen ausschließlich dem Verein zu.",
      "Der Verein ist berechtigt, Liegeplätze, die offensichtlich über einen längeren Zeitraum nicht genutzt werden, vorübergehend anders zu belegen.",
    ],
  },
  {
    no: "03",
    title: "Pflichten am Liegeplatz",
    groups: [
      {
        sub: "Festmacher und Sturmsicherung",
        items: [
          "Boote sind mit ausreichend dimensionierten und einwandfreien Festmachern, Spring- und Vorleinen sicher zu vertäuen. Schamfilschutz und ausreichende Fender sind anzubringen.",
          "Festmacher sind regelmäßig auf Verschleiß zu kontrollieren und rechtzeitig zu erneuern.",
          "Bei angekündigten Sturm-, Hochwasser- oder Schwellereignissen ist jeder Liegeplatzinhaber verpflichtet, sein Boot selbst zu prüfen und zusätzlich zu sichern. Der Verein und die Hafenmeister übernehmen keine Sturmwache.",
          "Bei längerer Abwesenheit ist eine Vertretung zu benennen, die im Sturmfall das Boot überprüfen und sichern kann. Die Kontaktdaten sind dem Hafenmeister mitzuteilen.",
        ],
      },
      {
        sub: "Stege und Stegbereich",
        items: [
          "Der Stegbereich am Liegeplatz ist sauber und frei zu halten. Eine dauerhafte Lagerung von Gegenständen auf den Stegen ist untersagt.",
          "Werkzeug, Material und Bootszubehör sind nach Beendigung der Arbeit unverzüglich vom Steg zu entfernen.",
          "Schäden an der Steganlage, an Pollern, Klampen, Leitern, Beleuchtung oder Strom- und Wasseranschlüssen sind unverzüglich beim Hafenmeister zu melden.",
          "Beiboote, Dinghis und sonstige Tender sind so unterzubringen, dass sie weder den Steg blockieren noch Nachbarboote gefährden. Eine Unterbringung am Steg nur in Abstimmung mit dem Hafenmeister.",
        ],
      },
      {
        sub: "Verhalten im Hafen",
        items: [
          "Im gesamten Hafenbereich gilt Schrittgeschwindigkeit. Auf andere Wassersportler, Berufsschifffahrt und schwimmende Personen ist Rücksicht zu nehmen.",
          "Lärm, Musik und Partyaktivitäten sind so zu gestalten, dass die Nachtruhe und die berechtigten Belange der übrigen Hafennutzer und Anwohner gewahrt bleiben.",
          "Tiere sind im Hafen und auf den Stegen anzuleinen.",
        ],
      },
    ],
  },
  {
    no: "04",
    title: "Sicherheit an Bord, Brandvermeidung",
    items: [
      "Boote sind in einem seetüchtigen, betriebssicheren und gepflegten Zustand zu halten. In der Saison wöchentlich, außerhalb mindestens alle vier Wochen kontrollieren.",
      "Gasanlagen regelmäßig durch Sachkundige prüfen lassen. Hauptventile beim Verlassen des Bootes schließen.",
      "Kraftstoff darf nur in zugelassenen, beschrifteten Reservebehältern und in haushaltsüblichen Mengen an Bord mitgeführt werden. Umfüllen am Liegeplatz nur unter Vermeidung von Tropf- und Spritzverlusten und mit Auffangwanne.",
      "Lithium-Ionen-Akkus dürfen an Bord nicht unbeaufsichtigt geladen werden. Beschädigte oder aufgeblähte Akkus sofort vom Boot entfernen.",
      "Heizgeräte, Kühlschränke und sonstige Verbraucher dürfen am Landstrom nur betrieben werden, wenn die Bordelektrik geeignet und ordnungsgemäß abgesichert ist.",
      "Mit Lacken, Ölen oder Lösemitteln getränkte Lappen nicht offen an Bord oder am Steg aufbewahren (Selbstentzündungsgefahr).",
      "An Bord ist mindestens ein geeigneter, geprüfter Feuerlöscher griffbereit vorzuhalten.",
      "Brände, Beinahe-Brandereignisse und ausgetretene Betriebsstoffe sind unverzüglich dem Hafenmeister und dem Vorstand zu melden, im akuten Fall der Feuerwehr (112).",
    ],
  },
  {
    no: "05",
    title: "Umweltschutz",
    items: [
      "Das Einleiten von Bilgenwasser, Altöl, Kraftstoff, Lösemitteln oder Frostschutz in das Hafenwasser ist verboten.",
      "Schwarzwasser wird nicht im Hafen abgepumpt. Entsorgung über die vorgesehenen Stationen oder an Land.",
      "Beim Tanken und Wechseln von Öl oder Frostschutz sind Auffangwannen und Bindevliese zu verwenden. Verschmutzungen sofort aufnehmen, fachgerecht entsorgen und melden.",
      "Schleif-, Lackier- und Antifoulingarbeiten sind am Liegeplatz im Wasser nicht gestattet. Sie erfolgen ausschließlich am dafür vorgesehenen Platz an Land.",
      "Reinigungsmittel sparsam und biologisch verträglich einsetzen. Phosphat- oder ölhaltige Reiniger sind nicht zu verwenden.",
      "Müll, Verpackungen, Altbatterien, Altlacke und Sonderabfälle nicht im Vereinsmüll entsorgen, sondern den dafür vorgesehenen Sammelstellen zuführen.",
    ],
  },
  {
    no: "06",
    title: "Strom und Wasser am Steg",
    items: [
      "Stromentnahme nur über die freigegebenen Anschlusspunkte. Es sind ausschließlich für den Außen- und Hafenbetrieb geeignete, unbeschädigte Kabel zu verwenden (mind. IP44, CEE-Stecker, ausreichender Querschnitt).",
      "Verlängerungs- und Trommelkabel vollständig abrollen und so verlegen, dass keine Stolper- oder Beschädigungsgefahr besteht.",
      "Defekte Kabel, Stecker und Anschlussdosen sofort außer Betrieb nehmen und melden.",
      "Dauerverbraucher (Heizungen, Entfeuchter, Heizlüfter, Boiler) dürfen ohne Genehmigung des Hafenmeisters nicht angeschlossen werden.",
      "Wasserentnahme sparsam vornehmen. Schläuche nach der Nutzung abkoppeln, entleeren und ordnungsgemäß verstauen. Bei Frostgefahr nach Anweisung des Hafenmeisters handeln.",
    ],
  },
  {
    no: "07",
    title: "Versicherungspflicht",
    items: [
      "Jeder Liegeplatzinhaber hat für sein Boot eine gültige Bootshaftpflichtversicherung mit ausreichender Deckungssumme zu unterhalten.",
      "Der Versicherungsnachweis ist dem Vorstand auf Verlangen vorzulegen. Stichprobenkontrollen sind vorbehalten.",
      "Der Versicherungsschutz muss insbesondere Schäden an der Steganlage, an Nachbarbooten, an Personen sowie Schäden durch Sinken oder Bergung umfassen. Eine Wracksversicherung wird ausdrücklich empfohlen.",
      "Erlischt der Versicherungsschutz oder wird die Deckungssumme herabgesetzt, ist der Vorstand unverzüglich zu informieren.",
    ],
  },
  {
    no: "08",
    title: "Arbeitsdienste",
    items: [
      "Liegeplatzinhaber sind zur Ableistung der vom Spartenvorstand festgelegten jährlichen Arbeitsstunden verpflichtet.",
      "Art, Umfang und Termine der Arbeitsdienste werden rechtzeitig bekanntgegeben. Anrechnung nach den vom Vorstand beschlossenen Regeln.",
      "Bei Nichtableistung kann der Vorstand entweder eine Ausgleichszahlung erheben oder, in begründeten Fällen und nach erfolgloser Mahnung, den Liegeplatz entziehen.",
    ],
  },
  {
    no: "09",
    title: "Haftung und Haftungsausschluss",
    groups: [
      {
        sub: "Nutzung auf eigene Gefahr",
        items: [
          "Die Nutzung des Liegeplatzes, der Steganlagen und der Hafeneinrichtungen erfolgt ausschließlich auf eigene Gefahr und in eigener Verantwortung.",
          "Der Liegeplatzinhaber überzeugt sich selbst von der Geeignetheit des Liegeplatzes, insbesondere von Wassertiefe, Schwell-, Sturm- und Strömungsverhältnissen.",
        ],
      },
      {
        sub: "Haftung des Liegeplatzinhabers",
        items: [
          "Der Liegeplatzinhaber haftet uneingeschränkt für Schäden, die er, seine Mitsegler, Familienangehörigen, Gäste oder beauftragten Dritten an der Steganlage, an Nachbarbooten oder am Eigentum Dritter verursachen.",
          "Die Haftung gilt insbesondere für Schäden durch unzureichende Festmacher, mangelnde Sturmsicherung, ausgetretene Betriebsstoffe, Brand-, Explosions- oder Wasserschäden sowie für ein gesunkenes oder havariertes Boot einschließlich Bergungs-, Räumungs- und Entsorgungskosten.",
          "Der Liegeplatzinhaber stellt den Verein, dessen Vorstand und die Hafenmeister von Ansprüchen Dritter frei, die aus seiner Liegeplatznutzung resultieren.",
        ],
      },
      {
        sub: "Haftungsausschluss zugunsten des Vereins",
        items: [
          "Die Bereitstellung des Liegeplatzes stellt kein Verwahrungsverhältnis im Sinne der §§ 688 ff. BGB dar. Der Verein übernimmt keinerlei Obhuts- oder Bewachungspflichten.",
          "Der Verein haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Vereins, seines Vorstands, seiner Hafenmeister oder seiner Erfüllungsgehilfen beruhen.",
          "Für leichte Fahrlässigkeit haftet der Verein ausschließlich bei Verletzung wesentlicher Vertragspflichten und auch dann nur in Höhe des bei Vertragsschluss vorhersehbaren, vertragstypischen Schadens.",
          "Diese Haftungsbeschränkungen gelten nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie nicht für Ansprüche nach dem Produkthaftungsgesetz und nicht in den Fällen einer übernommenen Garantie.",
        ],
      },
      {
        sub: "Insbesondere ausgeschlossene Schadenstatbestände",
        items: [
          "Verlust, Beschädigung, Sinken oder Diebstahl von Booten, Zubehör oder persönlichen Gegenständen am Liegeplatz oder im Hafenbereich.",
          "Schäden durch Witterung, Sturm, Hochwasser, Schwell, Eisgang, Frost, Hagel oder sonstige Naturereignisse.",
          "Schäden durch andere Hafennutzer, Gastlieger, Helfer oder Dritte. Andere Hafennutzer sind keine Erfüllungsgehilfen des Vereins.",
          "Schäden durch Vandalismus, Einbruch, Diebstahl oder vorsätzliches Handeln Dritter.",
          "Schäden durch Stromausfall, Spannungsschwankungen, Wasserausfall oder Ausfall sonstiger Hafenversorgungseinrichtungen.",
          "Mittelbare Schäden, Folgeschäden, reine Vermögensschäden, entgangenen Gewinn, Wertminderungen und Nutzungsausfallkosten, soweit sie nicht typische Folge eines Kardinalpflichtverstoßes sind.",
        ],
      },
      {
        sub: "Keine Aufsichts- und Überwachungspflicht",
        items: [
          "Verein, Vorstand und Hafenmeister übernehmen keine Aufsichts- oder Überwachungspflicht über die Boote am Liegeplatz oder die in den Hafenbereich eingebrachten Sachen.",
          "Sicherheitsrelevante Hinweise oder gelegentliche Eingriffe der Hafenmeister oder des Vorstands erfolgen freiwillig und begründen keine über diese Liegeplatzordnung hinausgehende Haftung.",
        ],
      },
      {
        sub: "Schadensmeldung und Anspruchsfrist",
        items: [
          "Jeder Schaden ist Vorstand und Hafenmeister unverzüglich anzuzeigen. Der Schadensort ist nach Möglichkeit zu sichern.",
          "Schadensersatzansprüche gegen den Verein sind innerhalb von zwölf Monaten ab Kenntnis schriftlich gegenüber dem Vorstand geltend zu machen, andernfalls sind sie ausgeschlossen. Die Frist gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit und nicht bei Vorsatz oder grober Fahrlässigkeit.",
        ],
      },
    ],
  },
  {
    no: "10",
    title: "Aufgegebene und havarierte Boote, Ersatzvornahme",
    items: [
      "Boote, die erkennbar nicht mehr genutzt werden, einen verwahrlosten Zustand aufweisen, gesunken sind oder zu sinken drohen, gefährden den Hafenbetrieb, die Steganlage, Nachbarboote und die Umwelt.",
      "Ein Boot gilt als aufgegeben, wenn es gesunken ist und der Eigner trotz Aufforderung keine wirksamen Maßnahmen ergreift, wenn es über zwölf Monate keine Nutzung oder Pflege aufweist und der Eigner nicht reagiert, wenn der Eigner über sechs Monate nicht erreichbar ist, wenn die Mitgliedschaft erloschen ist oder kein Versicherungsschutz mehr besteht, oder wenn der Eigner schriftlich die Aufgabe erklärt.",
      "Liegen die Voraussetzungen vor, ist der Verein nach vorheriger schriftlicher Androhung mit angemessener Fristsetzung berechtigt, im Wege der Ersatzvornahme die erforderlichen Maßnahmen auf Kosten des Eigners zu ergreifen: Sicherung, Bergung, Aufslippen, Verbringung an Land, kostenpflichtige Lagerung, Verwertung oder Entsorgung als Abfall einschließlich Schadstoffentfrachtung.",
      "Bei akuter Gefahr ist der Verein berechtigt, ohne vorherige Fristsetzung Sofortmaßnahmen zu ergreifen.",
      "Sämtliche entstehenden Kosten trägt der Eigner. Hierzu zählen Bergung, Taucher, Kran, Transport, Lagerung, Schadstoffentsorgung, Verwertung sowie Verwaltungs-, Mahn- und Rechtsverfolgungskosten.",
      "Dem Verein steht wegen aller fälligen Forderungen ein vertragliches Pfandrecht an Boot, Mast und gelagertem Zubehör des Eigners zu. Die Verwertung erfolgt nach den Vorschriften über den Pfandverkauf (§§ 1233 ff. BGB).",
      "Ein nach Aufrechnung verbleibender Verwertungserlös wird an den Eigner ausgekehrt, sofern er innerhalb von zwölf Monaten nach Verwertung schriftlich angefordert wird. Danach verfällt der Anspruch.",
      "Reicht der Verwertungserlös nicht, bleibt der Eigner für den Differenzbetrag zahlungspflichtig.",
      "Mit Anerkennung dieser Liegeplatzordnung erteilt der Liegeplatzinhaber dem Verein ausdrücklich Vollmacht und Ermächtigung, diese Maßnahmen unter den genannten Voraussetzungen vorzunehmen.",
    ],
  },
  {
    no: "11",
    title: "Verstöße",
    items: [
      "Wer in grober oder mutwilliger Weise gegen diese Liegeplatzordnung verstößt, wird zunächst verwarnt.",
      "Bei wiederholten oder besonders schwerwiegenden Verstößen, insbesondere gegen die Bestimmungen zu Versicherung, Sicherheit, Umweltschutz und Sturmsicherung, kann der Liegeplatz auf Beschluss des Vorstands entzogen werden.",
      "Dies gilt unabhängig von zivil- oder strafrechtlichen Folgen und unabhängig von der etwaigen Beendigung der Mitgliedschaft.",
    ],
  },
  {
    no: "12",
    title: "Datenschutz",
    items: [
      "Der Verein verarbeitet die personenbezogenen Daten des Liegeplatzinhabers (Name, Anschrift, Kontaktdaten, Bootsdaten, Versicherungsnachweis, Vertretung) ausschließlich zur Durchführung der Liegeplatzvergabe und des Hafenbetriebs sowie zur Erfüllung gesetzlicher Pflichten.",
      "Im Rahmen einer Ersatzvornahme dürfen die erforderlichen Daten an beauftragte Dritte (Berger, Verwerter, Entsorger, Rechtsanwalt, Inkasso) weitergegeben werden.",
    ],
  },
];

export default function LiegeplatzordnungPage() {
  return (
    <>
      <PageHero
        title={<>Liegeplatz<span style={{ fontWeight: 600 }}>ordnung.</span></>}
        lead="Diese Ordnung regelt die Vergabe und Nutzung der Liegeplätze an den vereinseigenen Steganlagen sowie die Pflichten der Liegeplatzinhaber."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze"
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
                    <a href={`#abschnitt-${s.no}`} className="text-[13px] text-text-muted hover:text-text-primary transition-colors block py-1">
                      <span className="text-text-dim mr-2">{s.no}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/dokumente/wsch-liegeplatzordnung.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Datei herunterladen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
              <p className="mt-6 text-[12px] text-text-dim leading-relaxed">
                Die Boote dürfen ausschließlich privat und nicht gewerblich genutzt werden. Jeder Liegeplatzinhaber erkennt
                diese Liegeplatzordnung mit der Zuteilung des Liegeplatzes verbindlich an.
              </p>
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
          </div>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
