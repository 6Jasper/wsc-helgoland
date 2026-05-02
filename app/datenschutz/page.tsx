export const metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <section className="bg-bg-primary pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-14">
      <div className="max-w-3xl mx-auto">
        <h1 className="m-0 text-text-primary font-light" style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
          Datenschutz.
        </h1>
        <div className="mt-12 space-y-10 text-text-body text-[15px] leading-relaxed">
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Im Folgenden informieren wir Sie über Art, Umfang und Zweck
            der Verarbeitung personenbezogener Daten auf dieser Website.
          </p>

          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Verantwortlicher</div>
            <p className="text-text-primary">
              Wassersportclub Helgoland e.V.<br />
              Postfach 1125, 27498 Helgoland<br />
              <a href="mailto:kontakt@wsc-helgoland.de" className="hover:text-accent-tide transition-colors">kontakt@wsc-helgoland.de</a>
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Server-Logs</div>
            <p>
              Beim Besuch dieser Website werden technisch notwendige Daten verarbeitet (IP-Adresse, Datum und Uhrzeit, aufgerufene
              Seite, Browsertyp). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Diese Daten werden nach 14 Tagen gelöscht.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Kontaktaufnahme</div>
            <p>
              Bei einer Kontaktaufnahme per E-Mail werden die mitgeteilten Daten ausschließlich zur Bearbeitung Ihrer Anfrage
              verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Karten-Einbindung</div>
            <p>
              Auf der Kontaktseite binden wir eine Karte von OpenStreetMap ein. Beim Aufruf kann eine Verbindung zu Servern der
              OpenStreetMap Foundation aufgebaut werden.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-3">Ihre Rechte</div>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
            </p>
          </div>

          <p className="text-xs text-text-dim">
            Hinweis: Dieser Text ist eine Arbeitsfassung. Vor Live-Schaltung ist eine anwaltliche Prüfung empfohlen.
          </p>
        </div>
      </div>
    </section>
  );
}
