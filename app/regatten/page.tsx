import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Regatten" };

const GALERIE = [
  "/img/06092025_regatta-19.jpg",
  "/img/06092025_regatta-32.jpg",
  "/img/06092025_regatta-10.jpg",
  "/img/06092025_regatta-15.jpg",
  "/img/06092025_regatta-17.jpg",
  "/img/06092025_regatta-28.jpg",
];

export default function RegattenPage() {
  return (
    <>
      <PageHero
        title={<>Drei Termine, <span style={{ fontWeight: 600 }}>ein Felsen.</span></>}
        lead="Pfingsten Nordseewoche, Anfang September Helgoländer Herbstregatta, dazu der Störtebeker Opti-Cup. Alles vor derselben Kulisse, alles auf demselben Wasser."
        image="/img/06092025_regatta-32.jpg"
        alt="Yacht unter vollen Segeln vor Helgoland"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:gap-20 lg:grid-cols-[0.9fr_1.2fr] lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-square bg-white rounded overflow-hidden">
              <Image
                src="/img/herbstregatta_logo.png"
                alt="Helgoländer Herbstregatta"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-10 md:p-16"
                priority
              />
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Helgoländer <span className="font-bold">Herbstregatta.</span>
              </h2>
              <p className="body-copy mt-6 max-w-xl">
                Die Traditionsregatta des Vereins. Eine Wettfahrt für seegängige Yachten, einmal um Insel und Düne, gewertet nach
                Yardstick. Anfang September. Kein Massen-Event, sondern eine Runde im richtigen Maßstab.
              </p>
              <p className="body-copy mt-4 max-w-xl">
                Wer mitsegeln möchte, schreibt uns. Ausschreibung und Anmeldung gehen rechtzeitig vor dem Termin raus.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 text-[14px]">
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Termin</dt>
                  <dd className="mt-2 text-white">Anfang September</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Bahn</dt>
                  <dd className="mt-2 text-white">um Insel und Düne</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Wertung</dt>
                  <dd className="mt-2 text-white">Yardstick</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Ausrichter</dt>
                  <dd className="mt-2 text-white">WSC Helgoland</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-white font-light max-w-3xl" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Bilder vom <span className="font-bold">6. September 2025.</span>
            </h2>
            <p className="body-copy mt-5 max-w-xl">Die letzte Auflage, fotografiert aus der Luft.</p>
          </Reveal>

          <Reveal variant="cinematic" delay={0.15}>
            <div className="mt-12 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIE.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-soft hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_nordseewoche-1.jpg" alt="Yacht der Nordseewoche vor Helgoland" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(34px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Pfingsten ist <span className="font-bold">Nordseewoche.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Eines der traditionsreichsten Hochsee-Regattaformate in der Deutschen Bucht. Crews aus Deutschland, den Niederlanden,
                Dänemark und Skandinavien starten zu Bahnen rund um Helgoland.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Der WSCH ist Mitveranstalter. Ausschreibung, Klasseneinteilung und Anmeldung laufen zentral über die Nordseewoche.
              </p>
              <a
                href="https://nordseewoche.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full border border-border-strong text-text-primary hover:border-white hover:translate-x-1 transition-all duration-300 group"
              >
                <span>nordseewoche.org</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(34px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Störtebeker <span className="font-bold">Opti-Cup.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Der Nachwuchs auf Optimisten vor der Insel. Eine Veranstaltung, die junge Segler an Hochseebedingungen heranführt.
                Klein, intensiv, sehr ernst.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_nordseewoche-3.jpg" alt="Yachten unterwegs" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
