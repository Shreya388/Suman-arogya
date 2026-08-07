"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface DiseaseSlide {
  badge: string;
  category: string;
  title: string;
  description: string;
  image: string;
  ahar: string;
  vihar: string;
  aushadh: string;
}

const diseaseSlides: DiseaseSlide[] = [
  {
    badge: "Madhumeha Care",
    category: "Metabolic & Endocrine Wellness",
    title: "Natural Blood Glucose & Metabolic Management",
    description: "Restore pancreatic vitality and metabolic equilibrium through time-tested Ayurvedic principles, customized diet protocols, and pure herbal extracts.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    ahar: "Bitter gourds, barley, complex millets, and fiber-rich greens avoiding refined sugars.",
    vihar: "Regular brisk morning walks, yoga asanas like Mandukasana, and active stress management.",
    aushadh: "Formulations featuring Gudmar, Vijaysar, and Jamun seed extracts."
  },
  {
    badge: "Artava & Hormonal Care",
    category: "Women's Reproductive Health",
    title: "Holistic Solution for PCOS & Hormonal Balance",
    description: "Gentle, root-cause therapies designed to regulate menstrual cycles, balance hormones naturally, and enhance overall reproductive wellness.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1600",
    ahar: "Warm, anti-inflammatory foods rich in flaxseeds, cinnamon, and fresh organic vegetables.",
    vihar: "Consistent daily routine, regular aerobic exercise, and restorative sleep patterns.",
    aushadh: "Shatavari, Kanchanar Guggulu, and Aloe Vera based herbal blends."
  },
  {
    badge: "Vascular Wellness",
    category: "Cardiovascular Health",
    title: "Ayurvedic Care for High Blood Pressure",
    description: "Soothe your nervous system, strengthen blood vessels, and manage hypertension naturally with calming herbs and heart-healthy lifestyle routines.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600",
    ahar: "Low-sodium, cooling foods like pomegranate, garlic, and potassium-rich fruits.",
    vihar: "Pranayama (Anulom Vilom), meditation, and avoiding sudden emotional triggers.",
    aushadh: "Arjuna bark extract, Sarpagandha, and Ashwagandha formulations."
  },
  {
    badge: "Digestive & Proctology",
    category: "Colorectal Support",
    title: "Natural Relief & Healing for Piles (Hemorrhoids)",
    description: "Relieve chronic discomfort, improve gut motility, and reduce inflammation safely through non-surgical, traditional Ayurvedic interventions.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600",
    ahar: "High-fiber diet, buttermilk, ripe papayas, and adequate warm water hydration.",
    vihar: "Avoiding prolonged sitting, regular bowel habits, and avoiding suppression of natural urges.",
    aushadh: "Abhayarishtam, Triphala churnam, and local soothing oils like Jatyadi Taila."
  },
  {
    badge: "Vitality & Vigor",
    category: "Intimate Wellness",
    title: "Authentic Sexual Health & Rejuvenation",
    description: "Confidential, stigma-free clinical care utilizing Vajikarana therapies to boost overall stamina, vitality, and hormonal health.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600",
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

  const slide = diseaseSlides[current];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F4F9F5] to-[#E9F4EC] py-12 lg:py-20 overflow-hidden border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-200/60">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-900">
              Authentic Ayurvedic & Holistic Care
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-emerald-800">
            <span>🌿 100% Herbal Formulations</span>
            <span>✨ Root-Cause Treatment</span>
            <span>🔒 100% Confidential</span>
          </div>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-emerald-100/80 border border-emerald-200 px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                {slide.badge}
              </span>
            </div>

            <div className="space-y-2">
              <span className="block text-emerald-700 font-semibold text-sm md:text-base">
                {slide.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                {slide.title}
              </h1>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/consultation"
                className="w-full sm:w-auto text-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all text-sm tracking-wide"
              >
                Book Expert Doctor Consultation
              </Link>
              <Link
                href="/conditions"
                className="w-full sm:w-auto text-center bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 font-semibold px-8 py-4 rounded-xl transition-all text-sm tracking-wide shadow-sm"
              >
                Explore All Treatments
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Clinic Treatment Card (Ahar-Vihar-Aushadh) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-bl-xl">
                Clinical Protocol
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                Suman Arogya Healing Pillar
              </h3>

              <div className="space-y-4 text-xs">
                {/* Ahar */}
                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100/60">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-xs uppercase tracking-wider">Ahar (Dietary Regimen)</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-4">{slide.ahar}</p>
                </div>

                {/* Vihar */}
                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100/60">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-xs uppercase tracking-wider">Vihar (Lifestyle & Routine)</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-4">{slide.vihar}</p>
                </div>

                {/* Aushadh */}
                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100/60">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-xs uppercase tracking-wider">Aushadh (Herbal Formulations)</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-4">{slide.aushadh}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Pagination Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {diseaseSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current 
                  ? "w-10 h-2.5 bg-emerald-700 shadow-sm" 
                  : "w-2.5 h-2.5 bg-emerald-300/70 hover:bg-emerald-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}