import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = { title: "Clubhaus" };

export default function ClubhausPage() {
  return (
    <>
      <PageHero
        title="Das Clubhaus."
        lead="Treffpunkt am Südhafen. Bar, Küche, Crewecke, Sanitär, Werkstattzugang."
        image="https://picsum.photos/seed/wsc-clubhaus-hero/2000/1100"
        alt="Innenansicht eines Clubhauses am Hafen"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Über das Haus</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Wo Mitglieder und Gäste sich treffen.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Das Clubhaus liegt direkt am Südhafen, nur wenige Schritte vom Steg entfernt.
              Im Erdgeschoss befinden sich Gastraum, Bar und Küche. Im Obergeschoss die
              Crewecke mit Kartentisch, kleiner Bibliothek und Sofas für Wartetage.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Das Haus wird ehrenamtlich betrieben. Wir achten auf Atmosphäre, ehrliche
              Preise und gute Kaffeemaschinen. In der Hauptsaison ist täglich geöffnet,
              außerhalb je nach Wetter und Crew.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/wsc-clubhaus-detail/1600/1200"
              alt="Tisch im Clubhaus mit Seekarten"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Was du findest</span>
          <h2 className="mt-4 text-3xl">Ausstattung im Überblick.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Bar & Küche", b: "Frühstück, Mittagskarte mit Tagesgericht, abends warme Küche bis 21:00 Uhr." },
              { t: "Crewecke", b: "Kartentisch, Wetter-Monitor, Lade-Station, Bibliothek mit Törnberichten." },
              { t: "Sanitär", b: "Duschen mit Münzautomat, Toiletten, Waschmaschine und Trockner für Crews." },
              { t: "Werkstatt", b: "Werkbank, Standardwerkzeug, Akku-Ladestation. Schlüssel über Hafenmeister." },
              { t: "Trockenraum", b: "Wetterzeug zum Trocknen. Wichtig nach langen Schlägen aus dem Westen." },
              { t: "WLAN", b: "Kostenfrei für Gastlieger und Mitglieder, Passwort an der Bar." },
            ].map((c) => (
              <div key={c.t} className="card">
                <h3 className="text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-brand-stone/75">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="pill">Öffnungszeiten</span>
            <h2 className="mt-4 text-3xl">Wann das Haus offen ist.</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-deep/10">
              <table className="w-full text-sm">
                <thead className="bg-white/70 text-left text-xs uppercase tracking-[0.18em] text-brand-deep/70">
                  <tr>
                    <th className="px-4 py-3">Saison</th>
                    <th className="px-4 py-3">Mo bis Fr</th>
                    <th className="px-4 py-3">Wochenende</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-deep/10 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-brand-deep">Mai bis September</td>
                    <td className="px-4 py-3">10:00 bis 22:00</td>
                    <td className="px-4 py-3">09:00 bis 23:00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-brand-deep">April und Oktober</td>
                    <td className="px-4 py-3">11:00 bis 19:00</td>
                    <td className="px-4 py-3">10:00 bis 21:00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-brand-deep">November bis März</td>
                    <td className="px-4 py-3">geschlossen</td>
                    <td className="px-4 py-3">Treffen nach Ankündigung</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <span className="pill">Veranstaltungen</span>
            <h2 className="mt-4 text-3xl">Was im Clubhaus passiert.</h2>
            <ul className="mt-6 space-y-3 text-sm text-brand-stone/80">
              <li><strong className="text-brand-deep">Freitag-Stammtisch.</strong> Saisonal, ab 19:00 Uhr. Offen für Gäste.</li>
              <li><strong className="text-brand-deep">Törnberichte.</strong> Mehrmals pro Saison Vorträge von Mitgliedern.</li>
              <li><strong className="text-brand-deep">Nordseewoche-Crewabende.</strong> Pfingstwoche, jeden Abend.</li>
              <li><strong className="text-brand-deep">Mitgliederversammlung.</strong> Jährlich im April, Einladung per Post.</li>
              <li><strong className="text-brand-deep">Ansegeln und Absegeln.</strong> Saisonstart und -ende mit Konvoi.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
