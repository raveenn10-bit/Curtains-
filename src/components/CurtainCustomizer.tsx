"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Ruler } from "lucide-react";
import { CURTAIN_PRODUCTS, buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface CurtainCustomizerProps {
  preselectedDesign?: string;
}

const COLOR_SWATCHES = [
  { name: "Ivory White", hex: "#FAF8F5" },
  { name: "Champagne Gold", hex: "#C4A478" },
  { name: "Deep Plum", hex: "#642044" },
  { name: "Primary Magenta", hex: "#A52B70" },
  { name: "Royal Navy", hex: "#1B2A4A" },
  { name: "Emerald Green", hex: "#134E3A" },
  { name: "Charcoal Grey", hex: "#35383B" },
  { name: "Terracotta", hex: "#A4482B" },
  { name: "Soft Beige", hex: "#EDE7DF" },
  { name: "Blush Pink", hex: "#D6A9A6" },
];

const ROOM_TYPES = [
  "Living Room",
  "Master Bedroom",
  "Guest Bedroom",
  "Dining Room",
  "Home Office",
  "Veranda / Balcony",
];

const CURTAIN_STYLES = [
  "Eyelet Ring Style",
  "Pinch Pleat",
  "Double-Layer (Sheer + Blackout)",
  "Wave / S-Fold",
  "Royal Swag Valance",
  "Sheer Voile Only",
];

export function CurtainCustomizer({ preselectedDesign }: CurtainCustomizerProps) {
  const [design, setDesign] = useState(
    preselectedDesign || CURTAIN_PRODUCTS[0].name
  );
  const [selectedColor, setSelectedColor] = useState("Champagne Gold");
  const [roomType, setRoomType] = useState("Living Room");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"inches" | "cm" | "feet">("inches");
  const [windowsCount, setWindowsCount] = useState("1");
  const [curtainStyle, setCurtainStyle] = useState("Eyelet Ring Style");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (preselectedDesign) {
      setDesign(preselectedDesign);
    }
  }, [preselectedDesign]);

  const matchedProduct =
    CURTAIN_PRODUCTS.find((p) => p.name === design) || CURTAIN_PRODUCTS[0];
  const activeSwatch =
    COLOR_SWATCHES.find((c) => c.name === selectedColor) || COLOR_SWATCHES[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(width);
    const h = parseFloat(height);
    const count = parseInt(windowsCount, 10);

    if (!width || isNaN(w) || w <= 0) {
      setError("Please enter a valid positive window width.");
      return;
    }
    if (!height || isNaN(h) || h <= 0) {
      setError("Please enter a valid positive window height.");
      return;
    }
    if (!windowsCount || isNaN(count) || count < 1) {
      setError("Please specify at least 1 window.");
      return;
    }

    setError("");
    const msg = `Hello Madu Curtains!\n\nI would like to request a quotation for custom curtains.\n\nSelected Design: ${design}\nPreferred Color: ${selectedColor}\nPreferred Style: ${curtainStyle}\nWindow Width: ${w} ${unit}\nWindow Height: ${h} ${unit}\nNumber of Windows: ${count}\nRoom Type: ${roomType}\nAdditional Requirements: ${notes.trim() || "None"}\n\nPlease provide more details.`;
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="customizer" className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
            Interactive Customizer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mt-2">
            Customize Your Curtains
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 mt-3">
            Select your inspiration design, preferred color tone, and window measurements to send a tailored quotation request on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Live Visual Preview Card */}
          <div className="lg:col-span-5 rounded-[4px] bg-beige/75 border border-champagne/35 p-5 sm:p-6 shadow-sm">
            <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden bg-ivory">
              <Image
                src={matchedProduct.image}
                alt={matchedProduct.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-colors duration-300 mix-blend-multiply opacity-20"
                style={{ backgroundColor: activeSwatch.hex }}
                aria-hidden="true"
              />
              <div className="absolute top-3 left-3 bg-ivory/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-plum">
                <span>Design Preview</span>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  {matchedProduct.name}
                </h3>
                <span className="text-xs font-semibold text-plum bg-ivory px-2.5 py-1 rounded-[2px] border border-champagne/40">
                  {matchedProduct.id}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/80">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-charcoal/25"
                    style={{ backgroundColor: activeSwatch.hex }}
                  />
                  Color: <strong>{selectedColor}</strong>
                </span>
                <span>·</span>
                <span>Style: <strong>{curtainStyle}</strong></span>
              </div>
              <p className="text-xs text-charcoal/65 leading-relaxed pt-1">
                Disclaimer: Digitally displayed colors are visual inspiration only and may not exactly match physical fabric dyes or textures.
              </p>
            </div>
          </div>

          {/* Customizer Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 rounded-[4px] bg-ivory border border-champagne/40 p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="cust-design"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-2"
                >
                  Curtain Design
                </label>
                <select
                  id="cust-design"
                  value={design}
                  onChange={(e) => setDesign(e.target.value)}
                  className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                >
                  {CURTAIN_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="cust-room"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-2"
                >
                  Room Type
                </label>
                <select
                  id="cust-room"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                >
                  {ROOM_TYPES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Color Swatches */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-2.5">
                Preferred Color ({selectedColor})
              </span>
              <div className="flex flex-wrap gap-2.5">
                {COLOR_SWATCHES.map((swatch) => {
                  const isSelected = swatch.name === selectedColor;
                  return (
                    <button
                      key={swatch.name}
                      type="button"
                      onClick={() => setSelectedColor(swatch.name)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-all min-h-[40px] ${
                        isSelected
                          ? "bg-plum text-ivory ring-2 ring-champagne"
                          : "bg-beige/70 text-charcoal hover:bg-beige border border-charcoal/10"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-charcoal/25"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{swatch.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Measurements */}
            <div className="rounded-[4px] bg-beige/55 p-4 sm:p-5 border border-champagne/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-plum">
                  <Ruler className="w-4 h-4" />
                  Window Measurements
                </span>
                <div className="inline-flex rounded-[3px] bg-ivory p-1 border border-charcoal/10">
                  {(["inches", "cm", "feet"] as const).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUnit(u)}
                      className={`px-3 py-1 rounded-[2px] text-xs font-semibold transition-colors ${
                        unit === u
                          ? "bg-plum text-ivory"
                          : "text-charcoal/75 hover:text-charcoal"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="cust-width"
                    className="block text-xs font-medium text-charcoal/75 mb-1.5"
                  >
                    Window Width ({unit}) *
                  </label>
                  <input
                    id="cust-width"
                    type="number"
                    min="1"
                    step="any"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder={unit === "inches" ? "e.g. 72" : unit === "cm" ? "e.g. 180" : "e.g. 6"}
                    className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cust-height"
                    className="block text-xs font-medium text-charcoal/75 mb-1.5"
                  >
                    Window Height ({unit}) *
                  </label>
                  <input
                    id="cust-height"
                    type="number"
                    min="1"
                    step="any"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === "inches" ? "e.g. 96" : unit === "cm" ? "e.g. 240" : "e.g. 8"}
                    className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cust-windows"
                    className="block text-xs font-medium text-charcoal/75 mb-1.5"
                  >
                    No. of Windows *
                  </label>
                  <input
                    id="cust-windows"
                    type="number"
                    min="1"
                    value={windowsCount}
                    onChange={(e) => setWindowsCount(e.target.value)}
                    className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="cust-style"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-2"
                >
                  Preferred Curtain Style
                </label>
                <select
                  id="cust-style"
                  value={curtainStyle}
                  onChange={(e) => setCurtainStyle(e.target.value)}
                  className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                >
                  {CURTAIN_STYLES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="cust-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-2"
                >
                  Additional Requirements
                </label>
                <input
                  id="cust-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Include matching wooden rod or sheer layer"
                  className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
                />
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-[3px] bg-magenta/10 border border-magenta/30 px-4 py-3 text-sm text-plum font-medium"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="inline-flex items-center gap-1.5 text-xs text-charcoal/70">
                <CheckCircle2 className="w-4 h-4 text-plum shrink-0" />
                <span>Opens a pre-filled WhatsApp inquiry to +94 77 938 1373</span>
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-plum hover:bg-magenta text-ivory px-7 py-3.5 text-sm font-semibold transition-all shadow-sm min-h-[48px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-champagne" />
                <span>Send WhatsApp Quote Request</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
