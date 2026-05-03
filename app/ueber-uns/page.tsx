import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Über uns" };

type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "1965",
    title: "Gründung in der Vorhalle des Schwimmbades",
    body: "Am 30. April 1965 treffen sich neunzehn wassersportlich interessierte Helgoländer, um sich in den Konflikten zwischen Sportbooten und Berufsschifffahrt eine Stimme zu verschaffen. Vor allem der Streit um das Hummerschutzgebiet treibt sie um. Die Mindestzahl von sieben Gründungsmitgliedern ist schnell erreicht, am 30. Juli 1965 erfolgt die Eintragung im Vereinsregister.",
  },
  {
    year: "1966",
    title: "Erste Segelregatta, Beitritt zum DSV",
    body: "Der Verein richtet seine erste Segelregatta aus und tritt nach lebhafter Diskussion dem Deutschen Segler-Verband bei. Die ersten Sparten werden gegründet.",
  },
  {
    year: "1967",
    title: "Vier Optimisten in der Werkstatt gebaut",
    body: "Mit 45 erwachsenen und drei jugendlichen Mitgliedern beschließt die Hauptversammlung die Anschaffung von drei Optis. Erni Jürgens spendet spontan 300 DM für einen Bausatz, am Ende baut Hans-Carl Rickmers in seiner Werkstatt vier Optimisten. Taufe am 5. August, erste Optiregatta am 10. August. Der Wassersport erfreut sich großer Beliebtheit auf der Insel.",
  },
  {
    year: "1968",
    title: "Sportbootführerschein für rund 50 Insulaner",
    body: "Nach mehreren Schulungswochen kommt am 31. März der Prüfungsausschuss mit dem Polizeiboot aus Büsum. Rund fünfzig Helgoländer erhalten den Führerschein. Hans Jürgen Kratschke unterrichtet Navigation, James Müller Motorenkunde.",
  },
  {
    year: "1970",
    title: "Erste Herbstwoche im Sturmchaos",
    body: "Am 13. September startet die erste Herbstwoche. Die Wettervorhersagen waren noch nicht so verlässlich wie heute, die Auftaktwettfahrten enden im Sturm.",
  },
  {
    year: "1971",
    title: "Vier Pontons an der Ostmole",
    body: "Die Liegeplätze an der Nordkaje stehen wegen Sanierung nicht mehr zur Verfügung. Drei Alternativen werden an einem Runden Tisch erörtert. Am Ende werden mit Genehmigung des WSA vier Pontons an der Ostmole festgemacht, die Boote vertäut an Bojen.",
  },
  {
    year: "1973",
    title: "Hans-Carl Rickmers wird 1. Vorsitzender",
    body: "Werner Siemens II tritt nicht mehr zur Wiederwahl an. Aus Tankleichtern und einem schwimmenden Anleger aus Schulau wird eine improvisierte Marina zusammengebaut. Harro Lorenzen, später Peter Köhn und danach Rickmer Ralfs übernehmen die Bewirtung.",
  },
  {
    year: "1981",
    title: "Neue Steganlage über dem U-Boot-Bunker",
    body: "Mit 200.000 D-Mark aus Vereinsmitteln, Mitgliederbeiträgen und Privatdarlehen wird eine neue Aluminium-Steganlage über den Resten des alten U-Boot-Bunkers errichtet. Diet Krüss holt die Pontons mit der „Kirsten“ aus Büsum. Die Surfsparte wird gegründet.",
  },
  {
    year: "1983",
    title: "Erste Helgoländer Ferienwoche",
    body: "Die Gemeinde gibt den Auftrag zur weiteren Instandsetzung des Nordosthafens. Im selben Jahr findet die erste Helgoländer Ferienwoche statt.",
  },
  {
    year: "1989",
    title: "Clubhaus fertiggestellt",
    body: "Nach Baubeginn 1988 wird das Clubhaus 1989 fertiggestellt und in Betrieb genommen. Bis heute Vereinsmittelpunkt am Südhafen.",
  },
  {
    year: "1991",
    title: "Egmont Conradi übernimmt den Vorsitz",
    body: "Hans-Carl Rickmers zieht sich aus gesundheitlichen Gründen zurück. Egmont Conradi führt den Verein die folgenden zwölf Jahre.",
  },
  {
    year: "1999",
    title: "Bootslagerplatz erworben",
    body: "Der Verein erwirbt den Bootslagerplatz und richtet ihn her. Damit ist die Lagerung im Freien dauerhaft gesichert.",
  },
  {
    year: "2000",
    title: "Steganlage Nordosthafen erweitert",
    body: "Die Steganlage im Nordosthafen wird an der Biomole erheblich erweitert.",
  },
  {
    year: "2001",
    title: "wsc-helgoland.de geht online",
    body: "Gerrit Sahling erstellt und pflegt die erste Webseite des Vereins.",
  },
  {
    year: "2003",
    title: "Helgo Denker übernimmt den Vorsitz",
    body: "Egmont Conradi tritt nicht mehr zur Wiederwahl an. Helgo Denker führt den Verein die folgenden zehn Jahre.",
  },
  {
    year: "2015",
    title: "Fünfzig Jahre Wassersportclub Helgoland",
    body: "Der Verein feiert sein fünfzigjähriges Bestehen. Rund 250 Mitglieder, gemeinsam über 5.200 Mitgliedsjahre. Im selben Zeitraum richtet der Verein gemeinsam mit dem Blankeneser Segelverein die Internationale Deutsche Jüngstenmeisterschaft im Optimisten aus.",
  },
];

