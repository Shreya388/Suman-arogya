import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import React from "react";

// 1. IMPORT YOUR EXTERNAL DATABASE & INTERFACE
import { diseaseDatabase, DiseaseDetail } from "@/data/diseases";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params;
  
  // 2. RETRIEVE THE SPECIFIC DISEASE FROM THE FILE
  const disease = diseaseDatabase[slug];

  // 3. YOUR FLEXIBLE FALLBACK IF THE SLUG DOESN'T EXACTLY MATCH
  const displayData = disease || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    category: "Specialized Clinical Consultation",
    overview: `Comprehensive clinical guidance, medical evaluation, and structured diagnostic treatments are fully operational for ${slug.replace(/-/g, " ")}.`,
    imageUrl: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Requires custom practitioner assessment", "Variable diagnostic indicators depending on stage"],
    treatments: ["Personalized therapeutic strategy plans", "Expert specialist diagnostics panels"],
    ayurvedicPerspective: {
      doshaImbalance: "Individual Tridosha profiling required",
      rootCauseText: "Accumulation of toxic systemic waste (Ama) clogging cellular communication channels.",
      herbalRemedies: ["Custom tailored herbal combinations following Nadi Pariksha pulse reading."],
      lifestyleAdjustments: ["Regulated daily rhythms (Dinacharya) designed around metabolic capacity."]
    },
    detailedArticle: "Every individual manifests systemic imbalances uniquely according to their baseline Prakriti configuration. Our clinical team reviews active symptoms through advanced investigative diagnostics, designing targeted botanical remedies and cleansing timelines to help the body heal cleanly and naturally from within."
  };

  return (
    <>
      <main className="min-h-screen bg-slate-50/50 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Navigation Breadcrumb */}
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-amber-600 mb-8 transition-colors group">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Medical Dashboard
          </Link>

          {/* Core Layout Canvas */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/40 p-6 md:p-10 space-y-10">
            
            {/* Header Block Layout */}
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                {displayData.category}
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
                {displayData.title}
              </h1>
            </div>

            {/* Disease Hero Canvas */}
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative group">
              <Image
                src={displayData.imageUrl}
                alt={displayData.title}
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Clinical Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Clinical Overview</h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-xl font-normal">{displayData.overview}</p>
              </div>
              
              <div className="bg-amber-50/40 border border-amber-100/70 rounded-2xl p-6 space-y-3">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">Vedic Diagnosis</span>
                <h4 className="font-bold text-slate-900 text-sm">{displayData.ayurvedicPerspective.doshaImbalance}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{displayData.ayurvedicPerspective.rootCauseText}</p>
              </div>
            </div>

            <hr className="border-slate-200/60" />

            {/* Core Western Mapping Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200/40">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center text-slate-800">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" /> Primary Manifestations
                </h4>
                <ul className="space-y-3">
                  {displayData.symptoms.map((symptom, i) => (
                    <li key={i} className="text-lg text-slate-600 flex items-start">
                      <span className="text-amber-600 mr-2.5 font-bold">•</span> {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200/40">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center text-slate-800">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" /> Modern Clinical Care
                </h4>
                <ul className="space-y-3">
                  {displayData.treatments.map((treatment, i) => (
                    <li key={i} className="text-lg text-slate-600 flex items-start">
                      <span className="text-emerald-600 mr-2.5 font-bold">✓</span> {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deep Ayurvedic Natural Intervention Article */}
            <div className="bg-emerald-50/20 border border-emerald-100/50 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="border-b border-emerald-100/60 pb-4">
                <h3 className="text-xl font-bold text-emerald-900 tracking-tight flex items-center">
                  Natural Ayurvedic Reversal Strategy
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-emerald-800 text-xl tracking-wide uppercase">Therapeutic Herbs</h4>
                  <ul className="space-y-2">
                    {displayData.ayurvedicPerspective.herbalRemedies.map((remedy, i) => (
                      <li key={i} className="text-lg sm:text-base text-slate-700 flex items-start">
                        <span className="text-emerald-600 mr-2 font-bold">🌿</span> {remedy}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-amber-800 text-xl tracking-wide uppercase">Dinacharya & Lifestyle</h4>
                  <ul className="space-y-2">
                    {displayData.ayurvedicPerspective.lifestyleAdjustments.map((lifestyle, i) => (
                      <li key={i} className="text-lg sm:text-base text-slate-700 flex items-start">
                        <span className="text-amber-600 mr-2 font-bold">☀️</span> {lifestyle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100/60 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Pathology & Treatment Article</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">{displayData.detailedArticle}</p>
              </div>
            </div>

            {/* Action Footer Call to Action Block */}
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-950/10">
              <div className="text-center sm:text-left space-y-1">
                <h4 className="font-bold text-white text-base md:text-lg">Need a customized treatment plan?</h4>
                <p className="text-xs text-emerald-200 font-light">Schedule deep Nadi Pariksha pulse analysis with our certified senior Vaidyas.</p>
              </div>
              <Link
                href="/book-appointment"
                className="whitespace-nowrap w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                Book Specialist Evaluation
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}