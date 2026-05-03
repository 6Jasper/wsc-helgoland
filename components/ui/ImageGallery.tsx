"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const SOFT_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
  className?: string;
  itemClassName?: string;
};

export function ImageGallery({ images, className, itemClassName }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className={className ?? "grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={img.alt || "Bild öffnen"}
            className={`group relative overflow-hidden rounded shadow-soft cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-tide focus-visible:ring-offset-2 ${
              itemClassName ?? "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: SOFT_EASE }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Schließen"
              className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full border border-white/30 text-white text-[20px] flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors z-10"
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Vorheriges Bild"
                  className="hidden md:flex absolute left-5 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white items-center justify-center hover:border-white hover:bg-white/10 transition-colors z-10"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Nächstes Bild"
                  className="hidden md:flex absolute right-5 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white items-center justify-center hover:border-white hover:bg-white/10 transition-colors z-10"
                >
                  <span aria-hidden>→</span>
                </button>
              </>
            )}

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: SOFT_EASE }}
              className="relative w-[94vw] h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain select-none"
                priority
              />
            </motion.div>

            {images.length > 1 && (
              <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[12px] tracking-eyebrowWide uppercase z-10">
                {openIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
