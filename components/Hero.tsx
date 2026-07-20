"use client"
"use react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
}

const slides: Slide[] = [
  {
    badge: "Root Cause Diagnostics",
    title: "Precision Pulse Assessment (Nadi Pariksha)",
    subtitle: "Discover Your Unique Metabolic Constitution",
    description: "Move past surface symptom containment. Our chief Vaidyas utilize advanced radial artery pulse reading to locate physiological imbalances across Vata, Pitta, and Kapha configurations before they manifest as chronic distress.",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRtrHUMzYPOza39wjFs5x9MM7DouOSVhyA_kGdJPSFdXz1Eg5aql5hA1fKnA2atQoD4eS8hK8Drifk2mCo",
    ctaText: "Book Pulse Evaluation"
  },
  {
    badge: "Pharmacology & Formulations",
    title: "Bio-Available Botanical Compounding",
    subtitle: "Custom Farm-to-Clinic Herbal Therapeutics",
    description: "Every body requires a distinct concentration. We match your physiological profile to tailored herbal extractions, high-potency roots, and personalized dietary alignments designed to trigger targeted tissue repair.",
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTdpJs5ZuOIVlnNY1_j8w-HAUREJld-r-ZQEZVWyIonK4ASvQamL16BEq82Egu9bdsTmWh4oRxUdRLeo-8",
    ctaText: "Explore Herbal Therapy"
  },
  {
    badge: "Deep Cellular Detoxification",
    title: "Clinical Panchakarma Therapy Tracks",
    subtitle: "Systemic Bio-Purification & Toxic Extraction",
    description: "Purge deep-seated cellular metabolic waste (Ama) through medically monitored Shirodhara, Abhyanga, and targeted internal cleansing protocols executed in sterile, premium sanctuary environments.",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS1DdZugQeothj4hR6mLZhfZTCP7hlLw0_ng64USqqyAfW40pDfEVFr8NAQu4e6ZsLoDuR7IEqX_6e6fbM",
    ctaText: "Schedule Panchakarma Detox"
  },
  {
    badge: "Integrative Medical Suite",
    title: "Evidence-Based Ayurvedic Consultation",
    subtitle: "Ancient Medical Science in a Modern Clinic",
    description: "Experience the synergy of centuries-old clinical wisdom paired with contemporary diagnostic screening. Work 1-on-1 with accredited Ayurvedic physicians to reverse chronic autoimmune, digestive, and hormonal patterns.",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT5KOyKyXrsXGHQGYw_v-p4QoOSUzlBueKkD4CeBrzfU_FtNH4tWpJImVLW19yUMWpUzBQeaBFtD2y2IKw",
    ctaText: "Consult Our Physicians"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Transitions slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[680px] bg-slate-950 overflow-hidden">
      {/* Dynamic Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Dark Professional Overlays */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
              style={{ transform: index === current ? "scale(1)" : "scale(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent md:bg-gradient-to-r" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Slide Text Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-white">
            <div className="max-w-2xl space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-300">
                  {slide.badge}
                </span>
              </div>

              <div className="space-y-2">
                <span className="block text-emerald-400 font-medium text-sm md:text-base tracking-wide">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  {slide.title}
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {slide.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/consultation"
                  className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm tracking-wide"
                >
                  {slide.ctaText}
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-xl backdrop-blur-sm transition-all text-sm tracking-wide"
                >
                  Our Medical Philosophy
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Manual Indicator Dots Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current 
                ? "w-8 h-2 bg-emerald-500" 
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}