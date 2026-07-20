import Link from "next/link";
import React from "react";

interface Service {
  title: string;
  description: string;
  image: string; 
  tags: string[];
  diseasesManaged: string[];
  clinicalApproach: string;
}

const clinicServices: Service[] = [
  {
    title: "Metabolic & Endocrine Disorders",
    description: "Comprehensive medical management for complex hormonal disruptions, blood sugar instability, and glandular dysfunction.",
    clinicalApproach: "HbA1c optimization, target insulin management, lipid profiling, and endocrine restoration tracking.",
    image: "https://media.istockphoto.com/id/2223257274/photo/middle-aged-caucasian-doctor-consulting-middle-aged-hispanic-man-with-diabetes.jpg?s=612x612&w=0&k=20&c=nIFN80DZCt76V2kICtaPrbG0z9jIWjy0TqH-bnL73zc=",
    tags: ["Diabetes", "Thyroid", "Hormones"],
    diseasesManaged: [
      "Type 2 Diabetes Mellitus & Prediabetes",
      "Hypothyroidism & Hyperthyroidism (Hashimoto's/Graves')",
      "Metabolic Syndrome & Severe Insulin Resistance",
      "Polycystic Ovary Syndrome (PCOS)",
      "Adrenal Fatigue & Cortisol Imbalances"
    ],
  },
  {
    title: "Gastrointestinal & Proctology Care",
    description: "Specialized clinical diagnosis and treatment pathways for upper gastrointestinal inflammation and lower colorectal vascular/tissue disorders.",
    clinicalApproach: "Anorectal evaluations, mucosal healing protocols, and therapeutic gut microbiome restructuring.",
    image: "https://media.istockphoto.com/id/1399397921/photo/gastroenterologist-consultation-treatment-of-stomach-diseases-and-ulcers-doctor-palpates.jpg?s=612x612&w=0&k=20&c=SbbEw8VRZQGZQe1TBq-waDG4ZzXnjuQBlamBL0ghFBU=",
    tags: ["Piles / Hemorrhoids", "GERD", "IBS"],
    diseasesManaged: [
      "Piles (Internal & External Hemorrhoids)",
      "Anal Fissures & Fistulas",
      "Gastroesophageal Reflux Disease (GERD) & Acid Reflux",
      "Irritable Bowel Syndrome (IBS) & Chronic Colitis",
      "Non-Alcoholic Fatty Liver Disease (NAFLD)"
    ],
  },
  {
    title: "Clinical Dermatology & Autoimmune Skin Care",
    description: "Targeted medical management for chronic inflammatory skin barriers, systemic autoimmune outbreaks, and cellular dermatological conditions.",
    clinicalApproach: "Topical modulated therapies, systematic allergy mapping, and epidermal barrier defense repair.",
    // Fixed with a stable Unsplash medical image for reliable loading
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    tags: ["Psoriasis", "Eczema", "Dermatitis"],
    diseasesManaged: [
      "Psoriasis (Plaque, Guttate, and Scalp)",
      "Atopic Dermatitis (Severe Eczema)",
      "Chronic Urticaria (Hives) & Severe Acne Vulgaris",
      "Rosacea & Inflammatory Skin Flush Profiles",
      "Fungal Infections (Tinea / Candidiasis)"
    ],
  },
  {
    title: "Cardiovascular & Circulatory Management",
    description: "Diagnostic frameworks optimized to address deep arterial strain, chronic vascular inflammation, and structural heart health risks.",
    clinicalApproach: "Hypertensive mapping, arterial stress profiling, and preventive lipidology.",
    image: "https://media.istockphoto.com/id/2195018820/photo/female-physician-expert-measuring-blood-pressure-at-a-consultation-with-girl.jpg?s=612x612&w=0&k=20&c=zP8w2zx1wMCpkB2_45hYCLR7DxDo-IE4aF95BIKpPsw=",
    tags: ["Hypertension", "Cholesterol", "Circulation"],
    diseasesManaged: [
      "Essential & Secondary Hypertension (High Blood Pressure)",
      "Hyperlipidemia (Critical High Cholesterol & Triglycerides)",
      "Peripheral Artery Disease & Poor Vascular Circulation",
      "Chronic Venous Insufficiency (Varicose Vein Stasis)",
      "Arrhythmia Screening (Palpitations & Tachycardia Monitoring)"
    ],
  },
  {
    title: "Respiratory & Allergy Management",
    description: "Advanced clinical support for chronic airway inflammation, allergen hypersensitivity profiles, and obstructive pulmonary conditions.",
    clinicalApproach: "Pulmonary function testing analysis, allergen panel tracing, and mucosal immune stabilization.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tags: ["Asthma", "Allergies", "Bronchitis"],
    diseasesManaged: [
      "Bronchial Asthma & Exercise-Induced Bronchospasm",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Allergic Rhinitis & Sinusitis Inflammations",
      "Chronic Recurrent Bronchitis & Airway Hyperreactivity",
      "Environmental & Occupational Dust Sensitivities"
    ],
  },
  {
    title: "Musculoskeletal & Joint Care",
    description: "Integrative physical and medical restoration for degenerative joint deterioration, chronic spinal loading, and connective tissue pain.",
    clinicalApproach: "Joint mobility diagnostics, inflammation mitigation infusions, and structural rehabilitation mapping.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tags: ["Arthritis", "Joint Pain", "Spine Care"],
    diseasesManaged: [
      "Osteoarthritis (Knee, Hip, and Spine Degeneration)",
      "Rheumatoid Arthritis & Autoimmune Joint Swelling",
      "Chronic Lower Back Pain & Lumbar Disc Strain",
      "Cervical Spondylosis & Neck Stiffness",
      "Fibromyalgia & Generalized Myofascial Pain Syndrome"
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-widest block">
            Clinical Scope Directory
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Targeted Disease Management & Diagnostic Specialities
          </h2>
          <p className="text-slate-500 text-base font-light max-w-2xl mx-auto">
            Review the explicit chronic medical conditions, diseases, and acute disorders managed comprehensively across our internal clinical panels.
          </p>
        </div>

        {/* Long-Form Deep Directory Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {clinicServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.04)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Real Medical Photography Container */}
                <div className="h-60 w-full bg-slate-100 relative overflow-hidden border-b border-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] uppercase font-bold tracking-wider bg-white/95 backdrop-blur shadow-sm text-slate-700 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  {/* Primary Labels */}
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Clinical Focus Segment */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 mb-8">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-600 mb-1.5">
                      Clinical Treatment Focus
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {service.clinicalApproach}
                    </p>
                  </div>

                  {/* Disease Mappings */}
                  <div className="border-t border-slate-100 pt-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Specific Conditions & Diseases Managed:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.diseasesManaged.map((disease, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <span className="text-teal-500 select-none font-bold">↳</span>
                          <span className="leading-tight">{disease}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom dynamic links */}
              <div className="mx-8 sm:mx-10 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono font-medium text-slate-400 tracking-wider">
                  Clinic Track: MED-0{index + 1}
                </span>
                <Link 
                  href="/contact" 
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors"
                >
                  Schedule Evaluation <span>→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Premium Action Callout */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,29,72,0.1),transparent_40%)] pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <h4 className="text-3xl font-black tracking-tight">Looking for a specific disease option not listed?</h4>
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              Our clinical care directory encompasses over 150+ sub-acute and chronic medical configurations. Reach out to our registration desk to confirm panel support for your direct diagnostic referral.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px] text-sm tracking-wide"
            >
              Contact Medical Intake Desk
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}