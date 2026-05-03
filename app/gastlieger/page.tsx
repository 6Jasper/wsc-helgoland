import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export const metadata = { title: "Informationen für Gastlieger" };

const STEPS = [
  {
    title: "Vor der Abfahrt",
    body: "Wer im Südhafen festmachen möchte, stimmt das vor der Abfahrt mit dem Vorstand ab. Diese Vorabsprache ist Pflicht und nicht verhandelbar. Im Nordosthafen ist keine Voranmeldung nötig.",
  },
  {
    title: "Anlauf und Einweisung",
    body: "Im Hafen wird mit Schrittgeschwindigkeit gefahren. Wer in den Südhafen einläuft, wird von einem Mitglied eingewiesen, weil im Hafenbecken Trümmer eines früheren U-Boot-Bunkers liegen.",
  },
  {
    title: "Liegeplatz",
    body: "Der Hafenmeister im Nordosthafen weist den Liegeplatz zu. Im Südhafen erfolgt die Zuweisung im Rahmen der vorab abgestimmten Anfahrt. Päckchenliegen ist nicht vorgesehen, jeder Gastlieger hat seinen eigenen Platz.",
  },
  {
    title: "Anmeldung beim Hafenmeister",
    body: "Direkt nach dem Festmachen meldet sich jeder Gastlieger beim Hafenmeister an. Dort werden Liegegebühren, Servicepauschale und Kurtaxe abgewickelt.",
  },
];

const RULES = [
  "Schrittgeschwindigkeit im Hafen, Sog und Wellenschlag vermeiden.",
  "Rücksicht auf andere Wassersportler, Berufsschifffahrt, Schwimmer und Personen auf den Stegen.",
  "Nachtruhe wahren, Lärm und Musik in Maßen.",
  "Tiere im Hafenbereich und auf den Stegen anleinen.",
  "Beim Betanken nicht rauchen, Zündquellen abschalten.",
  "Keine Benutzung von Bordtoiletten ohne Schwarzwassertank im Hafen.",
  "Leinen und Kabel sauber verlegen, Stege als Rettungswege freihalten.",
  "Müll in die vorgesehenen Behälter, Sonderabfälle an die jeweilige Sammelstelle.",
];

const GEBUEHREN_NORDOST = [
  { label: "Liegegebühr", value: "2,00 €", unit: "pro Meter Bootslänge und Nacht" },
  { label: "Servicepauschale", value: "2,00 €", unit: "pro Tag und Person" },
  { label: "Kurtaxe", value: "2,75 €", unit: "pro Person und Nacht" },
];

