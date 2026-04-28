import PageHero from "@/components/PageHero";
import Link from "next/link";
import { club } from "@/lib/nav";

export const metadata = { title: "Informationen für Gastlieger" };

export default function GastliegerPage() {
  return (
    <>
      <PageHero
        title="Willkommen, Gastlieger."
        lead="Alles, was du vor und nach der Hafeneinfahrt wissen solltest. Vom Anlauf bis zur Abreise."
        image="https://picsum.photos/seed/wsc-gastlieger-hero/2000/1100"
        alt="Hafen mit vertäuten Yachten"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="prose-zd">
            <span className="pill">Anlauf</span>
            <h2 className="mt-4 text-3xl">So läuft der Anlauf in Helgoland.</h2>
            <p className="mt-5">
              Funkkontakt zum Hafenmeister auf UKW Kanal 11, sobald du in Sichtweite bist.
              Du erhältst einen Liegeplatz oder die Anweisung, an einer freien Stelle
              festzumachen. In Stoßzeiten an Pfingsten oder im Hochsommer ist
              Päckchenbildung üblich, das ist Helgoland-Standard.
            </p>
            <p>
              Nach dem Festmachen bitte umgehend im Hafenbüro anmelden. Dort werden
              Hafengeld, Strom, Müll, Sauna und alles weitere abgewickelt. Mitglieder
              befreundeter Vereine erhalten gegen Vorlage des Bootsausweises Rabatt.
            </p>

            <h3 className="mt-10 text-2xl">Hafengeld</h3>
            <p className="mt-3">
              Das Hafengeld richtet sich nach der Bootslänge und der Liegedauer. Eine
              vollständige Tarifübersicht hängt im Hafenbüro aus und liegt im Clubhaus aus.
              Strom und Wasser werden separat abgerechnet, der Stromanschluss erfolgt über
              CEE-blau.
            </p>

            <h3 className="mt-10 text-2xl">Versorgung an Bord</h3>
            <ul className="mt-3 space-y-2 text-brand-stone/80">
              <li>· Frischwasser an allen Stegen, mit Schlüssel vom Hafenbüro</li>
              <li>· Strom 230V CEE-blau, Bezahlung über Wertmarke oder Pauschale</li>
              <li>· Diesel an der Tankstelle im Südhafen, Öffnungszeiten saisonal</li>
              <li>· Fäkalienabsaugung über mobile Pumpe, Anmeldung im Hafenbüro</li>
              <li>· Müllentsorgung über Container am Hafenkopf</li>
            </ul>

            <h3 className="mt-10 text-2xl">Clubhaus & Sanitär</h3>
            <p className="mt-3">
              Gastlieger nutzen das Sanitärhaus am Steg 3. Duschen, Toiletten und
              Waschmaschinen sind ganzjährig verfügbar. Das Clubhaus mit Bar, Küche und
              Crewecke ist in der Saison täglich geöffnet, Gäste sind willkommen.
            </p>

            <h3 className="mt-10 text-2xl">Abreise</h3>
            <p className="mt-3">
              Bitte vor dem Ablegen kurz im Hafenbüro abmelden, damit der Liegeplatz
              vergeben werden kann. Wer ein Päckchen verlässt, hilft den Nachbarn beim
              Umlegen, bevor er ablegt.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Hafenfunk</div>
              <div className="mt-2 font-display text-3xl">UKW 11</div>
              <p className="mt-2 text-sm text-brand-sand/80">Hafenmeister rufen, sobald die Insel querab steht.</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Hafenbüro</div>
              <a href={`tel:${club.phoneHafen.replace(/\s+/g, "")}`} className="mt-2 block font-display text-2xl text-brand-deep">{club.phoneHafen}</a>
              <p className="mt-1 text-sm text-brand-stone/70">Saison 08:00 bis 20:00 Uhr</p>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">E-Mail Gastlieger</div>
              <a href={`mailto:${club.emailGastlieger}`} className="mt-2 block text-base text-brand-deep break-all">{club.emailGastlieger}</a>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Notruf</div>
              <p className="mt-2 text-sm text-brand-stone/75">Seenotrettung über DGzRS, UKW 16 oder Telefon 124 124.</p>
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
