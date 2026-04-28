import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Mitgliedschaft" };

const beitraege = [
  { label: "Aktive Mitgliedschaft", value: "240 € / Jahr", note: "stimmberechtigt, voller Zugang" },
  { label: "Familienmitgliedschaft", value: "330 € / Jahr", note: "zwei Erwachsene, Kinder bis 18 frei" },
  { label: "Auswärtige Mitgliedschaft", value: "180 € / Jahr", note: "ohne festen Liegeplatz auf Helgoland" },
  { label: "Jugendmitgliedschaft", value: "60 € / Jahr", note: "bis 25 Jahre, Schüler und Studenten" },
  { label: "Aufnahmegebühr (einmalig)", value: "150 €", note: "für aktive Mitglieder" },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        title="Mitglied werden."
        lead="Wer Mitglied wird, gehört dazu. Mit Stimme, Liegeplatz-Anrecht, Schlüssel zum Clubhaus und Pflicht zum Arbeitsdienst."
        image="https://picsum.photos/seed/wsc-mitgliedschaft-hero/2000/1100"
        alt="Segelyacht in der Nordsee"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Wer kann Mitglied werden</span>
            <h2 className="mt-4 text-3xl">Aufnahme, kurz erklärt.</h2>
            <p className="mt-5">
              Mitglied im WSC Helgoland werden kann, wer Wassersport aktiv betreibt oder
              den Verein und seine Ziele fördern möchte. Die Aufnahme erfolgt über einen
              schriftlichen Antrag an den Vorstand. Über die Aufnahme entscheidet der
              Vorstand nach einer Vorstellungsphase.
            </p>

            <h3 className="mt-10 text-2xl">Schritt für Schritt</h3>
            <ol className="mt-3 space-y-3 text-brand-stone/80">
              <li><strong className="text-brand-deep">1. Antrag.</strong> Aufnahmeantrag herunterladen, ausfüllen, mit zwei Bürgen aus dem Verein einreichen.</li>
              <li><strong className="text-brand-deep">2. Kennenlernen.</strong> Persönliches Gespräch mit dem Vorstand, in der Regel im Clubhaus.</li>
              <li><strong className="text-brand-deep">3. Aufnahme.</strong> Beschluss des Vorstands. Bei Zustimmung Begrüßung in der nächsten Mitgliederversammlung.</li>
              <li><strong className="text-brand-deep">4. Aktiv sein.</strong> Beitrag, Arbeitsdienst, Mitgestaltung. Der Verein lebt von denen, die mitanpacken.</li>
            </ol>

            <h3 className="mt-10 text-2xl">Beiträge</h3>
            <div className="mt-3 overflow-hidden rounded-2xl border border-brand-deep/10">
              <table className="w-full text-sm">
                <thead className="bg-white/70 text-left text-xs uppercase tracking-[0.18em] text-brand-deep/70">
                  <tr>
                    <th className="px-4 py-3">Kategorie</th>
                    <th className="px-4 py-3">Beitrag</th>
                    <th className="px-4 py-3">Hinweis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-deep/10 bg-white">
                  {beitraege.map((b) => (
                    <tr key={b.label}>
                      <td className="px-4 py-3 text-brand-deep">{b.label}</td>
                      <td className="px-4 py-3">{b.value}</td>
                      <td className="px-4 py-3 text-brand-stone/70">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-stone/60">
              Stand: aktuelle Mitgliederversammlung. Verbindliche Beträge stehen in der Beitragsordnung.
            </p>

            <h3 className="mt-10 text-2xl">Pflichten</h3>
            <p className="mt-3">
              Aktive Mitglieder leisten jährlich Arbeitsdienst. Wer keine Zeit hat, kann
              den Arbeitsdienst über eine Pauschale ablösen. Details stehen in der
              Arbeitsdienstordnung.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Aufnahmeantrag</div>
              <p className="mt-2 text-sm text-brand-sand/80">PDF zum Ausfüllen, per Post oder E-Mail an die Geschäftsstelle.</p>
              <Link href="/kontakt" className="mt-4 inline-block rounded-full bg-brand-sand px-5 py-2 text-sm font-medium text-brand-deep">
                Antrag anfragen
              </Link>
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
