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
              1. Vorsitzender: Kay Martens<br />
              2. Vorsitzender: Dieter Klings
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Registereintrag</h2>
            <p className="mt-2">
              Eintragung im Vereinsregister.<br />
              Registergericht: {club.register.court}<br />
              Registernummer: {club.register.number}
            </p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Steuernummer</h2>
            <p className="mt-2">{club.taxNumber}</p>
          </div>

          <div>
            <h2 className="text-xl text-brand-deep">Kontakt</h2>
            <p className="mt-2">
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

          <p className="text-xs text-brand-stone/60">
            Hinweis: Vor Live-Schaltung bitte vom Vorstand prüfen lassen.
          </p>
        </div>
      </div>
    </section>
  );
}
