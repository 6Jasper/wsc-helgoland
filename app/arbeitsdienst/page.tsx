import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Arbeitsdienst" };

export default function ArbeitsdienstPage() {
  return (
    <>
      <PageHero
        title="Arbeitsdienst."
        lead="Der Verein lebt von denen, die mitanpacken. Stege, Clubhaus, Bootshalle und Inventar werden in großen Teilen ehrenamtlich instand gehalten."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze und Anlage"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Grundsatz</span>
            <h2 className="mt-4 text-3xl">Wer aktives Mitglied ist, packt mit an.</h2>
            <p className="mt-5">
              Der WSCH funktioniert ehrenamtlich. Stege, Clubhaus, Bootshalle, Werkstatt
              und Inventar werden in großen Teilen von Mitgliedern selbst instand
              gehalten. Aktive Mitglieder leisten daher pro Jahr Arbeitsdienst.
            </p>

            <h3 className="mt-10 text-2xl">Saison</h3>
            <ul className="mt-3 space-y-2 text-brand-stone/80">
              <li>· <strong className="text-brand-deep">Frühjahr.</strong> Stege, Boote auswassern, Reparaturen.</li>
              <li>· <strong className="text-brand-deep">Saison.</strong> Hafendienst, Veranstaltungsbetreuung.</li>
              <li>· <strong className="text-brand-deep">Winter.</strong> Werkstatt, Bootshalle, Inventur, Material, Bauten.</li>
            </ul>

            <h3 className="mt-10 text-2xl">Ablöse</h3>
            <p className="mt-3">
              Wer keine Zeit oder Möglichkeit hat, kann den Arbeitsdienst über eine
              Pauschale ablösen. Die genauen Stundensätze und Pflichtstunden sind in der
              Arbeitsdienstordnung des Vereins geregelt.
            </p>

            <p className="mt-6 text-sm text-brand-stone/60">
              Hinweis: Die konkrete Pflichtstundenzahl, der Ablösesatz und die
              Befreiungsregelungen werden derzeit überarbeitet und folgen.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Koordination</div>
              <p className="mt-2 text-sm text-brand-sand/80">Termine werden über den Verein angekündigt. Eintragung verbindlich.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Anfragen</div>
              <p className="mt-2 text-sm text-brand-stone/75">über die Vereinsadresse.</p>
              <Link href="/kontakt" className="mt-3 inline-block text-sm font-medium text-brand-sea">Kontakt →</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
