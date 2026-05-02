import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import { club } from "@/lib/nav";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src="/img/wsch_topdown.jpg"
          alt="WSCH Steganlage am Südhafen aus der Vogelperspektive"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/70 via-brand-deep/45 to-brand-sand" />

        <div className="relative container-x flex min-h-[88vh] flex-col justify-end pb-16 pt-32">
          <span className="pill self-start bg-white/80 text-brand-deep">
            Helgoland · seit {club.founded}
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl text-brand-sand sm:text-6xl">
            Heimathafen für Segler auf Deutschlands einziger Hochseeinsel.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-sand/90">
            Der Wassersportclub Helgoland e.V. verbindet Mitglieder, Gastlieger und Freunde
            der Insel. Vereinsanlagen im Süd- und Nordosthafen, das Clubhaus, die
            Helgoländer Herbstregatta und Menschen, die das Meer ernst nehmen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gastlieger" className="btn-primary bg-brand-sand text-brand-deep hover:bg-white">
              Gastliegerinfo
            </Link>
            <Link href="/mitgliedschaft" className="btn-ghost bg-brand-sand/10 text-brand-sand border-brand-sand/40 hover:bg-brand-sand/20">
              Mitglied werden
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Über den Club</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Ein Verein, geprägt von Wind, Wasser und der Insel selbst.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Helgoland liegt rund 70 Kilometer vor der Küste, mitten in der Deutschen
              Bucht. Wer hier festmacht, kommt nicht zufällig vorbei. Der WSCH betreibt
              Vereinsanlagen im Süd- und Nordosthafen und ist Anlaufstelle für Mitglieder
              vom Festland und befreundete Vereine.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Wir sind ein eingetragener Verein mit aktiven Mitgliedern, einem
              ehrenamtlichen Vorstand und einem Clubhaus, das im Sommer kaum schläft.
              Im Winter wird gewartet, geplant, gebaut und gerichtet. Im Frühjahr läuft
              alles wieder an.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/img/wsch_anlagemitclubhaus.jpg"
              alt="WSCH Steganlage und Clubhaus mit Insel im Hintergrund"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <span className="pill">Schnelleinstieg</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Alles, was du vor der Anreise wissen solltest.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Gastlieger"
              body="Anlaufverfahren, Liegeplatzvergabe und Versorgung. Was du brauchst, bevor du in Helgoland einläufst."
              href="/gastlieger"
              cta="Gastlieger-Infos"
            />
            <InfoCard
              title="Häfen Helgolands"
              body="Vorhafen, Südhafen, Binnenhafen, Nordosthafen, Landungsbrücke. Welcher Hafen, welche Nutzung, welche Risiken."
              href="/haefen"
              cta="Häfen ansehen"
            />
            <InfoCard
              title="Clubhaus"
              body="Treffpunkt für Mitglieder am Südhafen. Nicht öffentlich zugänglich, ausschließlich Vereinszwecke."
              href="/clubhaus"
              cta="Clubhaus entdecken"
            />
            <InfoCard
              title="Regatten"
              body="Helgoländer Herbstregatta jährlich Anfang September, Mitveranstaltung Nordseewoche, Störtebeker Opti-Cup."
              href="/regatten"
              cta="Zu den Regatten"
            />
            <InfoCard
              title="Mitgliedschaft"
              body="Aufnahme über Antrag mit zwei Bürgen, Entscheidung in der Spartenversammlung. Wer Mitglied wird, gehört dazu."
              href="/mitgliedschaft"
              cta="Mitglied werden"
            />
            <InfoCard
              title="Hafenregeln"
              body="3 Knoten, Nachtruhe ab 22 Uhr, kein Generator. Was im Hafen gilt, gilt für alle."
              href="/regeln"
              cta="Regeln lesen"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
            <Image
              src="/img/06092025_regatta-19.jpg"
              alt="Segelboote vor Helgoland bei der Helgoländer Herbstregatta"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="pill">Helgoländer Herbstregatta</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Anfang September, um Insel und Düne.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Die Herbstregatta ist die jährliche Traditionsregatta des WSCH für
              seegängige Segelyachten. Wettfahrt um Insel und Düne, gewertet nach
              Yardstick.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Daneben ist der WSCH Mitveranstalter der Nordseewoche und richtet den
              Störtebeker Opti-Cup für den Nachwuchs aus.
            </p>
            <Link href="/regatten" className="btn-primary mt-7">
              Alle Regatten
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-brand-deep text-brand-sand">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="pill bg-brand-sand/15 text-brand-sand border-brand-sand/30">Kontakt</span>
            <h2 className="mt-4 text-3xl text-brand-sand">Erreichbar per Mail.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-sand/80">
              Anfragen erreichen uns am zuverlässigsten per E-Mail. Wir antworten
              in der Regel binnen 48 Stunden.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-sand/15 p-6 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">E-Mail</div>
              <a href={`mailto:${club.email}`} className="mt-2 block font-display text-2xl">{club.email}</a>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Anschrift</div>
              <div className="mt-2 text-sm text-brand-sand/85">
                {club.name}<br />
                {club.address.street}<br />
                {club.address.zip} {club.address.city}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Notruf</div>
              <div className="mt-2 text-sm text-brand-sand/85">
                Polizei 110 · Rettung 112<br />
                DGzRS Seenot UKW Kanal 16
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
