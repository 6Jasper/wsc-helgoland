import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import { club } from "@/lib/nav";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src="https://picsum.photos/seed/wsc-hero-helgoland/2000/1200"
          alt="Segelyachten auf rauer See bei goldenem Licht"
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
            der Insel. Zwei Häfen, ein Clubhaus, eine der traditionsreichsten Regatten
            Nordeuropas und Menschen, die das Meer ernst nehmen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gastlieger" className="btn-primary bg-brand-sand text-brand-deep hover:bg-white">
              Als Gastlieger anlaufen
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
              Helgoland liegt 70 Kilometer vor der Küste, mitten in der Deutschen Bucht.
              Wer hier festmacht, kommt nicht zufällig vorbei. Der WSC betreut den
              Sportbootverkehr in beiden Häfen, organisiert die Nordseewoche und ist
              Anlaufstelle für alle, die ankommen, bleiben oder durchsegeln.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Wir sind ein eingetragener Verein mit aktiven Mitgliedern, einem ehrenamtlichen
              Vorstand und einem Clubhaus, das im Sommer kaum schläft. Im Winter wird gewartet,
              geplant, gebaut und gerichtet. Im Frühjahr läuft alles wieder an.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/wsc-club-hafen/1400/1750"
              alt="Hafen mit vertäuten Segelbooten am Kai"
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
              body="Anlaufverfahren, Liegeplatzvergabe, Hafengebühren, Versorgung an Bord. Was du brauchst, bevor du in Helgoland einläufst."
              href="/gastlieger"
              cta="Gastlieger-Infos"
            />
            <InfoCard
              title="Die zwei Häfen"
              body="Binnenhafen und Südhafen. Welcher Hafen passt zu deinem Boot? Tiefen, Zugänge, Strömung, Wind."
              href="/haefen"
              cta="Häfen vergleichen"
            />
            <InfoCard
              title="Clubhaus"
              body="Treffpunkt für Mitglieder und Gäste. Öffnungszeiten, Küche, Bar, Crewecke, Duschen, Waschmaschine."
              href="/clubhaus"
              cta="Clubhaus entdecken"
            />
            <InfoCard
              title="Nordseewoche"
              body="Eines der ältesten Hochsee-Regatta-Formate Deutschlands. Termine, Klassen, Anmeldung."
              href="/nordseewoche"
              cta="Zur Regatta"
            />
            <InfoCard
              title="Mitgliedschaft"
              body="Beiträge, Aufnahmeverfahren, Rechte und Pflichten. Wer Mitglied wird, gehört dazu."
              href="/mitgliedschaft"
              cta="Mitglied werden"
            />
            <InfoCard
              title="Hafenregeln"
              body="Geschwindigkeit, Liegeordnung, Müll, Strom, Lautstärke. Was im Hafen gilt, gilt für alle."
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
              src="https://picsum.photos/seed/wsc-nordseewoche-thumb/1600/1280"
              alt="Segelboote in einer Regatta auf hoher See"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="pill">Nordseewoche</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Pfingsten gehört dem Wind.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Die Nordseewoche ist seit Jahrzehnten Pflichttermin für Hochseesegler aus
              Deutschland, Dänemark, den Niederlanden und Skandinavien. Über Pfingsten
              verwandeln sich beide Häfen in ein Lager aus Yachten, Crews und gespannten
              Wettervorhersagen.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Der WSC ist Mitveranstalter und betreut Crews, Verpflegung und Land-Programm.
              Auch wer nicht startet, ist willkommen.
            </p>
            <Link href="/nordseewoche" className="btn-primary mt-7">
              Programm & Anmeldung
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-brand-deep text-brand-sand">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="pill bg-brand-sand/15 text-brand-sand border-brand-sand/30">Kontakt</span>
            <h2 className="mt-4 text-3xl text-brand-sand">Wir sind erreichbar. Auch bei Wind 7.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-sand/80">
              Hafenmeister, Vorstand, Clubhaus. Die Nummern unten sind während der Saison
              regelmäßig besetzt, außerhalb auf Anrufbeantworter mit Rückruf.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Hafenbüro</div>
              <a href={`tel:${club.phoneHafen.replace(/\s+/g, "")}`} className="mt-2 block font-display text-2xl">{club.phoneHafen}</a>
              <div className="mt-1 text-sm text-brand-sand/70">Saison 08:00 bis 20:00 Uhr</div>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Geschäftsstelle</div>
              <a href={`tel:${club.phone.replace(/\s+/g, "")}`} className="mt-2 block font-display text-2xl">{club.phone}</a>
              <div className="mt-1 text-sm text-brand-sand/70">Mo bis Fr 09:00 bis 16:00 Uhr</div>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">E-Mail</div>
              <a href={`mailto:${club.email}`} className="mt-2 block font-display text-2xl">{club.email}</a>
              <div className="mt-1 text-sm text-brand-sand/70">Antwort in der Regel binnen 48 Stunden.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
