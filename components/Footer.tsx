import Image from "next/image";
import Link from "next/link";
import { navGroups, club } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-deep/10 bg-brand-deep text-brand-sand">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
              <Image src="/img/wsch_logo.png" alt="WSCH Stander" width={48} height={48} className="h-11 w-11 object-contain" />
            </span>
            <div className="font-display text-2xl">{club.shortName}</div>
          </div>
          <p className="mt-4 text-sm text-brand-sand/70 max-w-prose">
            {club.tagline}
          </p>
          <div className="mt-6 text-sm text-brand-sand/70">
            <div>{club.name}</div>
            <div>{club.address.street}</div>
            <div>{club.address.zip} {club.address.city}</div>
            <div className="mt-3">
              <a href={`mailto:${club.email}`} className="hover:text-brand-sand">{club.email}</a>
            </div>
          </div>
        </div>

        {navGroups.map((group) => (
          <div key={group.label}>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-sand/50">{group.label}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-sand/85 hover:text-brand-sand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-sand/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-brand-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {club.name}. Alle Rechte vorbehalten.</div>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-brand-sand">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-brand-sand">Datenschutz</Link>
            <Link href="/kontakt" className="hover:text-brand-sand">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
