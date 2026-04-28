import { club } from "@/lib/nav";

export const metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="text-4xl">Datenschutzerklärung</h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-stone/80">
          <p>
            Der Schutz personenbezogener Daten ist uns wichtig. Im Folgenden informieren wir
            über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser
            Website.
          </p>

          <div>
            <h2 className="text-xl text-brand-deep">Verantwortlicher</h2>
            <p className="mt-2">
              {club.name}<br />
              {club.address.street}, {club.address.zip} {club.address.city}<br />
              E-Mail: <a href={`mailto:${club.email}`} className="underline">{club.email}</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Server-Logs</h2>
            <p className="mt-2">
              Beim Besuch dieser Website werden technisch notwendige Daten verarbeitet (IP-Adresse,
              Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO. Diese Daten werden nach 14 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Kontaktaufnahme</h2>
            <p className="mt-2">
              Bei Kontaktaufnahme per E-Mail oder Telefon werden die mitgeteilten Daten
              ausschließlich zur Bearbeitung der Anfrage verwendet. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b und f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Karten-Einbindung</h2>
            <p className="mt-2">
              Auf der Kontaktseite binden wir eine Karte von OpenStreetMap ein. Beim Aufruf
              kann eine Verbindung zu Servern der OpenStreetMap Foundation aufgebaut werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Bilder</h2>
            <p className="mt-2">
              Diese Website verwendet vorübergehend Bilder von Unsplash (Unsplash Inc., USA).
              Beim Laden kann eine Verbindung zu deren Servern aufgebaut werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Anfragen richten Sie bitte an
              die oben genannte Kontaktadresse.
            </p>
          </div>

          <p className="text-xs text-brand-stone/60">Hinweis: Dies ist ein Platzhalter-Datenschutztext für die Entwicklungsphase. Vor Live-Schaltung anwaltlich prüfen lassen.</p>
        </div>
      </div>
    </section>
  );
}
