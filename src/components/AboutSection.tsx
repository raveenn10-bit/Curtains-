import React from "react";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-beige border border-champagne/35 shadow-sm">
            <Image
              src="/images/about-atelier.webp"
              alt="Curated curtain fabric swatches and tailoring workspace inspiration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-ivory/90 px-3 py-1 text-[11px] font-medium text-charcoal">
              Atelier & Fabric Inspiration
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
            About Madu Curtains · Galle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mt-2 leading-tight">
            Making Every House Feel Like Home.
          </h2>
          <p className="text-base text-charcoal/80 mt-5 leading-relaxed">
            Based in Galle, Sri Lanka, Madu Curtains focuses on personalized curtain designs and home interior decor tailored to the light, architecture, and daily rhythm of your space.
          </p>
          <p className="text-base text-charcoal/80 mt-4 leading-relaxed">
            Whether you are styling a sunlit living room with double-layer sheers, framing bedroom windows with two-tone eyelet drapes, or selecting decorative wooden curtain rods, we guide you from design inspiration to a custom quotation on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(
                "Hello Madu Curtains! I would like to discuss custom curtain designs for my home."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] bg-plum hover:bg-magenta text-ivory px-6 py-3.5 text-sm font-semibold transition-colors min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4 text-champagne" />
              <span>Chat With Us</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-[2px] border border-charcoal/25 hover:border-magenta text-charcoal px-6 py-3.5 text-sm font-semibold transition-colors min-h-[44px]"
            >
              Contact Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
