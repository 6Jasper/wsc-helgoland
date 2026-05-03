import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Hafenordnung" };

type Section = {
  no: string;
  title: string;
  groups?: { sub?: string; items: string[] }[];
  items?: string[];
};

const SECTIONS: Section[] = [
  {
    no: "01",
    title: "Geltungsbereich",
    items: [
      "Diese Hafenordnung gilt für die Vereinshäfen des Wassersportclubs Helgoland (Südhafen und Nordosthafen) und ist von allen Hafennutzern verbindlich zu beachten. Hafennutzer sind alle Mitglieder, Liegeplatzinhaber, Gastlieger, Mitsegler, Gäste, Helfer und sonstigen Besucher der Steganlagen.",
      "Ergänzend gelten die Liegeplatzordnung für feste Liegeplatzinhaber, die Hallenordnung für die Bootshalle und die Platzordnung für den Winterlagerplatz im Freien.",
      "Mit dem Betreten der Steganlage und der Inanspruchnahme der Hafeneinrichtungen erkennt jeder Nutzer diese Hafenordnung verbindlich an. Die Nutzung erfolgt auf eigene Gefahr und in eigener Verantwortung.",
    ],
  },
  {
    no: "02",
    title: "Verhalten im Hafen",
    items: [
      "Im gesamten Hafenbereich und auf den Steganlagen ist gegenseitige Rücksichtnahme oberstes Gebot.",
      "Im Hafenbereich gilt für die Einfahrt und das Manövrieren strikt Schrittgeschwindigkeit. Sog und Wellenschlag sind zu vermeiden.",
      "Auf andere Wassersportler, die Berufsschifffahrt, Schwimmer, Taucher und Personen auf den Stegen ist Rücksicht zu nehmen.",
      "Lärm, Musik und Geselligkeit sind so zu gestalten, dass die Nachtruhe und die Belange der übrigen Hafennutzer und Anwohner gewahrt bleiben.",
      "Kinder sind im gesamten Hafenbereich stets zu beaufsichtigen. Auf den Stegen sind Schwimmwesten dringend empfohlen.",
      "Tiere sind im Hafenbereich und auf den Stegen anzuleinen. Hinterlassenschaften sind unverzüglich zu beseitigen.",
      "Gastlieger melden sich unverzüglich nach Anlegen beim Hafenmeister an. Anweisungen des Hafenmeisters und der Vorstandsmitglieder ist Folge zu leisten.",
    ],
  },
  {
    no: "03",
    title: "Sicherheit und Brandvermeidung",
    groups: [
      {
        sub: "Allgemeine Brandvermeidung",
        items: [
          "Offenes Feuer und Grillen auf Stegen und Booten in Stegnähe sind verboten.",
          "Rauchen beim Betanken ist untersagt. Beim Tanken sind alle elektrischen Verbraucher und Zündquellen abzuschalten.",
          "Heißarbeiten an Bord (Schweißen, Trennschleifen, Brennschneiden, Heißluftpistole) sind im Hafen nur in Abstimmung mit dem Hafenmeister und mit Brandwache und griffbereitem Feuerlöscher zulässig.",
          "Mit Lacken, Ölen, Leinöl oder Lösemitteln getränkte Lappen sind nicht offen an Bord oder am Steg aufzubewahren (Selbstentzündungsgefahr). Sie sind in dicht schließenden Metallbehältern zu sammeln und sachgerecht zu entsorgen.",
        ],
      },
      {
        sub: "Gas, Kraftstoff und Akkus",
        items: [
          "Gasanlagen (Flüssiggas) an Bord sind in einwandfreiem Zustand zu halten. Hauptventile sind beim Verlassen des Bootes zu schließen.",
          "Kraftstoff darf nur in zugelassenen, beschrifteten Reservebehältern und in haushaltsüblichen Mengen mitgeführt werden. Beim Umfüllen sind geeignete Auffangwannen zu verwenden.",
          "Lithium-Ionen-Akkus von Werkzeugen, Pedelecs und E-Bikes dürfen an Bord oder am Steg nicht unbeaufsichtigt geladen werden. Beschädigte oder aufgeblähte Akkus sind sofort vom Boot zu entfernen.",
        ],
      },
      {
        sub: "Rettungsmittel",
        items: [
          "Rettungsmittel (Rettungsringe, Wurfleinen, Steigleitern, Feuerlöscher, Notrufeinrichtungen) dürfen nur im Notfall benutzt werden.",
          "An Bord ist mindestens ein geeigneter, geprüfter Feuerlöscher griffbereit vorzuhalten. Mit den Standorten der Feuerlöscher und Rettungsmittel im Hafenbereich ist sich vertraut zu machen.",
          "Festgestellte Mängel an Rettungsmitteln, Feuerlöschern oder Brandschutzeinrichtungen sind unverzüglich dem Hafenmeister oder Vorstand zu melden.",
        ],
      },
    ],
  },
  {
    no: "04",
    title: "Verhalten im Notfall",
    items: [
      "Notruf: 112.",
      "Standortangabe gegenüber den Rettungskräften: Südhafen Cassen-Eils-Wai bzw. Nordosthafen Kurpromenade.",
      "Bei Feuer: Personen warnen, Strom abschalten (Not-Aus), Hafenbereich räumen. Löschversuch nur ohne Eigengefährdung.",
      "Bei Personenüberbordfall: Rettungsring werfen, Person im Auge behalten, Notruf absetzen, Hafenmeister oder andere Hafennutzer alarmieren.",
      "Ölunfälle, ausgetretene Kraftstoffe und sonstige Gewässerverunreinigungen sind sofort dem Hafenmeister oder Vorstand zu melden, damit Bindemittel und Ölsperren eingesetzt werden können.",
      "Brände, Beinahe-Brandereignisse und sonstige Vorfälle mit Sicherheitsrelevanz sind nach Eintreffen der Rettungskräfte dem Hafenmeister und Vorstand zu melden.",
    ],
  },
  {
    no: "05",
    title: "Umwelt und Gewässerschutz",
    items: [
      "Das Einleiten von Bilgenwasser, Altöl, Kraftstoff, Lösemitteln, Frostschutz, Reinigungsmittelresten oder anderen wassergefährdenden Stoffen in das Hafenbecken oder auf die Stege und Hafenflächen ist verboten.",
      "Schwarzwasser darf nicht im Hafen abgepumpt werden. Es ist über die vorgesehenen Entsorgungseinrichtungen oder an Land sachgerecht zu entsorgen.",
      "Beim Tanken, Ölwechsel und sonstigen Arbeiten mit wassergefährdenden Stoffen sind Auffangwannen und Bindevliese zu verwenden. Verschmutzungen sind sofort aufzunehmen, fachgerecht zu entsorgen und dem Hafenmeister zu melden.",
      "Schleif-, Lackier- und Antifoulingarbeiten sind am Liegeplatz im Wasser nicht gestattet. Sie sind ausschließlich am dafür vorgesehenen Platz an Land und gemäß Platzordnung Winterlager durchzuführen.",
      "Reinigungsmittel zur Bootspflege sind sparsam und biologisch verträglich einzusetzen. Phosphathaltige oder ölhaltige Reiniger sind nicht zu verwenden.",
      "Müll ist ausschließlich in die vorgesehenen Behälter zu entsorgen. Sonderabfälle (Altbatterien, Altlacke, Altöl, Lösemittelreste) sind den dafür vorgesehenen Sammelstellen zuzuführen, nicht dem Vereinsmüll.",
    ],
  },
  {
    no: "06",
    title: "Strom und Wasser am Steg",
    items: [
      "Stromentnahme erfolgt nur über die freigegebenen Anschlusspunkte und nur mit für den Außen- und Hafenbetrieb geeigneten, unbeschädigten Kabeln (mind. IP44, CEE-Stecker, ausreichender Querschnitt).",
      "Verlängerungs- und Trommelkabel sind vollständig abzurollen und so zu verlegen, dass keine Stolper- oder Beschädigungsgefahr besteht und die Stege passierbar bleiben.",
      "Defekte Kabel, Stecker und Anschlussdosen sind sofort außer Betrieb zu nehmen und dem Hafenmeister zu melden.",
      "Manipulationen an den Stromanlagen sind untersagt.",
      "Dauerverbraucher (Heizungen, Entfeuchter, Heizlüfter, Boiler) dürfen ohne Genehmigung des Hafenmeisters nicht angeschlossen werden.",
      "Wasserentnahme ist sparsam vorzunehmen. Schläuche sind nach der Nutzung abzukoppeln, zu entleeren und ordnungsgemäß zu verstauen.",
    ],
  },
  {
    no: "07",
    title: "Festmacher und Sturmsicherung",
    items: [
      "Boote sind mit ausreichend dimensionierten Festmachern, Spring- und Vorleinen sicher zu vertäuen. Schamfilschutz und ausreichend Fender sind anzubringen.",
      "Festmacher sind regelmäßig auf Verschleiß zu kontrollieren und rechtzeitig zu erneuern.",
      "Bei angekündigten Sturm-, Hochwasser- oder Schwellereignissen ist jeder Bootsführer verpflichtet, sein Boot selbst zu prüfen und zusätzlich zu sichern. Der Verein und die Hafenmeister übernehmen keine Sturmwache.",
      "Bei längerer Abwesenheit ist eine erreichbare Vertretung zu benennen, die im Sturmfall das Boot überprüfen und sichern kann. Die Kontaktdaten sind dem Hafenmeister mitzuteilen.",
    ],
  },
  {
    no: "08",
    title: "Stege und Verkehrssicherung",
    items: [
      "Die Stege sind freizuhalten. Sie sind zugleich Rettungswege.",
      "Werkzeug, Material und Bootszubehör sind nach Beendigung der Arbeit unverzüglich vom Steg zu entfernen.",
      "Leinen, Kabel und Schläuche sind so zu führen, dass keine Stolpergefahr entsteht.",
      "Beiboote, Dinghis und sonstige Tender sind so unterzubringen, dass sie weder den Steg blockieren noch Nachbarboote oder die Manövrierfläche im Hafen gefährden.",
      "Schäden an Stegen, Pollern, Klampen, Leitern, Beleuchtung oder Strom- und Wasseranschlüssen sind unverzüglich dem Hafenmeister oder Vorstand zu melden.",
    ],
  },
  {
    no: "09",
    title: "Versicherungspflicht",
    items: [
      "Jeder Bootseigner, einschließlich Gastliegern, hat für sein Boot eine gültige Bootshaftpflichtversicherung mit ausreichender Deckungssumme zu unterhalten.",
      "Der Versicherungsschutz muss insbesondere Schäden an der Steganlage, an Nachbarbooten, an Personen sowie Schäden durch Sinken oder Bergung des Bootes umfassen.",
      "Der Versicherungsnachweis ist auf Verlangen des Vorstands oder Hafenmeisters unverzüglich vorzulegen. Bei Nichtvorlage kann der Hafenmeister den weiteren Aufenthalt im Hafen untersagen.",
    ],
  },
  {
    no: "10",
    title: "Haftung und Haftungsausschluss",
    groups: [
      {
        sub: "Haftung des Bootseigners und Hafennutzers",
        items: [
          "Jeder Hafennutzer haftet uneingeschränkt für Schäden, die er, seine Mitsegler, Familienangehörigen, Gäste oder beauftragten Dritten an der Steganlage, an Nachbarbooten oder am Eigentum sonstiger Dritter verursachen.",
          "Die Haftung gilt insbesondere für Schäden durch unzureichende Festmacher, mangelnde Sturmsicherung, ausgetretene Betriebsstoffe, Brand-, Explosions- oder Wasserschäden sowie für ein gesunkenes oder havariertes Boot einschließlich Bergungs-, Räumungs- und Entsorgungskosten.",
          "Der Hafennutzer stellt den Verein, dessen Vorstand und die Hafenmeister von Ansprüchen Dritter frei, die aus seiner Hafennutzung resultieren.",
        ],
      },
      {
        sub: "Haftungsausschluss zugunsten des Vereins",
        items: [
          "Die Bereitstellung der Hafenanlage stellt kein Verwahrungsverhältnis im Sinne der §§ 688 ff. BGB dar. Der Verein übernimmt keinerlei Obhuts- oder Bewachungspflichten.",
          "Der Verein haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Vereins, seines Vorstands, seiner Hafenmeister oder seiner Erfüllungsgehilfen beruhen.",
          "Für leichte Fahrlässigkeit haftet der Verein ausschließlich bei Verletzung wesentlicher Vertragspflichten und auch dann nur in Höhe des bei Vertragsschluss vorhersehbaren, vertragstypischen Schadens.",
          "Diese Haftungsbeschränkungen gelten nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie nicht für Ansprüche nach dem Produkthaftungsgesetz und nicht in den Fällen einer übernommenen Garantie.",
        ],
      },
      {
        sub: "Insbesondere ausgeschlossene Schadenstatbestände",
        items: [
          "Verlust, Beschädigung, Sinken oder Diebstahl von Booten, Zubehör oder persönlichen Gegenständen im Hafenbereich.",
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
          "Verein, Vorstand und Hafenmeister übernehmen keine Aufsichts- oder Überwachungspflicht über die Boote oder die in den Hafenbereich eingebrachten Sachen.",
          "Sicherheitsrelevante Hinweise oder gelegentliche Eingriffe der Hafenmeister oder des Vorstands erfolgen freiwillig und begründen keine über diese Hafenordnung hinausgehende Haftung.",
        ],
      },
      {
        sub: "Schadensmeldung und Anspruchsfrist",
        items: [
          "Jeder Schaden ist Vorstand und Hafenmeister unverzüglich anzuzeigen, bei drohender Verschlechterung sofort.",
          "Schadensersatzansprüche gegen den Verein sind innerhalb von zwölf Monaten ab Kenntnis schriftlich gegenüber dem Vorstand geltend zu machen, andernfalls sind sie ausgeschlossen. Die Frist gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit und nicht bei Vorsatz oder grober Fahrlässigkeit.",
        ],
      },
    ],
  },
  {
    no: "11",
    title: "Aufgegebene und havarierte Boote, Ersatzvornahme",
    items: [
      "Boote, die im Hafen gesunken sind oder zu sinken drohen, einen verwahrlosten Zustand aufweisen oder deren Eigner nicht mehr erreichbar sind, gefährden den Hafenbetrieb, die Steganlage, Nachbarboote und die Umwelt.",
      "Bei akuter Gefahr ist der Verein berechtigt, ohne vorherige Fristsetzung Sofortmaßnahmen zu ergreifen, einschließlich Bergung, Aufslippen, Verbringung an Land und Sicherung gegen weitere Schäden.",
      "In sonstigen Fällen (Verwahrlosung, anhaltende Unerreichbarkeit, schriftliche Aufgabe) ist der Verein nach vorheriger schriftlicher Androhung mit angemessener Fristsetzung zur Ersatzvornahme berechtigt: Bergung, Räumung, kostenpflichtige Lagerung, Verwertung oder Entsorgung als Abfall.",
      "Sämtliche entstehenden Kosten trägt der Eigner. Hierzu zählen Bergung, Taucher, Kran, Transport, Lagerung, Schadstoffentsorgung, Verwertung sowie Verwaltungs-, Mahn- und Rechtsverfolgungskosten.",
      "Dem Verein steht ein vertragliches Pfandrecht an Boot, Mast und gelagertem Zubehör des Eigners zu. Die Verwertung erfolgt nach den Vorschriften über den Pfandverkauf (§§ 1233 ff. BGB).",
      "Ein nach Aufrechnung verbleibender Verwertungserlös wird an den Eigner ausgekehrt, sofern er innerhalb von zwölf Monaten schriftlich angefordert wird. Reicht der Erlös nicht, bleibt der Eigner für den Differenzbetrag zahlungspflichtig.",
    ],
  },
  {
    no: "12",
    title: "Verstöße",
    items: [
      "Wer in grober oder mutwilliger Weise gegen diese Hafenordnung verstößt, wird zunächst verwarnt.",
      "Bei wiederholten oder besonders schwerwiegenden Verstößen, insbesondere gegen die Bestimmungen zu Sicherheit, Brandvermeidung, Versicherung oder Umweltschutz, kann der Verein die weitere Hafennutzung untersagen und den Liegeplatz entziehen.",
      "Der Vorstand kann ein Hausverbot aussprechen. Dies gilt unabhängig von zivil- oder strafrechtlichen Folgen.",
    ],
  },
];

export default function HafenordnungPage() {
  return (
    <>
      <PageHero
        title={<>Hafen<span style={{ fontWeight: 600 }}>ordnung.</span></>}
        lead="Diese Ordnung gilt für die Vereinshäfen Süd- und Nordosthafen und ist von allen Hafennutzern verbindlich zu beachten. Mit dem Betreten der Steganlage erkennt jeder Nutzer sie an."
        image="/img/wsch_topdown.jpg"
        alt="WSCH Steganlage von oben"
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
                href="/dokumente/wsch-hafenordnung.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-5 py-3 text-[13px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Datei herunterladen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
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
