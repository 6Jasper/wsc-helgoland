"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { flatNav, club } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-deep/10 bg-brand-sand/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm overflow-hidden">
            <Image
              src="/img/wsch_logo.png"
              alt="WSCH Stander"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </span>
          <div className="leading-tight">
            <div className="font-display text-base text-brand-deep">{club.longShortName}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand-deep/60">e.V. seit {club.founded}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {flatNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-deep/80 transition hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary">
            Anfahrt & Kontakt
          </Link>
        </nav>

        <button
          aria-label="Menü"
          aria-expanded={open}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-deep/20 text-brand-deep"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-3 h-0.5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-deep/10 bg-brand-sand">
          <div className="container-x flex flex-col gap-1 py-4">
            {flatNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-brand-deep/80 hover:bg-white/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/kontakt" className="btn-primary mt-2 self-start" onClick={() => setOpen(false)}>
              Anfahrt & Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
