import PageHero from "@/components/PageHero";
import { club } from "@/lib/nav";

export const metadata = { title: "Kontakt & Anfahrt" };

const kontakte = [
  {
    title: "Hafenbüro",
    desc: "Erste Anlaufstelle für Gastlieger, Liegeplatzfragen, Strom, Wasser, Notruf.",
    phone: club.phoneHafen,
    email: "hafen@wsc-helgoland.de",
    hours: "Saison Mo bis So 08:00 bis 20:00 Uhr",
  },
  {
    title: "Geschäftsstelle",
    desc: "Mitgliederverwaltung, Beiträge, Aufnahmeanträge, allgemeine Anfragen.",
    phone: club.phone,
    email: club.email,
    hours: "Mo bis Fr 09:00 bis 16:00 Uhr",
  },
  {
    title: "Clubhaus",
    desc: "Reservierungen für Crew-Tische, Veranstaltungen, Crewabende.",
    phone: "+49 4725 0000002",
    email: "haus@wsc-helgoland.de",
    hours: "Saison täglich, außerhalb nach Ankündigung",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt & Anfahrt."
        lead="Telefon, E-Mail, Anschrift, UKW. Plus alles, was du zur Anreise nach Helgoland wissen musst."
        image="https://picsum.photos/seed/wsc-kontakt-hero/2000/1100"
        alt="Hafen mit Stegen und Schiffen"
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {kontakte.map((k) => (
              <div key={k.title} className="card flex flex-col">
                <h3 className="text-xl">{k.title}</h3>
                <p className="mt-2 text-sm text-brand-stone/75">{k.desc}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Telefon</div>
                    <a href={`tel:${k.phone.replace(/\s+/g, "")}`} className="text-brand-deep">{k.phone}</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">E-Mail</div>
                    <a href={`mailto:${k.email}`} className="text-brand-deep break-all">{k.email}</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Erreichbarkeit</div>
                    <div className="text-brand-stone/80">{k.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <span className="pill">Adresse</span>
            <h2 className="mt-4 text-3xl">{club.name}</h2>
            <address className="mt-5 not-italic text-base text-brand-stone/80">
              {club.address.street}<br />
              {club.address.zip} {club.address.city}<br />
              Deutschland
            </address>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="rounded-xl border border-brand-deep/10 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">UKW Hafenfunk</div>
                <div className="mt-1 font-display text-xl text-brand-deep">Kanal 11</div>
              </div>
              <div className="rounded-xl border border-brand-deep/10 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">Notruf See</div>
                <div className="mt-1 text-brand-deep">DGzRS Bremen, UKW 16, Tel. 124 124</div>
              </div>
            </div>
          </div>

          <div>
            <span className="pill">Anreise</span>
            <h2 className="mt-4 text-3xl">Wege nach Helgoland.</h2>
            <ul className="mt-5 space-y-4 text-sm text-brand-stone/80">
              <li>
                <strong className="text-brand-deep">Mit dem eigenen Boot.</strong> Anlauf von Cuxhaven, Büsum,
                Wilhelmshaven, Hörnum oder direkt aus Großbritannien, den Niederlanden oder Skandinavien. UKW Kanal 11.
              </li>
              <li>
                <strong className="text-brand-deep">Mit der Fähre.</strong> Tägliche Verbindungen ab Cuxhaven, Büsum
                und Hamburg in der Saison.
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

      <section className="section">
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
    </>
  );
}
