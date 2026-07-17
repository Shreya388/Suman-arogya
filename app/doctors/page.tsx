import Footer from '@/components/Footer';
import React from 'react';

interface Doctor {
  id: number;
  name: string;
  role: string;
  specialty: string;
  education: string;
  experience: string;
  bio: string;
  schedule: string;
  tags: string[];
  colorTheme: {
    bg: string;
    text: string;
    badge: string;
  };
}

export default function DoctorsPage() {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Anand Suman",
      role: "Chief Medical Officer & Founder",
      specialty: "Metabolic Health & Endocrinology",
      education: "MD, DM (Endocrinology) — AIIMS",
      experience: "14+ Years Experience",
      bio: "An alumnus of AIIMS, Dr. Suman is dedicated to dismantling the cycle of lifelong dependency on diabetes medications. He specializes in clinical protocols that aim to reverse insulin resistance through metabolic realignment.",
      schedule: "Mon, Wed, Fri • 10:00 AM - 4:00 PM",
      tags: ["Diabetes Reversal", "Metabolic Health", "Thyroid Management"],
      colorTheme: {
        bg: "bg-teal-500/10",
        text: "text-teal-700",
        badge: "bg-teal-50 text-teal-800 border-teal-100"
      }
    },
    {
      id: 2,
      name: "Dr. Ritu Sharma",
      role: "Senior Consultant Practitioner",
      specialty: "Preventative Cardiology",
      education: "MD (Internal Medicine) — KGMU",
      experience: "11+ Years Experience",
      bio: "Dr. Sharma's clinical focus centers on preventative cardiovascular science. She works closely with patients to drastically reduce lipid abnormalities, hypertension, and arterial risks through aggressive lifestyle and evidence-backed therapy.",
      schedule: "Tue, Thu, Sat • 9:00 AM - 2:00 PM",
      tags: ["Hypertension", "Lipid Management", "Longevity Science"],
      colorTheme: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-700",
        badge: "bg-cyan-50 text-cyan-800 border-cyan-100"
      }
    },
    {
      id: 3,
      name: "Meera Nair, RD",
      role: "Head of Behavioral Nutrition",
      specialty: "Clinical Dietetics & Gut Alignment",
      education: "M.Sc. Clinical Nutrition & Dietetics",
      experience: "8+ Years Experience",
      bio: "Meera believes food is information for your cells. She specializes in crafting high-adherence nutrition plans that treat dietary shifts as behavioral therapy, seamlessly blending local Indian diets with modern metabolic goals.",
      schedule: "Mon to Fri • 11:00 AM - 5:00 PM",
      tags: ["Gut Microbiome", "Insulin-Sensitive Diets", "Weight Coaching"],
      colorTheme: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-700",
        badge: "bg-emerald-50 text-emerald-800 border-emerald-100"
      }
    }
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
              <span className="bg-gradient-to-r from-rose-600 to-fuchsia-500 bg-clip-text text-transparent">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-16">
          {doctors.map((doc, index) => (
            <div 
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Doctor Visual Frame Left Side (Grid 5/12) */}
              <div className="lg:col-span-5 relative min-h-[350px] bg-slate-50 flex flex-col justify-between p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                
                {/* Background design accents */}
                <div className={`absolute inset-0 ${doc.colorTheme.bg} mix-blend-multiply opacity-70 pointer-events-none`} />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className={`text-xs font-mono font-bold tracking-widest ${doc.colorTheme.text} uppercase`}>
                    Profile {index + 1}
                  </span>
                  <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-slate-200/40 text-slate-700 shadow-sm">
                    {doc.experience}
                  </span>
                </div>

                {/* Big Interactive Placeholder Frame - Drop actual photo here later */}
                <div className="relative z-10 my-auto py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4 text-3xl">
                    🩺
                  </div>
                  <span className="font-bold text-slate-800 text-lg">{doc.name}</span>
                  <span className="text-xs text-slate-400 font-mono tracking-wider mt-1">[ Click to view full credentials ]</span>
                </div>

                {/* Consultation Availability Row */}
                <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Accepting Patients</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{doc.schedule}</span>
                </div>
              </div>

              {/* Doctor Details Right Side (Grid 7/12) */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
                      {doc.specialty}
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-1 mb-2">
                      {doc.name}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500">{doc.role}</p>
                    <p className="text-xs text-slate-400 font-mono mt-1">{doc.education}</p>
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-8">
                    "{doc.bio}"
                  </p>
                </div>

                {/* Specialized Focus tags */}
                <div className="border-t border-slate-100 pt-8">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl border ${doc.colorTheme.badge}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
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