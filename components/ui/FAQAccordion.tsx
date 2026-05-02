"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SOFT_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left transition-colors hover:bg-text-primary/[0.02] -mx-2 px-2 md:px-3 rounded"
            >
              <span className="text-text-primary text-[18px] md:text-[20px] font-semibold leading-snug tracking-tightish">
                {item.q}
              </span>
              <span
                className={`mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border-strong text-text-primary text-[18px] leading-none transition-transform duration-300 ease-soft ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: SOFT_EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 md:pb-8 pr-12 max-w-2xl text-text-body text-[15px] md:text-[16px] leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
