import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const clinicServices: Service[] = [
  {
    title: "General Medicine",
    description: "Comprehensive health assessments, routine check-ups, and expert management for acute and chronic conditions.",
    tags: ["Routine Checkups", "Chronic Care", "Fever & Flu"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Pediatric Consultation",
    description: "Specialized, gentle medical care for infants, children, and adolescents focusing on growth, development, and immunizations.",
    tags: ["Child Health", "Vaccinations", "Growth Tracking"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Cardiology Screening",
    description: "Preventive heart evaluations, blood pressure control, and specialized diagnostic review for optimal heart health.",
    tags: ["ECG Review", "Hypertension", "Heart Risk Analysis"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Diet & Wellness Counseling",
    description: "Personalized lifestyle and nutrition roadmaps to combat weight issues, metabolic syndromes, and lifestyle health challenges.",
    tags: ["Weight Management", "Diabetes Diet", "Nutrition Plans"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Geriatric (Elderly) Care",
    description: "Comprehensive medical assessments focused on the complex health and medication needs of older adults.",
    tags: ["Age-Related Illness", "Mobility Advice", "Medication Audit"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Preventive Health Screenings",
    description: "Proactive lab evaluations and customized diagnostic profiling to catch asymptomatic healthcare vulnerabilities early.",
    tags: ["Full Body Labs", "Risk Profiling", "Cancer Screening"],
    icon: (
      <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-lime-600 uppercase tracking-widest block">
            Our Medical Specialities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Consultation Services Built For Your Family
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We deliver holistic, precise clinical treatments across several domains. Explore our key consultation pillars below.
          </p>
        </div>

        {/* Services Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="p-3 bg-lime-50 text-lime-600 rounded-xl w-fit mb-6 group-hover:bg-lime-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                {/* Service Text details */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Dynamic tag badges */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner callouts */}
        <div className="mt-16 bg-gradient-to-r from-lime-600 to-lime-700 rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-xl md:text-2xl font-bold">Need a specialized custom diagnostic map?</h4>
            <p className="text-lime-100 text-sm max-w-xl">
              Connect with our clinic support desk to figure out which medical professional aligns best with your existing symptoms.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block bg-white text-lime-700 font-bold px-6 py-3 rounded-xl hover:bg-lime-50 transition-colors shadow-md text-sm"
            >
              Contact Desk Support
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}