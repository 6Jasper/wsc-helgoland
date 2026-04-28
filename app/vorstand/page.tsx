import PageHero from "@/components/PageHero";
import { club } from "@/lib/nav";

export const metadata = { title: "Vorstand & Ansprechpartner" };

const vorstand = [
  { role: "1. Vorsitzender", name: "Dr. Jens Hartmann", contact: "vorstand@wsc-helgoland.de", area: "Gesamtverein, Außenvertretung, Strategie" },
  { role: "2. Vorsitzender", name: "Maren Tietjen", contact: "stellvertretung@wsc-helgoland.de", area: "Mitglieder, Veranstaltungen, Nordseewoche" },
  { role: "Kassenwart", name: "Friedrich Dose", contact: "kasse@wsc-helgoland.de", area: "Beiträge, Buchhaltung, Förderanträge" },
  { role: "Schriftführer", name: "Anna Petersen", contact: "schriftfuehrung@wsc-helgoland.de", area: "Protokoll, Schriftverkehr, Mitgliederakten" },
  { role: "Hafenwart", name: "Klaus-Dieter Brandt", contact: "hafen@wsc-helgoland.de", area: "Hafenbüro, Liegeplätze, Stege, Gastlieger" },
  { role: "Jugendwart", name: "Lasse Krüger", contact: "jugend@wsc-helgoland.de", area: "Optimisten, Jollen, Ausbildung, Camp" },
];

const ansprechpartner = [
  { area: "Sicherheit & Notfall", name: "Hafenmeister-Bereitschaft", contact: club.phoneHafen },
  { area: "Werkstatt & Technik", name: "Werkstattgruppe", contact: "werkstatt@wsc-helgoland.de" },
  { area: "Clubhaus & Küche", name: "Hauswart", contact: "haus@wsc-helgoland.de" },
  { area: "Presse & Medien", name: "Presseteam", contact: "presse@wsc-helgoland.de" },
  { area: "Datenschutz", name: "Beauftragter", contact: "datenschutz@wsc-helgoland.de" },
];

export default function VorstandPage() {
  return (
    <>
      <PageHero
        title="Vorstand & Ansprechpartner."
        lead="Sechs Köpfe, ein ehrenamtlicher Vorstand. Plus die Menschen, die im Hintergrund die Sachen am Laufen halten."
        image="https://picsum.photos/seed/wsc-vorstand-hero/2000/1100"
        alt="Mitglieder eines Segelclubs im Gespräch"
      />

      <section className="section">
        <div className="container-x">
          <span className="pill">Vorstand</span>
          <h2 className="mt-4 text-3xl">Wer den Verein führt.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vorstand.map((p) => (
              <div key={p.role} className="card flex flex-col">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">{p.role}</div>
                <div className="mt-2 font-display text-xl text-brand-deep">{p.name}</div>
                <p className="mt-3 flex-1 text-sm text-brand-stone/75">{p.area}</p>
                <a
                  href={`mailto:${p.contact}`}
                  className="mt-4 break-all text-sm font-medium text-brand-sea hover:text-brand-deep"
                >
                  {p.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Weitere Ansprechpartner</span>
          <h2 className="mt-4 text-3xl">Für alles andere.</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-deep/10">
            <table className="w-full text-sm">
              <thead className="bg-white/70 text-left text-xs uppercase tracking-[0.18em] text-brand-deep/70">
                <tr>
                  <th className="px-4 py-3">Bereich</th>
                  <th className="px-4 py-3">Person / Team</th>
                  <th className="px-4 py-3">Kontakt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-deep/10 bg-white">
                {ansprechpartner.map((a) => (
                  <tr key={a.area}>
                    <td className="px-4 py-3 text-brand-deep">{a.area}</td>
                    <td className="px-4 py-3">{a.name}</td>
                    <td className="px-4 py-3 text-brand-stone/75 break-all">{a.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-stone/60">
            Personennamen sind Platzhalter und werden nach Mitgliederversammlung aktualisiert.
          </p>
        </div>
      </section>
    </>
  );
}
