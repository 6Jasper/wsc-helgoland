import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageGallery, type GalleryImage } from "@/components/ui/ImageGallery";

export const metadata = { title: "Regatten und Wettfahrten" };

const GALERIE: GalleryImage[] = [
  { src: "/img/06092025_regatta-19.jpg", alt: "Boote der Helgoländer Herbstregatta auf glitzerndem Wasser" },
  { src: "/img/06092025_regatta-32.jpg", alt: "Yacht unter vollen Segeln vor Helgoland" },
  { src: "/img/06092025_regatta-10.jpg", alt: "Spi-Reach bei der Herbstregatta" },
  { src: "/img/06092025_regatta-15.jpg", alt: "Regattafeld vor Helgoland" },
  { src: "/img/06092025_regatta-17.jpg", alt: "Yacht unter Genaker" },
  { src: "/img/06092025_regatta-28.jpg", alt: "Regattafeld bei glatter See" },
];

export default function RegattenPage() {
  return (
    <>
      <PageHero
        title={<>Regatten und <span style={{ fontWeight: 600 }}>Wettfahrten.</span></>}
        lead="Drei feste Termine im Helgoländer Segeljahr: die Nordseewoche zu Pfingsten, der Störtebeker Opti-Cup im Sommer und die Helgoländer Herbstregatta Anfang September."
        image="/img/06092025_regatta-32.jpg"
        alt="Yacht unter vollen Segeln vor Helgoland"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_nordseewoche-1.jpg" alt="Yacht der Nordseewoche vor Helgoland" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(34px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Nordseewoche zu <span className="font-bold">Pfingsten.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Die Nordseewoche ist die traditionsreichste Hochsee-Regatta der Nordsee. Mit über hundert Jahren Geschichte und
                Crews aus Deutschland, den Niederlanden, Dänemark und Skandinavien, die zu Bahnen rund um Helgoland starten.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Der WSC Helgoland ist Mitveranstalter. Ausschreibung, Klasseneinteilung und Anmeldung laufen zentral über die
                Nordseewoche.
              </p>
              <a
                href="https://nordseewoche.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Zur Nordseewoche</span>
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
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(34px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Störtebeker <span className="font-bold">Opti-Cup.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Der Störtebeker Opti-Cup ist eine Regatta für die Optimisten-Klasse, ausgetragen im Sommer. Damit führen wir den
                Nachwuchs an Bedingungen heran, wie sie auf der Nordsee herrschen.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_opticup.jpg" alt="Optimisten beim Störtebeker Opti-Cup vor den Klippen Helgolands" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-soft">
              <Image
                src="/img/wsch_helgregatta.jpg"
                alt="Yacht unter Spinnaker bei der Helgoländer Herbstregatta vor der Langen Anna"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Helgoländer <span className="font-bold">Herbstregatta.</span>
              </h2>
              <p className="body-copy mt-6 max-w-xl">
                Die jährliche Traditionsregatta des Vereins. Eine Wettfahrt für seegängige Segelyachten, einmal um Insel und Düne,
                gewertet nach Yardstick. Ausrichter ist der Wassersportclub Helgoland.
              </p>
              <p className="body-copy mt-4 max-w-xl">
                Termin ist jährlich Anfang September. Ausschreibung und Anmeldung gehen rechtzeitig vor dem Termin an die
                Teilnehmer.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 text-[14px]">
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Termin</dt>
                  <dd className="mt-2 text-text-primary">Anfang September</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Bahn</dt>
                  <dd className="mt-2 text-text-primary">um Insel und Düne</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Wertung</dt>
                  <dd className="mt-2 text-text-primary">Yardstick</dd>
                </div>
                <div className="border-l border-border-subtle pl-5">
                  <dt className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">Ausrichter</dt>
                  <dd className="mt-2 text-text-primary">WSC Helgoland</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-text-primary font-light max-w-3xl" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Bilder vom <span className="font-bold">6. September 2025.</span>
            </h2>
            <p className="body-copy mt-5 max-w-xl">Die letzte Auflage der Herbstregatta, fotografiert aus der Luft.</p>
          </Reveal>

          <Reveal variant="cinematic" delay={0.15}>
            <div className="mt-12">
              <ImageGallery images={GALERIE} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
