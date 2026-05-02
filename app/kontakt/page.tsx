import Image from "next/image";
import PageHero from "@/components/PageHero";
import { club } from "@/lib/nav";

export const metadata = { title: "Kontakt & Anfahrt" };

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt & Anfahrt."
        lead="E-Mail, Anschrift, Notrufe. Plus alles, was du zur Anreise nach Helgoland wissen musst."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <span className="pill">Kontakt</span>
            <h2 className="mt-4 text-3xl">{club.name}</h2>
            <address className="mt-5 not-italic text-base text-brand-stone/80">
              {club.address.street}<br />
              {club.address.zip} {club.address.city}<br />
              Deutschland
            </address>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="rounded-xl border border-brand-deep/10 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">E-Mail</div>
                <a href={`mailto:${club.email}`} className="mt-1 block text-brand-deep break-all">{club.email}</a>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Notruf</div>
                <div className="mt-1 text-brand-deep">Polizei 110 · Rettung 112</div>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Seenot</div>
                <div className="mt-1 text-brand-deep">DGzRS, UKW Kanal 16</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-brand-stone/60">
              Eine öffentliche Telefonnummer haben wir nicht. Anfragen erreichen uns am
              zuverlässigsten per E-Mail.
            </p>
          </div>

          <div>
            <span className="pill">Anreise</span>
            <h2 className="mt-4 text-3xl">Wege nach Helgoland.</h2>
            <ul className="mt-5 space-y-4 text-sm text-brand-stone/80">
              <li>
                <strong className="text-brand-deep">Mit dem eigenen Boot.</strong> Anlauf von Cuxhaven, Büsum,
                Wilhelmshaven, Hörnum oder direkt aus Großbritannien, den Niederlanden oder Skandinavien.
                Beachten: Südhafen unrein, nur nach Vorabstimmung.
              </li>
              <li>
                <strong className="text-brand-deep">Mit der Fähre.</strong> Tägliche Verbindungen ab Cuxhaven,
                Büsum und Hamburg in der Saison.
              </li>
              <li>
                <strong className="text-brand-deep">Mit dem Flugzeug.</strong> Flugplatz Düne, Verbindungen über
                Bremerhaven, Cuxhaven und Heide-Büsum.
              </li>
            </ul>
            <p className="mt-6 text-xs text-brand-stone/60">
              Helgoland ist autofrei. Auf der Insel zu Fuß, mit Fahrrad oder elektrisch unterwegs.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-brand-deep/10 bg-white">
            <iframe
              title="Karte Helgoland"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.870%2C54.170%2C7.910%2C54.195&layer=mapnik&marker=54.1825%2C7.8870"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="relative h-[42vh] min-h-[320px] w-full">
          <Image
            src="/img/helgoland_panorama-4.jpg"
            alt="Sonnenuntergang über Helgoland und Düne"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
