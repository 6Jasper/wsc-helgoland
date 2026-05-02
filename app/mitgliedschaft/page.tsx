import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Mitglied werden" };

const STEPS = [
  {
    no: "01",
    title: "Aufnahmeantrag herunterladen und ausfüllen",
    body: "Sie laden das Antragsformular herunter und füllen es aus. Erforderlich sind Ihre Daten, Bankverbindung für den SEPA-Lastschrifteinzug der Beiträge sowie die Auswahl der Mitgliedskategorie.",
  },
  {
    no: "02",
    title: "Zwei Bürgen finden",
    body: "Der Antrag muss von zwei aktiven, erwachsenen Vereinsmitgliedern befürwortet werden. Wer noch keinen Kontakt im Verein hat, schreibt uns vorab. Es findet sich.",
  },
  {
    no: "03",
    title: "Antrag einreichen",
    body: "Der unterschriebene Antrag geht an den Vorstand. Bei Jugendlichen sind die Unterschriften der gesetzlichen Vertreter notwendig.",
  },
  {
    no: "04",
    title: "Spartenversammlung entscheidet",
    body: "Über die Aufnahme entscheidet die Mitgliederversammlung oder die zuständige Spartenversammlung (Segel oder Motorboot). Bei Zustimmung folgt die Begrüßung in der nächsten Mitgliederversammlung. Die Bearbeitung dauert in der Regel zwei bis drei Monate.",
  },
];

const KATEGORIEN = [
  { name: "Aktives Mitglied · Segeln", body: "Volle Mitgliedschaft mit Liegeplatz-Anrecht und Stimmrecht in der Segelsparte." },
  { name: "Aktives Mitglied · Motorboot", body: "Volle Mitgliedschaft mit Liegeplatz-Anrecht und Stimmrecht in der Motorbootsparte." },
  { name: "Jugendsparte", body: "Für Mitglieder unter 18 Jahren. Die Zustimmung der gesetzlichen Vertreter wird benötigt." },
  { name: "Passives Mitglied", body: "Förderndes Mitglied ohne Stimmrecht in der Mitgliederversammlung. Auch juristische Personen." },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        title={<>Mitglied <span style={{ fontWeight: 600 }}>werden.</span></>}
        lead="Wir sind ein eingetragener Verein mit ehrenamtlichem Vorstand. Über die Aufnahme neuer Mitglieder entscheidet die Spartenversammlung. Ein Aufnahmegespräch findet nicht statt."
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
                Vier Schritte, in der Regel zwei bis drei Monate. Sie brauchen zwei Bürgen aus dem Verein und unterschreiben mit
                der Antragsstellung, dass Sie die Satzung anerkennen. Ein Aufnahmegespräch oder ein Sportbootführerschein sind
                nicht erforderlich.
              </p>
              <a
                href="/dokumente/wsch-aufnahmeantrag.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Aufnahmeantrag (PDF)</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
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

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Vier <span className="font-bold">Mitgliedskategorien.</span>
              </h2>
              <p className="body-copy mt-5">
                Auf dem Aufnahmeantrag wählen Sie die für Sie passende Kategorie aus.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="mt-14 grid gap-4 md:gap-5 sm:grid-cols-2">
              {KATEGORIEN.map((k) => (
                <div key={k.name} className="rounded bg-bg-panel border border-border-subtle p-7 md:p-8 shadow-soft">
                  <div className="text-text-primary text-[18px] md:text-[20px] font-semibold tracking-tightish">{k.name}</div>
                  <p className="mt-3 text-text-body text-[14px] md:text-[15px] leading-relaxed">{k.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Beitrag und <span className="font-bold">Arbeitsdienst.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Der Jahresbeitrag wird Anfang April per SEPA-Lastschrift eingezogen. Bei der Aufnahme ist zusätzlich ein
                Aufnahmebeitrag fällig. Die Höhe ist in der Beitrags- und Gebührenordnung geregelt und wird auf Anfrage
                mitgeteilt.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Bootsbesitzer sind zur Teilnahme am Arbeitsdienst verpflichtet. Wer fernbleibt, kann den Dienst durch
                freiwillige Meldung zum Wartungsdienst nachholen. Wird er nicht nachgeholt, wird ein Geldbetrag in Rechnung
                gestellt, der von der Mitgliederversammlung festgelegt wird.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Ein Austritt ist mit einer Frist von mindestens 30 Tagen zum Schluss des Geschäftsjahres möglich.
              </p>
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
