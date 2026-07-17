import Footer from '@/components/Footer';
import React from 'react';

// TypeScript Interfaces
interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  features: string[];
  duration: string;
  themeColor: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  timeline: string;
}

export default function ServicesPage() {
  
  const services: ServiceCard[] = [
    {
      id: "metabolic",
      icon: "🧪",
      title: "Metabolic Alignment & Diabetes Reversal",
      shortDesc: "Moving beyond basic insulin injections. We leverage deep blood chemistry metrics, cellular testing, and metabolic typing to restore insulin sensitivity naturally.",
      features: [
        "Continuous Glucose Monitor (CGM) analysis",
        "Insulin sensitivity coaching",
        "Hormonal panel reviews",
        "Targeted clinical nutrition maps"
      ],
      duration: "3 - 6 Month Programs",
      themeColor: "from-teal-500/20 to-emerald-500/10 border-teal-100 text-teal-700"
    },
    {
      id: "cardio",
      icon: "🫀",
      title: "Preventative Cardiology & Blood Pressure",
      shortDesc: "A complete toolkit built to assess and reverse cardiovascular plaque indicators. No lazy checklists—we build long-term athletic and arterial resiliency plans.",
      features: [
        "Advanced lipid subfraction analysis",
        "Endothelial function tracking",
        "Low-heart-rate (MAF) cardio protocols",
        "Stress-to-cortisol mapping"
      ],
      duration: "Bi-Weekly Screenings",
      themeColor: "from-cyan-500/20 to-blue-500/10 border-cyan-100 text-cyan-700"
    },
    {
      id: "nutrition",
      icon: "🥗",
      title: "Behavioral Dietetics & Gut Alignment",
      shortDesc: "Say goodbye to calculated point trackers and restrictive starvation menus. Learn how to feed your specific microbiome to stabilize mood, energy, and cravings.",
      features: [
        "Microbiome assessment frameworks",
        "Anti-inflammatory pantry redesigns",
        "Mindful eating behavioral drills",
        "Personalized enzyme & supplement plans"
      ],
      duration: "Individual & Family Sessions",
      themeColor: "from-emerald-500/20 to-teal-500/10 border-emerald-100 text-emerald-700"
    },
    {
      id: "preventative",
      icon: "🧬",
      title: "Longevity & Preventive Longevity Screening",
      shortDesc: "For those who want to play offense, not defense. We build multi-decade maps analyzing cellular energy output, joint mechanics, and inflammation vectors.",
      features: [
        "VO2 Max estimation & metabolic scaling",
        "Biological age tracking markers",
        "Sleep stage optimization therapy",
        "Joint stability & strength coaching"
      ],
      duration: "Annual Health Blueprints",
      themeColor: "from-indigo-500/20 to-purple-500/10 border-indigo-100 text-indigo-700"
    }
  ];

  const processes: ProcessStep[] = [
    {
      step: "01",
      title: "Deep Metabolic Mapping",
      desc: "We look far past standard fasting glucose. Your onboarding includes metabolic cellular diagnostics to understand exactly how your cells process food and burn fuel.",
      timeline: "Week 1"
    },
    {
      step: "02",
      title: "Your Custom Blueprints",
      desc: "Our clinicians, dieticians, and coaching teams collaborate on a unified daily roadmap tailored to your specific work hours, sleep rhythm, and cultural foods.",
      timeline: "Week 2"
    },
    {
      step: "03",
      title: "Active Adjustment Phase",
      desc: "You won't check in once a year. Through digital monitoring, we adapt your macros, physical movement, and clinical protocols dynamically as your metrics improve.",
      timeline: "Ongoing Daily/Weekly"
    },
    {
      step: "04",
      title: "Sustainable Reversal",
      desc: "Our eventual goal is to fire ourselves. We systematically scale down active monitoring as your body stabilizes, leaving you with permanent, healthy habits.",
      timeline: "Month 6 & Beyond"
    }
  ];

  return (
    <>
    <div className="bg-[#fafafa] text-slate-900 min-h-screen selection:bg-teal-500 selection:text-white antialiased pb-24">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(20,184,166,0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 tracking-wide uppercase border border-teal-100 mb-6">
            Clinical Care Framework
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-8 max-w-4xl leading-[1.05]">
            Targeted medical solutions. <br />
            <span className="bg-gradient-to-r from-rose-600 to-fuchsia-500 bg-clip-text text-transparent">
              No generic checklists.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed">
            We treat the human organism as an integrated biological system. We don’t separate your heart from your gut, or your liver from your mind. Find our signature care pathways below.
          </p>
        </div>
      </section>

      {/* 2. Bento-Grid Services Catalog */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Interactive Directory</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Specialized Care Pathways</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/60 shadow-sm hover:shadow-[0_30px_60px_rgba(13,148,136,0.03)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="text-4xl bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                    {service.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold tracking-wider px-3.5 py-1.5 rounded-full border bg-gradient-to-br ${service.themeColor}`}>
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed font-light mb-8">
                  {service.shortDesc}
                </p>
              </div>

              {/* Sub-Feature Bullets */}
              <div className="border-t border-slate-100 pt-8">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  What's included in this track
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. "How We Treat" Sequence */}
      <section className="bg-slate-900 text-white py-24 lg:py-32 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">The Protocol</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3">Your Journey to Restoration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((proc, idx) => (
              <div key={idx} className="relative pt-8 border-t border-slate-800 hover:border-teal-500 transition-colors duration-300">
                <div className="text-xs font-mono text-teal-400 font-bold mb-4 flex justify-between items-center">
                  <span>STEP {proc.step}</span>
                  <span className="text-slate-500">{proc.timeline}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{proc.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Intake Call-to-Action */}
      <section className="max-w-7xl mx-auto px-6 pt-24">
        <div className="bg-gradient-to-br from-rose-600 via-rose-700 to-fuchsia-800 text-white rounded-[2.5rem] p-8 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-teal-900/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),transparent_30%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
              Ready to claim back your natural health?
            </h2>
            <p className="text-teal-100 text-base sm:text-lg mb-10 font-light leading-relaxed">
              We operate under safe patient limits to guarantee that each client receives highly personalized, diagnostic-level care. Lock in your consultation path today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-md hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                Inquire About Programs
              </a>
              <a 
                href="/doctors" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                Meet Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
            
    </div>
    <Footer />
    </>
  );
}