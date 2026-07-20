import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  iconPath: string; // SVG path data
}

const steps: Step[] = [
  {
    number: "01",
    title: "Book Your Consultation",
    description: "Choose a convenient time slot and fill out your initial health background questionnaire online.",
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    number: "02",
    title: "Comprehensive Diagnosis",
    description: "Meet with our expert Ayurvedic physicians for a deep evaluation of your doshas, symptoms, and medical history.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    number: "03",
    title: "Personalized Protocol",
    description: "Receive a tailored healing plan incorporating evidence-based herbal formulations, diet, and lifestyle adjustments.",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    number: "04",
    title: "Ongoing Care & Tracking",
    description: "Benefit from continuous progress monitoring, dietary adjustments, and dedicated follow-up support.",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function PatientJourney() {
  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Seamless Care Experience
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Your Healing Journey With Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We blend ancient Ayurvedic diagnostic traditions with modern clinical precision in four simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 relative flex flex-col justify-between group"
            >
              {/* Top Row: Icon & Step Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                    <svg 
                      className="w-7 h-7" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={step.iconPath} 
                      />
                    </svg>
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-emerald-100 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Call to Action button */}
        <div className="mt-12 text-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all duration-200"
          >
            Start Your Consultation Today
          </a>
        </div>

      </div>
    </section>
  );
}