import React from "react";
import { buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

const STEPS = [
  {
    num: "01",
    title: "Choose a design",
    desc: "Browse our 20 curtain designs — floral prints, sheers and plain colours — and pick what suits your room.",
  },
  {
    num: "02",
    title: "Share your measurements",
    desc: "Measure window width and height in inches, centimetres or feet using the customizer above.",
  },
  {
    num: "03",
    title: "Request your quote",
    desc: "Send your choices to Madu Curtains on WhatsApp and we reply with a personalised quotation.",
  },
  {
    num: "04",
    title: "Receive your curtains",
    desc: "Your curtains are stitched to the chosen style and dimensions for a clean, finished fit.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-plum text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
              The process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mt-2">
              How it works
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(
              "Hello Madu Curtains! I would like to start a custom curtain inquiry."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ivory text-plum hover:bg-champagne hover:text-charcoal px-6 py-3 text-sm font-semibold transition-colors duration-200 min-h-[44px] self-start md:self-auto"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Start your inquiry</span>
          </a>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-champagne/30">
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              className={`pt-6 pb-8 sm:pr-8 border-b sm:border-b-0 border-champagne/20 ${
                i > 0 ? "lg:pl-8 lg:border-l" : ""
              } ${i % 2 === 1 ? "sm:pl-8 sm:border-l" : ""}`}
            >
              <span className="font-serif text-4xl text-champagne tabular-nums">
                {step.num}
              </span>
              <h3 className="font-serif text-xl font-semibold text-ivory mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-beige/85 mt-2.5 leading-relaxed">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
