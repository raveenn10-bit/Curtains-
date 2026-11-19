"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Eye, Ruler, Search, X, ZoomIn } from "lucide-react";
import {
  CURTAIN_PRODUCTS,
  CurtainProduct,
  buildWhatsAppUrl,
} from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface ProductShowcaseProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  onCustomizeProduct: (productName: string) => void;
}

const FILTER_CATEGORIES = [
  "All",
  "Modern Curtains",
  "Floral Curtains",
  "Luxury Curtains",
  "Eyelet Curtains",
  "Sheer Curtains",
  "Double-Layer Curtains",
];

const COLOR_FILTERS = [
  "All Colors",
  "Ivory / White",
  "Blue / Navy",
  "Green",
  "Red / Plum / Pink",
  "Gold / Beige / Brown",
  "Grey / Charcoal",
];

function matchesColorGroup(product: CurtainProduct, group: string): boolean {
  if (group === "All Colors") return true;
  const text = (
    product.name +
    " " +
    product.availableColors.map((c) => c.name).join(" ")
  ).toLowerCase();

  if (group === "Ivory / White") return /ivory|white|cream|pearl/.test(text);
  if (group === "Blue / Navy") return /navy|blue|ocean|indigo|slate|denim/.test(text);
  if (group === "Green") return /green|olive|emerald|sage|botanical/.test(text);
  if (group === "Red / Plum / Pink") return /burgundy|maroon|plum|pink|blush|terracotta/.test(text);
  if (group === "Gold / Beige / Brown") return /gold|champagne|mustard|beige|brown|taupe|chocolate|sand/.test(text);
  if (group === "Grey / Charcoal") return /grey|charcoal|silver|ash|dove/.test(text);
  return true;
}

