import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Kontakt" };

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title={<>Schreiben Sie uns. <span style={{ fontWeight: 600 }}>Wir lesen mit.</span></>}
        lead="Eine öffentliche Telefonnummer haben wir nicht. Anfragen erreichen uns am zuverlässigsten per E-Mail."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Wassersportclub <span className="font-bold">Helgoland e.V.</span>
              </h2>
              <address className="mt-8 not-italic text-text-body text-[16px] leading-relaxed">
                Postfach 1125<br />
                27498 Helgoland<br />
                Deutschland
              </address>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 text-[16px] font-bold rounded-full bg-white text-black hover:bg-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>kontakt@wsc-helgoland.de</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <div className="mt-14 grid gap-10 sm:grid-cols-2">
                <div>
                  <div
                    className="text-white font-light tracking-tightish"
                    style={{ fontSize: "clamp(34px, 3.6vw, 52px)", lineHeight: 1, letterSpacing: "-.025em" }}
                  >
                    110 <span className="text-text-dim font-light">·</span> 112
                  </div>
                  <div className="mt-4 h-px w-10 bg-accent-warm" />
                  <p className="mt-4 text-white/75 text-[14px] leading-relaxed">
                    Polizei und Rettung. Erste Wahl, auch im Hafen.
                  </p>
                </div>
                <div>
                  <div
                    className="text-white font-light tracking-tightish"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.05, letterSpacing: "-.02em" }}
                  >
                    UKW <span className="font-bold">Kanal 16</span>
                  </div>
                  <div className="mt-4 h-px w-10 bg-accent-tide" />
                  <p className="mt-4 text-white/75 text-[14px] leading-relaxed">
                    DGzRS Bremen. Seenotruf rund um die Uhr.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Wege auf <span className="font-bold">die Insel.</span>
              </h2>
              <ul className="mt-8 space-y-7 text-text-body text-[15px] leading-relaxed max-w-prose">
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-white block mb-2">Mit dem eigenen Boot</strong>
                  Anlauf von Cuxhaven, Büsum, Wilhelmshaven, Hörnum oder direkt aus Großbritannien, den Niederlanden oder
                  Skandinavien. Beachten: Südhafen unrein, nur nach Vorabstimmung.
                </li>
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-white block mb-2">Mit der Fähre</strong>
                  Tägliche Verbindungen ab Cuxhaven, Büsum und Hamburg in der Saison.
                </li>
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-white block mb-2">Mit dem Flugzeug</strong>
                  Flugplatz Düne, Verbindungen über Bremerhaven, Cuxhaven und Heide-Büsum.
                </li>
              </ul>
              <p className="mt-8 text-[13px] text-text-dim">
                Helgoland ist autofrei. Auf der Insel zu Fuß, mit Fahrrad oder elektrisch unterwegs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface">
        <div className="max-w-container mx-auto px-6 md:px-14 py-16 md:py-[120px]">
          <Reveal variant="cinematic">
            <div className="overflow-hidden rounded">
              <iframe
                title="Karte Helgoland"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.870%2C54.170%2C7.910%2C54.195&layer=mapnik&marker=54.1825%2C7.8870"
                className="h-[420px] w-full"
                loading="lazy"
                style={{ filter: "saturate(.7) contrast(1.05) brightness(.9)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative w-full h-[42vh] min-h-[320px] overflow-hidden">
        <Image src="/img/helgoland_panorama-4.jpg" alt="Sonnenuntergang über Helgoland und Düne" fill sizes="100vw" className="object-cover" />
      </section>
    </>
  );
}
