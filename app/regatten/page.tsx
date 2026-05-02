import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Regatten" };

const galerie = [
  { src: "/img/06092025_regatta-19.jpg", alt: "Boote unter Spinnaker vor Helgoland" },
  { src: "/img/06092025_regatta-32.jpg", alt: "Yacht in voller Fahrt" },
  { src: "/img/06092025_regatta-10.jpg", alt: "Spi-Reach bei der Herbstregatta" },
  { src: "/img/06092025_regatta-15.jpg", alt: "Regattafeld vor Helgoland" },
  { src: "/img/06092025_regatta-17.jpg", alt: "Yacht unter Genaker" },
  { src: "/img/06092025_regatta-28.jpg", alt: "Regattafeld bei glatter See" },
];

export default function RegattenPage() {
  return (
    <>
      <PageHero
        title="Regatten."
        lead="Drei feste Termine im Helgoländer Segeljahr: Helgoländer Herbstregatta, Nordseewoche und Störtebeker Opti-Cup."
        image="/img/06092025_regatta-19.jpg"
        alt="Segelboote vor Helgoland bei der Herbstregatta"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
            <Image
              src="/img/herbstregatta_logo.png"
              alt="Helgoländer Herbstregatta Logo"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-6"
              priority
            />
          </div>
          <div>
            <span className="pill">Eigene Veranstaltung</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Helgoländer Herbstregatta.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Die Herbstregatta ist die jährliche Traditionsregatta des WSCH für seegängige
              Segelyachten. Eine Wettfahrt um Insel und Düne, gewertet nach Yardstick.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Termin ist jährlich Anfang September. Ausrichter ist der WSCH. Anmeldung
              und Ausschreibung erfolgen rechtzeitig vor dem Termin.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Termin</dt>
                <dd className="mt-1 text-brand-deep">jährlich Anfang September</dd>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Wertung</dt>
                <dd className="mt-1 text-brand-deep">Yardstick</dd>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Bahn</dt>
                <dd className="mt-1 text-brand-deep">um Insel und Düne</dd>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Ausrichter</dt>
                <dd className="mt-1 text-brand-deep">WSCH</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Impressionen Herbstregatta</span>
          <h2 className="mt-4 max-w-3xl text-3xl">Bilder vom 6. September 2025.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galerie.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2 relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/img/wsch_nordseewoche-1.jpg"
              alt="Segelyacht der Nordseewoche vor Helgoland"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="pill">Mitveranstalter</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Nordseewoche.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Die Nordseewoche ist eines der traditionsreichsten Hochsee-Regattaformate in
              der Deutschen Bucht. Über Pfingsten starten Crews aus Deutschland, den
              Niederlanden, Dänemark und Skandinavien zu Bahnen rund um Helgoland.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Der WSCH ist Mitveranstalter der Nordseewoche. Ausschreibung,
              Klasseneinteilung und Anmeldung laufen zentral über die Nordseewoche.
            </p>
            <a
              href="https://nordseewoche.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Zur Nordseewoche
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/img/wsch_nordseewoche-3.jpg"
              alt="Yachten unterwegs"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="pill">Jugend</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Störtebeker Opti-Cup.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Der Störtebeker Opti-Cup ist eine Regatta für die Optimisten-Klasse. Eine
              Veranstaltung, an der der Nachwuchs an Hochseebedingungen herangeführt wird.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-deep text-brand-sand">
        <div className="container-x grid gap-10 md:grid-cols-3 md:items-start">
          <div className="md:col-span-1">
            <span className="pill bg-brand-sand/15 text-brand-sand border-brand-sand/30">Anmeldung</span>
            <h2 className="mt-4 text-3xl text-brand-sand">Mitsegeln und mitfeiern.</h2>
            <p className="mt-5 text-base leading-relaxed text-brand-sand/80">
              Anmeldungen zu unseren Regatten laufen über den Verein. Ausschreibungen
              werden auf Anfrage zugeschickt.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Herbstregatta</div>
              <p className="mt-2 text-sm text-brand-sand/80">Anmeldung und Ausschreibung über den Verein.</p>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Nordseewoche</div>
              <p className="mt-2 text-sm text-brand-sand/80">Anmeldung über die Nordseewoche.</p>
            </div>
            <div className="rounded-2xl border border-brand-sand/15 p-6 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">Kontakt</div>
              <Link href="/kontakt" className="mt-2 inline-block font-display text-2xl text-brand-sand">Anschrift und E-Mail</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
