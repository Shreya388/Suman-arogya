import Link from "next/link";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreValues: CoreValue[] = [
  {
    title: "Patient-Centric Care",
    description: "Your health, comfort, and safety come first. We customize every consultation process to your precise health history.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Consultations",
    description: "Gain direct access to board-certified medical specialists with decades of combined clinical treatment experience.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Advanced Diagnostics",
    description: "We utilize modern medical screening technologies to ensure early, accurate detection and reliable treatment roadmaps.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Layout Grid: Split description and visual content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Structure Accent */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative">
              {/* Aesthetic background frame */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-rose-50 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-slate-100 rounded-2xl -z-10"></div>
              
              {/* Main Graphical Frame Box */}
              <div className="w-full aspect-[4/5] bg-slate-50 border border-slate-200 rounded-2xl shadow-md p-8 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-bold text-rose-600 tracking-wider uppercase">Our Mission</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">Empowering Healthy Living</h3>
                  <p className="text-slate-600 mt-4 leading-relaxed text-sm">
                    To deliver accessible, high-quality medical consultation solutions that foster long-term health, preventive care wellness, and strong patient-doctor partnerships.
                  </p>
                </div>
                
                {/* Embedded Mini Stat Card */}
                <div className="bg-fuchsia-500 text-white p-4 rounded-xl shadow-sm mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Clinical Standard</p>
                  <p className="text-lg font-bold mt-1">ISO 9001:2015 Certified Clinic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-widest block">
              About Suman Arogya
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              A Modern Healthcare Clinic Dedicated to Your Wellness Journey
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Founded on the principle of bringing compassionate medical consultation under one roof, Suman Arogya is built to ease your healthcare path. We bridge clinical precision with an empathetic approach, ensuring you never feel rushed during your check-ups.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are scheduling a routine preventive health assessment or seeking clinical direction for complex symptoms, our medical facility offers the modern workflows and qualified practitioners necessary to protect your physical longevity.
            </p>
            
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-rose-600 hover:text-rose-700 font-bold transition-colors group"
              >
                <span>Read More About Our Medical Staff</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Layout Grid: Core Clinical Value Pillars */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Why Hundreds of Families Trust Us</h3>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">We approach general consultations differently by prioritizing structural values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                <div className="p-3 bg-rose-50 w-fit rounded-xl mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}