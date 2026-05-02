import PageHero from "@/components/PageHero";

export const metadata = { title: "Vorstand & Ansprechpartner" };

const vorstand = [
  { role: "1. Vorsitzender", name: "Kay Martens", area: "Gesamtverein, Außenvertretung" },
  { role: "2. Vorsitzender", name: "Dieter Klings", area: "Stellvertretung, Spartenleitung Motorboot" },
  { role: "Schatzmeisterin", name: "Monika van Freeden", area: "Beiträge, Buchhaltung, Förderanträge" },
  { role: "Schriftführer / Schriftführerin", name: null, area: "Protokoll, Schriftverkehr, Mitgliederakten" },
  { role: "Hafenwart", name: null, area: "Hafenbüro, Liegeplätze, Stege, Gastlieger" },
];

const sparten = [
  { role: "Spartenleitung Motorbootsparte", name: "Dieter Klings" },
  { role: "Spartenleitung Segelsparte", name: "Sönke Würtz" },
  { role: "Technischer Leiter Segelsparte", name: "Helge van Freeden" },
  { role: "Verantwortlich Bootshalle", name: "Helge van Freeden" },
];

export default function VorstandPage() {
  return (
    <>
      <PageHero
        title="Vorstand & Ansprechpartner."
        lead="Ehrenamtlicher Vorstand und die Menschen, die im Hintergrund die Sachen am Laufen halten."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="WSCH Vereinsanlage am Südhafen"
      />

      <section className="section">
        <div className="container-x">
          <span className="pill">Vorstand</span>
          <h2 className="mt-4 text-3xl">Wer den Verein führt.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vorstand.map((p) => (
              <div key={p.role} className="card flex flex-col">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">{p.role}</div>
                <div className="mt-2 font-display text-xl text-brand-deep">
                  {p.name ?? <span className="text-brand-stone/40">noch zu besetzen</span>}
                </div>
                <p className="mt-3 flex-1 text-sm text-brand-stone/75">{p.area}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-stone/60">
            Eine namentliche Kontaktaufnahme erfolgt über die Vereinsadresse. Persönliche E-Mail-Adressen
            werden auf der Webseite nicht veröffentlicht.
          </p>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Sparten und Technik</span>
          <h2 className="mt-4 text-3xl">Verantwortlichkeiten in den Sparten.</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-deep/10">
            <table className="w-full text-sm">
              <thead className="bg-white/70 text-left text-xs uppercase tracking-[0.18em] text-brand-deep/70">
                <tr>
                  <th className="px-4 py-3">Funktion</th>
                  <th className="px-4 py-3">Person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-deep/10 bg-white">
                {sparten.map((a) => (
                  <tr key={a.role}>
                    <td className="px-4 py-3 text-brand-deep">{a.role}</td>
                    <td className="px-4 py-3 text-brand-stone/80">{a.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
