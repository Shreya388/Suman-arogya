import Link from "next/link";
import React from "react";
import Image from "next/image"; // Fixed: Image is a default import from next/image
import treatment from "../public/treatment.png";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreValues: CoreValue[] = [
  {
    title: "Prakriti-Centric Treatment",
    description: "Your constitutional blueprint comes first. We map every therapeutic herb and lifestyle plan to your exact Vata, Pitta, and Kapha metabolic state.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Vaidya Faculty",
    description: "Gain direct clinical access to certified Ayurvedic doctors and senior practitioners with decades of combined Nadi Pariksha diagnostic experience.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Advanced Bio-Purification",
    description: "We orchestrate traditional clinical Panchakarma and cellular detox programs inside highly precise, modern medical clean-room setups.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left Column: Premium Interactive Graphic Stack */}
          <div className="lg:col-span-5 order-last lg:order-first relative">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none aspect-[4/5] sm:w-[90%]">
              {/* Geometric Decorative Underlays */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 rounded-3xl -z-10 opacity-70"></div>
              <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-amber-50 rounded-full -z-10 opacity-80 blur-2xl"></div>
              
              {/* Premium Asymmetric Border Frame */}
              <div className="absolute inset-0 border border-slate-200/80 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Main Medical Image Canvas */}
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-white">
                <Image
                  src={treatment}
                  alt="Suman Arogya Ayurvedic Clinical Consultation Suite"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Floating Glassmorphic Mission Plate */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest block mb-1">Our Mission</span>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    To deliver evidence-based, clinically validated Ayurvedic therapeutic solutions that target the root causes of metabolic and tissue disorders.
                  </p>
                </div>
              </div>

              {/* Minimalist Floating Certification Badge */}
              <div className="absolute -top-4 right-4 bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-2 border border-slate-800">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">NABH Accredited Clinic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy Layout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                About Suman Arogya Ayurveda
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Ancient Medical Science Refined for Your Modern Wellness Journey
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Founded on the principle of bridging authentic Vedic therapeutic systems with contemporary diagnostic accountability, Suman Arogya offers an advanced environment for disease reversal. We emphasize personalized internal healing patterns, ensuring your medical path addresses system imbalance rather than simple symptom suppression.
            </p>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Whether you are scheduling comprehensive Nadi Pariksha pulse profiling, dealing with chronic digestive disruptions, or mapping targeted panchakarma cellular detoxification protocols, our facility brings clinical infrastructure and credentialed Vaidyas directly to your health planning.
            </p>
            
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 font-bold text-sm px-5 py-3 rounded-xl shadow-sm transition-all duration-300 group"
              >
                <span>Meet Our Certified Vaidyas & Staff</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-emerald-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Layout Grid: Core Value Cards */}
        <div className="border-t border-slate-200/60 pt-20">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Why Hundreds of Families Trust Suman Arogya
            </h3>
            <p className="text-slate-500 text-sm">
              We approach chronic disease resolution differently by prioritizing root internal system balances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl border border-slate-200/60 bg-white hover:border-transparent shadow-sm hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Micro Gradient Top Line Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="p-2.5 bg-emerald-50 border border-emerald-100/50 w-fit rounded-xl mb-6 text-emerald-700 group-hover:bg-white group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700">
                    {value.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}