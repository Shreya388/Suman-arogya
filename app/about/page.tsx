import Footer from '@/components/Footer';
import React from 'react';

// TypeScript Interfaces for strict type safety
interface StatItem {
  number: string;
  label: string;
  sub: string;
}

interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export default function AboutPage() {
  
  const stats: StatItem[] = [
    { number: "15k+", label: "Lives Empowered", sub: "Active health transformations" },
    { number: "98%", label: "Patient Retention", sub: "Built on deep trust & care" },
    { number: "10+", label: "Specialized Programs", sub: "From diabetes to heart health" },
    { number: "24/7", label: "Digital Support", sub: "Always connected to your goals" },
  ];

  const values: ValueItem[] = [
    { num: "01", title: "Empathetic Partnership", desc: "We don't talk down to you from a pedestal. We listen, treat you like a peer, and design plans around your messy, real-world schedule." },
    { num: "02", title: "Evidence-Led Innovation", desc: "No generic advice or outdated routines. We utilize modern clinical data, metabolic tracking, and targeted nutrition updates." },
    { num: "03", title: "Root-Cause Resolve", desc: "Suppressing symptoms is temporary. We hunt down the behavioral, dietary, and genetic root causes to reverse chronic trends." },
  ];

  const milestones: TimelineItem[] = [
    { year: "2020", title: "The Foundation", desc: "Suman Arogya opened as a micro-clinic dedicated to decoding metabolic health and removing confusion from diabetes care." },
    { year: "2022", title: "Holistic Integration", desc: "Expanded into an integrated wellness eco-system, onboarding behavior experts and specialized nutritional coaches." },
    { year: "2024", title: "Digital-First Care", desc: "Launched remote vital monitoring, allowing patients to sync their daily progress securely with clinical dashboards." },
    { year: "2026", title: "The Modern Era", desc: "Pioneering predictive preventative medicine right here, helping thousands stay fully ahead of disease vectors." },
  ];

  return (
    <>
    <div className="bg-[#fafafa] text-slate-900 min-h-screen selection:bg-teal-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative pt-24 pb-24 md:pt-16 md:pb-16 bg-white overflow-hidden border-b border-slate-100">
        {/* Floating Ambient Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 tracking-wide uppercase mb-6 border border-teal-100">
            Our Manifesto
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.05]">
            Redefining Healthcare. <br />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
              Restoring Vitality.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Suman Arogya was built to break the cycle of endless symptom management. We engineer clear, actionable medical maps that return agency back to your life.
          </p>
        </div>
      </section>

      {/* 2. Impact Bento Stat Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
              <div className="text-4xl font-black tracking-tight text-teal-500 mb-2">{stat.number}</div>
              <div className="text-base font-bold text-slate-900">{stat.label}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Bold Editorial Narrative */}
      <section className="max-w-7xl mx-auto py-24 lg:py-32 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 sticky top-24">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">The Problem We Solve</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-6 leading-tight">
            The traditional system waits for you to fall ill. We coach you to thrive.
          </h2>
          <div className="h-1 w-20 bg-teal-500 rounded-full" />
        </div>
        <div className="lg:col-span-7 space-y-8 text-lg text-slate-500 leading-relaxed font-light">
          <p className="text-slate-800 font-medium text-xl">
            Modern living shouldn’t demand persistent clinical intervention. Yet millions find themselves trapped in rigid prescriptions that manage numbers but disregard human quality of life.
          </p>
          <p>
            At <strong className="text-slate-900 font-semibold">Suman Arogya</strong>, we view health through an evolutionary and behavioral lens. Whether optimizing insulin pathways or breaking free from the cognitive overload of chronic care, we blend state-of-the-art diagnostic screening with real, authentic human counseling.
          </p>
          <p>
            We operate out of zero judgment. We completely dismantle complex medical jargon and deliver straightforward frameworks so you exactly understand how your body reacts, responds, and recovers.
          </p>
        </div>
      </section>

      {/* 4. Core Pillars Segment (Minimalist Stack) */}
      <section className="bg-slate-900 text-white py-24 lg:py-32 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">Operating Framework</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3">What sets our philosophy completely apart</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {values.map((val, idx) => (
              <div key={idx} className="group relative pt-8 border-t border-slate-800 hover:border-teal-500 transition-colors duration-300">
                <div className="text-sm font-mono text-teal-400/50 group-hover:text-teal-400 font-bold mb-4">{val.num}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors">{val.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-base">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minimal Interactive Timeline */}
      <section className="max-w-5xl mx-auto py-24 lg:py-32 px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Chronology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Our Evolution Timeline</h2>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-16">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Outer circle decoration */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-teal-500 group-hover:bg-teal-500 transition-all duration-300" />
              
              {/* Year badge positioned left on desktop */}
              <div className="md:absolute md:left-[-140px] md:top-0 text-xl font-black text-slate-400 group-hover:text-teal-600 transition-colors mb-2 md:mb-0">
                {item.year}
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm group-hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bold Editorial Call to Action */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-teal-900/10">
          {/* Internal graphics layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Let's craft your custom blueprint.
            </h2>
            <p className="text-teal-100 text-lg mb-10 font-light leading-relaxed">
              No templates. No blanket prescriptions. Stop trying to force your life into general medical checklists—let’s align treatment directly with your biological fingerprint.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book Strategic Consultation
            </a>
          </div>
        </div>
      </section>
          
    </div>
    <Footer />
    </>
  );
}