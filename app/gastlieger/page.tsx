import PageHero from "@/components/PageHero";
import Link from "next/link";
import { club } from "@/lib/nav";

export const metadata = { title: "Informationen für Gastlieger" };

export default function GastliegerPage() {
  return (
    <>
      <PageHero
        title="Gastliegerinfo."
        lead="Wer auf Helgoland anläuft, sollte wissen: Der WSCH ist keine Marina. Wir vergeben freie Vereinsplätze, vornehmlich an Gäste aus befreundeten Vereinen."
        image="/img/wsch_liegeplatzueberblick.jpg"
        alt="Liegeplätze des WSCH am Südhafen"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Grundsätzliches</span>
            <h2 className="mt-4 text-3xl">Kein Marinacharakter.</h2>
            <p className="mt-5">
              Einen klassischen Gastliegerbetrieb mit Marinacharakter gibt es bei uns
              nicht. Stattdessen werden lediglich freie Plätze unserer Vereinsmitglieder
              freigegeben, vornehmlich an Vereinsmitglieder vom Festland, die auf
              Helgoland keinen festen Liegeplatz haben.
            </p>

            <h3 className="mt-10 text-2xl">Anlauf Südhafen</h3>
            <p className="mt-3">
              Der Südhafen ist unreines Gebiet. Im Hafenbecken liegen Trümmer eines
              U-Boot-Bunkers aus dem Zweiten Weltkrieg. Ein Anlaufen ist
              <strong className="text-brand-deep"> nur nach Vorabstimmung</strong> möglich.
              Eine Einführung durch ein erfahrenes Vereinsmitglied ist Voraussetzung.
              Befahren und Liegen erfolgen auf eigene Gefahr.
            </p>

            <h3 className="mt-10 text-2xl">Anlauf Nordosthafen</h3>
            <p className="mt-3">
              Im Nordosthafen können freie Plätze in der Regel belegt werden. Bitte
              direkt beim Hafenmeister melden. Päckchenbildung ist nicht vorgesehen.
            </p>

            <h3 className="mt-10 text-2xl">Versorgung an Bord</h3>
            <ul className="mt-3 space-y-2 text-brand-stone/80">
              <li>· <strong className="text-brand-deep">Strom Südhafen:</strong> einige Stromsäulen mit Münzeinwurf, pauschal abgerechnet</li>
              <li>· <strong className="text-brand-deep">Strom Nordosthafen:</strong> wenige Stromsäulen, ebenfalls pauschal</li>
              <li>· <strong className="text-brand-deep">Diesel:</strong> Bunkerstation Jörn Rickmers, im Binnenhafen an den Hummerbuden</li>
              <li>· <strong className="text-brand-deep">Müll:</strong> Mülltrennsystem am Sanitärcontainer</li>
              <li>· <strong className="text-brand-deep">Wasser:</strong> nicht an allen Stegen verfügbar</li>
            </ul>

            <h3 className="mt-10 text-2xl">Im Hafen</h3>
            <p className="mt-3">
              Höchstgeschwindigkeit 3 Knoten. Nachtruhe ab 22:00 Uhr. Generatoren sind
              nicht zulässig. Lackier- und Schleifarbeiten sind im Hafen nicht erlaubt,
              Mast legen oder stellen ebenfalls nicht.
            </p>

            <h3 className="mt-10 text-2xl">Notruf</h3>
            <p className="mt-3">
              Im Notfall <strong className="text-brand-deep">110</strong> (Polizei) oder
              <strong className="text-brand-deep"> 112</strong> (Feuerwehr / Rettung) wählen.
              Seenotfall: DGzRS über UKW Kanal 16.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Südhafen</div>
              <p className="mt-2 text-sm text-brand-sand/80">Anlauf nur nach Vorabstimmung. Unreines Gebiet, Befahren auf eigene Gefahr.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Nordosthafen</div>
              <p className="mt-2 text-sm text-brand-stone/75">Freie Plätze können in der Regel belegt werden. Beim Hafenmeister melden.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Kontakt</div>
              <a href={`mailto:${club.email}`} className="mt-2 block text-base text-brand-deep break-all">{club.email}</a>
              <p className="mt-2 text-xs text-brand-stone/70">Antwort in der Regel binnen 48 Stunden.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Notruf</div>
              <p className="mt-2 text-sm text-brand-stone/75">110 / 112 · DGzRS UKW Kanal 16</p>
            </div>
            <Link href="/regeln" className="btn-ghost w-full">
              Hafenregeln lesen
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
