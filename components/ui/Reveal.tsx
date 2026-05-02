"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "default" | "cinematic" | "soft";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  variant?: Variant;
  amount?: number;
};

const SOFT_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VARIANT_DURATION: Record<Variant, number> = {
  default: 0.8,
  soft: 1.2,
  cinematic: 1.6,
};

export function Reveal({
  children,
  delay = 0,
  className,
  y,
  variant = "default",
  amount = 0.1,
}: Props) {
  const resolvedY = y ?? (variant === "cinematic" ? 18 : 24);
  const duration = VARIANT_DURATION[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: resolvedY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: SOFT_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
