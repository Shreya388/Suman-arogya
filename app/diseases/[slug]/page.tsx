import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

interface DiseaseDetail {
  title: string;
  category: string;
  overview: string;
  symptoms: string[];
  treatments: string[];
}

// A clinical database mapping URL slugs to display details
const diseaseDatabase: Record<string, DiseaseDetail> = {
  // CHRONIC & METABOLIC CARE
  // ==========================================
  "diabetes": {
    title: "Diabetes Mellitus (Type 1 & 2)",
    category: "Chronic & Metabolic Care",
    overview: "A chronic metabolic condition characterized by elevated levels of blood glucose, which leads over time to serious damage to the heart, blood vessels, eyes, kidneys, and nerves.",
    symptoms: ["Increased thirst and frequent urination", "Unexplained weight loss", "Fatigue and blurred vision", "Slow-healing sores"],
    treatments: ["Blood sugar monitoring", "Insulin therapy / Oral medications", "Tailored diabetic dietary planning", "Regular cardiovascular screening"]
  },
  "hypertension": {
    title: "Hypertension (Blood Pressure)",
    category: "Chronic & Metabolic Care",
    overview: "A common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
    symptoms: ["Severe headaches", "Shortness of breath", "Nosebleeds", "Flushing or dizziness"],
    treatments: ["Low-sodium dietary management (DASH)", "Routine BP tracking", "Antihypertensive prescriptions", "Stress reduction protocols"]
  },
  "thyroid": {
    title: "Thyroid (Hypo/Hyperthyroidism)",
    category: "Chronic & Metabolic Care",
    overview: "Disorders of the thyroid gland that cause it to either produce too little thyroid hormone (hypothyroidism) or too much (hyperthyroidism), disrupting metabolic functions.",
    symptoms: ["Weight gain or loss", "Extreme fatigue or hyperactive anxiety", "Sensitivity to cold or heat", "Dry skin and thinning hair"],
    treatments: ["Hormone replacement therapy (Levothyroxine)", "Anti-thyroid medications", "Periodic blood hormone screening (TSH/T3/T4)", "Metabolic diet management"]
  },
  "cholesterol": {
    title: "Hyperlipidemia (High Cholesterol)",
    category: "Chronic & Metabolic Care",
    overview: "An excess of lipids (fats) in the blood, which can build up inside arteries and increase the risk of heart disease and strokes.",
    symptoms: ["Typically asymptomatic until a cardiovascular event occurs", "Rarely, fatty deposits under the skin (xanthomas)"],
    treatments: ["Statin therapy and lipid-lowering agents", "Low-fat, heart-healthy dietary plan", "Regular lipid panel monitoring", "Cardiovascular lifestyle changes"]
  },
  "fatty-liver": {
    title: "Fatty Liver Disease (NAFLD)",
    category: "Chronic & Metabolic Care",
    overview: "An accumulation of excess fat in liver cells not caused by alcohol consumption, which can lead to inflammation, scarring, and permanent liver damage if left unmanaged.",
    symptoms: ["Fatigue and mild weakness", "Vague discomfort in the upper right abdomen", "Often asymptomatic in early stages"],
    treatments: ["Weight reduction and metabolic control", "Liver function monitoring (LFTs)", "Anti-inflammatory dietary plan", "Avoiding hepatotoxic substances"]
  },
  "gout": {
    title: "Gout & High Uric Acid",
    category: "Chronic & Metabolic Care",
    overview: "A painful form of inflammatory arthritis caused by the crystallization of uric acid in the joints, most commonly affecting the big toe.",
    symptoms: ["Sudden, intense joint pain", "Swelling, redness, and heat around the joint", "Lingering joint discomfort"],
    treatments: ["Uric acid-lowering medications (Allopurinol)", "Anti-inflammatory pain management", "Low-purine dietary modification (limiting red meat/yeast)", "Increased daily hydration"]
  },
  "obesity": {
    title: "Obesity & Metabolic Syndrome",
    category: "Chronic & Metabolic Care",
    overview: "A complex, progressive disorder characterized by excessive body fat, combined with a cluster of conditions that elevate the risk of heart disease, stroke, and type 2 diabetes.",
    symptoms: ["High body mass index (BMI)", "Increased waist circumference", "Shortness of breath with mild exertion", "Snoring and sleep disruptions"],
    treatments: ["Behavioral therapy and lifestyle modification", "Medical weight loss supervision", "Nutritional restructuring", "Physical activity programs"]
  },
  "anemia": {
    title: "Anemia & Blood Disorders",
    category: "Chronic & Metabolic Care",
    overview: "A condition where the body lacks enough healthy red blood cells or hemoglobin to carry sufficient oxygen to the body's tissues.",
    symptoms: ["Persistent fatigue and pale skin", "Cold hands and feet", "Dizziness or lightheadedness", "Shortness of breath"],
    treatments: ["Iron, Vitamin B12, or Folic Acid supplementation", "Dietary adjustments to increase iron absorption", "Underlying cause diagnostic workup", "Regular blood cell counts (CBC)"]
  },

  // ==========================================
  // SKIN & HAIR (DERMATOLOGY)
  // ==========================================
  "eczema": {
    title: "Eczema & Dermatitis",
    category: "Skin & Hair (Dermatology)",
    overview: "A group of conditions causing dry, red, inflamed, and intensely itchy skin patches, often linked to immune system sensitivities.",
    symptoms: ["Dry, cracked, or scaly skin", "Severe itching, especially at night", "Red to brownish-gray patches"],
    treatments: ["Topical corticosteroid ointments", "Emollient moisturizers", "Trigger identification and avoidance", "Antihistamines to suppress itching"]
  },
  "psoriasis": {
    title: "Psoriasis Management",
    category: "Skin & Hair (Dermatology)",
    overview: "An autoimmune disease that causes skin cells to build up rapidly, forming thick, silvery scales and itchy, dry, red patches.",
    symptoms: ["Silvery scales on red patches of skin", "Dry, cracked skin that may bleed", "Itching, burning, or soreness", "Stiff and swollen joints"],
    treatments: ["Topical therapies (salicylic acid, coal tar)", "Systemic immunomodulators", "Phototherapy (light therapy)", "Stress management techniques"]
  },
  "acne": {
    title: "Severe Acne & Rosacea",
    category: "Skin & Hair (Dermatology)",
    overview: "Chronic inflammatory skin conditions causing persistent breakouts, pimples, cysts, or facial redness and visible blood vessels.",
    symptoms: ["Deep, painful cystic bumps", "Persistent facial redness across cheeks and nose", "Pus-filled spots and skin sensitivity"],
    treatments: ["Prescription topical retinoids", "Oral antibiotics or hormonal therapy", "Non-comedogenic clinical skincare plans", "Gentle extraction and chemical peels"]
  },
  "fungal-infections": {
    title: "Fungal Infections (Ringworm, etc.)",
    category: "Skin & Hair (Dermatology)",
    overview: "Contagious fungal skin infections like Tinea (ringworm, athlete's foot, jock itch) that thrive in warm, moist areas of the body.",
    symptoms: ["Circular, red, itchy rashes with raised edges", "Peeling, cracking, or scaling skin", "Itching, burning, or stinging sensations"],
    treatments: ["Prescription topical antifungal creams", "Oral antifungal medications for stubborn cases", "Keeping affected areas clean and dry", "Hygiene guidance to prevent reinfection"]
  },
  "hives": {
    title: "Chronic Urticaria (Hives)",
    category: "Skin & Hair (Dermatology)",
    overview: "An allergic or idiopathic skin reaction causing red, itchy welts that appear suddenly and last for weeks or months.",
    symptoms: ["Batches of red or skin-colored welts (wheals)", "Severe itching", "Swelling of the lips, eyelids, or throat (angioedema)"],
    treatments: ["Antihistamines to reduce flare-ups", "Identifying and avoiding environmental triggers", "Systemic anti-inflammatory agents", "Cool compresses and soothing lotions"]
  },
  "hair-loss": {
    title: "Alopecia & Hair Loss Care",
    category: "Skin & Hair (Dermatology)",
    overview: "Hair thinning or bald patches caused by genetics, hormonal changes, nutritional deficiencies, or autoimmune attacks on hair follicles.",
    symptoms: ["Gradual thinning on top of head", "Circular or patchy bald spots", "Sudden loosening of hair"],
    treatments: ["Topical Minoxidil or prescription DHT blockers", "Nutritional correction (Biotic/Zinc/Iron)", "Scalp therapeutic treatments", "Managing underlying hormonal issues"]
  },
  "skin-allergies": {
    title: "Skin Allergies & Rashes",
    category: "Skin & Hair (Dermatology)",
    overview: "Allergic contact dermatitis or rashes caused when the skin comes in direct contact with an allergen or irritant.",
    symptoms: ["Red bumps or hives", "Warmth, swelling, or tenderness", "Itching, oozing, or crusting of the skin"],
    treatments: ["Identifying contact triggers", "Calamine and soothing topical agents", "Short-term topical steroid application", "Oral antihistamines"]
  },
  "vitiligo": {
    title: "Vitiligo & Pigmentation",
    category: "Skin & Hair (Dermatology)",
    overview: "Conditions affecting skin melanin, leading to patches of skin losing their pigment (vitiligo) or darkening (hyperpigmentation/melasma).",
    symptoms: ["Patchy loss of skin color", "Premature whitening or graying of hair", "Darkened patches on sun-exposed areas"],
    treatments: ["Corticosteroid creams and topical calcineurin inhibitors", "Phototherapy (UVB)", "Depigmenting or repigmenting therapies", "Strict sun-protection protocols"]
  },

  // ==========================================
  // DIGESTIVE & PROCTOLOGY
  // ==========================================
  "piles": {
    title: "Piles (Haemorrhoids)",
    category: "Digestive & Proctology",
    overview: "Swollen veins in your anus and lower rectum, similar to varicose veins. Haemorrhoids can develop inside the rectum or under the skin around the anus.",
    symptoms: ["Painless bleeding during bowel movements", "Itching or irritation in your anal region", "Pain, discomfort, or swelling"],
    treatments: ["High-fiber clinical diets", "Topical soothing treatments", "Advanced non-surgical proctology solutions", "Hydration therapy"]
  },
  "fissures": {
    title: "Anal Fissures & Fistulas",
    category: "Digestive & Proctology",
    overview: "Small tears in the lining of the anus (fissures) or abnormal tunnels connecting the anal canal to the outer skin (fistulas), usually resulting from trauma or chronic inflammation.",
    symptoms: ["Sharp pain during or after bowel movements", "Bright red blood on stool or toilet paper", "Discharge or swelling around the anus"],
    treatments: ["Stool softeners and high-fiber diet", "Warm sitz baths", "Topical nitroglycerin or calcium channel blocker ointments", "Surgical evaluation for fistulas"]
  },
  "gerd-acidity": {
    title: "GERD, Acidity & Heartburn",
    category: "Digestive & Proctology",
    overview: "Gastroesophageal reflux disease occurs when stomach acid repeatedly flows back into the tube connecting your mouth and stomach, causing mucosal irritation.",
    symptoms: ["A burning sensation in your chest (heartburn)", "Regurgitation of food or sour liquid", "Difficulty swallowing or chronic cough"],
    treatments: ["Proton pump inhibitors (PPIs) or H2 blockers", "Lifestyle and dietary changes (avoiding late-night meals)", "Raising the head of the bed", "Weight management"]
  },
  "ulcers": {
    title: "Gastric & Peptic Ulcers",
    category: "Digestive & Proctology",
    overview: "Sores that develop on the lining of the stomach, lower esophagus, or small intestine, often caused by H. pylori bacterial infection or NSAID pain relievers.",
    symptoms: ["Burning stomach pain, especially between meals", "Bloating, belching, or feeling empty", "Nausea or vomiting"],
    treatments: ["Antibiotic regimens (if H. pylori is detected)", "Acid-suppressive medication", "Avoiding spicy foods and NSAID pain medications", "Mucosal protective agents"]
  },
  "ibs": {
    title: "Irritable Bowel Syndrome (IBS)",
    category: "Digestive & Proctology",
    overview: "A common, chronic gastrointestinal disorder affecting the large intestine, marked by cramping, abdominal pain, bloating, gas, and changes in bowel habits.",
    symptoms: ["Abdominal cramping or pain relieved by bowel movements", "Alternating diarrhea and constipation", "Excessive gas and mucus in stool"],
    treatments: ["FODMAP elimination diet", "Antispasmodic medications", "Probiotics and stress management", "Fiber adjustments"]
  },
  "constipation": {
    title: "Chronic Constipation & Bloating",
    category: "Digestive & Proctology",
    overview: "Infrequent bowel movements or difficult passage of stools that persists for several weeks or longer, accompanied by abdominal distension and discomfort.",
    symptoms: ["Passing fewer than three stools a week", "Lumpy, hard, or dry stools", "Sensation of incomplete evacuation", "Abdominal tightness and bloating"],
    treatments: ["High-solubility fiber supplementation", "Increased daily fluid intake", "Stool softeners or osmotic laxatives", "Pelvic floor muscle training"]
  },
  "indigestion": {
    title: "Fatty Food Intolerance",
    category: "Digestive & Proctology",
    overview: "Difficulty digesting lipids and fatty meals, usually signaling issues with bile production, gallbladder function, or pancreatic enzyme release.",
    symptoms: ["Nausea, bloating, or heavy stomach after fatty meals", "Upper abdominal pain", "Greasy, pale, or floating stools"],
    treatments: ["Low-fat dietary adjustments", "Digestive enzyme supplements", "Gallbladder function screening", "Probiotic therapy"]
  },
  "gallstones": {
    title: "Gallbladder Stones Consultation",
    category: "Digestive & Proctology",
    overview: "Hardened deposits of digestive fluid that can form in your gallbladder, ranging from the size of a grain of sand to a golf ball.",
    symptoms: ["Sudden, rapidly intensifying pain in the upper right abdomen", "Pain radiating to the right shoulder or back", "Nausea and vomiting"],
    treatments: ["Clinical active monitoring (for silent stones)", "Surgical consultation (cholecystectomy)", "Dietary fat restriction", "Pain-management protocols"]
  },

  // ==========================================
  // RESPIRATORY, JOINT & FAMILY
  // ==========================================
  "asthma": {
    title: "Asthma & Respiratory Allergies",
    category: "Respiratory, Joint & Family",
    overview: "A chronic respiratory condition in which your airways narrow, swell, and produce extra mucus, making breathing difficult and triggering coughing and wheezing.",
    symptoms: ["Shortness of breath and chest tightness", "Wheezing when exhaling", "Coughing fits worsened by cold air or allergens"],
    treatments: ["Inhaled bronchodilators and corticosteroids", "Identifying and avoiding triggers (dust, pollen)", "Pulmonary function testing (Spirometry)", "Allergy management plans"]
  },
  "copd": {
    title: "COPD & Chronic Bronchitis",
    category: "Respiratory, Joint & Family",
    overview: "A progressive lung disease characterized by long-term breathing problems and poor airflow, primarily caused by smoking or prolonged irritant exposure.",
    symptoms: ["Chronic cough with sputum production", "Progressive shortness of breath during daily tasks", "Frequent respiratory infections", "Fatigue"],
    treatments: ["Bronchodilator inhalers", "Oxygen therapy", "Pulmonary rehabilitation programs", "Vaccinations (Flu/Pneumonia) to prevent flare-ups"]
  },
  "migraine": {
    title: "Migraine & Chronic Headaches",
    category: "Respiratory, Joint & Family",
    overview: "A neurological condition causing severe, throbbing headaches, usually on one side of the head, often accompanied by sensory sensitivities.",
    symptoms: ["Pulsating or throbbing head pain", "Sensitivity to light, sound, and smells", "Nausea and vomiting", "Visual disturbances (aura)"],
    treatments: ["Acute migraine relief medications", "Preventative drug therapies", "Trigger logging (sleep, diet, stress)", "Relaxation and lifestyle pacing"]
  },
  "uti": {
    title: "Urinary Tract Infections (UTI)",
    category: "Respiratory, Joint & Family",
    overview: "An infection in any part of the urinary system (kidneys, ureters, bladder, or urethra), most commonly involving the bladder.",
    symptoms: ["A strong, persistent urge to urinate", "Burning sensation during urination", "Cloudy, strong-smelling, or pinkish urine", "Pelvic pain"],
    treatments: ["Targeted antibiotic therapy based on urine culture", "Urinary tract pain relief agents", "Increased fluid intake", "Prevention hygiene counseling"]
  },
  "pcos": {
    title: "PCOS & Female Hormonal Care",
    category: "Respiratory, Joint & Family",
    overview: "Polycystic Ovary Syndrome is a common hormonal disorder among women of reproductive age, characterized by irregular periods, excess androgen levels, and ovarian cysts.",
    symptoms: ["Irregular or prolonged menstrual cycles", "Excessive facial or body hair (hirsutism)", "Severe acne and weight gain"],
    treatments: ["Hormonal regulation therapies", "Insulin-sensitizing medications (Metformin)", "Targeted weight management and low-glycemic diets", "Ovulation induction if seeking fertility"]
  },
  "joint-pain": {
    title: "Osteoarthritis & Joint Pain",
    category: "Respiratory, Joint & Family",
    overview: "A degenerative joint disease in which the protective cartilage that cushions the ends of your bones wears down over time, most commonly in the knees, hips, and hands.",
    symptoms: ["Joint pain and stiffness, especially in the morning", "Loss of flexibility and range of motion", "Grating sensation or clicking sounds during joint movement"],
    treatments: ["Low-impact physical therapy", "Pain relief and topical anti-inflammatory gels", "Joint support devices and braces", "Weight reduction to relieve joint load"]
  },
  "rheumatoid": {
    title: "Rheumatoid & Autoimmune Pain",
    category: "Respiratory, Joint & Family",
    overview: "An autoimmune disease where the immune system mistakenly attacks the lining of the joints (synovium), causing painful inflammation and joint deformity.",
    symptoms: ["Tender, warm, swollen joints", "Joint stiffness worse in the mornings or after inactivity", "Fatigue, fever, and loss of appetite"],
    treatments: ["Disease-modifying antirheumatic drugs (DMARDs)", "Corticosteroids to reduce severe inflammation", "Physical therapy and lifestyle pacing", "Regular autoimmune marker blood checks"]
  },
  "viral-fevers": {
    title: "Viral Fevers (Dengue/Typhoid)",
    category: "Respiratory, Joint & Family",
    overview: "Systemic viral or bacterial infections characterized by high body temperatures, body aches, and fatigue, requiring careful clinical monitoring to avoid complications.",
    symptoms: ["High fever and severe chills", "Intense muscle and joint pain (typical of Dengue)", "Headache, nausea, and loss of appetite"],
    treatments: ["Hydration and electrolyte replenishment", "Fever-reducing medications (Paracetamol)", "Complete physical rest and blood platelet tracking", "Targeted antibiotics (for bacterial Typhoid)"]
  }
  // Next.js will automatically handle any other slug you click!
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params;
  const disease = diseaseDatabase[slug];

  // Fallback if the specific disease hasn't been written into the dictionary database yet
  const displayData = disease || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    category: "Specialized Clinical Consultation",
    overview: `Comprehensive clinical guidance, medical evaluation, and structured diagnostic treatments are fully operational for ${slug.replace(/-/g, " ")}.`,
    symptoms: ["Requires custom practitioner assessment", "Variable diagnostic indicators depending on stage"],
    treatments: ["Personalized therapeutic strategy plans", "Expert specialist diagnostics panels"]
  };

  return (
    <>
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb back navigation */}
        <Link href="/" className="inline-flex items-center text-sm font-medium text-fuchsia-600 hover:text-rose-500 mb-6 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Medical Dashboard
        </Link>

        {/* Info Layout */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-md">
              {displayData.category}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl pt-2">
              {displayData.title}
            </h1>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Clinical Overview</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{displayData.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="bg-slate-50/60 rounded-xl p-5 border border-slate-100/80">
              <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide flex items-center text-fuchsia-700">
                Primary Symptoms
              </h4>
              <ul className="space-y-2">
                {displayData.symptoms.map((symptom, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start">
                    <span className="text-rose-500 mr-2 font-bold">•</span> {symptom}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50/60 rounded-xl p-5 border border-slate-100/80">
              <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide flex items-center text-emerald-700">
                Available Treatments
              </h4>
              <ul className="space-y-2">
                {displayData.treatments.map((treatment, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start">
                    <span className="text-emerald-500 mr-2 font-bold">✓</span> {treatment}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer Call to Action */}
          <div className="bg-gradient-to-r from-fuchsia-50 to-rose-50/50 border border-fuchsia-100/60 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Need a verified expert medical consultation?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Connect securely online or book an immediate physical diagnostic evaluation.</p>
            </div>
            <Link
              href="/book-appointment"
              className="whitespace-nowrap bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow transition-all"
            >
              Book Direct Consultation
            </Link>
          </div>
        </div>

      </div>
      
    </main>
    <Footer />
    </>
  );
}