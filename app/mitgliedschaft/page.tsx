import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const metadata = { title: "Mitgliedschaft" };

const STEPS = [
  {
    no: "01",
    title: "Antrag mit zwei Bürgen",
    body: "Aufnahmeantrag schriftlich, mit Unterschriften zweier Vereinsmitglieder als Bürgen. Wer noch niemanden im Verein kennt, schreibt uns vorher eine kurze E-Mail. Es findet sich.",
  },
  {
    no: "02",
    title: "Spartenversammlung entscheidet",
    body: "Über die Aufnahme entscheidet nicht der Vorstand allein, sondern die zuständige Spartenversammlung. Das macht den Prozess gründlicher und manchmal länger. Im Schnitt zwei bis drei Monate.",
  },
  {
    no: "03",
    title: "Begrüßung und Beitrag",
    body: "Bei Zustimmung folgt die Begrüßung in der nächsten Mitgliederversammlung. Ab da: Beitrag, Stimmrecht, Liegeplatz-Anrecht, Schlüssel zum Clubhaus, Pflicht zum Arbeitsdienst.",
  },
  {
    no: "04",
    title: "Mitanpacken",
    body: "Stege, Bootshalle, Werkstatt und Clubhaus werden in großen Teilen ehrenamtlich gepflegt. Aktive Mitglieder leisten Arbeitsdienst, Wer keine Zeit hat, kann ablösen.",
  },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        title={<>Wer einmal Mitglied ist, <span style={{ fontWeight: 600 }}>bleibt.</span></>}
        lead="Im Verein landet niemand zufällig. Aufnahme braucht zwei Bürgen, eine Spartenversammlung und ein bisschen Geduld. Was am Ende zählt, ist nicht der Beitrag, sondern dass man mitanpackt."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="Vereinsanlage mit Clubhaus"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Vom Antrag <span className="font-bold">zum Mitglied.</span>
              </h2>
              <p className="body-copy mt-6">
                Vier Schritte, im Schnitt zwei bis drei Monate. Kein Aufnahmegespräch, kein Sportbootführerschein-Zwang, kein
                geheimer Initiationsritus. Aber eine echte Entscheidung der Sparte, die Sie aufnehmen würde.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-accent-tide text-[12px] tracking-eyebrowWide uppercase">{s.no}</div>
                  <h3 className="mt-3 text-white font-semibold text-[24px] md:text-[30px] tracking-tightish">{s.title}</h3>
                  <p className="body-copy mt-4 max-w-xl">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Beiträge und <span className="font-bold">Pflichten.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Die aktuelle Beitragsstruktur ist in der Beitragsordnung des Vereins geregelt. Verbindliche Sätze und
                Kategorien erhalten Sie auf Anfrage.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Aktive Mitglieder leisten jährlich Arbeitsdienst. Stundenzahl, Befreiungen und Ablösesatz stehen in der
                Arbeitsdienstordnung. Kündigungsfristen regelt die Satzung.
              </p>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-white text-black hover:bg-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Aufnahmeantrag anfordern</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_clubhaus.jpg" alt="WSCH Clubhaus" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
