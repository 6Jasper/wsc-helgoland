export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <section className="bg-bg-primary pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-14">
      <div className="max-w-3xl mx-auto">
        <h1 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
          Impressum.
        </h1>
        <div className="mt-12 space-y-10 text-text-body text-[15px] leading-relaxed">
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Anbieter</div>
            <p className="text-text-primary">
              Wassersportclub Helgoland e.V.<br />
              Postfach 1125<br />
              27498 Helgoland<br />
              Deutschland
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Vertretungsberechtigt</div>
            <p>
              1. Vorsitzender: Kay Martens<br />
              2. Vorsitzender: Dieter Klings
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Vereinsregister</div>
            <p>
              Amtsgericht Pinneberg<br />
              VR 591 PI
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Steuernummer</div>
            <p>18/291/72014</p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Kontakt</div>
            <p>
              <a href="mailto:kontakt@wsc-helgoland.de" className="text-text-primary hover:text-accent-tide transition-colors">
                kontakt@wsc-helgoland.de
              </a>
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Verantwortlich für den Inhalt</div>
            <p>Vorstand des Wassersportclubs Helgoland e.V., Anschrift wie oben.</p>
          </div>
          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Haftungshinweis</div>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den
              Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
