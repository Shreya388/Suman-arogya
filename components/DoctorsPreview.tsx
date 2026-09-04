// components/DoctorsPreview.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import suman from "../public/suman.png";
import oshi from "../public/oshi.png";
import gaurav from "../public/gaurav.png";
import doctor from "../public/doctor.png";

interface ExpertProfile {
  name: string;
  degree: string;
  experience: string;
  tagline: string;
  image: string | StaticImageData; // Allow both static imports and string URLs
}

const eliteExperts: ExpertProfile[] = [
  {
    name: "Dr. Mayank Prajapati",
    degree: "BPT (Bachelor of Physiotherapy)",
    experience: "1 Year Experience",
    tagline:
      "Focused on personalized physiotherapy for pain relief, improved mobility, and better day-to-day movement.",
    image: doctor,
  },

  {
    name: "Dr. Gaurav Kumar",
    degree: "BPT (Bachelor of Physiotherapy)",
    experience: "2 Years Experience",
    tagline:
      "Helping patients recover from musculoskeletal pain and injuries through targeted exercises and rehabilitation.",
    image: gaurav,
  },

  {
    name: "Dr. Oshi Chauhan",
    degree: "BPT (Bachelor of Physiotherapy)",
    experience: "2 Years Experience",
    tagline:
      "Providing exercise-based rehabilitation to improve strength, flexibility, mobility, and functional recovery.",
    image: oshi,
  },
];

export default function DoctorsPreview() {
  return (
    <section className="w-full bg-pink-50 text-white py-28 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="" />
      <div className="" />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
                
                
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-6 -mt-16 relative z-20 flex-grow flex flex-col justify-between">
                <div className="space-y-3 bg-pink-50 backdrop-blur-xl p-6 rounded-2xl border border-gray-50 shadow-xl">
                  <div>
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
                    {expert.tagline}
                  </p>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <Link
                    href="/book-appointment"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-pink-900 hover:bg-pink-950 text-white font-medium text-sm py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-95 group/btn"
                  >
                    <span>Book Private Consultation</span>
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