const ZAHLEN = [
  { value: "1965", label: "Gegründet" },
  { value: "~250", label: "Mitglieder" },
  { value: "5.200+", label: "Mitgliedsjahre gemeinsam" },
  { value: "60+", label: "Jahre Vereinsleben" },
];

const PERSOENLICHKEITEN = [
  {
    name: "Ralf Steitz",
    body: "Erster deutscher Teilnehmer am America's Cup an Bord des berühmten Dennis Connor. Bis heute in der internationalen Segelszene der Vereinigten Staaten aktiv.",
  },
  {
    name: "Internationale Segler",
    body: "Fridtjof Gunkel, Jens Ewerling und Martin Klawon haben den WSCH auf internationalen Regattabahnen vertreten.",
  },
  {
    name: "Kapitäne und Nautiker",
    body: "Hans Ackermann, Oliver Krüß, Martin Köhn, Gerd Köhn, Rickmer Luth, Patrick Ehnert. Der Verein hat einer Reihe von Helgoländern den Weg in nautische Berufe gebahnt.",
  },
  {
    name: "Bootsbauer",
    body: "Michael Lorenzen baute zum fünfzigjährigen Jubiläum einen handgefertigten Tisch für das Clubhaus.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title={<>Seit 1965 vor <span style={{ fontWeight: 600 }}>der Insel.</span></>}
        lead="Was 1965 mit neunzehn Helgoländern in der Vorhalle des Schwimmbades begann, ist heute ein eingetragener Verein mit rund 250 Mitgliedern, einem Clubhaus, zwei Vereinsanlagen und einer langen Liste von Persönlichkeiten."
        image="/img/wsch_anlagemitclubhaus2.jpg"
        alt="WSCH Vereinsanlage am Südhafen"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-stage mx-auto">
          <Reveal variant="cinematic">
            <p
              className="m-0 text-text-primary"
              style={{
                fontWeight: 300,
                fontSize: "clamp(22px, 2.6vw, 36px)",
                lineHeight: 1.4,
                letterSpacing: "-.01em",
                color: "rgba(14,23,34,0.85)",
              }}
            >
              Hinter jeder Vereinszeile steht ein Mensch. Ein gespendeter Bausatz für drei Optimisten, ein vier Pontons starkes
              Provisorium an der Ostmole, ein Clubhaus, das in Eigenarbeit hochgezogen wurde.{" "}
              <span style={{ fontWeight: 700 }}>
                Der WSCH ist gewachsen, weil Mitglieder mit angepackt haben.
              </span>{" "}
              Daran hat sich seit sechs Jahrzehnten nichts geändert.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {ZAHLEN.map((z) => (
                <div key={z.label} className="rounded bg-bg-panel border border-border-subtle p-7 md:p-8 shadow-soft min-h-[180px] flex flex-col justify-between">
                  <div
                    className="text-text-primary font-light"
                    style={{ fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: 1, letterSpacing: "-.02em" }}
                  >
                    {z.value}
                  </div>
                  <div className="mt-6 text-[12px] tracking-eyebrowWide uppercase text-text-dim">{z.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="max-w-3xl">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Vereinsgeschichte in <span className="font-bold">Etappen.</span>
              </h2>
              <p className="body-copy mt-6">
                Die wichtigsten Daten und Entscheidungen seit der Gründung. Auf der Grundlage der Vereinschronik von Gerrit
                Sahling und der Festrede zum fünfzigsten Jubiläum.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 md:mt-20">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year + item.title} variant="cinematic" delay={Math.min(i * 0.025, 0.2)}>
                <article className="grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-12 border-t border-border-subtle py-10 md:py-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <div
                      className="text-accent-tide font-light tracking-tightish"
                      style={{ fontSize: "clamp(36px, 3.8vw, 52px)", lineHeight: 1, letterSpacing: "-.02em" }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="m-0 text-text-primary text-[22px] md:text-[26px] font-semibold tracking-tightish leading-snug">
                      {item.title}
                    </h3>
                    <p className="body-copy mt-4 max-w-prose">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_opticup.jpg" alt="Optimisten beim Störtebeker Opti-Cup" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Vom Optimisten <span className="font-bold">in die Welt.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Aus den vier Optimisten von 1967 ist eine Tradition geworden. Junge Helgoländer haben ihre nautische Laufbahn im
                Verein begonnen, einige sind Berufskapitäne geworden, andere haben es bis auf die internationalen Regattabahnen
                geschafft.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Die Ausbildungsjolle C55 wurde mit Unterstützung von Kreissportverband, Firma Engel, Achim Gehrmann vom Rickmers
                Bunkerservice, Rotary Club, Stefan Siemens, Rudolf Antony und Helgo Krebs ohne Belastung der Vereinskasse
                finanziert.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="max-w-3xl">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Die Insel als <span className="font-bold">Sprungbrett.</span>
              </h2>
              <p className="body-copy mt-6">
                Aus der Vereinsarbeit des WSCH sind Karrieren geworden, vom Berufskapitän bis zum America's Cup.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:gap-6 md:grid-cols-2">
            {PERSOENLICHKEITEN.map((p, i) => (
              <Reveal key={p.name} variant="cinematic" delay={i * 0.05}>
                <div className="rounded bg-bg-panel border border-border-subtle p-7 md:p-8 shadow-soft h-full">
                  <h3 className="text-text-primary text-[20px] md:text-[24px] font-semibold tracking-tightish">{p.name}</h3>
                  <p className="body-copy mt-3 text-[14px] md:text-[15px]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Mehr als ein <span className="font-bold">Sportverein.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Der WSCH bietet den Wassersportlern vom Festland Liegeplätze, sanitäre Anlagen und persönliche Kontakte. Damit
                wird Helgoland als Ansteuerungsziel attraktiver. Indirekt sichert der Verein rund hundert Gastliegern jedes Jahr
                den Komfort, den eine Marina sonst bietet.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Mit der Nordseewoche, dem Happot-Cup, dem Störtebeker Opti-Cup und der Helgoländer Herbstregatta prägt der
                Verein das Bild der Insel weit über Schleswig-Holstein hinaus. Die Inselgemeinschaft und die heimische
                Wirtschaft profitieren davon.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_topdown.jpg" alt="WSCH Steganlage am Südhafen aus der Vogelperspektive" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto text-center">
          <Reveal variant="cinematic">
            <h2 className="m-0 mx-auto text-text-primary font-light text-balance max-w-3xl" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Wer mitmachen <span className="font-bold">möchte, ist willkommen.</span>
            </h2>
            <p className="body-copy mt-6 max-w-xl mx-auto">
              Wir suchen keine Profis. Wir suchen Menschen, die Lust auf Wasser haben und mitanpacken wollen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Mitglied werden</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/vorstand"
                className="inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Vorstand kennenlernen</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
