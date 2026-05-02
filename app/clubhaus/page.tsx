import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Clubhaus" };

export default function ClubhausPage() {
  return (
    <>
      <PageHero
        title={<>Ein Haus für <span style={{ fontWeight: 600 }}>uns.</span></>}
        lead="Vereinsraum am Südhafen. Kein Restaurant, kein Touristen-Stopp, keine Sanitäranlage für Tagesgäste. Treffpunkt für Mitglieder und ausdrücklich geladene Gäste."
        image="/img/wsch_clubhaus.jpg"
        alt="WSCH Clubhaus mit Vereinsschild"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-white font-light" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
                Direkt an der <span className="font-bold">Steganlage.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Das Clubhaus liegt an der Vereinsanlage im Südhafen, ein paar Schritte vom Steg entfernt. Genutzt wird es für
                Mitgliederversammlungen, Crewabende vor und nach Regatten, Stammtische und vereinsinterne Treffen.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Schlüsselausgabe und Nutzung sind in der Hausordnung geregelt. Anfragen zur Mitgliedschaft oder zu
                Vereinskooperationen über die zentrale E-Mail.
              </p>
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-white text-black hover:bg-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Mitglied werden</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/img/wsch_anlagemitclubhaus.jpg" alt="Vereinsanlage mit Clubhaus, Insel im Hintergrund" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-container mx-auto grid gap-3 md:gap-4 sm:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded sm:row-span-2">
            <Image src="/img/wsch_clubhaus3.jpg" alt="Clubhaus mit Bootshalle aus der Luft" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded sm:col-span-2">
            <Image src="/img/wsch_anlagemitclubhaus2.jpg" alt="Vereinsanlage mit Liegeplätzen" fill sizes="(min-width: 640px) 66vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image src="/img/wsch_clubhaus2.jpg" alt="Clubhaus von der Hafenseite" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image src="/img/wsch_topdown.jpg" alt="Steganlage von oben" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
