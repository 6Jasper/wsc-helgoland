import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Satzung" };

const paragraphen = [
  {
    no: "§ 1",
    title: "Name, Sitz, Geschäftsjahr",
    body: [
      "Der Verein führt den Namen Wassersportclub Helgoland e.V.",
      "Er hat seinen Sitz in 27498 Helgoland und ist im Vereinsregister beim Amtsgericht Pinneberg eingetragen.",
      "Das Geschäftsjahr ist das Kalenderjahr.",
    ],
  },
  {
    no: "§ 2",
    title: "Zweck des Vereins",
    body: [
      "Zweck des Vereins ist die Förderung des Wassersports, insbesondere des Segelsports, sowie die Pflege seemännischer Fertigkeiten und Traditionen.",
      "Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts \"Steuerbegünstigte Zwecke\" der Abgabenordnung.",
      "Mittel des Vereins dürfen nur für satzungsmäßige Zwecke verwendet werden.",
    ],
  },
  {
    no: "§ 3",
    title: "Mitgliedschaft",
    body: [
      "Mitglied kann jede natürliche Person werden, die sich zu den Zielen des Vereins bekennt.",
      "Über die Aufnahme entscheidet der Vorstand auf schriftlichen Antrag.",
      "Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod.",
    ],
  },
  {
    no: "§ 4",
    title: "Beiträge und Arbeitsdienst",
    body: [
      "Mitglieder zahlen einen Jahresbeitrag, dessen Höhe die Mitgliederversammlung beschließt.",
      "Aktive Mitglieder leisten Arbeitsdienst nach der Arbeitsdienstordnung.",
      "Eine Ablöse durch Geldleistung ist möglich.",
    ],
  },
  {
    no: "§ 5",
    title: "Organe des Vereins",
    body: [
      "Organe des Vereins sind der Vorstand und die Mitgliederversammlung.",
      "Der Vorstand besteht aus dem 1. Vorsitzenden, dem 2. Vorsitzenden, dem Kassenwart, dem Schriftführer, dem Hafenwart und dem Jugendwart.",
      "Die Amtszeit beträgt zwei Jahre.",
    ],
  },
  {
    no: "§ 6",
    title: "Mitgliederversammlung",
    body: [
      "Die ordentliche Mitgliederversammlung findet jährlich im April statt.",
      "Außerordentliche Versammlungen sind einzuberufen, wenn das Vereinsinteresse es erfordert oder ein Drittel der Mitglieder es schriftlich verlangt.",
      "Beschlüsse werden mit einfacher Mehrheit gefasst, sofern die Satzung nichts anderes bestimmt.",
    ],
  },
  {
    no: "§ 7",
    title: "Auflösung",
    body: [
      "Die Auflösung des Vereins kann nur durch eine eigens einberufene Mitgliederversammlung mit Dreiviertelmehrheit beschlossen werden.",
      "Bei Auflösung fällt das Vermögen an die Gemeinde Helgoland zur ausschließlichen und unmittelbaren Verwendung für gemeinnützige Zwecke.",
    ],
  },
];

export default function SatzungPage() {
  return (
    <>
      <PageHero
        title="Satzung."
        lead="Rechtsgrundlage des WSC Helgoland e.V. Letzte Fassung beschlossen durch die Mitgliederversammlung."
        image="https://picsum.photos/seed/wsc-satzung-hero/2000/1100"
        alt="Aufgeschlagenes Buch auf Holztisch"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-brand-deep p-6 text-brand-sand">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/60">Inhaltsverzeichnis</div>
              <ul className="mt-4 space-y-2 text-sm">
                {paragraphen.map((p) => (
                  <li key={p.no}>
                    <a href={`#${p.no.replace(/\s|§/g, "")}`} className="text-brand-sand/85 hover:text-brand-sand">
                      {p.no} {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card mt-4">
              <div className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">PDF</div>
              <p className="mt-2 text-sm text-brand-stone/75">Vollständige Fassung der Satzung als PDF auf Anfrage über die Geschäftsstelle.</p>
              <Link href="/kontakt" className="mt-3 inline-block text-sm font-medium text-brand-sea">Anfragen →</Link>
            </div>
          </aside>

          <div className="space-y-12">
            {paragraphen.map((p) => (
              <article key={p.no} id={p.no.replace(/\s|§/g, "")} className="scroll-mt-28">
                <div className="text-xs uppercase tracking-[0.2em] text-brand-deep/60">{p.no}</div>
                <h2 className="mt-1 text-2xl sm:text-3xl">{p.title}</h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-brand-stone/80">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
            <p className="text-xs text-brand-stone/60">
              Hinweis: Diese Darstellung ist eine gekürzte, repräsentative Fassung. Verbindlich ist die im Vereinsregister hinterlegte Satzung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
