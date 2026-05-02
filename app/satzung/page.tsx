import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Satzung" };

const ECKDATEN = [
  ["Name", "Wassersportclub Helgoland e.V."],
  ["Sitz", "27498 Helgoland"],
  ["Vereinsregister", "Amtsgericht Pinneberg, VR 591 PI"],
  ["Geschäftsjahr", "Kalenderjahr"],
  ["Sparten", "Segeln, Motorboot"],
  ["Organe", "Vorstand, Spartenversammlungen, Mitgliederversammlung"],
];

export default function SatzungPage() {
  return (
    <>
      <PageHero
        title={<>Satzung.</>}
        lead="Die Rechtsgrundlage des Vereins. Verbindlich ist die im Vereinsregister beim Amtsgericht Pinneberg hinterlegte Originalfassung."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="Vereinsanlage am Südhafen"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="cinematic">
            <p className="body-copy text-[17px]">
              Eine vollständige Fassung der Satzung wird derzeit für die Veröffentlichung auf der Webseite aufbereitet. Bis dahin
              gilt die im Vereinsregister hinterlegte Fassung. Auf Anfrage senden wir Ihnen die aktuelle Satzung zu.
            </p>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div className="mt-14">
              {ECKDATEN.map(([k, v]) => (
                <div key={k} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8 border-t border-border-subtle py-6">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">{k}</div>
                  <div className="text-text-primary text-[16px] md:text-[18px]">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.15}>
            <div className="mt-12">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Satzung anfordern</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
