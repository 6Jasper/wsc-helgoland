import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Die zwei Häfen" };

const haefen = [
  {
    name: "Südhafen",
    role: "Sportboothafen, Heimat des WSC",
    image: "https://picsum.photos/seed/wsc-suedhafen/1600/1200",
    alt: "Südhafen Helgoland mit Sportbooten",
    facts: [
      ["Tiefe", "ca. 3,5 m bei MTNW"],
      ["Liegeplätze", "ca. 250 inkl. Gastlieger"],
      ["Zugang", "tideunabhängig"],
      ["Strom & Wasser", "an allen Stegen"],
    ],
    body:
      "Der Südhafen ist die Adresse für Segler. Hier befindet sich das Clubhaus, hier liegen die Mitglieder, hier laufen Gastlieger an. Die Stege sind nach Schiffsgrößen geordnet, Hafenmeister weisen Plätze zu. Strömung im Hafen ist gering, der Zugang über die Hafeneinfahrt ist auch bei Wind aus West gut zu nehmen.",
  },
  {
    name: "Binnenhafen",
    role: "Geschützter Hafen für Berufs- und Sportschifffahrt",
    image: "https://picsum.photos/seed/wsc-binnenhafen/1600/1200",
    alt: "Binnenhafen Helgoland von oben",
    facts: [
      ["Tiefe", "ca. 4,0 m bei MTNW"],
      ["Liegeplätze", "begrenzt, nach Anfrage"],
      ["Zugang", "tideunabhängig"],
      ["Charakter", "ruhig, geschützt"],
    ],
    body:
      "Der Binnenhafen liegt nördlich des Südhafens und ist auch bei stärkerer See gut geschützt. Sportboote liegen hier nur in begrenzter Zahl und nach Absprache mit dem Hafenmeister. Wer länger bleibt, einen Mast gelegt hat oder besonderen Schutz sucht, ist hier richtig.",
  },
];

export default function HaefenPage() {
  return (
    <>
      <PageHero
        title="Zwei Häfen, eine Insel."
        lead="Helgoland verfügt über zwei Häfen, die unterschiedlich genutzt werden. Der WSC betreut beide aus Sportbootperspektive."
        image="https://picsum.photos/seed/wsc-haefen-hero/2000/1100"
        alt="Helgoland von der Seeseite"
      />

      <section className="section">
        <div className="container-x flex flex-col gap-20">
          {haefen.map((h, i) => (
            <div key={h.name} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={h.image} alt={h.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <span className="pill">{h.role}</span>
                <h2 className="mt-4 text-3xl sm:text-4xl">{h.name}</h2>
                <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-stone/80">{h.body}</p>
                <dl className="mt-7 grid grid-cols-2 gap-3 text-sm">
                  {h.facts.map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-brand-deep/10 bg-white/70 p-4">
                      <dt className="text-xs uppercase tracking-[0.18em] text-brand-deep/60">{k}</dt>
                      <dd className="mt-1 text-brand-deep">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-x">
          <span className="pill">Hinweis</span>
          <h2 className="mt-4 max-w-3xl text-3xl">Tide, Wind, Sicht. Was du vor dem Anlauf wissen solltest.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg">Tide</h3>
              <p className="mt-2 text-sm text-brand-stone/75">Beide Häfen sind tideunabhängig erreichbar. Außerhalb des Hafens gelten Strömungen bis 2 kn, vor allem westlich der Insel.</p>
            </div>
            <div className="card">
              <h3 className="text-lg">Wind</h3>
              <p className="mt-2 text-sm text-brand-stone/75">Bei Starkwind aus Nord bis Nordwest steht Schwell auf der Hafeneinfahrt. Bei Wind aus Süd ist der Anlauf entspannter.</p>
            </div>
            <div className="card">
              <h3 className="text-lg">Anmeldung</h3>
              <p className="mt-2 text-sm text-brand-stone/75">UKW Kanal 11. Hafenmeister gibt Liegeplatz-Anweisung. In Spitzenzeiten Päckchenbildung üblich.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
