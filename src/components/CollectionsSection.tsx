"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

interface CollectionsSectionProps {
  onSelectCategory: (filterKey: string) => void;
}

export function CollectionsSection({ onSelectCategory }: CollectionsSectionProps) {
  return (
    <section id="collections" className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
              Curated Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mt-2">
              Tailored Styles for Every Room
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal/75 max-w-md">
            Explore eight signature curtain and hardware categories designed as inspiration for Sri Lankan homes and coastal villas.
          </p>
        </div>

        {/* Horizontal scroll on mobile, editorial 4-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => {
                if (cat.filterKey === "Accessories") {
                  document.getElementById("accessories")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  onSelectCategory(cat.filterKey);
                  document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative min-w-[240px] sm:min-w-[260px] md:min-w-0 snap-start text-left rounded-[4px] overflow-hidden bg-beige border border-champagne/25 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 260px, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/15 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center opacity-90 group-hover:bg-magenta group-hover:text-ivory transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ivory">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-beige/90 mt-1">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
