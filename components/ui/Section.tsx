import { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "black";
};

const VARIANT_BG: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-bg-primary",
  surface: "bg-bg-surface",
  black: "bg-bg-black",
};

export function Section({ id, children, className = "", variant = "default" }: Props) {
  return (
    <section id={id} className={`${VARIANT_BG[variant]} section-rhythm ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
