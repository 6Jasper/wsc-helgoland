import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Clubhaus" };

export default function ClubhausPage() {
  return (
    <>
      <PageHero
        title="Das Clubhaus."
        lead="Vereinsraum am Südhafen. Das Clubhaus dient ausschließlich Vereinszwecken und ist nicht öffentlich zugänglich."
        image="/img/wsch_clubhaus.jpg"
        alt="WSCH Clubhaus am Südhafen mit Schriftzug"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Über das Haus</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Vereinsanlage am Südhafen.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Das Clubhaus liegt direkt an der Vereinsanlage im Südhafen. Es ist
              Treffpunkt für Mitglieder und Veranstaltungsort für vereinsinterne Termine.
              Eine öffentliche Bewirtschaftung gibt es nicht.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Genutzt wird das Clubhaus für Mitgliederversammlungen, Crewabende während
              der Regatten, Stammtische und vereinsinterne Treffen. Schlüsselausgabe und
              Nutzung sind in der Hausordnung geregelt.
            </p>
            <Link href="/mitgliedschaft" className="btn-primary mt-7">
              Mitglied werden
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/img/wsch_anlagemitclubhaus.jpg"
              alt="Clubhaus mit Vereinsanlage und Insel im Hintergrund"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2 relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/img/wsch_clubhaus3.jpg"
              alt="Clubhaus mit Bootshalle aus der Luft"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="pill">Hinweis</span>
            <h2 className="mt-4 text-3xl">Nicht öffentlich.</h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Das Clubhaus ist keine Gastronomie. Es gibt keinen öffentlichen
              Restaurantbetrieb, keine Sanitäranlage für Touristen, keine offenen
              Veranstaltungen. Nutzung ist Vereinsmitgliedern und ausdrücklich geladenen
              Gästen vorbehalten.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-stone/80">
              Anfragen zur Mitgliedschaft oder zur Nutzung im Rahmen einer Vereinskooperation
              richten Sie bitte an die Vereinsadresse.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-[3/2]">
            <Image src="/img/wsch_anlagemitclubhaus2.jpg" alt="Vereinsanlage mit Liegeplätzen" fill sizes="(min-width: 640px) 66vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/img/wsch_clubhaus2.jpg" alt="Clubhaus von der Hafenseite" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/img/wsch_topdown.jpg" alt="Steganlage von oben" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
