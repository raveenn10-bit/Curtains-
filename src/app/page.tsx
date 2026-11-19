"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CollectionsSection } from "@/components/CollectionsSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CurtainCustomizer } from "@/components/CurtainCustomizer";
import { AccessoriesSection } from "@/components/AccessoriesSection";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [customizerDesign, setCustomizerDesign] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <CollectionsSection onSelectCategory={setSelectedCategory} />
        <ProductShowcase
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onCustomizeProduct={(name) => setCustomizerDesign(name)}
        />
        <CurtainCustomizer preselectedDesign={customizerDesign} />
        <AccessoriesSection />
        <GallerySection />
        <HowItWorks />
        <WhyChooseUs />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
