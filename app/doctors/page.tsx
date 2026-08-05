import Footer from '@/components/Footer';
import React from 'react'; 
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import suman from "../../public/suman.png";
import oshi from "../../public/oshi.png";

interface Doctor {
  name: string;
  designation: string;
  degree: string;
  experience: string;
  focusArea: string;
  tagline: string;
  casesResolved: string;
  image: string | StaticImageData; // Allow both static imports and string URLs
}

export default function DoctorsPage() {
  const doctors: Doctor[] = [
    {
    name: "Dr. Suman Sharma",
    designation: "Chief Medical Officer & Master Vaidya",
    degree: "MD (Internal Medicine), BAMS, Ph.D. (Ayurveda)",
    experience: "16+ Years Experience",
    focusArea: "Metabolic & Autoimmune Restoration",
    tagline: "Specializing in deep-rooted chronic reversal protocols through integrated Nadi diagnostics.",
    casesResolved: "3,500+ Chronic Cases",
    image: suman, // ✅ Fixed: Passed variable directly without curly braces
  },
  {
    name: "Dr. Rohan Verma",
    designation: "Director of Clinical Dermatology",
    degree: "MD (Dermatology), DVD, Fellowship in Laser Aesthetics",
    experience: "12+ Years Experience",
    focusArea: "Advanced Trichology & Skin Regeneration",
    tagline: "Bridging modern dermatological laser interventions with constitutional blood purification therapies.",
    casesResolved: "4,200+ Treatments",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&h=1000&q=80",
  },
  {
    name: "Dr. Oshi Chauhan",
    designation: "Head of Minimally Invasive Proctology",
    degree: "MS (General Surgery), MBBS, FMAS (Minimal Access)",
    experience: "11+ Years Experience",
    focusArea: "Gastrointestinal & Advanced Laser Surgery",
    tagline: "Pioneering pain-free, non-surgical and laser-assisted resolutions for complex digestive disorders.",
    casesResolved: "2,900+ Procedures",
    image: oshi,
  },
  ];

  return (
    <>
    <div className="bg-[#fafafa] text-slate-900 min-h-screen selection:bg-teal-500 selection:text-white antialiased pb-24">
      
      {/* 1. Minimalistic, Content-First Hero */}
      <section className="relative pt-32 pb-20 bg-white border-b border-slate-100 overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-teal-50/40 to-cyan-50/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 tracking-wide uppercase mb-6">
              Expert Clinical Care
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Meet our medical <br />
              <span className="bg-gradient-to-r from-teal-900 to-teal-500 bg-clip-text text-transparent">
                specialists & pioneers.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
              We have handpicked clinicians who value root-cause reversal over lifelong symptom containment. No rushing, no jargon—just deep expertise matched with genuine human partnership.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Medical Team Directory Section */}
      <section className="w-full bg-slate-900 text-white py-28 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-800/60 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                Elite Medical Board
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight leading-tight">
              Direct Access to India&apos;s Leading Clinical Experts
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Our multidisciplinary panel blends decades of hospital surgical experience with ancient Ayurvedic mastery.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/our-doctors"
              className="inline-flex items-center justify-center space-x-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95 group"
            >
              <span>View Full Roster</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cinematic Horizontal Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/65 backdrop-blur-xl rounded-3xl border border-slate-700/60 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Canvas */}
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-800">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                
                {/* Clean, Non-Overlapping Top Badging Row */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-20 pointer-events-none">
                  <span className="bg-emerald-600/95 text-white font-semibold text-[11px] px-3 py-1.5 rounded-xl backdrop-blur-md shadow-md border border-emerald-500/30 truncate">
                    {doc.focusArea}
                  </span>
                  <span className="bg-slate-900/90 text-emerald-400 font-bold text-[11px] px-3 py-1.5 rounded-xl backdrop-blur-md shadow-md border border-slate-700 whitespace-nowrap">
                    {doc.casesResolved}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-6 -mt-16 relative z-20 flex-grow flex flex-col justify-between">
                <div className="space-y-3 bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 shadow-xl">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {doc.designation}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-emerald-300/90 text-xs font-semibold mt-1">
                      {doc.degree}
                    </p>
                    <div className="inline-block mt-2 bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-300">
                      ⏳ {doc.experience}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light pt-1 border-t border-slate-800">
                    &ldquo;{doc.tagline}&rdquo;
                  </p>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <Link
                    href="/book-appointment"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-95 group/btn"
                  >
                    <span>Request Private Consultation</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

      {/* 3. Reassurance Info Callout */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-16 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Not sure who is right for you?</h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light">
            Give us brief context on your health profile, and our clinical intake coordinator will align you with the most appropriate expert.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Request Free Recommendation
          </a>
        </div>
      </section>
          
    </div>
    <Footer />
    </>
  );
}