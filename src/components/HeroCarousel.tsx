"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/products";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[active];

  return (
    <section
      id="home"
      className="relative pt-[7.25rem] min-h-[640px] lg:min-h-[780px] flex items-end lg:items-center overflow-hidden bg-beige"
    >
      {/* Background slides — bright, unobstructed curtain photography with subtle left scrim for WCAG readability */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[7000ms] ease-out scale-[1.03]"
            />
          </div>
        ))}
        {/* Light-preserving editorial scrim on left & bottom only */}
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-ivory/95 via-ivory/75 to-transparent lg:w-3/4"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 z-20 bg-gradient-to-t from-ivory/85 to-transparent lg:hidden"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div ref={contentRef} className="max-w-xl">
          <p className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-plum mb-4">
            <span className="hidden sm:block h-px w-10 bg-plum/60" aria-hidden="true" />
            {current.eyebrow}
          </p>
          <p className="font-sinhala text-base sm:text-lg text-plum/90 mb-2">
            {current.sinhala}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-semibold text-charcoal leading-[1.04]">
            {current.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-lg">
            {current.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-[2px] bg-charcoal hover:bg-plum text-ivory px-7 py-3.5 text-sm font-semibold transition-all shadow-sm min-h-[44px]"
            >
              <span>Explore collections</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#customizer"
              className="inline-flex items-center gap-2 rounded-[2px] bg-ivory/95 hover:bg-beige text-charcoal border border-charcoal/25 px-7 py-3.5 text-sm font-semibold transition-all min-h-[44px]"
            >
              <span>Request a quote</span>
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-charcoal/75">
            <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-plum" aria-hidden="true" />Custom sizes</li>
            <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-plum" aria-hidden="true" />Free WhatsApp quote</li>
            <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-plum" aria-hidden="true" />20+ designs</li>
          </ul>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous hero slide"
                onClick={() =>
                  setActive((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                }
                className="w-11 h-11 rounded-full bg-ivory/90 border border-charcoal/15 flex items-center justify-center text-charcoal hover:border-magenta transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next hero slide"
                onClick={() => setActive((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="w-11 h-11 rounded-full bg-ivory/90 border border-charcoal/15 flex items-center justify-center text-charcoal hover:border-magenta transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === active}
                  aria-label={`Show slide ${idx + 1}`}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === active ? "w-8 bg-magenta" : "w-2.5 bg-charcoal/30"
                  }`}
                />
              ))}
            </div>
            <span className="hidden sm:inline text-xs text-charcoal/70 font-medium">
              {current.caption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
