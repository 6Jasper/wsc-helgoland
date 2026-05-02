"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SOFT_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type Props = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  image: string;
  alt: string;
  height?: "full" | "hero" | "medium";
};

export function PageHero({ title, lead, image, alt, height = "hero" }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 250);
    const t2 = setTimeout(() => setPhase(2), 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const heightClass =
    height === "full"
      ? "min-h-[600px] md:min-h-[720px]"
      : height === "hero"
      ? "min-h-[520px] md:min-h-[640px]"
      : "min-h-[420px] md:min-h-[520px]";
  const heightStyle = height === "full" ? { height: "100vh" } : undefined;

  return (
    <section className={`relative w-full overflow-hidden bg-bg-primary ${heightClass}`} style={heightStyle}>
      <div
        className="absolute inset-0"
        style={{
          transform: phase >= 1 ? "scale(1.0)" : "scale(1.045)",
          transition: `transform 9s ${SOFT_EASE}`,
          willChange: "transform",
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(.55) contrast(1.06)" }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,.78) 100%)",
        }}
      />

      <div className="absolute z-[4] left-6 right-6 bottom-12 md:left-14 md:right-14 md:bottom-20">
        <h1
          className="m-0 text-white"
          style={{
            fontWeight: 300,
            fontSize: "clamp(40px, 6.4vw, 96px)",
            lineHeight: 1.02,
            letterSpacing: "-.025em",
            maxWidth: "18ch",
            textWrap: "pretty",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(18px)",
            transition: `opacity 1.4s ${SOFT_EASE}, transform 1.4s ${SOFT_EASE}`,
          }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="text-white/[.78] text-[15px] md:text-[18px]"
            style={{
              margin: 0,
              marginTop: "clamp(18px, 2.6vw, 28px)",
              fontWeight: 400,
              lineHeight: 1.55,
              maxWidth: 640,
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 1.2s ${SOFT_EASE}, transform 1.2s ${SOFT_EASE}`,
            }}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
