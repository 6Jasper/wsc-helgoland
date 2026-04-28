import { club } from "@/lib/nav";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="text-4xl">Impressum</h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-stone/80">
          <div>
            <h2 className="text-xl text-brand-deep">Anbieter</h2>
            <p className="mt-2">
              {club.name}<br />
              {club.address.street}<br />
              {club.address.zip} {club.address.city}<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Vertretungsberechtigt</h2>
            <p className="mt-2">
              1. Vorsitzender: Dr. Jens Hartmann<br />
              2. Vorsitzende: Maren Tietjen
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Registereintrag</h2>
            <p className="mt-2">
              Eintragung im Vereinsregister.<br />
              Registergericht: Amtsgericht Pinneberg<br />
              Registernummer: VR 0000 (Platzhalter)
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Kontakt</h2>
            <p className="mt-2">
              Telefon: <a href={`tel:${club.phone.replace(/\s+/g, "")}`} className="underline">{club.phone}</a><br />
              E-Mail: <a href={`mailto:${club.email}`} className="underline">{club.email}</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Verantwortlich für den Inhalt</h2>
            <p className="mt-2">
              Vorstand des {club.name}, Anschrift wie oben.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Haftungshinweis</h2>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>

          <p className="text-xs text-brand-stone/60">Hinweis: Dies ist ein Platzhalter-Impressum für die Entwicklungsphase. Vor Live-Schaltung von der Geschäftsstelle prüfen lassen.</p>
        </div>
      </div>
    </section>
  );
}