export function ProductShowcase({
  selectedCategory,
  onCategoryChange,
  onCustomizeProduct,
}: ProductShowcaseProps) {
  const [colorFilter, setColorFilter] = useState("All Colors");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<CurtainProduct | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const filtered = useMemo(() => {
    return CURTAIN_PRODUCTS.filter((p) => {
      const catMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const colMatch = matchesColorGroup(p, colorFilter);
      const q = searchQuery.trim().toLowerCase();
      const searchMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.availableColors.some((c) => c.name.toLowerCase().includes(q));
      return catMatch && colMatch && searchMatch;
    });
  }, [selectedCategory, colorFilter, searchQuery]);

  return (
    <section id="showcase" className="py-16 lg:py-24 bg-beige/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
              Signature Catalog · 20 Designs
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-charcoal mt-2">
              Custom Curtain Showcase
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2">
              All product visuals are bespoke design inspiration. Custom sizes and color combinations are tailored to order.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-charcoal/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search designs or colors..."
                aria-label="Search curtain designs"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-ivory border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none focus:border-magenta min-h-[44px]"
              />
            </div>

            <select
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
              aria-label="Filter by color"
              className="px-4 py-2.5 rounded-full bg-ivory border border-charcoal/15 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
            >
              {COLOR_FILTERS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {FILTER_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
                  active
                    ? "bg-plum text-ivory shadow-sm"
                    : "bg-ivory text-charcoal/80 border border-charcoal/15 hover:border-magenta"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 2 cols mobile, 2-3 tablet, 4 desktop */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-ivory p-12 text-center border border-champagne/30">
            <p className="font-serif text-2xl text-charcoal">
              No curtain designs match your current filter.
            </p>
            <button
              type="button"
              onClick={() => {
                onCategoryChange("All");
                setColorFilter("All Colors");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center px-5 py-2.5 rounded-full bg-plum text-ivory text-sm font-semibold min-h-[44px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6"
          >
            {filtered.map((product) => {
              const waHref = buildWhatsAppUrl(
                `Hello Madu Curtains!\n\nI would like to request a quotation for:\nDesign: ${product.name} (${product.id})\nCategory: ${product.category}\n\nPlease share available fabric options and pricing.`
              );
              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-2xl bg-ivory border border-champagne/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-ivory/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-plum">
                      {product.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProduct(product);
                        setZoomed(false);
                      }}
                      aria-label={`View details for ${product.name}`}
                      className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-full bg-ivory/95 text-charcoal hover:bg-magenta hover:text-ivory flex items-center justify-center shadow-sm transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-charcoal/55">
                          {product.id}
                        </span>
                        <div className="flex items-center gap-1">
                          {product.availableColors.map((c) => (
                            <span
                              key={c.name}
                              title={c.name}
                              className="w-3 h-3 rounded-full border border-charcoal/20"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal mt-1 leading-snug">
                        {product.name}
                      </h3>
                      <p className="hidden sm:block text-xs text-charcoal/70 mt-1.5 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-plum mt-2">
                        {product.quotationLabel}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-beige flex flex-col sm:flex-row gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveProduct(product);
                          setZoomed(false);
                        }}
                        className="flex-1 inline-flex items-center justify-center rounded-full border border-charcoal/20 hover:border-magenta text-charcoal px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors min-h-[44px]"
                      >
                        View Details
                      </button>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-plum hover:bg-magenta text-ivory px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors min-h-[44px]"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-champagne" />
                        <span>Request Quote</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Product Detail & Image Zoom Modal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-ivory rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                aria-label="Close product details"
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-ivory/95 text-charcoal hover:bg-magenta hover:text-ivory flex items-center justify-center shadow-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className="relative aspect-[3/4] md:aspect-auto md:min-h-[480px] bg-beige overflow-hidden cursor-zoom-in"
                onClick={() => setZoomed((z) => !z)}
              >
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-500 ${
                    zoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                  }`}
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1.5 text-xs font-medium text-charcoal">
                  <ZoomIn className="w-3.5 h-3.5 text-plum" />
                  {zoomed ? "Click to reset zoom" : "Click image to zoom"}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-magenta">
                    {activeProduct.category} · {activeProduct.id}
                  </span>
                  <h3
                    id="product-modal-title"
                    className="font-serif text-3xl font-semibold text-charcoal mt-2"
                  >
                    {activeProduct.name}
                  </h3>
                  <p className="text-sm text-charcoal/80 mt-3 leading-relaxed">
                    {activeProduct.shortDescription}
                  </p>

                  <dl className="mt-6 space-y-3 text-sm border-t border-beige pt-5">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-charcoal/55 font-semibold">
                        Suggested Fabric Type
                      </dt>
                      <dd className="text-charcoal font-medium mt-0.5">
                        {activeProduct.suggestedFabricType}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-charcoal/55 font-semibold">
                        Curtain Style
                      </dt>
                      <dd className="text-charcoal font-medium mt-0.5">
                        {activeProduct.curtainStyleInfo}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-charcoal/55 font-semibold">
                        Sizing
                      </dt>
                      <dd className="text-charcoal font-medium mt-0.5">
                        {activeProduct.customSizeOption}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-charcoal/55 font-semibold">
                        Color Choices (Inspiration Palette)
                      </dt>
                      <dd className="flex flex-wrap gap-2 mt-1.5">
                        {activeProduct.availableColors.map((c) => (
                          <span
                            key={c.name}
                            className="inline-flex items-center gap-1.5 rounded-full bg-beige/80 px-3 py-1 text-xs font-medium text-charcoal"
                          >
                            <span
                              className="w-3 h-3 rounded-full border border-charcoal/20"
                              style={{ backgroundColor: c.hex }}
                            />
                            {c.name}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs text-charcoal/60">
                    Note: Digitally displayed colors and fabric visuals are design inspiration and may vary slightly from physical fabric swatches.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-beige flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onCustomizeProduct(activeProduct.name);
                      setActiveProduct(null);
                      document
                        .getElementById("customizer")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/25 hover:border-magenta text-charcoal px-5 py-3 text-sm font-semibold transition-colors min-h-[44px]"
                  >
                    <Ruler className="w-4 h-4 text-plum" />
                    <span>Customize Size</span>
                  </button>
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Madu Curtains!\n\nI would like to request a quotation for:\nDesign: ${activeProduct.name} (${activeProduct.id})\nStyle: ${activeProduct.curtainStyleInfo}\n\nPlease share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-plum hover:bg-magenta text-ivory px-5 py-3 text-sm font-semibold transition-colors min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-champagne" />
                    <span>Request Quote</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
