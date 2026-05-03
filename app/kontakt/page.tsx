import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion, type FaqItem } from "@/components/ui/FAQAccordion";

export const metadata = { title: "Kontakt und Anfahrt" };

const FAQ: FaqItem[] = [
  {
    q: "Wie kann ich als Gastlieger einen Liegeplatz bekommen?",
    a: "Im Südhafen ist eine Vorabstimmung erforderlich. Schreiben Sie uns vor der Abfahrt eine kurze E-Mail. Im Nordosthafen können Sie freie Plätze in der Regel direkt beim Hafenmeister vor Ort erfragen. Päckchenliegen ist nicht vorgesehen.",
  },
  {
    q: "Warum darf man den Südhafen nicht eigenständig anlaufen?",
    a: "Im östlichen Bereich der Steganlage liegen Trümmer eines U-Boot-Bunkers aus dem Zweiten Weltkrieg. Dieser Bereich gilt als unrein. Aus diesem Grund weist ein erfahrenes Vereinsmitglied Sie beim Anlauf ein.",
  },
  {
    q: "Was kostet der Liegeplatz?",
    a: "Die Liegegebühren werden pauschal abgerechnet. Strom läuft über Münzeinwurf-Säulen. Die genauen Sätze nennt Ihnen der Hafenmeister vor Ort.",
  },
  {
    q: "Wie kann ich Mitglied werden?",
    a: "Über einen schriftlichen Aufnahmeantrag mit zwei Bürgen aus dem Verein. Über die Aufnahme entscheidet die zuständige Spartenversammlung. Ein Aufnahmegespräch oder ein Sportbootführerschein sind nicht erforderlich.",
  },
  {
    q: "Gibt es im Clubhaus eine Gastronomie?",
    a: "Nein. Das Clubhaus ist Vereinsraum für Mitgliederversammlungen, Crewabende und vereinsinterne Treffen. Es gibt keinen öffentlichen Restaurantbetrieb und keine Sanitäranlagen für Tagesgäste.",
  },
  {
    q: "Was unterscheidet die Helgoländer Herbstregatta von der Nordseewoche?",
    a: "Die Herbstregatta ist eine eintägige Wettfahrt um Insel und Düne, gewertet nach Yardstick, Anfang September. Ausrichter ist allein der WSC Helgoland. Die Nordseewoche ist eine mehrtägige Hochsee-Regatta zu Pfingsten, an der wir als einer von mehreren Vereinen mitwirken.",
  },
  {
    q: "Bietet der WSC Helgoland einen Bootsservice oder eine Werft an?",
    a: "Nein. Wir betreiben Stege, eine Bootshalle und eine Werkstatt für die Mitglieder. Reparatur- oder Servicedienste für Gastlieger werden über externe Anbieter auf der Insel abgewickelt.",
  },
  {
    q: "Kann ich auf der Insel mein Auto mitnehmen?",
    a: "Helgoland ist autofrei. Auf der Insel sind Sie zu Fuß, mit dem Fahrrad oder mit Elektrofahrzeugen unterwegs.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title={<>Kontakt und <span style={{ fontWeight: 600 }}>Anfahrt.</span></>}
        lead="Eine öffentliche Telefonnummer haben wir nicht. Anfragen erreichen uns am zuverlässigsten per E-Mail."
        image="/img/wsch_helgolandweit.jpg"
        alt="Helgoland mit Düne aus der Ferne"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-16 lg:gap-20 lg:grid-cols-2">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Wassersportclub <span className="font-bold">Helgoland e.V.</span>
              </h2>
              <address className="mt-8 not-italic text-text-body text-[16px] leading-relaxed">
                Postfach 1125<br />
                27498 Helgoland<br />
                Deutschland
              </address>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 text-[16px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>kontakt@wsc-helgoland.de</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <p className="mt-8 text-[13px] text-text-dim max-w-md">
                In der Saison antworten wir in der Regel innerhalb weniger Tage, im Winter manchmal etwas später.
              </p>
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Anreise nach <span className="font-bold">Helgoland.</span>
              </h2>
              <ul className="mt-8 space-y-7 text-text-body text-[15px] leading-relaxed max-w-prose">
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-text-primary block mb-2">Mit dem eigenen Boot</strong>
                  Anlauf in der Regel von Cuxhaven, Büsum, Wilhelmshaven oder Hörnum. Aus den Niederlanden, Großbritannien oder
                  Skandinavien führen die üblichen Routen ebenfalls nach Helgoland. Bitte beachten: Der östliche Bereich der
                  Steganlage im Südhafen gilt als unrein und ist nur nach Vorabstimmung anzulaufen.
                </li>
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-text-primary block mb-2">Mit der Fähre</strong>
                  Tägliche Verbindungen ab Cuxhaven, Büsum und Hamburg in der Saison.
                </li>
                <li className="border-t border-border-subtle pt-5">
                  <strong className="text-text-primary block mb-2">Mit dem Flugzeug</strong>
                  Flugplatz auf der Düne, Verbindungen ab Bremerhaven, Cuxhaven und Heide-Büsum.
                </li>
              </ul>
              <p className="mt-8 text-[13px] text-text-dim">
                Helgoland ist autofrei. Auf der Insel sind Sie zu Fuß, mit dem Fahrrad oder elektrisch unterwegs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="m-0 text-text-primary font-light"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}
              >
                Häufige <span className="font-bold">Fragen.</span>
              </h2>
              <p className="body-copy mt-5">
                Was wir am häufigsten gefragt werden, gesammelt an einem Ort. Sollte Ihre Frage hier nicht stehen, schreiben Sie
                uns einfach.
              </p>
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div className="mt-14 max-w-3xl mx-auto">
              <FAQAccordion items={FAQ} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary">
        <div className="max-w-container mx-auto px-6 md:px-14 py-16 md:py-[120px]">
          <Reveal variant="cinematic">
            <div className="overflow-hidden rounded shadow-soft">
              <iframe
                title="Karte Helgoland"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.870%2C54.170%2C7.910%2C54.195&layer=mapnik&marker=54.1825%2C7.8870"
                className="h-[420px] w-full"
                loading="lazy"
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
