import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Häfen Helgolands" };

const haefen = [
  {
    name: "Vorhafen",
    role: "Schutz- und Sicherheitshafen, Bundesbesitz",
    image: "/img/wsch_vorhafen.jpg",
    alt: "Vorhafen Helgoland aus der Luft",
    facts: [
      ["Eigentümer", "Bund"],
      ["Funktion", "Schutz- und Sicherheitshafen"],
      ["Sportboote", "kein WSCH-Liegeplatz"],
      ["Hinweis", "Helgolandkai neu gebaut"],
    ],
    body:
      "Der Vorhafen ist Schutz- und Sicherheitshafen im Besitz des Bundes. Hier legen unter anderem die MS Helgoland und die Versorgungsschiffe an. Der Helgolandkai wurde zuletzt komplett neu gebaut. Sportbootliegeplätze des WSCH gibt es hier nicht.",
  },
  {
    name: "Südhafen",
    role: "Vereinsanlage WSCH, unreines Gebiet",
    image: "/img/wsch_suedhafen.jpg",
    alt: "Südhafen Helgoland mit WSCH-Steganlage",
    facts: [
      ["Eigentümer", "Bund"],
      ["Steganlage", "Vereinsanlage WSCH"],
      ["Charakter", "unreiner Bereich"],
      ["Anlauf", "kein eigenständiges Ansteuern"],
    ],
    body:
      "Schutz- und Sicherheitshafen mit Sportbootliegeplätzen und Steganlage des WSCH. Unreiner Bereich. Kein eigenständiges Ansteuern, eine Einführung durch ein erfahrenes Vereinsmitglied ist Voraussetzung. An Stelle der heutigen Steganlage befand sich im Zweiten Weltkrieg ein großer U-Boot-Bunker, dessen Trümmer im Hafenbecken liegen. Befahren oder Liegen erfolgt auf eigene Gefahr.",
  },
  {
    name: "Binnenhafen",
    role: "Gemeindehafen, Passagieranlandung",
    image: "/img/wsch_binnenhafen.jpg",
    alt: "Binnenhafen Helgoland mit Hummerbuden",
    facts: [
      ["Eigentümer", "Gemeinde Helgoland"],
      ["Anlandung", "Halunder Jet, Nordlicht"],
      ["Sportboote", "Anlegen nicht erlaubt"],
      ["Bunkerstation", "für Sportboote"],
    ],
    body:
      "Gemeindehafen mit Passagieranlandung, unter anderem für den HSC Halunder Jet und den DSC Nordlicht. Sportboote dürfen hier nicht anlegen. Börteboote und die Dünenfähre haben hier ihren nächtlichen Liegeplatz. Im Binnenhafen liegt die Bunkerstation für Sportboote (Diesel) direkt an den Hummerbuden. Der Hafen wurde zuletzt vertieft.",
  },
  {
    name: "Nordosthafen",
    role: "Gemeindehafen, Vereinsanlage WSCH",
    image: "/img/wsch_nordosthafen.jpg",
    alt: "Nordosthafen Helgoland mit Vereinsanlage",
    facts: [
      ["Eigentümer", "Gemeinde Helgoland"],
      ["Steganlage", "Vereinsanlage WSCH"],
      ["Liegen vor allem", "Vereins-Motorboote"],
      ["Anlegeverbot", "an der Lesehalle"],
    ],
    body:
      "Gemeindehafen mit Steganlage des WSCH. Hier liegen vor allem die Motorboote der Mitglieder. Bei östlichen Winden fährt die Dünenfähre von hier ab. An der Lesehalle gilt Anlegeverbot. Der Nordosthafen ist umgeben vom Neubau des Aquariums (BLUEHOUSE).",
  },
  {
    name: "Landungsbrücke",
    role: "Anlegestelle Dünenfähre, Börteboote",
    image: "/img/wsch_landungsbruecke.jpg",
    alt: "Landungsbrücke Helgoland von oben",
    facts: [
      ["Funktion", "Dünenfähre, Börteboote"],
      ["Anlegen", "verboten"],
      ["Zustand", "Brücke 3 entfernt"],
      ["Saisonal", "westliche Wetterlagen"],
    ],
    body:
      "Hier fährt die Dünenfähre zur Düne, hier liegen die Börteboote. Brücke 3 wurde kürzlich entfernt. Anlegen ist nicht erlaubt.",
  },
];

