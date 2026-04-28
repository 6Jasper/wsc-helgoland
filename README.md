# Wassersportclub Helgoland — Website

Next.js 15 (App Router) + Tailwind CSS. Statische Website für den WSC Helgoland e.V., gehostet auf Vercel.

## Lokal starten

```bash
npm install
npm run dev
```

Server läuft auf [http://localhost:3000](http://localhost:3000).

## Struktur

```
app/
  layout.tsx          # Root-Layout mit Header/Footer
  page.tsx            # Startseite
  haefen/             # Die zwei Häfen
  gastlieger/         # Infos für Gastlieger
  mitgliedschaft/     # Mitgliedschaft + Beiträge
  nordseewoche/       # Regatta-Info
  clubhaus/           # Clubhaus-Beschreibung
  vorstand/           # Vorstand + Ansprechpartner
  regeln/             # Hafenregeln
  satzung/            # Satzung (gekürzt)
  arbeitsdienst/      # Arbeitsdienst-Ordnung
  kontakt/            # Kontakt + Anfahrt
  impressum/
  datenschutz/
components/
  Header.tsx          # Sticky Nav + Mobile-Menü
  Footer.tsx
  PageHero.tsx        # Hero für Sub-Pages
  InfoCard.tsx
lib/
  nav.ts              # Navigation, Vereinsdaten zentral
```

## Inhalte

Alle Texte, Beträge, Personennamen und Telefonnummern sind **Platzhalter** und müssen vom Verein vor Live-Schaltung geprüft werden. Insbesondere:

- Vorstandsnamen in `app/vorstand/page.tsx`
- Beiträge in `app/mitgliedschaft/page.tsx`
- Telefonnummern und E-Mail-Adressen in `lib/nav.ts`
- Satzungstext in `app/satzung/page.tsx` (verbindlich ist die im Vereinsregister hinterlegte Fassung)
- Impressum und Datenschutz

## Bilder

Aktuell Stock-Fotos von Unsplash (per Hotlink). Vor Produktivgang durch eigene Bilder ersetzen und in `public/` ablegen, dann `next.config.ts` aufräumen.

## Deploy auf Vercel

1. Repo auf GitHub anlegen und pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial WSC Helgoland Website"
   gh repo create wsc-helgoland --public --source=. --push
   ```
2. Auf [vercel.com](https://vercel.com) einloggen, Repo importieren.
3. Framework wird automatisch als Next.js erkannt — keine Anpassung nötig.
4. Erster Deploy läuft. Custom Domain (`wsc-helgoland.de`) im Vercel-Dashboard hinzufügen.

**Wichtig:** Falls nach Deploy alle URLs 404 zeigen aber Build "Ready" ist, prüfe `.vercel/project.json` auf `framework: null` und setze auf `nextjs`.

## Branding

Farbpalette in `tailwind.config.ts`:

- `brand-deep` (#0b2a4a) — Tiefseeblau, Hauptfarbe
- `brand-sea` (#10487a) — Sekundär
- `brand-tide` (#3a82b8) — Akzent hell
- `brand-sand` (#f4ede0) — Hintergrund warm
- `brand-cliff` (#c8412c) — Felsen-Rot (Helgoland-Klippe)
- `brand-stone` (#1a1d22) — Text

## Lizenz

Proprietär. Erstellt von Zehden Digital für WSC Helgoland e.V.
