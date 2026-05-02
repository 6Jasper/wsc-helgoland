import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Satzung" };

export default function SatzungPage() {
  return (
    <>
      <PageHero
        title="Satzung."
        lead="Rechtsgrundlage des Wassersportclubs Helgoland e.V. Verbindlich ist die im Vereinsregister beim Amtsgericht Pinneberg hinterlegte Originalfassung."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="WSCH Vereinsanlage am Südhafen"
      />

      <section className="section">
        <div className="container-x max-w-3xl">
          <span className="pill">Hinweis</span>
          <h2 className="mt-4 text-3xl">Aktuelle Fassung folgt.</h2>
          <p className="mt-5 text-base leading-relaxed text-brand-stone/80">
            Die aktuelle Satzung wird derzeit für die Veröffentlichung auf der Webseite
            aufbereitet. Bis zur Bereitstellung gilt die im Vereinsregister beim
            Amtsgericht Pinneberg hinterlegte Fassung als verbindlich.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-stone/80">
            Eckdaten zur Vereinsstruktur:
          </p>
          <ul className="mt-4 space-y-2 text-base text-brand-stone/80">
            <li>· Name: Wassersportclub Helgoland e.V.</li>
            <li>· Sitz: 27498 Helgoland</li>
            <li>· Vereinsregister: Amtsgericht Pinneberg, VR 591 PI</li>
            <li>· Geschäftsjahr: Kalenderjahr</li>
            <li>· Sparten: Segelsparte, Motorbootsparte</li>
            <li>· Organe: Vorstand, Spartenversammlungen, Mitgliederversammlung</li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-brand-stone/80">
            Eine vollständige Fassung erhalten Sie auf Anfrage.
          </p>
          <Link href="/kontakt" className="btn-primary mt-6">
            Satzung anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
