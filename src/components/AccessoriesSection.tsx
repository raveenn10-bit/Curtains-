import React from "react";
import Image from "next/image";
import { ACCESSORIES, buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function AccessoriesSection() {
  return (
    <section id="accessories" className="py-16 lg:py-24 bg-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
              Hardware & Finishing Touches
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-charcoal mt-2">
              Curtain Rods & Accessories
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal/75 max-w-md">
            Pair your curtains with decorative wooden curtain rods, turned finials, metal tracks, eyelet rings, and braided tiebacks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ACCESSORIES.map((item) => {
            const waHref = buildWhatsAppUrl(
              `Hello Madu Curtains!\n\nI would like to inquire about:\nAccessory: ${item.name} (${item.category})\nFinishes: ${item.finishOptions.join(", ")}\n\nPlease share available options.`
            );
            return (
              <article
                key={item.id}
                className="rounded-2xl bg-ivory border border-champagne/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-magenta">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mt-1.5">
                      {item.name}
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.finishOptions.map((fin) => (
                        <span
                          key={fin}
                          className="rounded-full bg-beige px-3 py-1 text-xs font-medium text-charcoal/85"
                        >
                          {fin}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-plum hover:bg-magenta text-ivory px-5 py-3 text-sm font-semibold transition-colors min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-champagne" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
