import PageHero from "@/components/PageHero";
import Link from "next/link";
import { club } from "@/lib/nav";

export const metadata = { title: "Mitgliedschaft" };

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        title="Mitglied werden."
        lead="Wer Mitglied wird, gehört dazu. Mit Stimme, Liegeplatz-Anrecht, Schlüssel zum Clubhaus und Pflicht zum Arbeitsdienst."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="WSCH Steganlage und Clubhaus am Südhafen"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Wer kann Mitglied werden</span>
            <h2 className="mt-4 text-3xl">Aufnahme, kurz erklärt.</h2>
            <p className="mt-5">
              Mitglied im WSCH werden kann, wer Wassersport aktiv betreibt oder den
              Verein und seine Ziele fördern möchte. Die Aufnahme erfolgt über einen
              schriftlichen Antrag an den Vorstand. Über die Aufnahme entscheidet die
              Spartenversammlung.
            </p>

            <h3 className="mt-10 text-2xl">Schritt für Schritt</h3>
            <ol className="mt-3 space-y-3 text-brand-stone/80">
              <li><strong className="text-brand-deep">1. Antrag.</strong> Aufnahmeantrag herunterladen, ausfüllen und mit zwei Bürgen aus dem Verein einreichen.</li>
              <li><strong className="text-brand-deep">2. Spartenversammlung.</strong> Über die Aufnahme entscheidet die zuständige Sparte (Segel- oder Motorbootsparte).</li>
              <li><strong className="text-brand-deep">3. Aufnahme.</strong> Bei Zustimmung Begrüßung in der nächsten Mitgliederversammlung.</li>
              <li><strong className="text-brand-deep">4. Aktiv sein.</strong> Beitrag, Arbeitsdienst, Mitgestaltung. Der Verein lebt von denen, die mitanpacken.</li>
            </ol>
            <p className="mt-3 text-sm text-brand-stone/70">
              Der Prozess dauert in der Regel zwei bis drei Monate. Ein
              Sportbootführerschein ist keine Voraussetzung, ein
              Aufnahmegespräch findet nicht statt.
            </p>

            <h3 className="mt-10 text-2xl">Beiträge</h3>
            <p className="mt-3">
              Die aktuelle Beitragsstruktur ist in der Beitragsordnung des Vereins
              geregelt. Die verbindlichen Beträge erhalten Sie auf Anfrage über die
              Geschäftsstelle.
            </p>

            <h3 className="mt-10 text-2xl">Pflichten</h3>
            <p className="mt-3">
              Aktive Mitglieder leisten jährlich Arbeitsdienst. Wer keine Zeit hat, kann
              den Arbeitsdienst über eine Pauschale ablösen. Details stehen in der
              Arbeitsdienstordnung. Kündigungsfristen sind in der Satzung geregelt.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Aufnahmeantrag</div>
              <p className="mt-2 text-sm text-brand-sand/80">PDF zum Ausfüllen, per Post oder E-Mail an den Verein.</p>
              <a href={`mailto:${club.email}`} className="mt-4 inline-block rounded-full bg-brand-sand px-5 py-2 text-sm font-medium text-brand-deep">
                Antrag anfragen
              </a>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Bürgschaft</div>
              <div className="mt-2 font-display text-2xl text-brand-deep">2 Bürgen</div>
              <p className="mt-2 text-sm text-brand-stone/75">aus dem Mitgliederkreis erforderlich.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Bearbeitungsdauer</div>
              <div className="mt-2 font-display text-2xl text-brand-deep">2 bis 3 Monate</div>
              <p className="mt-2 text-sm text-brand-stone/75">bis zur Entscheidung der Spartenversammlung.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Satzung</div>
              <p className="mt-2 text-sm text-brand-stone/75">Rechtsgrundlage des Vereins. Aufnahme, Beitrag, Vorstand, Versammlung.</p>
              <Link href="/satzung" className="mt-3 inline-block text-sm font-medium text-brand-sea">Satzung lesen →</Link>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Arbeitsdienst</div>
              <p className="mt-2 text-sm text-brand-stone/75">Was, wann, wie viel und welche Ablöse möglich ist.</p>
              <Link href="/arbeitsdienst" className="mt-3 inline-block text-sm font-medium text-brand-sea">Arbeitsdienst-Infos →</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
