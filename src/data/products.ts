export interface ColorOption {
  name: string;
  hex: string;
}

export interface CurtainProduct {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  suggestedFabricType: string;
  availableColors: ColorOption[];
  customSizeOption: string;
  curtainStyleInfo: string;
  quotationLabel: string;
  image: string;
  alt: string;
}

export interface CollectionCategory {
  id: string;
  title: string;
  subtitle: string;
  filterKey: string;
  image: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  finishOptions: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  isInspiration: true;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = "94779381373";
export const PHONE_DISPLAY = "077 938 1373";

/**
 * Social profiles. Leave a URL empty to hide that icon.
 * TODO: add Madu Curtains' real Facebook / Instagram / TikTok page URLs.
 */
export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  tiktok: "",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_SLIDES = [
  {
    id: "hero-1",
    image: "/images/hero-1.webp",
    eyebrow: "Galle, Sri Lanka · Made to measure",
    sinhala: "ඔබේ නිවසට ගැළපෙන අලංකාර තිර රෙදි",
    title: "Beautiful curtains. Timeless interiors.",
    subtitle:
      "Curtains tailored to your windows, your light and your style — quoted directly on WhatsApp.",
    caption: "Champagne & ivory double-layer drapery",
  },
  {
    id: "hero-2",
    image: "/images/hero-2.webp",
    eyebrow: "Two-tone & eyelet collection",
    sinhala: "නවීන නිවෙස් සඳහා නවීන මෝස්තර",
    title: "Clean lines for modern homes.",
    subtitle:
      "Two-tone and eyelet curtains that frame tall windows and doors neatly.",
    caption: "Charcoal & soft beige eyelet curtains",
  },
  {
    id: "hero-3",
    image: "/images/hero-3.webp",
    eyebrow: "Floral & heritage prints",
    sinhala: "සම්ප්‍රදායික අලංකාරය, නවීන නිමාව",
    title: "Prints with a sense of place.",
    subtitle:
      "Floral and botanical drapes for classic residences and coastal villas.",
    caption: "Plum & champagne floral drapes",
  },
];

export const CATEGORIES: CollectionCategory[] = [
  {
    id: "cat-modern",
    title: "Modern Curtains",
    subtitle: "Clean two-tone & architectural lines",
    filterKey: "Modern Curtains",
    image: "/images/product-04.webp",
  },
  {
    id: "cat-floral",
    title: "Floral Curtains",
    subtitle: "Botanical & heritage floral prints",
    filterKey: "Floral Curtains",
    image: "/images/product-02.webp",
  },
  {
    id: "cat-luxury",
    title: "Luxury Curtains",
    subtitle: "Velvet, silk-sheen & jacquard",
    filterKey: "Luxury Curtains",
    image: "/images/product-11.webp",
  },
  {
    id: "cat-eyelet",
    title: "Eyelet Curtains",
    subtitle: "Crisp ring-top contemporary folds",
    filterKey: "Eyelet Curtains",
    image: "/images/product-01.webp",
  },
  {
    id: "cat-sheer",
    title: "Sheer Curtains",
    subtitle: "Airy daylight-diffusing voiles",
    filterKey: "Sheer Curtains",
    image: "/images/product-13.webp",
  },
  {
    id: "cat-double",
    title: "Double-Layer Curtains",
    subtitle: "Sheer + blackout day-to-night control",
    filterKey: "Double-Layer Curtains",
    image: "/images/product-18.webp",
  },
  {
    id: "cat-custom",
    title: "Custom Curtains",
    subtitle: "Tailored to your exact window size",
    filterKey: "All",
    image: "/images/about-atelier.webp",
  },
  {
    id: "cat-rods",
    title: "Curtain Rods & Accessories",
    subtitle: "Teak wood rods, finials & tiebacks",
    filterKey: "Accessories",
    image: "/images/acc-wooden-rods.webp",
  },
];

export const CURTAIN_PRODUCTS: CurtainProduct[] = [
  {
    id: "MC-001",
    name: "Royal Navy & Ivory Curtains",
    category: "Eyelet Curtains",
    shortDescription:
      "Crisp two-tone color-block drapery pairing deep royal navy header panels with warm ivory body fabric.",
    suggestedFabricType: "Cotton-Linen Blend (Design Inspiration)",
    availableColors: [
      { name: "Royal Navy", hex: "#1B2A4A" },
      { name: "Ivory", hex: "#F5F1E8" },
      { name: "Slate Blue", hex: "#4A607A" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Stainless Eyelet Ring Header · Clean Vertical Folds",
    quotationLabel: "Custom quotation available",
    image: "/images/product-01.webp",
    alt: "Royal Navy and Ivory two-tone eyelet curtains hanging in a sunlit Sri Lankan living room",
  },
  {
    id: "MC-002",
    name: "Burgundy Floral Elegance",
    category: "Floral Curtains",
    shortDescription:
      "Rich burgundy ground adorned with cream botanical blossoms for formal living and dining spaces.",
    suggestedFabricType: "Printed Woven Jacquard (Design Inspiration)",
    availableColors: [
      { name: "Burgundy", hex: "#6E1D2B" },
      { name: "Cream", hex: "#F2E9DC" },
      { name: "Deep Plum", hex: "#642044" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Tailored Pinch Pleat · Dark Wood Rod Compatible",
    quotationLabel: "Custom quotation available",
    image: "/images/product-02.webp",
    alt: "Burgundy Floral Elegance curtains with cream floral print on a dark wooden rod",
  },
  {
    id: "MC-003",
    name: "Olive Green & Silver Curtains",
    category: "Eyelet Curtains",
    shortDescription:
      "Balanced olive green and cool silver-grey paneling that brings calm, contemporary contrast to bright rooms.",
    suggestedFabricType: "Matte Satin-Weave Blend (Design Inspiration)",
    availableColors: [
      { name: "Olive Green", hex: "#535E3B" },
      { name: "Silver Grey", hex: "#B5B9BC" },
      { name: "Ivory", hex: "#FAF8F5" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Brushed Metal Eyelet Header · Two-Tone Stitch",
    quotationLabel: "Custom quotation available",
    image: "/images/product-03.webp",
    alt: "Olive Green and Silver two-tone eyelet curtains in a modern bright living room",
  },
  {
    id: "MC-004",
    name: "Modern Charcoal Grey Drapes",
    category: "Modern Curtains",
    shortDescription:
      "Architectural floor-to-ceiling charcoal drapes offering clean pleats and serene light control.",
    suggestedFabricType: "Textured Blackout Weave (Design Inspiration)",
    availableColors: [
      { name: "Charcoal", hex: "#35383B" },
      { name: "Ash Grey", hex: "#76797D" },
      { name: "Warm White", hex: "#F4F1EA" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Double Pinch Pleat · Ceiling Track or Rod",
    quotationLabel: "Custom quotation available",
    image: "/images/product-04.webp",
    alt: "Modern Charcoal Grey floor-to-ceiling pinch-pleat drapes in a contemporary room",
  },
  {
    id: "MC-005",
    name: "Ocean Blue Floral Curtains",
    category: "Floral Curtains",
    shortDescription:
      "Breezy coastal teal-blue and white floral motifs ideal for sunlit Sri Lankan bedrooms and verandas.",
    suggestedFabricType: "Breathable Cotton Blend (Design Inspiration)",
    availableColors: [
      { name: "Ocean Blue", hex: "#3A728F" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Seafoam", hex: "#94B8C4" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Pleated Ring Header · Natural Timber Rod Style",
    quotationLabel: "Custom quotation available",
    image: "/images/product-05.webp",
    alt: "Ocean Blue Floral curtains with coastal blue and white botanical print",
  },
  {
    id: "MC-006",
    name: "Garden Green Floral Collection",
    category: "Floral Curtains",
    shortDescription:
      "Lush sage and forest leaf patterns on warm ivory fabric, bringing tropical garden freshness indoors.",
    suggestedFabricType: "Printed Linen-Cotton (Design Inspiration)",
    availableColors: [
      { name: "Garden Green", hex: "#4D724D" },
      { name: "Sage", hex: "#8FA88B" },
      { name: "Ivory", hex: "#F5F0E6" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Matte Black Eyelet Header · Full Floor Drop",
    quotationLabel: "Custom quotation available",
    image: "/images/product-06.webp",
    alt: "Garden Green Floral curtains with botanical leaf motifs on ivory fabric",
  },
  {
    id: "MC-007",
    name: "Champagne Gold Curtains",
    category: "Luxury Curtains",
    shortDescription:
      "Luminous champagne gold drapery with a refined satin sheen that catches warm natural sunlight.",
    suggestedFabricType: "Silk-Blend Drapery (Design Inspiration)",
    availableColors: [
      { name: "Champagne Gold", hex: "#C4A478" },
      { name: "Soft Beige", hex: "#EDE7DF" },
      { name: "Warm Taupe", hex: "#A38F77" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Tailored French Pleat · Brass Rod Compatible",
    quotationLabel: "Custom quotation available",
    image: "/images/product-07.webp",
    alt: "Champagne Gold luxury silk-blend curtains with tailored pleats",
  },
  {
    id: "MC-008",
    name: "Blush Pink & Grey Curtains",
    category: "Eyelet Curtains",
    shortDescription:
      "Soft blush rose paired with tranquil dove grey for restful bedrooms and serene dressing spaces.",
    suggestedFabricType: "Soft Matte Linen Blend (Design Inspiration)",
    availableColors: [
      { name: "Blush Pink", hex: "#D6A9A6" },
      { name: "Soft Grey", hex: "#9EA2A6" },
      { name: "Ivory", hex: "#FAF8F5" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Brushed Silver Eyelet · Two-Tone Tailoring",
    quotationLabel: "Custom quotation available",
    image: "/images/product-08.webp",
    alt: "Blush Pink and Soft Grey two-tone eyelet curtains in a sunlit bedroom",
  },
  {
    id: "MC-009",
    name: "Mustard & Navy Combination",
    category: "Modern Curtains",
    shortDescription:
      "Bold mustard ochre paired with grounded navy hem panels for vibrant, contemporary living spaces.",
    suggestedFabricType: "Heavy Slub Linen Blend (Design Inspiration)",
    availableColors: [
      { name: "Mustard Gold", hex: "#B38126" },
      { name: "Deep Navy", hex: "#1B2A4A" },
      { name: "Warm Sand", hex: "#D8C7A8" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Dark Metal Eyelet · Precision Color-Block Seam",
    quotationLabel: "Custom quotation available",
    image: "/images/product-09.webp",
    alt: "Mustard Gold and Deep Navy two-tone modern eyelet curtains",
  },
  {
    id: "MC-010",
    name: "Terracotta & Ivory Curtains",
    category: "Modern Curtains",
    shortDescription:
      "Earthy Sri Lankan terracotta red anchored beneath airy ivory linen, warm against teak woodwork.",
    suggestedFabricType: "Natural Woven Linen (Design Inspiration)",
    availableColors: [
      { name: "Terracotta", hex: "#A4482B" },
      { name: "Ivory", hex: "#F2ECE1" },
      { name: "Warm Brown", hex: "#6B442E" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Rod-Pocket / Tab Pleat · Teak Rod Styling",
    quotationLabel: "Custom quotation available",
    image: "/images/product-10.webp",
    alt: "Terracotta and Ivory two-tone linen curtains on a warm teak wood rod",
  },
  {
    id: "MC-011",
    name: "Emerald Green Luxury Drapes",
    category: "Luxury Curtains",
    shortDescription:
      "Sumptuous emerald velvet drapes with deep plush folds that add regal warmth and privacy.",
    suggestedFabricType: "Plush Velvet Drapery (Design Inspiration)",
    availableColors: [
      { name: "Emerald Green", hex: "#134E3A" },
      { name: "Forest Green", hex: "#1E3F32" },
      { name: "Champagne", hex: "#C4A478" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Pinch Pleat · Antique Brass Ring Header",
    quotationLabel: "Custom quotation available",
    image: "/images/product-11.webp",
    alt: "Emerald Green velvet luxury floor-to-ceiling drapes on a brass rod",
  },
  {
    id: "MC-012",
    name: "Chocolate Brown Royal Valance",
    category: "Luxury Curtains",
    shortDescription:
      "Traditional royal swag and jabot valance in rich chocolate velvet paired with champagne-lined drapes.",
    suggestedFabricType: "Velvet & Jacquard Trim (Design Inspiration)",
    availableColors: [
      { name: "Chocolate Brown", hex: "#3E261A" },
      { name: "Champagne", hex: "#D6C2A3" },
      { name: "Antique Gold", hex: "#B5935B" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Layered Swag & Jabot Valance · Carved Wood Rod",
    quotationLabel: "Custom quotation available",
    image: "/images/product-12.webp",
    alt: "Chocolate Brown Royal Valance curtains with champagne inner drapes",
  },
  {
    id: "MC-013",
    name: "Classic White Sheer Curtains",
    category: "Sheer Curtains",
    shortDescription:
      "Weightless white voile sheers that soften harsh tropical glare while preserving garden views.",
    suggestedFabricType: "Fine Cotton-Voile Sheer (Design Inspiration)",
    availableColors: [
      { name: "Classic White", hex: "#FFFFFF" },
      { name: "Warm Ivory", hex: "#FAF8F5" },
      { name: "Pearl", hex: "#EAE6DF" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Concealed Ceiling Track · Ripple / Wave Fold",
    quotationLabel: "Custom quotation available",
    image: "/images/product-13.webp",
    alt: "Classic White Sheer voile curtains diffusing sunlight by glass doors",
  },
  {
    id: "MC-014",
    name: "Maroon & Golden Elegance",
    category: "Luxury Curtains",
    shortDescription:
      "Deep plum-maroon textured drapes framed with woven golden damask borders for stately interiors.",
    suggestedFabricType: "Textured Jacquard Blend (Design Inspiration)",
    availableColors: [
      { name: "Maroon Plum", hex: "#5A1F33" },
      { name: "Champagne Gold", hex: "#C4A478" },
      { name: "Ivory", hex: "#FAF8F5" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Tailored Pinch Pleat · Gold Border Trim",
    quotationLabel: "Custom quotation available",
    image: "/images/product-14.webp",
    alt: "Maroon and Golden Elegance curtains with gold damask border",
  },
  {
    id: "MC-015",
    name: "Blue Ombre Floral Curtains",
    category: "Floral Curtains",
    shortDescription:
      "Artisanal ombre transition from luminous ivory to indigo floral silhouettes along the lower hem.",
    suggestedFabricType: "Printed Linen-Blend (Design Inspiration)",
    availableColors: [
      { name: "Indigo Blue", hex: "#2A466B" },
      { name: "Ivory", hex: "#F7F4EC" },
      { name: "Denim", hex: "#5D7899" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Brushed Steel Eyelet · Ombre Botanical Print",
    quotationLabel: "Custom quotation available",
    image: "/images/product-15.webp",
    alt: "Blue Ombre Floral curtains transitioning from ivory to indigo floral hem",
  },
  {
    id: "MC-016",
    name: "Taupe Minimalist Curtains",
    category: "Modern Curtains",
    shortDescription:
      "Quiet architectural taupe wave-fold curtains offering understated texture for minimalist homes.",
    suggestedFabricType: "Open-Weave Linen Blend (Design Inspiration)",
    availableColors: [
      { name: "Warm Taupe", hex: "#9E9183" },
      { name: "Soft Beige", hex: "#EDE7DF" },
      { name: "Greige", hex: "#B7AEA3" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "S-Fold / Wave Track · Minimalist Header",
    quotationLabel: "Custom quotation available",
    image: "/images/product-16.webp",
    alt: "Taupe Minimalist wave-fold linen curtains in a calm architectural room",
  },
  {
    id: "MC-017",
    name: "Botanical Printed Curtains",
    category: "Floral Curtains",
    shortDescription:
      "Tropical palm and monstera foliage printed in muted olive and charcoal on natural ivory cloth.",
    suggestedFabricType: "Heavy Cotton-Linen Print (Design Inspiration)",
    availableColors: [
      { name: "Muted Olive", hex: "#626E4B" },
      { name: "Charcoal", hex: "#333633" },
      { name: "Natural Ivory", hex: "#F4EFE4" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Pleated Wood-Ring Header · Tropical Motif",
    quotationLabel: "Custom quotation available",
    image: "/images/product-17.webp",
    alt: "Botanical Printed curtains with tropical palm and monstera leaf motifs",
  },
  {
    id: "MC-018",
    name: "Luxury Double-Layer Curtains",
    category: "Double-Layer Curtains",
    shortDescription:
      "Dual-track system combining daytime ivory sheer privacy with rich plum-taupe blackout outer drapes.",
    suggestedFabricType: "Voile Sheer + Velvet Blackout (Design Inspiration)",
    availableColors: [
      { name: "Plum Taupe", hex: "#59484B" },
      { name: "Ivory Sheer", hex: "#FAF8F5" },
      { name: "Deep Plum", hex: "#642044" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Double Ceiling Track · Day-to-Night Layering",
    quotationLabel: "Custom quotation available",
    image: "/images/product-18.webp",
    alt: "Luxury Double-Layer Curtains with sheer ivory inner layer and blackout outer drapes",
  },
  {
    id: "MC-019",
    name: "Contemporary Brown & Beige Curtains",
    category: "Eyelet Curtains",
    shortDescription:
      "Warm sand-beige linen upper panels anchored by a tailored espresso-brown border band.",
    suggestedFabricType: "Textured Linen-Cotton (Design Inspiration)",
    availableColors: [
      { name: "Espresso Brown", hex: "#3F2B21" },
      { name: "Sand Beige", hex: "#D6C7B2" },
      { name: "Ivory", hex: "#FAF8F5" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Matte Black Eyelet · Two-Tone Hem Band",
    quotationLabel: "Custom quotation available",
    image: "/images/product-19.webp",
    alt: "Contemporary Brown and Beige two-tone eyelet curtains in a warm living room",
  },
  {
    id: "MC-020",
    name: "Scandinavian Grey & White Curtains",
    category: "Modern Curtains",
    shortDescription:
      "Airy Nordic-inspired light grey and crisp white panels that maximize brightness in compact rooms.",
    suggestedFabricType: "Lightweight Linen-Cotton (Design Inspiration)",
    availableColors: [
      { name: "Dove Grey", hex: "#B8BCBF" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Charcoal", hex: "#45484B" },
    ],
    customSizeOption: "Custom width & drop tailored to your window",
    curtainStyleInfo: "Tailored Pleat · Matte White Rod",
    quotationLabel: "Custom quotation available",
    image: "/images/product-20.webp",
    alt: "Scandinavian Grey and White two-tone minimalist curtains",
  },
];

export const ACCESSORIES: AccessoryItem[] = [
  {
    id: "ACC-01",
    name: "Handcrafted Wooden Curtain Rods & Finials",
    category: "Wooden Curtain Rods",
    description:
      "Warm timber poles with turned ball and urn finials, matching wooden rings, and sturdy wall brackets.",
    finishOptions: ["Natural Teak", "Dark Walnut", "Honey Oak"],
    image: "/images/acc-wooden-rods.webp",
  },
  {
    id: "ACC-02",
    name: "Architectural Metal Rods & Eyelet Rings",
    category: "Metal Rods & Eyelets",
    description:
      "Sleek brushed champagne gold and matte black metal rods paired with precision-fitted eyelet rings.",
    finishOptions: ["Champagne Gold", "Matte Black", "Brushed Silver"],
    image: "/images/acc-metal-rods.webp",
  },
  {
    id: "ACC-03",
    name: "Woven Rope & Tassel Curtain Tiebacks",
    category: "Curtain Tiebacks",
    description:
      "Hand-braided cord tiebacks with dual-tone champagne and plum tassels to frame sunlit windows.",
    finishOptions: ["Champagne & Plum", "Ivory & Gold", "Charcoal Twist"],
    image: "/images/acc-tiebacks.webp",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Coastal Villa Living Room",
    category: "Living Room",
    image: "/images/gallery-villa.webp",
    caption: "Breezy sheer white & sage drapes framing tropical French doors.",
    isInspiration: true,
  },
  {
    id: "gal-2",
    title: "Serene Master Bedroom",
    category: "Bedroom",
    image: "/images/gallery-bedroom.webp",
    caption: "Floor-to-ceiling beige and ivory double-layer bedroom curtains.",
    isInspiration: true,
  },
  {
    id: "gal-3",
    title: "Linen & Eyelet Craftsmanship",
    category: "Fabric Close-Up",
    image: "/images/gallery-fabric.webp",
    caption: "Close-up of natural linen weave, metallic eyelet, and voile sheen.",
    isInspiration: true,
  },
  {
    id: "gal-4",
    title: "Sunlit Lounge Double-Layer",
    category: "Double-Layer",
    image: "/images/hero-1.webp",
    caption: "Champagne gold outer drapes layered over soft ivory sheers.",
    isInspiration: true,
  },
  {
    id: "gal-5",
    title: "Floral Dining Room Drapery",
    category: "Dining Room",
    image: "/images/hero-3.webp",
    caption: "Plum & champagne floral curtains styled on a warm timber rod.",
    isInspiration: true,
  },
  {
    id: "gal-6",
    title: "Royal Swag Valance Styling",
    category: "Valance",
    image: "/images/product-12.webp",
    caption: "Traditional chocolate brown swag valance with tassel tiebacks.",
    isInspiration: true,
  },
  {
    id: "gal-7",
    title: "Contemporary Charcoal Wave",
    category: "Modern",
    image: "/images/hero-2.webp",
    caption: "Architectural charcoal and beige eyelet panels for wide glazing.",
    isInspiration: true,
  },
  {
    id: "gal-8",
    title: "Tailoring & Swatch Atelier",
    category: "Fabric Close-Up",
    image: "/images/about-atelier.webp",
    caption: "Curated velvet, linen, and sheer swatches prepared for custom orders.",
    isInspiration: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I order customized curtains?",
    answer:
      "Yes. Every design in our showcase can be tailored to your window width, height, preferred color combination, and heading style such as eyelet, pinch pleat, or double-layer.",
  },
  {
    question: "How do I measure my windows?",
    answer:
      "Measure the width of your curtain rod or window frame from left to right, and the height from the rod position down to your desired sill or floor length. You can enter measurements in inches, centimeters, or feet in our Customizer.",
  },
  {
    question: "Can I choose different fabric colors?",
    answer:
      "Yes. You can select from our curated color palettes or tell us your interior wall and furniture tones on WhatsApp so we can recommend matching fabric combinations.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Click 'Request Quote' on any curtain card or use the Interactive Curtain Customizer to send your selected design, colors, and window dimensions directly to Madu Curtains on WhatsApp (+94779381373).",
  },
  {
    question: "What curtain designs can I explore?",
    answer:
      "You can explore modern two-tone curtains, floral prints, luxury velvet and jacquard drapes, airy white sheers, double-layer systems, traditional valances, and matching wooden or metal curtain rods.",
  },
  {
    question: "How can I contact Madu Curtains?",
    answer:
      "You can reach Madu Curtains in Galle, Sri Lanka by calling 077 938 1373 or messaging us directly on WhatsApp at +94779381373.",
  },
];
