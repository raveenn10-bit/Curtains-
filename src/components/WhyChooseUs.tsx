import React from "react";

const FEATURES = [
  {
    title: "Designed around your room",
    desc: "Every order starts with your room’s light, proportions and interior mood — not a catalogue size.",
  },
  {
    title: "Made to your measurements",
    desc: "Tailored width and drop so the drapery frames tall windows and doors neatly, without gaps or pooling.",
  },
  {
    title: "A wide range of fabrics",
    desc: "Two-tone eyelet panels, floral prints, sheer voiles and royal valances in many colourways.",
  },
  {
    title: "Talk to us directly",
    desc: "Message Madu Curtains on WhatsApp at +94 77 938 1373 for a quick, clear quotation.",
  },
  {
    title: "Suited to Sri Lankan homes",
    desc: "Palettes chosen for modern houses, classic residences and coastal villas around Galle.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-beige/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
            Why Madu Curtains
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-charcoal mt-2 leading-tight">
            Thoughtful craft for every window
          </h2>
          <p className="text-base text-charcoal/75 mt-5 leading-relaxed max-w-sm">
            A small Galle studio that measures, advises and tailors — so the
            curtains you receive actually fit the room you live in.
          </p>
        </div>

        <ol className="lg:col-span-8 border-t border-charcoal/15">
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_14rem_1fr] gap-x-4 gap-y-1 py-6 border-b border-charcoal/15"
            >
              <span className="font-serif text-xl text-plum/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal leading-snug">
                {f.title}
              </h3>
              <p className="col-start-2 sm:col-start-3 text-sm sm:text-base text-charcoal/75 leading-relaxed">
                {f.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
