"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/data/products";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Custom Curtains", href: "#customizer" },
  { label: "Our Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quoteHref = buildWhatsAppUrl(
    "Hello Madu Curtains! I would like to request a free custom curtain quotation."
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-champagne/25 py-3"
          : "bg-ivory/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a
          href="#home"
          aria-label="Madu Curtains Home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta rounded-[3px]"
        >
          <BrandLogo />
        </a>

        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/85 hover:text-magenta transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] bg-plum hover:bg-magenta text-ivory px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm min-h-[44px]"
          >
            <WhatsAppIcon className="w-4 h-4 text-champagne" />
            <span>Get a Free Quote</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-charcoal/15 bg-ivory text-charcoal hover:border-magenta transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-beige shadow-sm"
          >
            <nav
              aria-label="Mobile Navigation"
              className="px-4 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-[3px] text-base font-medium text-charcoal hover:bg-beige/70 hover:text-magenta transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-[2px] bg-plum hover:bg-magenta text-ivory px-5 py-3 text-sm font-semibold transition-colors min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-champagne" />
                <span>Get a Free Quote on WhatsApp</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
