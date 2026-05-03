import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Arbeitsdienst" };

const SAISON = [
  { name: "Frühjahr", body: "Stege wieder in Betrieb nehmen, Boote auswassern, Reparaturen erledigen, die im Winter angefallen sind." },
  { name: "Saison", body: "Hafendienst, Veranstaltungsbetreuung und alles, was während der Liegesaison anfällt." },
  { name: "Winter", body: "Werkstattarbeiten, Bootshalle, Inventur, Materialpflege, Bauten." },
];

export default function ArbeitsdienstPage() {
  return (
    <>
      <PageHero
        title={<>Arbeits<span style={{ fontWeight: 600 }}>dienst.</span></>}
        lead="Der Wassersportclub Helgoland funktioniert ehrenamtlich. Stege, Clubhaus, Bootshalle, Werkstatt und Inventar werden in großen Teilen durch die Mitglieder selbst instand gehalten."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Drei <span className="font-bold">Phasen.</span>
              </h2>
              <p className="body-copy mt-6">
                Die Arbeiten richten sich nach der Saison. Aktive Mitglieder leisten pro Jahr eine bestimmte Stundenzahl
                Arbeitsdienst. Wer keine Zeit hat, kann diesen über eine Pauschale ablösen.
              </p>
              <p className="body-copy mt-4 text-[14px] text-text-dim">
                Die genaue Pflichtstundenzahl, der Ablösesatz und die Befreiungsregelungen werden derzeit überarbeitet und
                folgen.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {SAISON.map((s, i) => (
              <Reveal key={s.name} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-accent-tide text-[12px] tracking-eyebrowWide uppercase">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[30px] tracking-tightish">{s.name}</h3>
                  <p className="body-copy mt-4 max-w-xl">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
