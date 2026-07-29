"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface DiseaseSlide {
  badge: string;
  category: string;
  title: string;
  description: string;
  keyPoints: string[];
  image: string;
  ctaText: string;
  ahar: string;
  vihar: string;
  aushadh: string;
}

const diseaseSlides: DiseaseSlide[] = [
  {
    badge: "Metabolic Disorder",
    category: "Endocrine Health",
    title: "Diabetes Mellitus & Blood Glucose Management",
    description: "A chronic condition where the body either cannot produce enough insulin or cannot effectively use the insulin it produces, leading to elevated blood sugar levels and systemic vascular impacts.",
    keyPoints: [
      "Impaired insulin production or cellular resistance",
      "Requires consistent glucose monitoring and dietary management",
      "Early intervention prevents long-term neuropathy and nephropathy"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    ctaText: "Explore Diabetes Care",
    ahar: "Bitter gourds, barley, complex millets, and fiber-rich greens avoiding refined sugars.",
    vihar: "Regular brisk morning walks, yoga asanas like Mandukasana, and active stress management.",
    aushadh: "Formulations featuring Gudmar, Vijaysar, and Jamun seed extracts."
  },
  {
    badge: "Hormonal Imbalance",
    category: "Reproductive & Endocrine",
    title: "Polycystic Ovary Syndrome (PCOS)",
    description: "A prevalent hormonal disorder affecting women of reproductive age, characterized by infrequent or prolonged menstrual periods, excess androgen levels, and small ovarian cysts.",
    keyPoints: [
      "Hormonal irregularity and metabolic syndrome overlap",
      "Common signs include insulin resistance and skin changes",
      "Managed through weight optimization, diet, and hormone therapy"
    ],
    image: "https://images.unsplash.com/photo-1512290900722-9a702082b2d5?auto=format&fit=crop&q=80&w=1200",
    ctaText: "PCOS Wellness Tracks",
    ahar: "Warm, anti-inflammatory foods rich in flaxseeds, cinnamon, and fresh organic vegetables.",
    vihar: "Consistent daily routine, regular aerobic exercise, and restorative sleep patterns.",
    aushadh: "Shatavari, Kanchanar Guggulu, and Aloe Vera based herbal blends."
  },
  {
    badge: "Cardiovascular Health",
    category: "Circulatory System",
    title: "High Blood Pressure (Hypertension)",
    description: "A long-term medical condition in which the force of blood against artery walls is persistently elevated, increasing the risk of heart attacks, stroke, and kidney failure.",
    keyPoints: [
      "Often referred to as the 'silent killer' due to subtle early symptoms",
      "Directly linked to sodium intake, stress, and vascular stiffness",
      "Controlled via lifestyle modifications, exercise, and antihypertensives"
    ],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    ctaText: "Heart & Vascular Care",
    ahar: "Low-sodium, cooling foods like pomegranate, garlic, and potassium-rich fruits.",
    vihar: "Pranayama (Anulom Vilom), meditation, and avoiding sudden anger or emotional triggers.",
    aushadh: "Arjuna bark extract, Sarpagandha, and Ashwagandha formulations."
  },
  {
    badge: "Vascular & Colorectal",
    category: "Gastrointestinal Health",
    title: "Piles (Hemorrhoids)",
    description: "Swollen and inflamed veins in the lowest part of your rectum and anus, often resulting from increased pressure in the lower rectum due to straining, chronic constipation, or pregnancy.",
    keyPoints: [
      "Can present as internal or external discomfort and bleeding",
      "Highly responsive to high-fiber diets, hydration, and topical care",
      "Severe or thrombosed cases may require minor clinical interventions"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    ctaText: "Digestive & Proctology Support",
    ahar: "High-fiber diet, buttermilk, ripe papayas, and adequate warm water hydration.",
    vihar: "Avoiding prolonged sitting, regular bowel habits, and avoiding suppression of natural urges.",
    aushadh: "Abhayarishtam, Triphala churnam, and local soothing oils like Jatyadi Taila."
  },
  {
    badge: "Holistic Wellbeing",
    category: "Intimate Health",
    title: "Sexual Health & Functional Wellness",
    description: "An essential component of general vitality influenced by physiological vascular health, psychological state, hormonal equilibrium, and underlying chronic conditions like diabetes.",
    keyPoints: [
      "Multifactorial issues involving blood flow, hormones, and stress",
      "Requires an open, stigma-free clinical dialogue and root-cause testing",
      "Integrates lifestyle adjustments, counseling, and specialized therapies"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    ctaText: "Confidential Consultation",
    ahar: "Nutritious milk preparations, dry fruits, saffron, and wholesome organic ghee.",
    vihar: "Balanced daily regimen, adequate physical rest, and partner communication.",
    aushadh: "Ashwagandha, Shilajit, and Safed Musli based restorative tonics."
  }
];

export default function DiseaseCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === diseaseSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[auto] lg:h-[90vh] lg:min-h-[680px] bg-slate-900 overflow-hidden py-12 lg:py-0 flex items-center">
      {diseaseSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${
            index === current ? "opacity-100 z-10 relative lg:absolute" : "opacity-0 z-0 pointer-events-none hidden lg:flex"
          }`}
        >
          {/* Background Image Container with Rich Contrast Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out brightness-90"
              style={{ transform: index === current ? "scale(1)" : "scale(1.05)" }}
            />
            {/* Rich gradient overlay from dark blue/slate to translucent to keep background imagery clear and punchy */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/50 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* Slide Content Container - Split Grid Layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-white my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Side: Original Content */}
              <div className="lg:col-span-7 space-y-4 lg:space-y-5">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] uppercase tracking-widest font-bold text-cyan-300">
                    {slide.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="block text-cyan-400 font-semibold text-sm md:text-base tracking-wide drop-shadow-sm">
                    {slide.category}
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md">
                    {slide.title}
                  </h1>
                </div>

                <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-normal drop-shadow">
                  {slide.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {slide.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-100 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <Link
                    href="/consultation"
                    className="w-full sm:w-auto text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm tracking-wide"
                  >
                    {slide.ctaText}
                  </Link>
                  <Link
                    href="/conditions"
                    className="w-full sm:w-auto text-center bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md backdrop-blur-sm transition-all text-sm tracking-wide"
                  >
                    View All Conditions
                  </Link>
                </div>
              </div>

              {/* Right Side: Ahar, Vihar & Aushadh Panel */}
              <div className="lg:col-span-5 pb-8 lg:pb-0">
                <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 p-5 lg:p-6 rounded-2xl shadow-2xl space-y-3.5 lg:space-y-4">
                  <div className="border-b border-cyan-500/20 pb-3">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Holistic Protocol</span>
                    <h3 className="text-base lg:text-lg font-bold text-white">Ahar • Vihar • Aushadh</h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    {/* Ahar */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 shadow-inner">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        <h4 className="text-xs sm:text-sm">Ahar (Dietary Regimen)</h4>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed pl-4">{slide.ahar}</p>
                    </div>

                    {/* Vihar */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 shadow-inner">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        <h4 className="text-xs sm:text-sm">Vihar (Lifestyle & Routine)</h4>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed pl-4">{slide.vihar}</p>
                    </div>

                    {/* Aushadh */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 shadow-inner">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        <h4 className="text-xs sm:text-sm">Aushadh (Herbal Formulations)</h4>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed pl-4">{slide.aushadh}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-3 lg:bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-2 lg:gap-3">
        {diseaseSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current 
                ? "w-8 h-2 bg-cyan-400 shadow-sm" 
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}