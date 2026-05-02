import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle">
      <div className="px-6 md:px-14 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
            <div className="sm:col-span-2 md:col-span-5">
              <div className="flex items-center gap-4">
                <Image src="/img/wsch_logo.png" alt="WSC Helgoland Stander" width={72} height={72} className="h-16 w-auto object-contain" />
                <div>
                  <div className="text-xl font-semibold tracking-tightish text-text-primary">Wassersportclub Helgoland e.V.</div>
                  <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mt-1">gegründet 1965</div>
                </div>
              </div>
              <p className="mt-6 body-copy max-w-md">
                Der Wassersportclub Helgoland e.V. ist ein Segel- und Motorbootverein. Wir betreiben Vereinsanlagen im Süd- und
                Nordosthafen, richten die Helgoländer Herbstregatta aus und sind Mitveranstalter der Nordseewoche.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Verein</div>
              <ul className="space-y-3">
                <li><Link href="/vorstand" className="text-text-body hover:text-text-primary transition-colors">Vorstand</Link></li>
                <li><Link href="/satzung" className="text-text-body hover:text-text-primary transition-colors">Satzung</Link></li>
                <li><Link href="/mitgliedschaft" className="text-text-body hover:text-text-primary transition-colors">Mitgliedschaft</Link></li>
                <li><Link href="/arbeitsdienst" className="text-text-body hover:text-text-primary transition-colors">Arbeitsdienst</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Hafen</div>
              <ul className="space-y-3">
                <li><Link href="/haefen" className="text-text-body hover:text-text-primary transition-colors">Häfen</Link></li>
                <li><Link href="/gastlieger" className="text-text-body hover:text-text-primary transition-colors">Gastlieger</Link></li>
                <li><Link href="/regeln" className="text-text-body hover:text-text-primary transition-colors">Hafenregeln</Link></li>
                <li><Link href="/clubhaus" className="text-text-body hover:text-text-primary transition-colors">Clubhaus</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="text-[11px] tracking-eyebrowWide uppercase text-text-dim mb-5">Kontakt</div>
              <ul className="space-y-3 text-text-body">
                <li>Postfach 1125</li>
                <li>27498 Helgoland</li>
                <li className="pt-2"><a href="mailto:kontakt@wsc-helgoland.de" className="hover:text-accent-tide transition-colors">kontakt@wsc-helgoland.de</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 md:mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row md:items-start md:justify-between gap-5 text-xs text-text-dim">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>© {new Date().getFullYear()} Wassersportclub Helgoland e.V.</span>
              <Link href="/impressum" className="hover:text-text-primary transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-text-primary transition-colors">Datenschutz</Link>
              <Link href="/kontakt" className="hover:text-text-primary transition-colors">Kontakt</Link>
            </div>
            <div className="max-w-xl">
              Vereinsregister Amtsgericht Pinneberg VR 591 PI · Steuernummer 18/291/72014
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
