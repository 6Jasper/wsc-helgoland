import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Vorstand und Ansprechpartner" };

const VORSTAND = [
  { role: "1. Vorsitzender", name: "Kay Martens", area: "Gesamtverein, Außenvertretung." },
  { role: "2. Vorsitzender", name: "Dieter Klings", area: "Stellvertretung, Spartenleitung Motorboot." },
  { role: "Schatzmeisterin", name: "Monika van Freeden", area: "Beiträge, Buchhaltung, Förderanträge." },
  { role: "Schriftführer", name: null, area: "Protokoll, Schriftverkehr, Mitgliederakten." },
  { role: "Hafenwart", name: null, area: "Hafenbüro, Liegeplätze, Stege." },
];

const SPARTEN = [
  { role: "Spartenleitung Motorboot", name: "Dieter Klings" },
  { role: "Spartenleitung Segeln", name: "Sönke Würtz" },
  { role: "Technischer Leiter Segeln", name: "Helge van Freeden" },
  { role: "Verantwortlich Bootshalle", name: "Helge van Freeden" },
];

export default function VorstandPage() {
  return (
    <>
      <PageHero
        title={<>Vorstand und <span style={{ fontWeight: 600 }}>Ansprechpartner.</span></>}
        lead="Der Vorstand des Wassersportclubs Helgoland arbeitet ehrenamtlich. Die Kontaktaufnahme läuft über die zentrale Vereinsadresse, persönliche E-Mail-Adressen veröffentlichen wir nicht."
        image="/img/wsch_anlagemitclubhaus.jpg"
        alt="Vereinsanlage am Südhafen"
        height="medium"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-text-primary font-light max-w-3xl" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
              Vorstand.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {VORSTAND.map((p, i) => (
              <Reveal key={p.role} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim">{p.role}</div>
                  <div className="mt-3 text-text-primary text-[24px] md:text-[28px] font-semibold tracking-tightish leading-tight">
                    {p.name ?? <span className="text-text-dim font-light">noch zu besetzen</span>}
                  </div>
                  <p className="body-copy mt-3 text-[14px]">{p.area}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-text-primary font-light max-w-3xl" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Sparten und <span className="font-bold">Technik.</span>
            </h2>
          </Reveal>
          <div className="mt-12 max-w-3xl">
            {SPARTEN.map((s, i) => (
              <Reveal key={s.role} variant="cinematic" delay={i * 0.04}>
                <div className="flex items-baseline justify-between border-t border-border-subtle py-6 gap-8">
                  <div className="text-text-muted text-[14px] md:text-[15px]">{s.role}</div>
                  <div className="text-text-primary text-[16px] md:text-[18px] font-semibold tracking-tightish text-right">{s.name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
