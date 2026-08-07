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
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1600",
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
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600",
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
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600",
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
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600",
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600",
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
          {/* Background Image with Dark Theme Soft Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out scale-105"
            />
            {/* Soft dark wash overlay so text remains crisp and readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/40 backdrop-blur-[2px]" />
          </div>

          {/* Slide Content Container - Split Grid Layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Information & Actions */}
              <div className="lg:col-span-7 space-y-4 lg:space-y-5">
                <div className="inline-flex items-center gap-2 bg-teal-200 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-[11px] uppercase tracking-widest font-bold text-teal-800">
                    {slide.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="block text-teal-200 font-bold text-sm md:text-base tracking-wide">
                    {slide.category}
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-white tracking-tight leading-[1.1] text-white">
                    {slide.title}
                  </h1>
                </div>

                <p className="text-white text-xs sm:text-base leading-relaxed font-light">
                  {slide.description}
                </p>

                <div className="space-y-2 pt-1">
                  {slide.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <Link
                    href="/consultation"
                    className="w-full sm:w-auto text-center bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm tracking-wide"
                  >
                    {slide.ctaText}
                  </Link>
                  <Link
                    href="/conditions"
                    className="w-full sm:w-auto text-center bg-transparent hover:border-white border border-white text-white font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-all text-sm tracking-wide"
                  >
                    View All Conditions
                  </Link>
                </div>
              </div>

              {/* Right Side: Protocol Panel */}
              <div className="lg:col-span-5 pb-8 lg:pb-0">
                <div className="bg-white/95 backdrop-blur-md p-5 lg:p-6 rounded-2xl shadow-xl border border-slate-200/80 space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-teal-700 font-bold">Holistic Protocol</span>
                      <h3 className="text-sm lg:text-base font-extrabold text-slate-900">Ahar • Vihar • Aushadh</h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    {/* Ahar */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 text-teal-800 font-bold mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                        <h4>Ahar (Dietary Regimen)</h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3">{slide.ahar}</p>
                    </div>

                    {/* Vihar */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 text-teal-800 font-bold mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                        <h4>Vihar (Lifestyle & Routine)</h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3">{slide.vihar}</p>
                    </div>

                    {/* Aushadh */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 text-teal-800 font-bold mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                        <h4>Aushadh (Herbal Formulations)</h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3">{slide.aushadh}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-3 lg:bottom-6 left-0 right-0 z-30 flex justify-center items-center gap-2 lg:gap-3">
        {diseaseSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current 
                ? "w-8 h-2 bg-teal-600 shadow-sm" 
                : "w-2 h-2 bg-slate-400/60 hover:bg-slate-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}