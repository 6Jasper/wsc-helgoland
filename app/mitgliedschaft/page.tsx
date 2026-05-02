import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Mitglied werden" };

const STEPS = [
  {
    no: "01",
    title: "Aufnahmeantrag stellen",
    body: "Sie senden uns den ausgefüllten Aufnahmeantrag zu. Erforderlich sind die Unterschriften zweier Vereinsmitglieder als Bürgen. Wer noch keinen Kontakt im Verein hat, schreibt uns vorab eine kurze E-Mail.",
  },
  {
    no: "02",
    title: "Spartenversammlung entscheidet",
    body: "Über die Aufnahme entscheidet die zuständige Spartenversammlung, also die Segel- oder Motorbootsparte. Diese Entscheidung kann je nach Versammlungstermin etwas Zeit beanspruchen, in der Regel zwei bis drei Monate.",
  },
  {
    no: "03",
    title: "Aufnahme und Beitrag",
    body: "Bei einer positiven Entscheidung werden Sie in der nächsten Mitgliederversammlung begrüßt. Ab diesem Zeitpunkt zahlen Sie den Jahresbeitrag und haben Stimmrecht in den Versammlungen.",
  },
  {
    no: "04",
    title: "Mitgestalten und mitanpacken",
    body: "Stege, Bootshalle, Werkstatt und Clubhaus werden in großen Teilen durch ehrenamtliche Arbeit der Mitglieder gepflegt. Aktive Mitglieder leisten daher einen jährlichen Arbeitsdienst. Wer keine Zeit hat, kann diesen über eine Pauschale ablösen.",
  },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        title={<>Mitglied <span style={{ fontWeight: 600 }}>werden.</span></>}
        lead="Wir sind ein eingetragener Verein mit ehrenamtlichem Vorstand. Über die Aufnahme neuer Mitglieder entscheidet die Spartenversammlung, ein Aufnahmegespräch findet nicht statt."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="Vereinsanlage mit Clubhaus"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Vom Antrag <span className="font-bold">zur Mitgliedschaft.</span>
              </h2>
              <p className="body-copy mt-6">
                Vier Schritte, in der Regel zwei bis drei Monate. Sie brauchen zwei Bürgen aus dem Verein. Ein Aufnahmegespräch
                oder ein Sportbootführerschein sind nicht erforderlich.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-accent-tide text-[12px] tracking-eyebrowWide uppercase">{s.no}</div>
                  <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[30px] tracking-tightish">{s.title}</h3>
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
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Beiträge und <span className="font-bold">Pflichten.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Die aktuelle Beitragsstruktur ist in der Beitragsordnung des Vereins geregelt. Die verbindlichen Sätze und
                Mitgliedskategorien erhalten Sie auf Anfrage.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Aktive Mitglieder leisten einen jährlichen Arbeitsdienst. Stundenzahl, Befreiungsregelungen und Ablösesatz stehen
                in der Arbeitsdienstordnung. Die Kündigungsfristen sind in der Satzung geregelt.
              </p>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Aufnahmeantrag anfordern</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_clubhaus.jpg" alt="WSCH Clubhaus" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
