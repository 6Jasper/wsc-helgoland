import PageHero from "@/components/PageHero";

export const metadata = { title: "Arbeitsdienst" };

export default function ArbeitsdienstPage() {
  return (
    <>
      <PageHero
        title="Arbeitsdienst."
        lead="Der Verein lebt von denen, die mitanpacken. Was zu tun ist, wann, und wer es koordiniert."
        image="https://picsum.photos/seed/wsc-arbeitsdienst-hero/2000/1100"
        alt="Werkzeug und Holz auf einer Werkbank"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Grundsatz</span>
            <h2 className="mt-4 text-3xl">Wer aktives Mitglied ist, packt mit an.</h2>
            <p className="mt-5">
              Der WSC Helgoland funktioniert ehrenamtlich. Stege, Clubhaus, Kran,
              Werkstatt, Sanitäreinrichtungen und Inventar werden in großen Teilen von
              Mitgliedern selbst instand gehalten. Aktive Mitglieder leisten daher pro
              Jahr Arbeitsdienst.
            </p>

            <h3 className="mt-10 text-2xl">Umfang</h3>
            <p className="mt-3">
              Pro aktivem Mitglied werden jährlich <strong className="text-brand-deep">12 Stunden</strong>
              Arbeitsdienst angesetzt. Familienmitgliedschaften zählen wie eine
              Mitgliedschaft. Jugend- und Auswärtige Mitglieder sind freigestellt.
            </p>

            <h3 className="mt-10 text-2xl">Wann gearbeitet wird</h3>
            <ul className="mt-3 space-y-2 text-brand-stone/80">
              <li>· <strong className="text-brand-deep">Frühjahrsdienst.</strong> März bis April. Stege, Kran, Boote auswassern, Reparaturen.</li>
              <li>· <strong className="text-brand-deep">Saisondienst.</strong> Mai bis September. Hafendienst, Veranstaltungsbetreuung, Küche.</li>
              <li>· <strong className="text-brand-deep">Winterdienst.</strong> Oktober bis Februar. Werkstatt, Inventur, Material, Bauten.</li>
            </ul>

            <h3 className="mt-10 text-2xl">Wie eintragen</h3>
            <p className="mt-3">
              Der Arbeitsdienst wird über eine Liste im Clubhaus und über die
              Mitgliederplattform organisiert. Termine werden im Newsletter und im
              Schaukasten angekündigt. Eintragung verbindlich, Absagen möglichst
              frühzeitig melden.
            </p>

            <h3 className="mt-10 text-2xl">Ablöse</h3>
            <p className="mt-3">
              Wer keine Zeit oder Möglichkeit hat, kann den Arbeitsdienst in Geldleistung
              ablösen. Die Ablöse beträgt aktuell 25 € pro Stunde. Die Mittel fließen
              vollständig in Material und Beauftragung externer Dienstleister für
              Aufgaben, die ohne ehrenamtliche Hände sonst liegenbleiben würden.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Pflichtstunden</div>
              <div className="mt-2 font-display text-4xl">12 h</div>
              <p className="mt-2 text-sm text-brand-sand/80">pro aktivem Mitglied und Kalenderjahr</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Ablöse</div>
              <div className="mt-2 font-display text-2xl text-brand-deep">25 € / Stunde</div>
              <p className="mt-2 text-sm text-brand-stone/70">über die Geschäftsstelle abgerechnet</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Koordination</div>
              <p className="mt-2 text-sm text-brand-stone/75">Hafenwart und Werkstattgruppe stimmen Termine ab und tragen Stunden ein.</p>
              <a href="mailto:hafen@wsc-helgoland.de" className="mt-3 inline-block text-sm font-medium text-brand-sea break-all">hafen@wsc-helgoland.de</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
