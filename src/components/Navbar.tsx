"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SocialIcons } from "./SocialIcons";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { PHONE_DISPLAY, buildWhatsAppUrl } from "@/data/products";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Curtains", href: "#showcase" },
  { label: "Custom Curtains", href: "#customizer" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const quoteHref = buildWhatsAppUrl(
    "Hello Madu Curtains! I would like to request a free custom curtain quotation."
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top info bar */}
      <div className="bg-charcoal text-ivory/90 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <p className="inline-flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
            <span className="truncate">Custom Curtains &amp; Home Decor • Galle, Sri Lanka</span>
          </p>
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href="tel:+94779381373" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <SocialIcons tone="light" size="sm" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white border-b border-beige/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <a
            href="#home"
            aria-label="Madu Curtains home"
            className="flex items-center shrink-0 rounded-lg"
          >
            <Image
              src="/images/madu-logo.webp"
              alt="Madu Curtains — Galle, Sri Lanka"
              width={180}
              height={84}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-charcoal/80 hover:text-plum transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#customizer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-charcoal hover:bg-plum text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors min-h-[40px]"
            >
              Get a Free Quote
            </a>
            <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full shadow-sm hover:scale-110 hover:shadow-md transition-transform"
            >
              <WhatsAppIcon className="w-11 h-11" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-lg text-charcoal hover:bg-[#F6F4EF]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              aria-label="Mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden overflow-hidden border-t border-beige bg-white"
            >
              <div className="px-4 py-3 flex flex-col">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 rounded-xl text-base font-semibold text-charcoal hover:bg-[#F6F4EF] min-h-[48px] flex items-center"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={quoteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-white px-5 py-3 text-sm font-semibold min-h-[48px]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Get a Free Quote on WhatsApp
                </a>
                <div className="mt-4 flex items-center justify-between px-1">
                  <a href="tel:+94779381373" className="text-sm font-medium text-charcoal/80">
                    {PHONE_DISPLAY}
                  </a>
                  <SocialIcons size="sm" />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
