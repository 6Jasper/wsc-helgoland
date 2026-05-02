import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Informationen für Gastlieger" };

const STEPS = [
  {
    title: "Vor der Abfahrt",
    body: "Wer im Südhafen festmachen möchte, schreibt vor der Abfahrt eine kurze E-Mail an den Verein. Wir prüfen, ob ein Platz frei ist und ob ein Mitglied vor Ort die Einweisung übernehmen kann. Im Nordosthafen läuft die Vergabe direkt über den Hafenmeister vor Ort.",
  },
  {
    title: "Anlauf und Einweisung",
    body: "Im Hafen gilt eine Höchstgeschwindigkeit von drei Knoten. Wer in den Südhafen einläuft, wird von einem Mitglied eingewiesen, weil im Hafenbecken Trümmer eines früheren U-Boot-Bunkers liegen. Im Nordosthafen können Sie die freien Plätze beim Hafenmeister erfragen.",
  },
  {
    title: "Festmachen",
    body: "Päckchenliegen ist nicht vorgesehen. Liegeplätze werden zugewiesen oder, im Nordosthafen, vom Hafenmeister zugeordnet.",
  },
  {
    title: "Strom, Wasser, Diesel",
    body: "Strom an den Säulen läuft über Münzeinwurf, die Liegegebühr ist pauschal. Die genauen Sätze nennt Ihnen der Hafenmeister vor Ort. Wasser ist nicht an allen Stegen verfügbar. Diesel bunkern Sie an der Bunkerstation Jörn Rickmers im Binnenhafen, vor den Hummerbuden.",
  },
];

const RULES = [
  "Höchstgeschwindigkeit drei Knoten im Hafen.",
  "Nachtruhe ab 22 Uhr.",
  "Generatoren sind nicht zulässig.",
  "Lackieren und Schleifen am Liegeplatz nicht erlaubt.",
  "Mast legen oder stellen findet nicht im Hafen statt.",
  "Müll trennen, Sammelstelle am Sanitärcontainer.",
];

export default function GastliegerPage() {
  return (
    <>
      <PageHero
        title={<>Informationen für <span style={{ fontWeight: 600 }}>Gastlieger.</span></>}
        lead="Helgoland ist keine Marina. Der Wassersportclub Helgoland gibt freie Plätze seiner Mitglieder an Gastsegler frei, vornehmlich an befreundete Vereine und Gäste vom Festland."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze mit Insel"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Anlauf in <span className="font-bold">vier Schritten.</span>
              </h2>
              <p className="body-copy mt-5">
                So läuft der Anlauf in der Regel ab. Bei Fragen melden Sie sich vor der Überfahrt einmal kurz bei uns.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[28px] tracking-tightish">{s.title}</h3>
                  <p className="body-copy mt-4 max-w-xl">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-bg-surface px-6 md:px-14 py-20 md:py-[140px] overflow-hidden">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_topdown.jpg" alt="WSCH Steganlage von oben" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Was im Hafen <span className="font-bold">gilt.</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {RULES.map((r) => (
                  <li key={r} className="flex gap-4 text-text-body text-[15px]">
                    <span className="mt-[2px] text-accent-tide font-semibold flex-shrink-0 w-5 text-center" aria-hidden>×</span>
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Hafenordnung <span className="font-bold">folgt.</span>
            </h2>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <p className="body-copy max-w-prose">
                Eine offizielle Hafen- und Liegeplatzordnung wird derzeit überarbeitet. Sie regelt unter anderem den Anlauf, die
                Liegeplatzvergabe und das Verhalten im Notfall. Bis sie veröffentlicht ist, halten Sie sich bitte an die
                Hinweise des Hafenmeisters vor Ort.
              </p>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Bei Fragen schreiben Sie uns</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
