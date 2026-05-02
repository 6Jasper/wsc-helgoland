import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const metadata = { title: "Gastlieger" };

const STEPS = [
  {
    title: "Vor der Abfahrt",
    body: "Wer im Südhafen festmachen will, schreibt vor der Abfahrt eine kurze E-Mail. Wir prüfen, ob ein Platz frei ist und ob ein Mitglied vor Ort einweisen kann. Im Nordosthafen läuft die Vergabe direkt über den Hafenmeister, da reicht das Eintreffen.",
  },
  {
    title: "Anlauf",
    body: "Beim Anlauf gilt: keine Eile, drei Knoten im Hafen. Wer im Südhafen einläuft, lässt sich führen. Die Trümmer des U-Boot-Bunkers liegen genau dort, wo man am liebsten geradeaus durchziehen würde.",
  },
  {
    title: "Festmachen",
    body: "Päckchenliegen ist nicht vorgesehen. Liegeplätze werden zugewiesen oder, im Nordosthafen, vom Hafenmeister zugeordnet.",
  },
  {
    title: "Abrechnung",
    body: "Strom über Münzeinwurf, Liegegebühr pauschal. Genaue Sätze beim Hafenmeister. Wasser ist nicht an allen Stegen verfügbar, Diesel an der Bunkerstation Jörn Rickmers im Binnenhafen, vor den Hummerbuden.",
  },
];

const RULES = [
  "Maximale Geschwindigkeit drei Knoten im Hafen.",
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
        title={<>Bevor Sie <span style={{ fontWeight: 600 }}>einlaufen.</span></>}
        lead="Helgoland ist keine Marina. Der Verein gibt freie Plätze seiner Mitglieder frei, vornehmlich an befreundete Vereine und Gastsegler vom Festland. Was zu wissen ist, bevor die Insel sich aus dem Dunst schält."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze mit Insel"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Vier <span className="font-bold">Etappen.</span>
              </h2>
              <p className="body-copy mt-5">
                Der Anlauf verläuft fast immer gleich. Wer schon einmal hier festgemacht hat, kennt die Reihenfolge. Wer zum ersten
                Mal kommt, liest sie sich kurz durch.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-white font-semibold text-[24px] md:text-[28px] tracking-tightish">{s.title}</h3>
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
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_suedhafen.jpg" alt="WSCH Steganlage im Südhafen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Im Hafen <span className="font-bold">gilt für alle dasselbe.</span>
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

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-container mx-auto grid gap-8 md:grid-cols-3">
          <Reveal variant="cinematic">
            <div className="border-l border-accent-tide/60 pl-6 py-2">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-accent-tide">Notruf</div>
              <div className="mt-3 text-white font-semibold text-[28px]">110 · 112</div>
              <p className="body-copy mt-3 text-[14px]">Polizei und Rettung. Erste Wahl auch im Hafen.</p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.05}>
            <div className="border-l border-accent-tide/60 pl-6 py-2">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-accent-tide">Seenot</div>
              <div className="mt-3 text-white font-semibold text-[28px]">UKW Kanal 16</div>
              <p className="body-copy mt-3 text-[14px]">DGzRS Bremen. Rund um die Uhr besetzt.</p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="border-l border-accent-tide/60 pl-6 py-2">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-accent-tide">Anfrage</div>
              <a href="mailto:kontakt@wsc-helgoland.de" className="mt-3 block text-white font-semibold text-[20px] break-all hover:text-accent-tide transition-colors">
                kontakt@wsc-helgoland.de
              </a>
              <p className="body-copy mt-3 text-[14px]">Antwort in der Regel binnen 48 Stunden.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