export default function GastliegerPage() {
  return (
    <>
      <PageHero
        title={<>Informationen für <span style={{ fontWeight: 600 }}>Gastlieger.</span></>}
        lead="Helgoland betreibt keine Marina. Der Wassersportclub Helgoland gibt freie Plätze seiner Mitglieder an Gastsegler frei, vornehmlich an befreundete Vereine und Gäste vom Festland."
      image="/img/wsch_liegeplatzueberblick.jpg"
        alt="WSCH Liegeplätze mit Insel"
      />

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Anlauf in <span className="font-bold">vier Schritten.</span>
              </h2>
              <p className="body-copy mt-5">
                So läuft der Anlauf in der Regel ab. Bei Fragen melden Sie sich vor der Überfahrt einmal kurz bei uns.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} variant="cinematic" delay={i * 0.05}>
                <div className="border-t border-border-subtle pt-8">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[28px] tracking-tightish">{s.title}</h3>
                  <p className="body-copy mt-4 max-w-xl">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="cinematic">
            <div>
              <h2
                className="m-0 text-text-primary font-light"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.08, letterSpacing: "-.02em" }}
              >
                Hinweis zum <span className="font-bold">Südhafen.</span>
              </h2>
              <p className="body-copy mt-6 max-w-prose">
                Im östlichen Bereich der Steganlage stand bis 1945 der größte deutsche U-Boot-Bunker der Nordsee. Nach der
                Sprengung der Insel 1947 sind Reste des Bunkers im Hafenbecken liegengeblieben. Bei Niedrigwasser werden
                Steine und Beton sichtbar.
              </p>
              <p className="body-copy mt-4 max-w-prose">
                Wer im Südhafen festmachen möchte, stimmt das vorab mit dem Verein ab und wird von einem Mitglied eingewiesen.
                Befahren erfolgt auf eigene Gefahr.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-soft">
              <Image src="/img/wsch_untiefe2.jpg" alt="Steine im Südhafen bei Niedrigwasser" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal variant="cinematic">
            <div className="lg:sticky lg:top-32">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Süd- und <span className="font-bold">Nordosthafen.</span>
              </h2>
              <p className="body-copy mt-5">
                Beide Häfen werden vom Verein betreut, beide laufen unterschiedlich.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal variant="cinematic">
              <div className="rounded bg-accent-warm/10 border border-accent-warm/30 p-7 md:p-8">
                <div className="text-accent-warm text-[11px] tracking-eyebrowWide uppercase">Wichtig: Südhafen</div>
                <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[28px] tracking-tightish">Nur nach vorheriger Absprache mit dem Vorstand.</h3>
                <p className="body-copy mt-4 max-w-xl">
                  Wer in den Südhafen will, schreibt vor der Abfahrt eine kurze E-Mail. Ohne diese Vorabsprache ist ein Anlauf
                  nicht möglich.
                </p>
                <a
                  href="mailto:kontakt@wsc-helgoland.de"
                  className="inline-flex items-center gap-3 mt-6 px-6 py-3 text-[14px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
                >
                  <span>Vorab schreiben</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal variant="cinematic" delay={0.1}>
              <div className="rounded bg-bg-panel border border-border-subtle p-7 md:p-8 shadow-soft">
                <div className="text-accent-tide text-[11px] tracking-eyebrowWide uppercase">Nordosthafen</div>
                <h3 className="mt-3 text-text-primary font-semibold text-[24px] md:text-[28px] tracking-tightish">Hafenmeister vor Ort.</h3>
                <p className="body-copy mt-4 max-w-xl">
                  Im Nordosthafen vergibt der Hafenmeister freie Liegeplätze direkt vor Ort. Eine Voranmeldung ist nicht nötig.
                  Bei Fragen vor der Abfahrt erreichen Sie ihn telefonisch.
                </p>
                <div className="mt-6 grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[15px]">
                  <div className="text-text-dim">Hafenwart</div>
                  <a href="tel:+4901707845480" className="text-text-primary font-semibold tracking-tightish hover:text-accent-tide transition-colors">
                    0170 7845480
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto">
          <Reveal variant="cinematic">
            <div className="max-w-3xl">
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.8vw, 50px)", lineHeight: 1.08, letterSpacing: "-.02em" }}>
                Gebühren <span className="font-bold">Nordosthafen.</span>
              </h2>
              <p className="body-copy mt-5">
                Die Gebühren werden direkt beim Hafenmeister abgerechnet. Servicepauschale beinhaltet die Nutzung der
                Sanitäranlagen, Strom und Müllentsorgung. Kinder bis zwölf Jahre sind von der Servicepauschale befreit.
              </p>
            </div>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div className="mt-12 grid gap-4 md:gap-5 sm:grid-cols-3">
              {GEBUEHREN_NORDOST.map((g) => (
                <div key={g.label} className="rounded bg-bg-panel border border-border-subtle p-7 md:p-8 shadow-soft">
                  <div className="text-text-dim text-[11px] tracking-eyebrowWide uppercase">{g.label}</div>
                  <div
                    className="mt-4 text-text-primary font-light tracking-tightish"
                    style={{ fontSize: "clamp(34px, 3.6vw, 48px)", lineHeight: 1, letterSpacing: "-.02em" }}
                  >
                    {g.value}
                  </div>
                  <div className="mt-3 text-[13px] text-text-body leading-relaxed">{g.unit}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-primary px-6 md:px-14 py-20 md:py-[140px]">
        <div className="max-w-container mx-auto grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal variant="cinematic">
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Strom und <span className="font-bold">Wasser.</span>
              </h2>
              <div className="mt-8 space-y-7">
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Südhafen</div>
                  <p className="body-copy mt-2">
                    An der Steganlage befinden sich Stromsäulen mit Münzeinwurf. Eine Einheit kostet 1,00 €.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Nordosthafen</div>
                  <p className="body-copy mt-2">
                    Es gibt wenige Stromanschlüsse. Die Stromkosten sind in der Servicepauschale enthalten, kein Münzeinwurf.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Trinkwasser</div>
                  <p className="body-copy mt-2">
                    An den Stegen ist kein Trinkwasser verfügbar.
                  </p>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <div className="text-text-dim text-[12px] tracking-eyebrowWide uppercase">Diesel</div>
                  <p className="body-copy mt-2">
                    Bunkerstation Jörn Rickmers im Binnenhafen, vor den Hummerbuden.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
                Was im Hafen <span className="font-bold">gilt.</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {RULES.map((r) => (
                  <li key={r} className="flex gap-4 text-text-body text-[15px]">
                    <span className="mt-[2px] text-accent-tide font-semibold flex-shrink-0 w-5 text-center" aria-hidden>×</span>
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[14px] text-text-dim leading-relaxed">
                Die vollständigen Regeln stehen in der Hafenordnung des Vereins.
              </p>
              <Link
                href="/hafenordnung"
                className="inline-flex items-center gap-3 mt-5 px-6 py-3 text-[14px] font-bold rounded-full border border-border-strong text-text-primary hover:border-text-primary hover:translate-x-1 transition-all duration-300 group"
              >
                <span>Zur Hafenordnung</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-surface px-6 md:px-14 py-20 md:py-[120px]">
        <div className="max-w-container mx-auto grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal variant="cinematic">
            <h2 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-.02em" }}>
              Fragen <span className="font-bold">vor der Anreise?</span>
            </h2>
          </Reveal>
          <Reveal variant="cinematic" delay={0.1}>
            <div>
              <p className="body-copy max-w-prose">
                Eine kurze E-Mail genügt. Bei Anlauf in den Südhafen ist die Vorabsprache verpflichtend, im Nordosthafen
                hilft sie, freie Plätze einschätzen zu können.
              </p>
              <a
                href="mailto:kontakt@wsc-helgoland.de"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 text-[15px] font-bold rounded-full bg-text-primary text-white hover:bg-accent-deep hover:translate-x-1 transition-all duration-300 group"
              >
                <span>kontakt@wsc-helgoland.de</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoCredit />
    </>
  );
}
