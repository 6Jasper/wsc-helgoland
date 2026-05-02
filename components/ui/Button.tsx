import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const base =
    "inline-flex items-center gap-3 px-7 py-3 text-[15px] font-bold tracking-[0.01em] rounded-full transition-all duration-300 group cursor-pointer select-none active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-text-primary hover:translate-x-1"
      : "border border-border-strong text-text-primary hover:border-white hover:translate-x-1";

  const inner = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}
