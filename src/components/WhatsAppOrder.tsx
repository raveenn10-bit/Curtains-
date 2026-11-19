import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl, PHONE_DISPLAY } from "@/data/products";

const CHIPS = ["Send a photo of your window", "Share width & height", "Pick colours", "Get your quote"];

export function WhatsAppOrder() {
  return (
    <section className="bg-ivory py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal text-ivory rounded-3xl px-6 py-10 sm:px-12 sm:py-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Order on WhatsApp
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 leading-tight">
              Get a quote in one conversation.
            </h2>
            <p className="font-sinhala text-base text-beige/80 mt-3">
              WhatsApp හරහා ඉක්මනින් මිල ගණන් ලබාගන්න
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ivory/20 px-3 py-1.5 text-xs font-medium text-beige/90"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end flex flex-col items-start lg:items-end gap-3">
            <a
              href={buildWhatsAppUrl(
                "Hello Madu Curtains! I would like a quotation. My window size is:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#25D366] hover:text-white text-charcoal pl-3 pr-7 py-3 text-base font-semibold transition-colors duration-200 min-h-[52px]"
            >
              <WhatsAppIcon className="w-7 h-7" />
              Chat on WhatsApp
            </a>
            <p className="text-sm text-beige/70">
              or call <a href="tel:+94779381373" className="underline underline-offset-4 hover:text-ivory">{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
