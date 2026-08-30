// components/DoctorsPreview.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import suman from "../public/suman.png";
import oshi from "../public/oshi.png";

interface ExpertProfile {
  name: string;
  designation: string;
  degree: string;
  experience: string;
  focusArea: string;
  tagline: string;
  casesResolved: string;
  image: string | StaticImageData; // Allow both static imports and string URLs
}

const eliteExperts: ExpertProfile[] = [
  {
    name: "Dr. Suman Sharma",
    designation: "Chief Medical Officer & Master Vaidya",
    degree: "MD (Internal Medicine), BAMS, Ph.D. (Ayurveda)",
    experience: "16+ Years Experience",
    focusArea: "Metabolic & Autoimmune Restoration",
    tagline: "Specializing in deep-rooted chronic reversal protocols through integrated Nadi diagnostics.",
    casesResolved: "3,500+ Chronic Cases",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&h=1000&q=80", // ✅ Fixed: Passed variable directly without curly braces
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
    degree: "BPT (Bachelors in Physiotherapy)",
    experience: "11+ Years Experience",
    focusArea: "Gastrointestinal & Advanced Laser Surgery",
    tagline: "Pioneering pain-free, non-surgical and laser-assisted resolutions for complex digestive disorders.",
    casesResolved: "2,900+ Procedures",
    image: oshi,
  },
];

export default function DoctorsPreview() {
  return (
    <section className="w-full bg-pink-50 text-white py-28 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="" />
      <div className="" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white border border-emerald-900 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-900 animate-pulse" />
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest">
                Elite Medical Board
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-5xl tracking-tight leading-tight">
              Direct Access to India&apos;s Leading Clinical Experts
            </h2>
            <p className="text-gray-800 text-base sm:text-lg">
              Our multidisciplinary panel blends decades of hospital surgical experience with ancient Ayurvedic mastery.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/our-doctors"
              className="inline-flex items-center justify-center space-x-3 bg-pink-900 hover:bg-pink-900 text-white font-extrabold text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-95 group"
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
          {eliteExperts.map((expert, index) => (
            <div 
              key={index}
              className="group relative bg-pink-50 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Canvas */}
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-pink-50">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                
                {/* Clean, Non-Overlapping Top Badging Row */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-20 pointer-events-none">
                  <span className="text-emerald-400 bg-white font-semibold text-[11px] px-3 py-1.5 rounded-xl backdrop-blur-md shadow-md border border-emerald-500/30 truncate">
                    {expert.focusArea}
                  </span>
                  <span className="bg-slate-900/90 text-white font-bold text-[11px] px-3 py-1.5 rounded-xl backdrop-blur-md shadow-md border border-slate-700 whitespace-nowrap">
                    {expert.casesResolved}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-6 -mt-16 relative z-20 flex-grow flex flex-col justify-between">
                <div className="space-y-3 bg-pink-50 backdrop-blur-xl p-6 rounded-2xl border border-gray-50 shadow-xl">
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                      {expert.designation}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-600">
                      {expert.name}
                    </h3>
                    <p className="text-gray-600 text-xs font-semibold mt-1">
                      {expert.degree}
                    </p>
                    <div className="inline-block mt-2 bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-300">
                      ⏳ {expert.experience}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light pt-1">
                    &ldquo;{expert.tagline}&rdquo;
                  </p>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <Link
                    href="/book-appointment"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-pink-900 hover:bg-pink-950 text-white font-medium text-sm py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-95 group/btn"
                  >
                    <span>Request Private Consultation</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}