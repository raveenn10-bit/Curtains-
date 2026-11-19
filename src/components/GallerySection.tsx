"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/products";

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length));
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) =>
          i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
              Interior Inspiration Gallery
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-charcoal mt-2">
              Spaces Transformed by Drapery
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/70 max-w-md">
            These curated visuals represent custom design inspiration rather than verified photographs of completed client installations.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="group relative block w-full break-inside-avoid rounded-2xl overflow-hidden bg-beige border border-champagne/25 shadow-sm hover:shadow-md transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={675}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity"
                aria-hidden="true"
              />
              <span className="absolute top-3 left-3 rounded-full bg-ivory/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-plum">
                {item.category} · Design Inspiration
              </span>
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="font-serif text-xl font-semibold text-ivory">
                  {item.title}
                </h3>
                <p className="text-xs text-beige/90 mt-1">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const diff = e.changedTouches[0].clientX - touchStartX;
              if (Math.abs(diff) > 45) {
                setSelectedIndex((i) =>
                  i === null
                    ? null
                    : diff < 0
                    ? (i + 1) % GALLERY_ITEMS.length
                    : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                );
              }
              setTouchStartX(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image lightbox"
          >
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-ivory/15 hover:bg-magenta text-ivory flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Previous gallery image"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                );
              }}
              className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-ivory/15 hover:bg-magenta text-ivory flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal">
                <Image
                  src={GALLERY_ITEMS[selectedIndex].image}
                  alt={GALLERY_ITEMS[selectedIndex].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center text-ivory">
                <p className="font-serif text-xl font-semibold">
                  {GALLERY_ITEMS[selectedIndex].title}
                </p>
                <p className="text-sm text-beige/85 mt-1">
                  {GALLERY_ITEMS[selectedIndex].caption} (Design Inspiration)
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next gallery image"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % GALLERY_ITEMS.length);
              }}
              className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-ivory/15 hover:bg-magenta text-ivory flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