const galerie = [
  { src: "/img/wsch_topdown.jpg", alt: "WSCH Steganlage Südhafen aus der Vogelperspektive" },
  { src: "/img/wsch_liegeplatzueberblick.jpg", alt: "WSCH Liegeplätze Südhafen mit Insel" },
  { src: "/img/wsch_liegeplatzueberblick2.jpg", alt: "Liegeplätze Übersicht Südhafen" },
  { src: "/img/wsch_liegeplatz3.jpg", alt: "WSCH Steganlage Nordosthafen" },
  { src: "/img/wsch_anlagemitclubhaus2.jpg", alt: "Vereinsanlage mit Clubhaus und Insel" },
  { src: "/img/wsch_suedhafenluftbild.jpg", alt: "Südhafen aus der Luft" },
];

export default function HaefenPage() {
  return (
    <>
      <PageHero
        title="Fünf Häfen, eine Insel."
        lead="Helgoland verfügt über mehrere Hafenbereiche mit unterschiedlicher Nutzung. Der WSCH betreibt seine Vereinsanlagen im Süd- und Nordosthafen."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
      />

      <section className="section">
        <div className="container-x flex flex-col gap-20">
          {haefen.map((h, i) => (
            <div key={h.name} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={h.image} alt={h.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <span className="pill">{h.role}</span>
                <h2 className="mt-4 text-3xl sm:text-4xl">{h.name}</h2>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">{h.body}</p>
                <dl className="mt-7 grid grid-cols-2 gap-3 text-sm">
                  {h.facts.map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                      <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">{k}</dt>
                      <dd className="mt-1 text-brand-deep">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-brand-deep text-brand-sand">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/img/wsch_untiefe2.jpg" alt="Steine und Untiefen am Südhafen bei Niedrigwasser" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="pill bg-brand-cliff/15 text-brand-sand border-brand-cliff/40">Achtung</span>
            <h2 className="mt-4 text-3xl text-brand-sand">Südhafen ist unrein.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-sand/80">
              Im Hafenbecken liegen die Trümmer eines U-Boot-Bunkers aus dem Zweiten
              Weltkrieg. Bei Niedrigwasser fällt im Süd- und Nordosthafen ein Teil
              des Bereiches trocken, Steine und Hindernisse werden sichtbar.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-sand/80">
              Anlauf nur nach Vorabstimmung mit dem Verein und nach Einführung durch
              ein erfahrenes Mitglied. Befahren auf eigene Gefahr.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <span className="pill">Bilder</span>
          <h2 className="mt-4 max-w-3xl text-3xl">Die Anlage aus der Luft.</h2>
          <p className="mt-3 max-w-prose text-sm text-brand-stone/70">
            Drohnenaufnahmen aus dem Süd- und Nordosthafen. Wer vom Festland anreist, sieht so seine
            Liegeplatzumgebung schon vor der ersten Anfahrt.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galerie.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Hinweise zum Anlauf</span>
          <h2 className="mt-4 max-w-3xl text-3xl">Was du vor der Hafeneinfahrt wissen solltest.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg">Südhafen ist unrein</h3>
              <p className="mt-2 text-sm text-brand-stone/75">Trümmer eines U-Boot-Bunkers liegen im Hafenbecken. Befahren auf eigene Gefahr und nur nach vorheriger Einführung durch ein erfahrenes Vereinsmitglied.</p>
            </div>
            <div className="card">
              <h3 className="text-lg">Sportboote im Binnenhafen</h3>
              <p className="mt-2 text-sm text-brand-stone/75">Anlegen für Sportboote nicht erlaubt. Bunkerstation für Diesel an den Hummerbuden ansteuern, anschließend in den Süd- oder Nordosthafen verlegen.</p>
            </div>
            <div className="card">
              <h3 className="text-lg">Tide und Wind</h3>
              <p className="mt-2 text-sm text-brand-stone/75">Bei Niedrigwasser fällt im Südhafen ein Teil des Beckens trocken. Wind aus West bringt Schwell auf die Hafeneinfahrten, bei östlichen Winden fährt die Dünenfähre vom Nordosthafen.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
