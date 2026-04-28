import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = { title: "Nordseewoche" };

const klassen = [
  { name: "ORC", body: "Standard für Hochseesegler. Vermessen nach Offshore Racing Congress." },
  { name: "Yardstick", body: "Offene Wertung für Boote ohne ORC-Zertifikat. Klassik bis Tourenyacht." },
  { name: "Doublehanded", body: "Wertung für Zweier-Crews. Eigene Streckenführung möglich." },
  { name: "Klassiker", body: "Holzboote, Riss vor 1970, eigene Wertung. Tradition trifft Wettkampf." },
];

export default function NordseewochePage() {
  return (
    <>
      <PageHero
        title="Nordseewoche."
        lead="Die traditionsreichste Hochseeregatta in der Deutschen Bucht. Pfingsten, Helgoland, Wind."
        image="https://picsum.photos/seed/wsc-nordseewoche-hero/2000/1100"
        alt="Regatta auf hoher See"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Was ist die Nordseewoche</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Seit 1925 vor Helgoland.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Was 1925 als kleine Regatta begann, ist heute eines der größten
              Hochsee-Wettfahrtformate Deutschlands. Über Pfingsten starten Crews aus
              Deutschland, Dänemark, den Niederlanden und Skandinavien zu Bahnen rund um
              Helgoland und in die offene Nordsee.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Der WSC Helgoland ist Ausrichter und Heimathafen der Veranstaltung. Wir
              betreuen Liegeplätze, Land-Programm, Verpflegung und Wettfahrtleitung an
              Land. Das Wasser gehört dem Wind.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/wsc-regatta-detail/1600/1200"
              alt="Yacht in Schräglage bei Regatta"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Klassen</span>
          <h2 className="mt-4 text-3xl">Wer startet wo.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {klassen.map((k) => (
              <div key={k.name} className="card">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Klasse</div>
                <h3 className="mt-2 text-xl">{k.name}</h3>
                <p className="mt-3 text-sm text-brand-stone/75">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <span className="pill">Programm</span>
            <h3 className="mt-3 text-2xl">Pfingstwoche, kompakt.</h3>
            <ul className="mt-5 divide-y divide-brand-deep/10">
              {[
                ["Freitag vor Pfingsten", "Anreise, Vermessung, Skipper-Treffen"],
                ["Samstag", "Anlegerprogramm, Eröffnung, Wettfahrtleiter-Briefing"],
                ["Pfingstsonntag", "Erste Bahnen, Up-and-Down vor der Insel"],
                ["Pfingstmontag", "Ostebahn (Helgoland - Cuxhaven - Helgoland)"],
                ["Dienstag", "Wattenmeerbahn"],
                ["Mittwoch", "Doublehanded und Klassiker"],
                ["Donnerstag", "Auslaufbahn, Siegerehrung am Abend"],
              ].map(([day, what]) => (
                <li key={day} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-display text-lg text-brand-deep">{day}</span>
                  <span className="text-sm text-brand-stone/75">{what}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-brand-stone/60">Programm jährlich angepasst, Wettfahrtprogramm ist Teil der Ausschreibung.</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Anmeldung</div>
              <p className="mt-2 text-sm text-brand-sand/80">Online-Anmeldung über das Meldeportal der Nordseewoche. Frühbucher-Frist beachten.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Ausschreibung</div>
              <p className="mt-2 text-sm text-brand-stone/75">Inklusive Wertungssystem, Klasseneinteilung und Bahnauswahl. Wird jährlich aktualisiert.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Crew-Verpflegung</div>
              <p className="mt-2 text-sm text-brand-stone/75">Im Clubhaus täglich Frühstück, abends Crew-Tisch nach Wettfahrt.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
