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
              <Image src="/img/wsch_suedhafen.jpg" alt="WSCH Steganlage im Südhafen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
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
                    <span className="mt-[10px] block h-px w-6 bg-text-dim flex-shrink-0" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/img/06092025_regatta-28.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(.45) saturate(.8)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(14,23,34,.6) 0%, rgba(14,23,34,.45) 50%, rgba(14,23,34,.85) 100%)",
            }}
          />
        </div>

        <div className="relative px-6 md:px-14 py-24 md:py-[160px]">
          <div className="max-w-container mx-auto">
            <Reveal variant="cinematic">
              <h2
                className="m-0 text-white font-light max-w-3xl"
                style={{ fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}
              >
                Im <span className="font-bold">Notfall.</span>
              </h2>
              <p className="text-white/80 mt-5 max-w-xl text-[16px] leading-relaxed">
                Drei Wege, je nach Lage. Im Zweifel die kürzeste Nummer wählen.
              </p>
            </Reveal>

            <div className="mt-16 md:mt-20 grid gap-12 md:gap-16 md:grid-cols-3">
              <Reveal variant="cinematic" delay={0.05}>
                <div>
                  <div
                    className="text-white font-light tracking-tightish"
                    style={{ fontSize: "clamp(48px, 5.6vw, 84px)", lineHeight: 1, letterSpacing: "-.025em" }}
                  >
                    110 <span className="text-white/50 font-light">·</span> 112
                  </div>
                  <div className="mt-5 h-px w-12 bg-accent-warm" />
                  <p className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-[28ch]">
                    Polizei und Rettung. Erste Wahl, auch im Hafen.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="cinematic" delay={0.1}>
                <div>
                  <div
                    className="text-white font-light tracking-tightish"
                    style={{ fontSize: "clamp(40px, 4.4vw, 64px)", lineHeight: 1, letterSpacing: "-.02em" }}
                  >
                    UKW <span className="font-bold">Kanal 16</span>
                  </div>
                  <div className="mt-5 h-px w-12 bg-accent-tide" />
                  <p className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-[28ch]">
                    DGzRS Bremen. Seenotruf, rund um die Uhr besetzt.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="cinematic" delay={0.15}>
                <div>
                  <a
                    href="mailto:kontakt@wsc-helgoland.de"
                    className="block text-white hover:text-accent-tide transition-colors duration-300 font-light tracking-tightish break-all"
                    style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.1, letterSpacing: "-.02em" }}
                  >
                    kontakt@<wbr />wsc-helgoland.de
                  </a>
                  <div className="mt-5 h-px w-12 bg-white/40" />
                  <p className="mt-5 text-white/80 text-[15px] leading-relaxed max-w-[28ch]">
                    Für alles, was Zeit hat. Antwort in der Regel binnen 48 Stunden.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
