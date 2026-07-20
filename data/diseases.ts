export interface DiseaseDetail {
  title: string;
  category: string;
  overview: string;
  imageUrl: string;
  symptoms: string[];
  treatments: string[];
  ayurvedicPerspective: {
    doshaImbalance: string;
    rootCauseText: string;
    herbalRemedies: string[];
    lifestyleAdjustments: string[];
  };
  detailedArticle: string;
}

export const diseaseDatabase: Record<string, DiseaseDetail> = {
  // =========================================================================
  // 1. METABOLIC & ENDOCRINE CARE (1-4)
  // =========================================================================
  "diabetes": {
    title: "Diabetes Mellitus (Madhumeha)",
    category: "Metabolic Care",
    overview: "A metabolic disruption characterized by diminished insulin efficiency or production, leading to high systemic blood sugar levels and long-term tissue depletion.",
    imageUrl: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Frequent urination & deep exhaustion", "Slow healing of skin micro-wounds", "Unusual sweetness or stickiness in saliva"],
    treatments: ["Pancreatic cell revitalization", "Strict anti-Kapha carbohydrate restrictions", "Ama metabolic waste clearance"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha Aggravation with Agni Depletion",
      rootCauseText: "Sedentary habits and excessive heavy, sweet foods clog body channels, weakening cellular absorption.",
      herbalRemedies: ["Nisha Amalaki (Turmeric + Amla)", "Gudmar (Gymnema Sylvestre)"],
      lifestyleAdjustments: ["Brisk walking before sunrise", "Switching to ancient grains like barley and millets"]
    },
    detailedArticle: "In Ayurveda, Diabetes falls under Prameha. Treatment prioritizes reviving metabolic heat (Agni) rather than just masking glucose numbers, clearing physical blockages to protect vital organs."
  },
  "hypothyroidism": {
    title: "Hypothyroidism (Galaganda)",
    category: "Endocrine Care",
    overview: "An underactive thyroid gland producing insufficient hormones, drastically dropping the basal metabolic rate.",
    imageUrl: "https://images.unsplash.com/photo-1511688868355-7216ee3433a6?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Unexplained weight gain & water retention", "Chronic cold sensitivity and dry hair", "Mental fog and intense morning lethargy"],
    treatments: ["Thyroid gland cellular stimulation", "Lymphatic drainage and systemic warming therapies", "Metabolic rate upregulation"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha-Vata Aggravation with Manda Agni",
      rootCauseText: "Sluggish digestive fires lead to deep tissue toxicity, coating thyroid hormone conversion receptors.",
      herbalRemedies: ["Kanchanar Guggulu", "Trikatu Churna (Ginger, Black Pepper, Long Pepper)"],
      lifestyleAdjustments: ["Dry skin brushing (Udvartana)", "Incorporating pungent, warming spices like mustard and ginger"]
    },
    detailedArticle: "Management centers on scraping away systemic sluggishness. By clearing metabolic sludge, thyroid receptor binding improves naturally, raising energy distribution."
  },
  "hyperthyroidism": {
    title: "Hyperthyroidism (Bhasmaka Roga)",
    category: "Endocrine Care",
    overview: "An overactive thyroid gland producing excessive hormones, pushing the body's metabolic fire into hyper-drive.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Rapid weight loss despite increased appetite", "Severe heat intolerance and excessive sweating", "Tremors in fingers and rapid heart palpitations"],
    treatments: ["Pitta hyper-metabolism cooling", "Nervous tissue stabilization", "Rejuvenating therapies to stop tissue wasting"],
    ayurvedicPerspective: {
      doshaImbalance: "Severely elevated Pitta and Vata burning out Ojas",
      rootCauseText: "Extreme mental stress and sharp, hot foods accelerate cellular metabolism, dangerously over-firing the thyroid axis.",
      herbalRemedies: ["Shatavari to deeply cool the system", "Shankhapushpi to settle rapid heart rates"],
      lifestyleAdjustments: ["Avoid direct sunlight and hot, pungent spices", "Practice daily grounding moon-salutation yoga forms"]
    },
    detailedArticle: "Hyperthyroidism is viewed as a wildfire burning out bodily tissues (Dhatus). We focus on building a nourishing, cooling shield to preserve lean mass and down-regulate an overstimulated nervous core."
  },
  "chronic-fatigue": {
    title: "Chronic Fatigue Syndrome (Ojas Kshaya)",
    category: "Metabolic Care",
    overview: "A complex, debilitating disorder characterized by profound, persistent physical and mental exhaustion that cannot be alleviated by rest.",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Unrefreshing sleep combined with persistent muscle aches", "Severe post-exertional malaise lasting over 24 hours", "Cognitive impairments, memory loss, and mental processing fog"],
    treatments: ["Vital life essence replenishment (Ojas Rejuvenation)", "Mitochondrial metabolic fire upregulation", "Nervous system grounding therapies"],
    ayurvedicPerspective: {
      doshaImbalance: "Severe Depletion of Ojas (Life Essence) alongside Vata Aggravation",
      rootCauseText: "Chronic overexertion, mental stress, irregular nutrition, and poor sleep burn up the body's primary vital reserves, destabilizing nervous system pathways.",
      herbalRemedies: ["Ashwagandha for adrenal recovery", "Chyawanprash or specialized Amla confections to rebuild cellular stamina"],
      lifestyleAdjustments: ["Rigid restorative sleep schedules (in bed before 10 PM)", "Gentle, non-exhausting breathing techniques (Anuloma Viloma)"]
    },
    detailedArticle: "Chronic fatigue points to a completely empty energy tank. Pushing through with stimulants or caffeine only causes further crash cycles. Our clinical process focuses on replenishing tissue vitality (Dhatus) and cooling down hyperactive nervous signals."
  },

  // =========================================================================
  // 2. DIGESTIVE HEALTH & GASTROENTEROLOGY (5-12)
  // =========================================================================
  "gerd-acidity": {
    title: "GERD & Hyperacidity (Amlapitta)",
    category: "Digestive Health",
    overview: "A condition where stomach acid frequently flows back into the tube connecting your mouth and stomach, irritating the tissue lining.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Burning chest discomfort post-meals", "Sour or bitter acid regurgitation", "Chronic dry throat irritation"],
    treatments: ["Gastric mucosal lining recovery", "Alkalizing therapeutic regimes", "Autonomic nervous system stabilization"],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Pitta Dosha",
      rootCauseText: "Excessive consumption of fermented, spicy, or fried foods increases sharp, sour qualities within gastric juices.",
      herbalRemedies: ["Avipattikar Churna", "Shatavari root powder", "Yastimadhu (Licorice)"],
      lifestyleAdjustments: ["Maintaining a 3-hour gap between dinner and bed", "Practicing cooling breathwork (Sheetali)"]
    },
    detailedArticle: "Instead of violently reducing overall stomach acid, which destroys nutrient breakdown capabilities, treatment cools and neutralizes the liquid heat signature of Pitta."
  },
  "ibs": {
    title: "Irritable Bowel Syndrome (Grahani)",
    category: "Digestive Health",
    overview: "A widespread functional gastrointestinal disorder altering bowel patterns, causing high levels of cramping and gut hypersensitivity.",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Alternating episodes of diarrhea and constipation", "Sharp lower abdominal cramping", "Mucus present within stools"],
    treatments: ["Microbiome restoration blueprints", "Gut-brain axis signaling balancing", "Intestinal inflammation management"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata-Pitta instability in the small intestine",
      rootCauseText: "High mental stress combined with erratic eating schedules destabilizes the primary digestive absorption center.",
      herbalRemedies: ["Kutaj Ghanvati", "Bilva (Bael fruit) extract"],
      lifestyleAdjustments: ["Consuming warm, freshly cooked semi-solid foods", "Sipping warm cumin-coriander tea throughout the day"]
    },
    detailedArticle: "Grahani focuses directly on sealing the integrity of the digestive tract wall. We stop erratic intestinal spasms by providing steady warmth, nourishment, and grounding neural patterns."
  },
  "fatty-liver": {
    title: "Non-Alcoholic Fatty Liver Disease (Yakrit Roga)",
    category: "Hepatology & Metabolic",
    overview: "An accumulation of excess fat within liver cells not caused by alcohol consumption, directly slowing hepatic filtration speeds.",
    imageUrl: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6f?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Dull ache in the upper right abdominal quadrant", "Persistent fatigue after minor activity", "Unexplained skin itching"],
    treatments: ["Hepatic fat metabolism enhancement", "Deep vascular detoxification profiles", "Bile regulation paths"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha overloading Meda Dhatu (Fatty tissue) inside Pitta zones",
      rootCauseText: "Excessive processed carbohydrates and refined sugars overtax hepatic conversion capacities.",
      herbalRemedies: ["Bhumyamalaki", "Katuki", "Punarnava"],
      lifestyleAdjustments: ["Eliminating heavily refined oils", "Daily consumption of bitter green vegetables"]
    },
    detailedArticle: "The liver is the primary home of active fire. When excess fat blankets this organ, it chokes systemic cellular energy. Treatments activate safe bitter tonics to clear hepatic blockages."
  },
  "fatty-liver-grade2": {
    title: "Fatty Liver - Grade II (Yakrit Roga - Advanced)",
    category: "Hepatology Care",
    overview: "An advanced accumulation of fat within liver cells, causing noticeable inflammation and early structural changes that slow down regular detoxification.",
    imageUrl: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6f?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Persistent, dull discomfort in the upper right abdominal quadrant", "Marked bloating and gas immediately following meals", "Frequent nausea and low energy levels"],
    treatments: ["Deep liver detoxification and tissue protection", "Hepatic fat processing activation", "Strict low-glycemic dietary protocols"],
    ayurvedicPerspective: {
      doshaImbalance: "Heavy Kapha dampening the functional heat of Pitta inside the liver",
      rootCauseText: "Diets high in processed carbohydrates, refined oils, and fructose overload the liver, causing fat to build up and trigger inflammation.",
      herbalRemedies: ["Katuki to clear liver fat", "Arogyavardhini Vati to support healthy hepatic function"],
      lifestyleAdjustments: ["Switch completely to cold-pressed mustard oil or small amounts of olive oil", "Incorporate bitter greens like dandelion, kale, and fenugreek into your diet"]
    },
    detailedArticle: "Grade II Fatty Liver requires direct care to clear fat deposits and protect liver function. We use targeted bitter herbs to remove fat buildup, reduce inflammation, and restore the liver's natural ability to filter and detoxify."
  },
  "chronic-constipation": {
    title: "Chronic Constipation (Vibandha)",
    category: "Anorectal & Digestive",
    overview: "A persistent digestive issue marked by infrequent bowel movements or difficulty passing stools, leading to long-term abdominal bloating and discomfort.",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Passing fewer than three bowel movements per week", "Hard, dry, lumpy stools that require straining", "A persistent sensation of incomplete evacuation"],
    treatments: ["Intestinal track lubrication (Snehana)", "Colon nervous system regulation", "Downward metabolic toxin routing"],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Apana Vata drying out moisture in the large intestine",
      rootCauseText: "Diets lacking fiber, inadequate water intake, excess cold or dry foods, and irregular eating schedules strip moisture from the colon.",
      herbalRemedies: ["Triphala Churna for gentle overnight regulation", "Haritaki fruit powder to restore natural bowel rhythms"],
      lifestyleAdjustments: ["Incorporate healthy fats like pure A2 Ghee into warm evening meals", "Establish an unhurried, consistent morning bathroom routine"]
    },
    detailedArticle: "Constipation is a sign of internal dryness and sluggish nervous signals in the colon. Laxatives can create dependency by further drying out tissue. We focus on deep internal lubrication to safely restore the gut's natural movements."
  },
  "hemorrhoids-piles": {
    title: "Hemorrhoids / Piles (Arshas)",
    category: "Anorectal & Digestive",
    overview: "Swollen, inflamed veins located around the anus or inside the lower rectum, causing pain, itching, and bleeding during bowel movements.",
    imageUrl: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Bright red blood coating stools or toilet paper", "Painful swelling, lumps, or chronic irritation near the anal sphincter", "Persistent anal itching and general sitting discomfort"],
    treatments: ["Anal vascular wall strengthening", "Stool softening protocols to reduce straining", "Local inflammation reduction"],
    ayurvedicPerspective: {
      doshaImbalance: "Vitiation of Tridoshas concentrated inside the anal vascular beds (Gudaavali)",
      rootCauseText: "Chronic constipation, straining, prolonged sitting, and poor digestive fire cause systemic blood to pool and inflame local veins.",
      herbalRemedies: ["Arshoghni Vati", "Triphala Guggulu to reduce venous swelling"],
      lifestyleAdjustments: ["Strictly avoid sitting on hard surfaces for long stretches", "Incorporate buttermilk seasoned with cumin and rock salt into your midday routine"]
    },
    detailedArticle: "Arshas is closely tied to chronic digestive sluggishness. Treatment focuses on healing local veins and easing elimination. This prevents straining and addresses the root digestive imbalances causing venous pressure."
  },
  "ulcers": {
    title: "Peptic Ulcer Disease (Parinama Shoola)",
    category: "Digestive Health",
    overview: "Painful sores that develop on the lining of the stomach, lower esophagus, or small intestine due to excessive acid irritation.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Burning stomach pain that flares up when the stomach is empty", "Frequent bouts of bloating, burping, and early fullness during meals", "Dark or tarry stools in severe cases"],
    treatments: ["Gastric mucosal lining protection", "Stomach acid neutralization", "Tissue healing support"],
    ayurvedicPerspective: {
      doshaImbalance: "Sharp Pitta heat damaging the delicate mucosal lining during digestion",
      rootCauseText: "Eating too many sour, spicy, or fried foods, combined with high stress and irregular meal times, causes acid to irritate the stomach lining.",
      herbalRemedies: ["Shatavari to support mucosal healing", "Kamadudha Rasa to balance excess acidity"],
      lifestyleAdjustments: ["Eat small, regular, and easily digestible meals at consistent times", "Sip cool coconut water or licorice root tea between meals"]
    },
    detailedArticle: "Peptic ulcers require a gentle approach that cools acidity and allows the stomach lining to heal. We avoid harsh antacids that can weaken long-term digestion, focusing instead on soothing herbs that form a protective barrier over sensitive tissues."
  },
  "ulcerative-colitis": {
    title: "Ulcerative Colitis (Raktatisaar)",
    category: "Digestive Health",
    overview: "A chronic inflammatory bowel disease causing long-lasting inflammation and ulcers in the innermost lining of the large intestine and rectum.",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Frequent bloody stools accompanied by painful abdominal spasms", "Urgent, painful needs to defecate with zero output (Tenesmus)", "Gradual weight loss, dehydration, and low iron counts"],
    treatments: ["Colon protective healing barrier applications", "Pitta-blood toxin soothing therapies", "Intestinal lining cooling scripts"],
    ayurvedicPerspective: {
      doshaImbalance: "High Pitta forcing blood leakage out of colon tissue structures",
      rootCauseText: "Aggressive emotional distress combined with excessive fermented or sour substances creates acidic heat that actively wounds colon structures.",
      herbalRemedies: ["Kutaj Ghanvati to halt fluid/blood loss", "Bilva powder to form healthy protective stool shapes"],
      lifestyleAdjustments: ["Consume simple white rice porridge mixed with fresh pomegranate juice", "Strictly avoid high fiber raw salads or coarse husk supplements"]
    },
    detailedArticle: "Ulcerative Colitis represents an internal fire directly blistering delicate colon membranes. Treatment avoids rough fibers that scrape the wounds, focusing instead on internal cooling structures to seal tissue breaks."
  },

  // =========================================================================
  // 3. CARDIOVASCULAR HEALTH (13-15)
  // =========================================================================
  "hypertension": {
    title: "Hypertension (Rakta Gata Vata)",
    category: "Cardiovascular Health",
    overview: "A cardiovascular state where blood is forced through systemic arterial channels under consistently high pressure.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Occasional throbbing base-of-skull headaches", "Vertigo spells or rapid heart palpitations", "Unexplained internal anxiety"],
    treatments: ["Vascular wall relaxation management", "Nervous system sympathetic down-regulation", "Blood viscosity normalizations"],
    ayurvedicPerspective: {
      doshaImbalance: "Hyperactive Vata constricting Rakta Dhatu (Blood)",
      rootCauseText: "Chronic mental hyper-stimulation and structural dryness lead to vascular narrowing.",
      herbalRemedies: ["Sarpagandha", "Arjuna bark powder"],
      lifestyleAdjustments: ["Strict warm oil body massage (Abhyanga)", "Uncompromised sleep by 10:00 PM nightly"]
    },
    detailedArticle: "Hypertension highlights a system under tension. We avoid flushing out minerals with harsh synthetics; we focus on smoothing neurological signals to allow arterial walls to drop open naturally."
  },
  "varicose-veins": {
    title: "Varicose Veins (Siraja Granthi)",
    category: "Cardiovascular Care",
    overview: "Gnarled, enlarged superficial veins most commonly found in the legs, caused by weak or damaged venous valves that allow blood to pool.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Dark purple or bulging blue veins appearing on the lower legs", "A heavy, aching, or burning sensation in the calf muscles", "Swelling and skin irritation around the ankles after standing"],
    treatments: ["Venous wall elasticity support", "Lower limb circulation enhancement", "Local swelling management"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata warping venous walls combined with Pitta heat causing local blood pooling",
      rootCauseText: "Standing for long periods, lack of movement, and inflammatory foods weaken the valves in the legs, slowing blood return to the heart.",
      herbalRemedies: ["Kaishore Guggulu to clear venous stagnation", "Sahacharadi taila applied with gentle upward strokes"],
      lifestyleAdjustments: ["Elevate the legs above heart level for 15 minutes twice daily", "Avoid wearing tight footwear or socks that constrict circulation"]
    },
    detailedArticle: "Varicose veins point to stagnant circulation in the lower limbs. Instead of using aggressive procedures to seal the veins, we focus on strengthening blood vessel walls, reducing pooling, and using gentle upward massage to support natural venous return."
  },
  "atherosclerosis": {
    title: "Atherosclerosis (Dhamani Prachaya)",
    category: "Cardiovascular Health",
    overview: "The build-up of fats, cholesterol, and other substances in and on your artery walls (plaque), which can restrict blood flow.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Dull, crushing exertional chest discomfort (Angina)", "Shortness of breath under minor aerobic stress", "Cold feeling or numbness in upper or lower extremities"],
    treatments: ["Vascular wall lipid scrubbing", "Systemic blood lipid reduction profiling", "Endothelial inflammation dampening"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha and Medas (Fat) forming structural blocks inside Vata arterial channels",
      rootCauseText: "Low tissue metabolism paired with heavy, trans-fat heavy foods turns blood lipids into a sticky paste that hardens inside vascular spaces.",
      herbalRemedies: ["Guggulsterones to clean interior pathways", "Arjuna decoctions to build structural cardiac wall strength"],
      lifestyleAdjustments: ["Strict exclusion of processed hydrogenated cooking fats", "Engage in daily aerobic sweating protocols to break up circulatory paste"]
    },
    detailedArticle: "Atherosclerosis is treated as a plumbing blockage driven by cold, sticky toxins. We use warm, pungent, scraping herbs to break up internal wall plaques without stripping away natural arterial health."
  },

  // =========================================================================
  // 4. RESPIRATORY HEALTH (16-18)
  // =========================================================================
  "asthma": {
    title: "Bronchial Asthma (Tamaka Shwasa)",
    category: "Respiratory Health",
    overview: "A chronic inflammatory lung condition that narrows, swells, and blocks respiratory paths with thick mucus.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-75982139b0ad?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Wheezing exhalations and chest tightness", "Spasmodic nocturnal dry coughing fit cycles", "Shortness of breath under cold air exposure"],
    treatments: ["Bronchial dilation therapy", "Deep lung mucosal clearings", "Immune modulation stabilization"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha blocking Vata movement in the chest cavity",
      rootCauseText: "Weak stomach digestion allows sticky waste to ascend, congesting delicate pulmonary networks.",
      herbalRemedies: ["Sitopaladi Churna", "Vasavaleha (Adhatoda vasica)"],
      lifestyleAdjustments: ["Avoiding cold, raw foods completely", "Practicing daily chest-opening yoga postures"]
    },
    detailedArticle: "Tamaka Shwasa treatments focus heavily on the digestive-respiratory link. Releasing waste from the upper digestive tract relieves pressure on the diaphragm, clearing breathing dynamics."
  },
  "chronic-sinusitis": {
    title: "Chronic Sinusitis (Pratishyaya / Pinasa)",
    category: "Respiratory Care",
    overview: "A persistent inflammation of the cavities around nasal passages, preventing normal mucus drainage and leading to facial pressure and pain.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-75982139b0ad?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Thick, discolored nasal discharge and chronic nasal congestion", "Dull, aching pain and pressure around the eyes, cheeks, and forehead", "Reduced sense of smell and regular post-nasal drip"],
    treatments: ["Nasal sinus clearing therapies (Nasya)", "Upper respiratory tract drying protocols", "Immune defense strengthening"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha accumulation in the sinus cavities, aggravated by cold Vata",
      rootCauseText: "Chronic exposure to cold environments, damp weather, and dairy foods causes sticky mucus to build up and trap bacteria in the sinuses.",
      herbalRemedies: ["Trikatu powder to dry excess fluids", "Anu Taila nasal drops to clear and protect sinus pathways"],
      lifestyleAdjustments: ["Incorporate steam inhalations with eucalyptus or mint leaves daily", "Avoid cold drinks, yogurt, and ice cream entirely"]
    },
    detailedArticle: "Chronic sinusitis is treated by clearing cold, sticky mucus buildup from the upper respiratory passages. We use warming herbs and specialized nasal drops to remove blockages and strengthen your natural immunity against airborne irritants."
  },
  "copd": {
    title: "COPD / Bronchitis (Pranavaha Srotodushti)",
    category: "Respiratory Health",
    overview: "A progressive lung disease making breathing difficult, encompassing emphysema and chronic bronchitis, causing long-term lung tissue damage.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-75982139b0ad?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Chronic cough producing thick grey or white sputum", "Progressive breathlessness during minor household tasks", "Persistent wheezing sound signatures across chest walls"],
    treatments: ["Alveolar elasticity tissue support", "Mucus liquefaction clearing pathways", "Respiratory muscular framework rejuvenation"],
    ayurvedicPerspective: {
      doshaImbalance: "Dry Vata shrinking and damaging lung tissue while Kapha locks the remaining paths",
      rootCauseText: "Long-term irritation from smoke, toxins, or deep structural dryness destroys the delicate lining of air sacs, trapping old air.",
      herbalRemedies: ["Kantakari Avaleha", "Agastya Haritaki to support tissue health"],
      lifestyleAdjustments: ["Perform daily seated gentle pranayama without holding your breath", "Keep your living spaces free from synthetic aerosol sprays or perfumes"]
    },
    detailedArticle: "COPD protocols focus on rejuvenating the lungs. While lost lung tissue cannot be structurally recreated, we use nourishing oils and warm lung tonics to maximize the function of remaining tissues."
  },

  // =========================================================================
  // 5. DERMATOLOGY & SKIN CARE (19-22)
  // =========================================================================
  "psoriasis": {
    title: "Psoriasis (Kitibha Kushtha)",
    category: "Dermatology",
    overview: "An autoimmune skin condition that speeds up skin cell life cycles, causing thick, silvery scales and itchy patches.",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Raised silvery plaque deposits", "Severe skin dryness with bleeding fissures", "Intense, disruptive night itching"],
    treatments: ["Systemic immune response moderation", "Deep blood purification protocols", "Epidermal cell lifecycle normalization"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata-Kapha vitiation deep within blood tissues",
      rootCauseText: "Incompatible food pairings (Viruddha Ahara) produce deep systemic toxins that manifest on the skin.",
      herbalRemedies: ["Mahamanjisthadi Kwath", "Neem oil external layers"],
      lifestyleAdjustments: ["Eliminating combinations like milk with sour fruits or fish", "Protecting damaged skin barriers with pure coconut oil"]
    },
    detailedArticle: "Skin conditions reflect internal blood quality. Treatment avoids suppressive topical steroids. Instead, we use blood-cleansing herbs to calm the overactive immune responses at the root."
  },
  "eczema": {
    title: "Atopic Dermatitis / Eczema (Vicharchika)",
    category: "Dermatology Care",
    overview: "A chronic, recurring inflammatory skin condition causing itchy, red, dry, and cracked patches that can weep fluid when irritated.",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Intense, persistent itching that flares up at night", "Dry, red to brownish-gray patches on skin flexures", "Small fluid-filled bumps that ooze and crust when scratched"],
    treatments: ["Deep plasma and blood detoxification", "Skin tissue barrier restoration", "Immune system allergy loop regulation"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha and Pitta polluting the skin and muscle tissues",
      rootCauseText: "Poor digestion creates toxins that interact with hot, sensitive blood profiles, surfacing as weeping, itchy skin lesions.",
      herbalRemedies: ["Kaishore Guggulu for skin health", "Tikta Ghrita (Bitter medicated ghee) to cool tissues from within"],
      lifestyleAdjustments: ["Bathe exclusively in lukewarm water mixed with neem leaves", "Strictly avoid synthetic dyes, fragrances, and tight polyester clothing"]
    },
    detailedArticle: "Eczema shows that the body's internal filtration is overloaded, pushing toxins out through the skin. Topical steroids offer quick relief but can thin the skin. We use cooling, blood-purifying herbs to clear toxins safely from the inside out."
  },
  "acne-vulgaris": {
    title: "Acne Vulgaris (Mukhadosha / Yuvana Pidika)",
    category: "Dermatology Care",
    overview: "A common skin condition occurring when hair follicles become clogged with oil and dead skin cells, triggering local bacterial inflammation and breakouts.",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Persistent inflammatory papules, pustules, or deep nodules on the face", "Excessive sebum (oil) production across the T-zone", "Post-inflammatory scarring and dark skin discolorations"],
    treatments: ["Sebaceous gland secretion regulation", "Systemic blood and lymphatic purification", "Topical herbal cooling treatments"],
    ayurvedicPerspective: {
      doshaImbalance: "Pitta and Rakta (Blood) aggravation combined with Kapha oil blockages",
      rootCauseText: "Hormonal shifts, processed foods, and internal heat overload the liver, causing impurities to surface through facial sebum channels.",
      herbalRemedies: ["Manjistha root extracts to purify blood", "Neem and Khadir combinations to reduce bacterial flare-ups"],
      lifestyleAdjustments: ["Wash the face with plain, cool water 3-4 times daily", "Minimize deep-fried snacks, processed chocolates, and heavy night creams"]
    },
    detailedArticle: "Acne is often an indicator of internal heat accumulation and sluggish liver filtration. Instead of stripping the skin with harsh topical chemicals, we focus on clearing blood impurities and cooling the system to reduce oil production naturally."
  },
  "hair-loss": {
    title: "Alopecia & Hair Loss (Khalitya)",
    category: "Dermatology Care",
    overview: "A disruptive condition involving excessive hair shedding or thinning, caused by hormonal imbalances, poor scalp circulation, or nutrient deficiencies.",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Gradual thinning on top of the head or receding hairlines", "Sudden loosening of hair during washing or brushing", "Patchy, circular bald spots forming across the scalp"],
    treatments: ["Scalp hair follicle nourishment", "Local circulatory stimulation", "Systemic bone marrow and tissue support"],
    ayurvedicPerspective: {
      doshaImbalance: "Excessive Pitta Dosha scorching hair follicles, accelerated by Vata dryness",
      rootCauseText: "High mental stress, acidic diets, and excess internal heat travel to the scalp, shutting down hair follicle lifecycles prematurely.",
      herbalRemedies: ["Bhringraj (The King of Hair herbs) oil therapies", "Amalaki (Amla) to nourish hair roots from within"],
      lifestyleAdjustments: ["Perform daily 5-minute inversion scalp exercises", "Gently massage the scalp with warm, herbalized rosemary or sesame oil twice a week"]
    },
    detailedArticle: "Hair loss is a sign of internal heat drying out the hair roots. Our approach balances Pitta and nourishes the deep tissues that support hair growth, helping to restore natural health and thickness to the hair follicles."
  },

  // =========================================================================
  // 6. NEUROLOGY & MENTAL WELLNESS (23-26)
  // =========================================================================
  "migraine": {
    title: "Migraine (Ardhavhedhaka)",
    category: "Neurology",
    overview: "A neurological condition marked by intense, throbbing one-sided headaches, often accompanied by severe sensory sensitivities.",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Unilateral pulsing cranial pain", "Visual auras or flashing light distortions", "Nausea induced by sharp sounds or light"],
    treatments: ["Cerebral vascular tone regulation", "Central nervous system cooling tracking", "Trigeminal nerve hypersensitivity dampening"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata-Pitta crisis in cerebral channels",
      rootCauseText: "Skipping meals combined with direct sun exposure overheats and tightens sensitive neural blood networks.",
      herbalRemedies: ["Pathyadi Khadiradi Kwath", "Godanti Bhasma"],
      lifestyleAdjustments: ["Applying cool sandalwood paste to the temples", "Never delaying primary daytime meals"]
    },
    detailedArticle: "Ardhavhedhaka shows a system handling too much heat and internal movement. We resolve vascular contractions in the brain by calming Pitta and anchoring Vata rhythms."
  },
  "insomnia": {
    title: "Insomnia (Anidra)",
    category: "Psychiatry & Sleep Care",
    overview: "A sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or waking up too early without feeling refreshed.",
    imageUrl: "https://images.unsplash.com/photo-1511295742364-927d555be06f?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Lying awake for hours attempting to fall asleep", "Frequent nighttime awakenings with difficulty returning to rest", "Severe daytime irritability, fatigue, and poor concentration"],
    treatments: ["Cerebrospinal nervous system stabilization", "Melatonin pathway support", "Mental relaxation protocols (Shirodhara)"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata and Raja (Hyperactivity) occupying the mental channels (Manovaha Srotas)",
      rootCauseText: "Late-night screen time, overworking, and a dry nervous system fill the mind with erratic movement, blocking the heavy, restful qualities needed for sleep.",
      herbalRemedies: ["Tagara (Indian Valerian) for sleep quality", "Ashwagandha to lower cortisol and calm nervous energy"],
      lifestyleAdjustments: ["Massage the soles of the feet with warm sesame oil before bed", "Turn off all electronic screens 90 minutes before sleeping"]
    },
    detailedArticle: "Insomnia is treated by grounding an overactive nervous system. Instead of using sedatives that disrupt normal sleep cycles, we focus on nourishing a dry nervous system and calming mental chatter to support deep, natural rest."
  },
  "anxiety-disorder": {
    title: "Generalized Anxiety Disorder (Chitta Udvega)",
    category: "Psychiatry & Mental Care",
    overview: "A mental health condition marked by excessive, uncontrollable, and persistent worry about everyday events, accompanied by physical tension.",
    imageUrl: "https://images.unsplash.com/photo-1474418386616-3825021f58ae?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Persistent feelings of dread, restlessness, or being constantly on edge", "Physical indicators like muscle tension, sweating, and trembling", "Chronic overthinking that disrupts daily work and relationships"],
    treatments: ["Nervous system sympathetic down-regulation", "Mind-calming cognitive protocols", "Neurological tissue nourishment"],
    ayurvedicPerspective: {
      doshaImbalance: "Erratic Vata dosha unsettling the heart and mind channels",
      rootCauseText: "Irregular lifestyle habits, sensory overload, and poor emotional grounding leave the nervous system vulnerable to stress.",
      herbalRemedies: ["Brahmi to support cognitive balance", "Shankhapushpi to calm hyperactive mental loops"],
      lifestyleAdjustments: ["Practice 15 minutes of slow, rhythmic alternate-nostril breathing daily", "Incorporate warm, heavy, grounding root vegetables into your meals"]
    },
    detailedArticle: "Anxiety is a sign of excess movement within the nervous system. Our approach avoids temporary emotional numbing. Instead, we use grounding herbs and daily calming practices to stabilize nervous energy and help you handle life with greater resilience."
  },
  "depression": {
    title: "Depressive Disorders (Vishada)",
    category: "Psychiatry & Mental Care",
    overview: "A serious mood disorder causing a persistent feeling of sadness, loss of interest, and decreased physical and mental energy.",
    imageUrl: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Persistent flat mood, sadness, or a feeling of internal emptiness", "Significant loss of interest in activities that were once enjoyable", "Marked slowing down of speech, movement, and physical responses"],
    treatments: ["Mental channel stimulation (Prana stimulation)", "Serotonin and dopamine support pathways", "Neuro-protective therapies"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha sluggishness heavy on the heart, blocking Vata clarity",
      rootCauseText: "Suppressed emotions, a lack of physical movement, and metabolic toxins gather in mental channels, dimming enthusiasm and clear thought.",
      herbalRemedies: ["Vacha (Acorus calamus) to clarify mental channels", "Jyotishmati (Malkangani) oil to gently stimulate the nervous system"],
      lifestyleAdjustments: ["Wake up before sunrise and step immediately into bright natural light", "Engage in daily brisk physical exercise to help break internal stagnation"]
    },
    detailedArticle: "Depression is often felt as a heavy cloud that dims mental and physical energy. Treatment focuses on clearing metabolic and emotional buildup from the mind's channels, helping to restore clear thought, natural vitality, and emotional balance."
  },

  // =========================================================================
  // 7. MUSCULOSKELETAL CARE (27-30)
  // =========================================================================
  "osteoarthritis": {
    title: "Osteoarthritis (Sandhigata Vata)",
    category: "Musculoskeletal",
    overview: "A degenerative joint disease where the protective cartilage cushioning the ends of bones wears down over time.",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Deep, aching joint pain during movement", "Stiffness after prolonged periods of rest", "Audible bone clicking or popping (Crepitus)"],
    treatments: ["Joint lubricating treatments (Janu Basti)", "Cartilage degradation protection", "Bone tissue mineral optimization"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata drying out synovial fluids (Shleshaka Kapha)",
      rootCauseText: "Aging, coupled with cold, drying foods, increases systemic Vata, wearing away joint lubrication.",
      herbalRemedies: ["Shallaki (Boswellia)", "Yogaraj Guggulu"],
      lifestyleAdjustments: ["Applying warm sesame oil to joints daily", "Engaging in low-impact water therapies"]
    },
    detailedArticle: "Osteoarthritis isn't a permanent wear-and-tear dead end. By lubricating dry spaces internally and externally, we rebuild functional mobility and relieve structural pain."
  },
  "rheumatoid": {
    title: "Rheumatoid Arthritis (Amavata)",
    category: "Autoimmune & Musculoskeletal",
    overview: "A chronic inflammatory autoimmune disorder affecting the synovial lining of joints, causing painful swelling that can eventually lead to bone erosion and joint deformity.",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Symmetrical joint swelling, particularly in fingers and wrists", "Severe morning stiffness lasting over an hour", "Shifting joint pain accompanied by low-grade fever"],
    treatments: ["Deep systemic metabolic toxin digestion (Amapachana)", "Dry therapeutic heat applications (Valuka Sweda)", "Immune response modulating botanical treatments"],
    ayurvedicPerspective: {
      doshaImbalance: "Ama (Toxic Sludge) propelled by Vata into Joint Cavities",
      rootCauseText: "Incompatible food choices and low digestive fire cause undigested food to turn into toxic Ama. Vata carries this toxin to the joints, causing severe local tissue inflammation.",
      herbalRemedies: ["Simhanada Guggulu to scrape toxins", "Castor oil infusions for downward toxin elimination"],
      lifestyleAdjustments: ["Completely avoid heavy dairy, curd, and cold water", "Incorporate dry ginger and garlic into daily home-cooked meals"]
    },
    detailedArticle: "Amavata mimics an internal systemic poison. Suppressing joint pain with anti-inflammatory drugs only masks symptoms while toxins continue to damage bone matrix. Our strategy focuses heavily on kindling the digestive fire to process and eliminate toxic Ama from the root."
  },
  "gout": {
    title: "Gouty Arthritis (Vatarakta)",
    category: "Metabolic & Joint Care",
    overview: "A painful form of inflammatory arthritis caused by the accumulation of uric acid crystals within joint spaces, most commonly affecting the base of the big toe.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Sudden, intense throbbing joint pain occurring overnight", "Extreme localized redness, hypersensitivity, and heat", "Limited range of motion in the affected joint"],
    treatments: ["Blood purification therapies (Raktamokshana)", "Pitta-Vata neutralizing protocols", "Systemic uric acid clearance support"],
    ayurvedicPerspective: {
      doshaImbalance: "Vitiated Vata Dosha blocking the channels of Blood (Rakta Dhatu)",
      rootCauseText: "Excessive consumption of rich proteins, seafood, alcohol, and sour foods irritates both the blood tissue and the nervous system, obstructing circulation.",
      herbalRemedies: ["Kaishore Guggulu for blood cleansing", "Guduchi (Giloy) juice to balance internal heat indicators"],
      lifestyleAdjustments: ["Increase intake of clean, alkaline water to flush crystals", "Strictly avoid fermented foods, curd, and excessive red meats"]
    },
    detailedArticle: "Vatarakta highlights a breakdown in systemic filtration where toxins become trapped within the blood channels. By purifying the blood and stabilizing the heat signature of Pitta, we prevent uric acid crystallization and settle joint inflammation."
  },
  "cervical-spondylosis": {
    title: "Cervical Spondylosis (Griva Stambha)",
    category: "Musculoskeletal Care",
    overview: "Age-related wear and tear affecting the spinal disks in the neck, leading to chronic stiffness, discomfort, and occasional nerve compression.",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Chronic stiffness and aching pain localized in the neck and shoulders", "Radiating numbness or tingling sensations down the arms to the fingers", "Occasional mild dizziness or loss of balance when turning the head"],
    treatments: ["Neck tissue nourishment and lubrication (Griva Basti)", "Spinal nerve decompression support", "Muscle spasm relief"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata drying out the cervical spinal discs and narrowing nerve pathways",
      rootCauseText: "Poor posture, extended device use, aging, and cold, dry foods deplete neck joint lubrication, causing structural irritation.",
      herbalRemedies: ["Trayodashang Guggulu for spine health", "Prasarini oil for gentle local massage"],
      lifestyleAdjustments: ["Set computer screens at eye level to support healthy posture", "Avoid sleeping on overly thick, rigid pillows"]
    },
    detailedArticle: "Cervical Spondylosis is treated by lubricating the neck joints and soothing compressed nerves. Our approach uses specialized warm oil applications to deliver direct nourishment to dry spinal discs, helping to ease stiffness and restore comfortable movement."
  },

  // =========================================================================
  // 8. REPRODUCTIVE & UROLOGY CARE (31-32)
  // =========================================================================
  "pcos": {
    title: "PCOS / PCOD (Artava Kshaya)",
    category: "Reproductive Care",
    overview: "A widespread endocrine disorder among individuals of reproductive age, characterized by hormonal imbalances, irregular periods, and small ovarian cysts.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Irregular, delayed, or absent menstrual cycles", "Hirsutism (excessive facial and body hair growth) or severe cystic acne", "Rapid, stubborn weight gain around the abdomen"],
    treatments: ["Ovarian channel purification (Srotoshodhana)", "Hormonal feedback loop re-balancing", "Insulin sensitivity stabilization"],
    ayurvedicPerspective: {
      doshaImbalance: "Kapha and Vata blocking the female reproductive channels (Artava Vaha Srotas)",
      rootCauseText: "Excessive metabolic waste blocks the pathways of reproductive hormones, preventing normal follicle growth and regular ovulation cycles.",
      herbalRemedies: ["Kanchanar Guggulu to clear cystic growth", "Shatavari to nourish and build healthy ovulatory cycles"],
      lifestyleAdjustments: ["Eliminate processed dairy and refined sugars entirely", "Perform gentle twists and pelvic-opening yoga poses daily"]
    },
    detailedArticle: "PCOS is treated as a systemic metabolic-endocrine issue rather than just a localized ovarian problem. By clearing channel congestion and re-igniting metabolic fire, normal ovulation and hormonal balance return naturally."
  },
  "kidney-stones": {
    title: "Kidney Stones (Ashmari)",
    category: "Urology Care",
    overview: "Hard mineral and salt deposits that form inside the kidneys, causing severe, sharp pain along the urinary tract during elimination.",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["Sharp, severe pain radiating from the flank and back down to the groin", "Pain or burning sensations during urination", "Pink, red, or cloudy urine"],
    treatments: ["Natural mineral stone breakdown (Lithotriptic therapy)", "Urinary tract flushing and dilation", "Alkalizing crystal prevention paths"],
    ayurvedicPerspective: {
      doshaImbalance: "Vata drying out urinary chemicals combined with Kapha mass formation",
      rootCauseText: "Dehydration, high intake of dry foods, and chemical imbalances cause internal fluids to dry up, leaving behind mineral deposits that solidify.",
      herbalRemedies: ["Pashanbheda (Stone-breaker herb)", "Varuna bark decoctions to flush the urinary tract"],
      lifestyleAdjustments: ["Drink plenty of warm water throughout the day", "Strictly avoid high-oxalate foods like spinach, tomatoes, and packed salts"]
    },
    detailedArticle: "Ashmari treatments focus on breaking down mineral structures safely while soothing the urinary lining. We use natural diuretics and stone-dissolving herbs to flush out crystals without damaging internal tissues."
  },
  "uti": {
    title: "Urinary Tract Infection (Mutrakrichha)",
    category: "Urology Care",
    overview: "An infection in any part of the urinary system—most commonly the bladder or urethra—causing inflammation, burning sensations, and a frequent urge to urinate.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    symptoms: ["A strong, persistent urge to urinate accompanied by a painful, burning sensation", "Passing frequent, small amounts of cloudy, strong-smelling, or dark urine", "Pelvic pressure or discomfort in the lower abdomen"],
    treatments: ["Antimicrobial clearance paths", "Bladder soothing and anti-inflammatory therapy", "Natural urinary flushing and pH balancing"],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Pitta dosha producing internal heat and inflammation in the urinary channel (Mutravaha Srotas)",
      rootCauseText: "Excessive consumption of hot, spicy, or sour foods, suppression of natural urges, and insufficient hydration lead to accumulated heat that irritates and inflames the urinary lining.",
      herbalRemedies: ["Gokshura (Tribulus terrestris) to soothe the lining and act as a natural diuretic", "Punarnava to reduce swelling, inflammation, and flush out toxins"],
      lifestyleAdjustments: ["Drink cooling fluids like fresh coconut water and coriander seed infusions throughout the day", "Strictly avoid spicy, fermented foods, alcohol, and excessive exposure to extreme sun or heat"]
    },
    detailedArticle: "Mutrakrichha treatments focus on cooling the aggravated Pitta dosha, subduing irritation, and eliminating microbial stagnation safely. We use cooling diuretics and natural anti-inflammatory herbs to cleanse the tract, soothe the bladder wall, and restore a balanced urinary environment."
  },
  "fungal-infections": {
    title: "Fungal Infection / Ringworm (Dadru Kushtha)",
    category: "Dermatology & Skin Care",
    overview: "A highly contagious, superficial fungal infection of the skin tissue layer, characterized by circular, red, elevated patches with distinct borders.",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Circular, ring-shaped skin rashes with raised, scaly red edges",
      "Intense localized itching, burning sensations, and skin peeling",
      "Spreading patches with clear centers, appearing on body flexures"
    ],
    treatments: [
      "Systemic and topical antifungal clearance protocols",
      "Skin moisture-barrier drying and optimization",
      "Epidermal inflammation and secondary infection defense"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Kapha and Pitta doshas corrupting the skin and blood (Rakta Dhatu)",
      rootCauseText: "Excessive moisture, sweat accumulation, high intake of sour or fermented foods, and poor personal hygiene allow toxic dampness to breed skin pathogens.",
      herbalRemedies: [
        "Chakramarda (Cassia tora) seed paste, recognized as a potent anti-ringworm botanical",
        "Gandhak Rasayan internally to purify the blood stream and eliminate fungal heat anomalies"
      ],
      lifestyleAdjustments: [
        "Strictly wash all clothing and linens in warm neem-infused water",
        "Keep the affected skin folds thoroughly clean, dry, and free from heavy oils or creams",
        "Eliminate sour curds, packed vinegar, and excessive sweets from daily meals"
      ]
    },
    detailedArticle: "Dadru Kushtha is treated as an eruption of internal dampness and corrupted heat breaking out through the surface skin layers. Suppressing the condition with quick chemical ointments often pushes the dampness deeper, causing it to flare up again later. Our approach uses natural blood-purifying tonics to dry out the excess Kapha moisture from within while applying potent, cooling antimicrobial herbs to clear the skin surface completely."
  },

  "fissures": {
    title: "Anal Fissures & Fistulas (Parikartika & Bhagandara)",
    category: "Anorectal Care",
    overview: "Painful structural disorders of the anal canal, ranging from acute mucosal lining tears (Fissures) to abnormal infected tunnel pathways connecting the bowel wall to the outer skin (Fistulas).",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Severe, sharp cutting pain during and for hours following bowel movements",
      "Bright red blood visible on stools or toilet tissue",
      "Persistent, foul-smelling discharge or pus drainage from a small external opening near the anus"
    ],
    treatments: [
      "Sphincter pressure reduction and stool softening paths",
      "Surgical fistulotomy or specialized medicated thread ligation (Kshara Sutra therapy)",
      "Tissue-repair enhancement and localized wound cleansing"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Vata causing dryness and splitting (Fissures) combined with vitiated Pitta-Kapha generating deep suppuration and abscess channels (Fistulas)",
      rootCauseText: "Chronic, hard-stool constipation, straining during elimination, and internal digestive toxin buildup weaken the tissue elasticity of the pelvic floor, leading to structural tears or localized deep infections.",
      herbalRemedies: [
        "Triphala Guggulu to reduce localized swelling, fight infection, and accelerate internal tissue repair",
        "Jatyadi Taila applied topically as a deeply soothing, antimicrobial healing oil for raw membranes"
      ],
      lifestyleAdjustments: [
        "Incorporate daily warm sitz baths (Avagaha Sweda) with rock salt or Triphala decoctions to relax the pelvic floor sphincter",
        "Consume a highly fibrous, easily digestible diet featuring warm clarified butter (Ghee) to naturally lubricate the digestive tract",
        "Strictly avoid dry, astringent foods, heavy red meat, refined flour, and prolonged sitting on hard surfaces"
      ]
    },
    detailedArticle: "Anorectal disruptions like Parikartika and Bhagandara indicate a systemic breakdown in metabolic fire and bowel moisture management. Quick superficial fixes often fail if chronic constipation and vascular tension remain unaddressed. Our management protocol utilizes natural mild laxatives to protect the healing mucosa from friction, alongside highly specialized, medicated cutting threads (Kshara Sutra) for complex fistulas to simultaneously drain, debride, and close the tract cleanly from the inside out."
  },

  "piles": {
    title: "Piles / Hemorrhoids (Arsha)",
    category: "Anorectal Care",
    overview: "Pathologically swollen, inflamed, and dilated veins within the anal canal and lower rectum, resulting from chronic vascular pressure and structural breakdown of the supportive connective tissues.",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Painless bright red bleeding during or immediately following bowel movements",
      "Persistent anal itching, irritation, and the sensation of a prolapsed mass or lump near the anal opening",
      "Dull ache, throbbing discomfort, or sharp pain aggravated by prolonged sitting or elimination strain"
    ],
    treatments: [
      "Colonic transit acceleration and stool consistency optimization",
      "Topical anti-inflammatory, astringent, and soothing vascular barrier applications",
      "Minimally invasive ligation, rubber band procedures, or specialized Kshara Sutra therapy"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Vata-Kapha dominance obstructing local blood vessels, deeply linked with Mandagni (sluggish digestive fire)",
      rootCauseText: "A weak digestive fire leads to chronic accumulation of digestive toxins (Ama) and persistent constipation. The resulting physical strain severely disrupts the downward flow of Apana Vayu, creating chronic blood stagnation and swelling in the anal cushions.",
      herbalRemedies: [
        "Arshoghni Vati to effectively dry up, shrink, and reduce the vascular mass of external and internal piles",
        "Abhayarishta as a fermented herbal liquid to seamlessly improve liver function, rekindle Agni, and soften bowel movements"
      ],
      lifestyleAdjustments: [
        "Incorporate Suran (Elephant Foot Yam) into regular warm meals to stimulate vascular tone in the lower bowel area",
        "Engage in daily warm water sitz baths infused with a Triphala decoction to quickly relieve local pain and swelling",
        "Completely eliminate dry, raw, hyper-spicy foods, deeply fermented products, and prolonged periods of static sitting"
      ]
    },
    detailedArticle: "In Ayurveda, Arsha is categorized among the 'Maharogas' (grave diseases) because its roots trace deeply back to a chronic failure of the digestive fire (Mandagni). Treating hemorrhoids purely with topical creams provides only temporary relief if the underlying colon sluggishness remains. Our clinical approach focuses on restoring the optimal descending flow of Apana Vayu through internal lubrication, ensuring complete, effortless bowel evacuation while using target astringent herbs to reduce, clear, and heal vascular inflammation naturally."
  },
  "hypertension-bp": {
    title: "Hypertension (Rakta Gata Vata)",
    category: "Chronic & Metabolic Care",
    overview: "A chronic cardiovascular disorder characterized by sustained elevation of systemic arterial blood pressure, imposing high mechanical shear stress on vascular walls and increasing long-term organ vulnerabilities.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Occipital headaches, lightheadedness, and periodic episodes of vertigo or tinnitus",
      "Palpitations, chest heaviness, and exertional shortness of breath",
      "Often entirely asymptomatic during early stages, earning the clinical designation of a silent killer"
    ],
    treatments: [
      "Vascular resistance reduction and endothelial barrier protection paths",
      "Systemic sodium restriction and circulatory fluid volume management",
      "Central nervous system calming and autonomic axis stabilization"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Vitiated Vata and Pitta doshas invading the circulatory fluids (Rasa and Rakta Dhatus)",
      rootCauseText: "Hyper-reactivity of Vyana Vayu combined with the sharp heat of Ranjaka Pitta causes constriction and stiffness in the circulatory channels (Srotas). Mental stress, combined with inflammatory diets, hardens these pathways, forcing the heart to exert excessive force.",
      herbalRemedies: [
        "Sarpagandha (Rauvolfia serpentina) to naturally calm the nervous system and rapidly reduce vascular tone",
        "Arjuna Bark Decoction to strengthen the cardiac muscles, optimize circulation, and maintain clear arterial walls"
      ],
      lifestyleAdjustments: [
        "Practice daily Nadi Shodhana (alternate nostril breathing) and Shavasana to lower sympathetic nervous system activation",
        "Receive regular warm oil Shirodhara or gentle scalp oiling to ground erratic Vata movement and soothe mental tension",
        "Strictly minimize hyper-saline (overly salty), sour, deep-fried foods, and eliminate stimulant triggers like nicotine and caffeine"
      ]
    },
    detailedArticle: "From an Ayurvedic standpoint, Rakta Gata Vata (high blood pressure) is not merely a localized cardiac failure, but a complex systemic disturbance where an overactive nervous system (Vata) pushes hot blood impurities (Pitta) through rigid, unyielding pathways. Treating it solely with diuretics ignores the underlying vascular stress. Our management strategy focuses on blood purification (Rakta Prasadana) to remove internal heat, alongside deep nervous system grounding (Vata Shamana) to naturally dilate channels, restore structural arterial elasticity, and protect long-term heart vitality."
  },
  "gallstones": {
    title: "Gallbladder Stones (Pittashmari)",
    category: "Gastroenterology & Metabolic Care",
    overview: "Solidified crystalline deposits of cholesterol or bilirubin that form within the gallbladder, frequently obstructing the bile ducts and causing intense spasmodic upper abdominal pain.",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Sudden, rapidly intensifying pain in the upper right quadrant of the abdomen, radiating to the right shoulder or back",
      "Nausea, vomiting, and severe post-meal bloating—particularly after consuming fatty, heavy, or fried foods",
      "Episodic biliary colic attacks lasting from several minutes to hours, often accompanied by low-grade fever or indigestion"
    ],
    treatments: [
      "Biliary lipid balance optimization and stone dissolution pathways",
      "Smooth muscle antispasmodic therapy and systemic bile flow facilitation",
      "Surgical intervention (cholecystectomy) for recurrent, severe obstructive complications"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Vitiated Pitta stagnation combined with erratic Vata drying, leading to Kapha mass formation (Granthi) inside the bile channels",
      rootCauseText: "A chronic sluggishness of the metabolic fire (Mandagni) leads to liver congestion and toxic bile formation (Amadosha). When unctuous Kapha fluid solidifies due to the dry, cold properties of Vata, it forms hard mineralized structures within the Pitta-dominated gallbladder repository.",
      herbalRemedies: [
        "Arogyavardhini Vati to stimulate optimum bile secretion, clear hepatic toxins, and naturally purify the blood",
        "Bhumyamalaki (Phyllanthus niruri) to strengthen liver function, liquefy sludge, and reduce gallbladder lining inflammation"
      ],
      lifestyleAdjustments: [
        "Incorporate bitter spices like turmeric, ginger, and fenugreek seeds into warm meals to stimulate thin, free-flowing bile production",
        "Sip warm water mixed with a few drops of fresh lemon juice on an empty stomach to tone the liver and upper gastrointestinal tract",
        "Strictly avoid heavy, deep-fried foods, hydrogenated vegetable fats, red meat, stale leftovers, and late-night snacking"
      ]
    },
    detailedArticle: "In the Ayurvedic framework, Pittashmari indicates a metabolic stagnation within the liver axis where the fluid qualities of Kapha dry up inside the hot reservoir of Pitta. Standard medical strategies often default to organ removal, which treats the end product but leaves the underlying liver sluggishness intact. Our clinical management focuses on clearing metabolic toxins (Ama) from the biliary tree using bitter, cholagogue herbs. By reducing bile viscosity and thinning out liver sludge, we calm gallbladder inflammation and prevent further stone aggregation naturally."
  },
  "viral-fevers": {
    title: "Viral & Acute Infectious Fevers (Dengue & Typhoid)",
    category: "Infectious Disease Management",
    overview: "Acute systemic inflammatory responses to viral (Dengue) or bacterial (Typhoid) pathogens, characterized by high-grade pyrexia, severe musculoskeletal ache, and varying degrees of systemic organ strain.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "High-grade intermittent or continuous fever with chills and extreme fatigue",
      "Severe retro-orbital pain, joint/muscle agony (often called 'breakbone' fever), and localized rashes",
      "Persistent headache, digestive disturbance (diarrhea or constipation), and abdominal tenderness"
    ],
    treatments: [
      "Hydration maintenance and electrolyte-balance support",
      "Antipyretic and anti-inflammatory pathways to control hyper-metabolic heat",
      "Immune system modulation and viral load/bacterial clearance support"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Severe Jwara (fever) resulting from systemic Pitta-Kapha vitiation invading the plasma (Rasa) and blood (Rakta) tissues",
      rootCauseText: "Acute environmental toxins (Agantuja) or pathogen-driven imbalances overwhelm the body’s Agni (metabolic fire). This causes a buildup of Ama (toxic metabolic byproduct), which obstructs the micro-channels (Srotas), preventing heat dissipation and causing severe systemic inflammation.",
      herbalRemedies: [
        "Giloy (Tinospora cordifolia) to modulate the immune response, lower fever, and restore platelet/blood integrity",
        "Papaya Leaf Extract to naturally boost thrombocyte (platelet) counts during acute viral phases",
        "Mahasudarshan Ghana Vati as a broad-spectrum antipyretic tonic to clear deep-seated systemic heat"
      ],
      lifestyleAdjustments: [
        "Strictly adhere to a light, liquid-based diet (e.g., moong dal soup or rice water) to support the weakened digestive fire",
        "Maintain absolute physical rest and minimize environmental sensory stimulation to conserve life-force (Ojas)",
        "Use cool, damp sponge baths to manage surface heat without triggering a Vata-aggravating shivering response"
      ]
    },
    detailedArticle: "In Ayurveda, acute fevers are viewed as the body’s intense, localized battle against external pathogens (Agantuja Jwara). The primary objective is to 'digest' the accumulated toxic Ama while pacifying the aggravated heat (Pitta) that threatens to damage vital tissues. Unlike simple fever suppressants, our approach uses immunomodulatory herbs like Giloy to strengthen the body’s innate defense mechanisms and stabilize the blood-tissue environment, ensuring a clean recovery without the typical post-viral exhaustion."
  },
  "skin-allergies": {
    title: "Skin Allergies & Rashes (Sheetapitta / Urticaria)",
    category: "Dermatology & Skin Care",
    overview: "Immune-mediated skin hyper-reactivity resulting in rapid localized edema, pruritus (intense itching), and erythematous wheals triggered by allergens or environmental stress.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Sudden onset of raised, red, itchy skin wheals (hives) that appear and disappear intermittently",
      "Burning or stinging sensation on the skin surface",
      "Localized swelling (angioedema) in delicate areas like the eyelids or lips"
    ],
    treatments: [
      "Antihistamine-based inflammatory control",
      "Allergen trigger avoidance and skin barrier protection",
      "Systemic detoxification to lower allergic threshold"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Aggravated Vata and Pitta doshas colliding within the skin tissue (Twak)",
      rootCauseText: "External cold exposure hitting a body burdened with internal metabolic heat (Pitta) creates a reaction in the blood (Rakta). Incompatible food combinations (Viruddha Ahara), such as consuming dairy with acidic fruits, frequently trigger these systemic eruptions.",
      herbalRemedies: [
        "Haridrakhanda (Turmeric-based compound) to effectively modulate the immune response and stop recurrent hive formation",
        "Guduchi (Giloy) stem extract to purify the blood and cool the Pitta-driven skin burning sensations"
      ],
      lifestyleAdjustments: [
        "Topically apply warm mustard oil infused with crushed garlic to soothe the Vata-driven itching and heat",
        "Avoid all fermented foods, sour pickles, citrus fruits, and sudden transitions between cold and hot environments",
        "Maintain a daily routine of gentle skin protection and avoid harsh synthetic detergents"
      ]
    },
    detailedArticle: "Sheetapitta is an acute manifestation of internal metabolic incompatibility where the body struggles to process environmental or dietary stressors. Rather than simply suppressing the symptoms with chemical blockers, our Ayurvedic clinical approach targets the root impurity in the blood (Rakta) and cleanses the digestive pathways. By restoring the natural cooling balance and eliminating dietary triggers, we strengthen the skin’s own immune barrier against recurring flare-ups."
  },
  "vitiligo": {
    title: "Vitiligo & Pigmentation (Shvitra)",
    category: "Dermatology & Skin Care",
    overview: "An autoimmune-related dermatological condition characterized by the destruction of melanocytes, resulting in well-demarcated depigmented patches on the skin.",
    imageUrl: "https://images.unsplash.com/photo-1596752718160-b88a8f4c330f?q=80&w=1200&auto=format&fit=crop",
    symptoms: [
      "Gradual appearance of white, depigmented skin patches often starting on extremities or face",
      "Premature whitening or graying of hair on the scalp, eyelashes, or eyebrows",
      "Increased sensitivity of affected skin areas to sunlight, leading to easy burning"
    ],
    treatments: [
      "Phototherapy and melanocyte stimulation pathways",
      "Systemic immune modulation and antioxidant defense",
      "Topical repigmentation support and tissue rejuvenation"
    ],
    ayurvedicPerspective: {
      doshaImbalance: "Tridosha-vitiation (primarily Pitta and Kapha) affecting the Bhrajaka Pitta layer responsible for skin complexion",
      rootCauseText: "Deep-seated digestive sluggishness (Mandagni) leads to the buildup of toxins that block micro-channels in the skin, eventually poisoning the melanocytes. Incompatible food combinations (Viruddha Ahara), such as milk mixed with fish or salt, are often identified as primary triggers.",
      herbalRemedies: [
        "Bakuchi (Psoralea corylifolia) oil for targeted topical application to stimulate pigment-producing cells under controlled sun exposure",
        "Arogyavardhini Vati to cleanse the liver and blood, addressing the systemic root of pigmentation loss"
      ],
      lifestyleAdjustments: [
        "Expose affected skin areas to gentle, early morning sunlight to activate natural pigment production",
        "Strictly adhere to a clean, non-inflammatory diet; avoid all fermented, sour, and heavy dairy/fish combinations",
        "Incorporate cooling, blood-purifying leafy greens and avoid extreme synthetic chemical contact with the skin"
      ]
    },
    detailedArticle: "In Ayurveda, Shvitra is classified as a condition of toxic accumulation (Kushtha) that has settled in the skin due to long-term poor dietary discipline and liver sluggishness. It is not merely a surface aesthetic issue but a systemic message from the body that the liver and blood purification processes are obstructed. Our approach combines potent photosensitizing herbs like Bakuchi with deep blood-purifying therapies to gradually restore the natural pigment-producing capacity of the skin from the inside out."
  }
};