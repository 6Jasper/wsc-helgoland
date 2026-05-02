"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Häfen", href: "/haefen" },
  { label: "Gastlieger", href: "/gastlieger" },
  { label: "Mitgliedschaft", href: "/mitgliedschaft" },
  { label: "Regatten", href: "/regatten" },
  { label: "Clubhaus", href: "/clubhaus" },
  { label: "Vorstand", href: "/vorstand" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition duration-300 ${
        scrolled ? "border-border-subtle bg-bg-primary/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="px-6 md:px-14">
        <div className="mx-auto max-w-[1280px] flex items-center justify-between h-[72px] md:h-[88px]">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-80" aria-label="WSC Helgoland · Startseite">
            <span className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-white/95 overflow-hidden">
              <Image src="/img/wsch_logo.png" alt="" width={44} height={44} className="h-9 w-9 md:h-10 md:w-10 object-contain" priority />
            </span>
            <span className="hidden sm:block leading-tight">
              <span className="block text-sm md:text-[15px] font-semibold text-white tracking-tightish">WSC Helgoland</span>
              <span className="block text-[10px] md:text-[11px] tracking-eyebrowWide uppercase text-text-dim">e.V. · seit 1965</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
                  isActive(item.href) ? "text-text-primary" : "text-text-dim hover:text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden flex flex-col gap-[5px] p-2 cursor-pointer rounded transition-opacity hover:opacity-80"
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-px w-6 bg-text-primary transition-transform ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-px w-6 bg-text-primary transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="xl:hidden border-t border-border-subtle bg-bg-primary/95 backdrop-blur-md">
          <div className="px-6 md:px-14">
            <div className="mx-auto max-w-[1280px] py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[22px] font-medium transition-colors ${
                    isActive(item.href) ? "text-text-primary" : "text-text-dim hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
