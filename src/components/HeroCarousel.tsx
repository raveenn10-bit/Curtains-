"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Ruler, ShieldCheck } from "lucide-react";
import { HERO_SLIDES, buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[active];
  const prev = () => setActive((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setActive((p) => (p + 1) % HERO_SLIDES.length);

  return (
    <section id="home" className="relative bg-charcoal text-white overflow-hidden">
      <div className="relative min-h-[580px] sm:min-h-[560px] lg:min-h-[640px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0.25, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/35"
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:py-16 lg:py-20">
          <div className="max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-gold text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full">
              {slide.eyebrow}
            </span>
            <p className="font-sinhala text-base sm:text-lg text-white/85">{slide.sinhala}</p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base text-ivory/85 max-w-xl leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-plum hover:text-white transition-colors px-6 py-3.5 rounded-full text-sm font-semibold min-h-[48px]"
              >
                Explore collections <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Hello Madu Curtains! I would like a custom curtain quotation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal/80 backdrop-blur-md border border-white/30 hover:border-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors min-h-[48px]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Quote
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-xs text-ivory/80">
              <span className="inline-flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-gold" aria-hidden="true" />
                Made to your window size
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                Free quotation on WhatsApp
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-12 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={active === idx}
              className={`h-2 rounded-full transition-all ${
                active === idx ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
