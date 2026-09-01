import Footer from "@/components/Footer";
import React from "react";
import Link from "next/link";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  conditions: string[];
  type: "Ayurveda" | "Modern" | "Integrated";
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "diabetes",
      icon: "🩸",
      title: "Diabetes & Blood Sugar Care",
      description:
        "Personalized care for blood sugar management combining Ayurvedic principles, lifestyle guidance and appropriate modern medical evaluation.",
      conditions: [
        "Type 2 Diabetes",
        "High Blood Sugar",
        "Prediabetes",
        "Insulin Resistance",
      ],
      type: "Integrated",
    },
    {
      id: "thyroid",
      icon: "🦋",
      title: "Thyroid & Hormonal Health",
      description:
        "Individualized assessment and treatment guidance for thyroid and hormonal concerns with attention to lifestyle, nutrition and medical needs.",
      conditions: [
        "Hypothyroidism",
        "Thyroid Imbalance",
        "Hormonal Imbalance",
        "Metabolic Concerns",
      ],
      type: "Integrated",
    },
    {
      id: "pcos",
      icon: "🌸",
      title: "PCOS & Women's Health",
      description:
        "Personalized healthcare for PCOS and related hormonal concerns, combining lifestyle, Ayurvedic care and appropriate medical support.",
      conditions: [
        "PCOS",
        "Irregular Periods",
        "Hormonal Imbalance",
        "Weight-related Concerns",
      ],
      type: "Integrated",
    },
    {
      id: "digestive",
      icon: "🌿",
      title: "Digestive & Gut Health",
      description:
        "Care for common digestive concerns with an individualized approach to diet, lifestyle, Ayurvedic principles and modern clinical evaluation.",
      conditions: [
        "Acidity",
        "Constipation",
        "Bloating",
        "Indigestion",
      ],
      type: "Ayurveda",
    },
    {
      id: "piles",
      icon: "🩺",
      title: "Piles, Fissure & Fistula Care",
      description:
        "Assessment and personalized treatment guidance for anorectal conditions using appropriate Ayurvedic and modern approaches.",
      conditions: [
        "Piles",
        "Anal Fissure",
        "Fistula",
        "Anorectal Concerns",
      ],
      type: "Integrated",
    },
    {
      id: "skin",
      icon: "✨",
      title: "Skin & Hair Care",
      description:
        "Comprehensive care for skin and hair concerns with individualized treatment based on the condition, medical history and clinical assessment.",
      conditions: [
        "Psoriasis",
        "Eczema",
        "Acne",
        "Hair & Scalp Problems",
      ],
      type: "Integrated",
    },
    {
      id: "arthritis",
      icon: "🦴",
      title: "Joint, Arthritis & Pain Care",
      description:
        "Personalized management of joint and musculoskeletal concerns using appropriate Ayurvedic therapies, lifestyle guidance and modern medical care.",
      conditions: [
        "Arthritis",
        "Joint Pain",
        "Back Pain",
        "Muscle & Joint Stiffness",
      ],
      type: "Integrated",
    },
    {
      id: "blood-pressure",
      icon: "❤️",
      title: "Blood Pressure & Heart Health",
      description:
        "Regular monitoring and individualized healthcare for blood pressure and cardiovascular risk factors with appropriate medical guidance.",
      conditions: [
        "High Blood Pressure",
        "Cardiovascular Risk",
        "Lifestyle-related Concerns",
        "Stress-related Factors",
      ],
      type: "Modern",
    },
    {
      id: "liver",
      icon: "🫀",
      title: "Liver & Metabolic Health",
      description:
        "Care focused on liver health, metabolic wellbeing, nutrition and lifestyle alongside appropriate clinical evaluation.",
      conditions: [
        "Fatty Liver",
        "Metabolic Concerns",
        "Liver Health",
        "Lifestyle-related Conditions",
      ],
      type: "Integrated",
    },
    {
      id: "sexual-health",
      icon: "🌱",
      title: "Men's & Sexual Health",
      description:
        "Confidential, respectful healthcare for men's wellness and sexual health concerns with individualized medical and Ayurvedic guidance.",
      conditions: [
        "Men's Wellness",
        "Sexual Health Concerns",
        "Lifestyle Factors",
        "General Reproductive Wellness",
      ],
      type: "Integrated",
    },
    {
      id: "lifestyle",
      icon: "🍃",
      title: "Lifestyle & Preventive Care",
      description:
        "Build healthier routines around nutrition, sleep, activity and stress management to support long-term wellbeing.",
      conditions: [
        "Weight Management",
        "Stress Management",
        "Sleep & Routine",
        "Preventive Wellness",
      ],
      type: "Ayurveda",
    },
    {
      id: "general",
      icon: "➕",
      title: "General Medical Consultation",
      description:
        "Professional consultation for general health concerns with appropriate referral, investigation and treatment guidance when required.",
      conditions: [
        "General Health Concerns",
        "Health Assessment",
        "Medical Guidance",
        "Follow-up Care",
      ],
      type: "Modern",
    },
  ];

  const careSteps = [
    {
      number: "01",
      title: "Listen & Understand",
      description:
        "We begin by understanding your symptoms, health history, lifestyle and concerns.",
    },
    {
      number: "02",
      title: "Clinical Assessment",
      description:
        "Your condition is assessed carefully and investigations may be recommended when medically appropriate.",
    },
    {
      number: "03",
      title: "Personalized Treatment",
      description:
        "Your care plan may include Ayurvedic treatment, modern medicine, lifestyle guidance or a suitable combination.",
    },
    {
      number: "04",
      title: "Follow-up & Support",
      description:
        "We monitor your progress and adjust your care plan according to your response and clinical needs.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937] antialiased overflow-hidden">

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#FDF2F8]">

          {/* Decorative shapes */}
          <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#831843]/10 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-[#047857]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">

            <div className="max-w-4xl mx-auto text-center">

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#831843]/10 px-4 py-2 shadow-sm">

                <span className="h-2 w-2 rounded-full bg-[#047857]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#831843]">
                  Our Healthcare Services
                </span>

              </div>

              {/* Heading */}
              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#1F2937]">

                Complete Healthcare.
                <br />

                <span className="text-[#831843]">
                  Ayurvedic Wisdom + Modern Medicine.
                </span>

              </h1>

              {/* Description */}
              <p className="max-w-3xl mx-auto mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-[#4B5563]">
                At Suman Arogya, we provide personalized healthcare for a
                wide range of health conditions. Our approach brings together
                Ayurvedic principles, modern medical care, lifestyle guidance
                and clinical expertise according to each patient's needs.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-[#831843] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/20 transition-all duration-300 hover:bg-[#9D174D] hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>

                <a
                  href="tel:+918700693622"
                  className="inline-flex items-center justify-center rounded-xl border border-[#047857] bg-white px-7 py-3.5 text-sm font-bold text-[#047857] transition-all duration-300 hover:bg-[#047857] hover:text-white"
                >
                  Call +91 8700693622
                </a>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            TRUST / APPROACH STRIP
        ========================================================== */}
        <section className="relative z-20 -mt-8 px-6">

          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Ayurveda */}
              <div className="bg-white rounded-2xl border border-[#047857]/15 p-6 shadow-[0_15px_40px_rgba(4,120,87,0.08)]">

                <div className="flex items-start gap-4">

                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-[#047857]/10 flex items-center justify-center text-xl">
                    🌿
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F2937]">
                      Ayurvedic Care
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                      Individualized care inspired by Ayurvedic principles,
                      diet and lifestyle.
                    </p>
                  </div>

                </div>

              </div>


              {/* Modern */}
              <div className="bg-white rounded-2xl border border-[#831843]/15 p-6 shadow-[0_15px_40px_rgba(131,24,67,0.08)]">

                <div className="flex items-start gap-4">

                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-xl text-[#831843]">
                    +
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F2937]">
                      Modern Medical Care
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                      Contemporary medical consultation and treatment when
                      appropriate.
                    </p>
                  </div>

                </div>

              </div>


              {/* Integrated */}
              <div className="bg-white rounded-2xl border border-[#F59E0B]/20 p-6 shadow-[0_15px_40px_rgba(245,158,11,0.07)]">

                <div className="flex items-start gap-4">

                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-xl text-[#F59E0B]">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F2937]">
                      Personalized Approach
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                      Treatment guidance based on your condition and
                      individual healthcare needs.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            SERVICES DIRECTORY
        ========================================================== */}
        <section className="bg-white py-24 lg:py-32">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Heading */}
            <div className="max-w-3xl mb-14">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                Conditions We Support
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#1F2937]">

                Healthcare for your
                <span className="text-[#831843]">
                  {" "}individual needs.
                </span>

              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] max-w-2xl">
                Explore some of the health conditions and areas of care
                supported by our medical team.
              </p>

            </div>


            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {services.map((service) => (

                <article
                  key={service.id}
                  className="group relative bg-white rounded-[1.75rem] border border-[#831843]/10 p-7 shadow-[0_10px_35px_rgba(31,41,55,0.045)] hover:shadow-[0_20px_50px_rgba(131,24,67,0.10)] hover:-translate-y-1 transition-all duration-300"
                >

                  {/* Top accent */}
                  <div className="absolute top-0 left-7 right-7 h-[3px] rounded-b-full bg-[#831843] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                  {/* Icon + type */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="h-14 w-14 rounded-2xl bg-[#FDF2F8] border border-[#831843]/10 flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>

                    <span
                      className={`
                        rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide border
                        ${
                          service.type === "Ayurveda"
                            ? "bg-[#047857]/5 text-[#047857] border-[#047857]/15"
                            : service.type === "Modern"
                            ? "bg-[#FDF2F8] text-[#831843] border-[#831843]/15"
                            : "bg-[#F59E0B]/5 text-[#9A5B00] border-[#F59E0B]/20"
                        }
                      `}
                    >
                      {service.type}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mt-6 text-xl font-black text-[#1F2937] group-hover:text-[#831843] transition-colors">
                    {service.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                    {service.description}
                  </p>


                  {/* Conditions */}
                  <div className="mt-6 pt-5 border-t border-[#831843]/10">

                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B5563]">
                      Common concerns
                    </span>

                    <div className="mt-3 grid grid-cols-1 gap-2">

                      {service.conditions.map((condition) => (

                        <div
                          key={condition}
                          className="flex items-center gap-2 text-xs font-medium text-[#1F2937]"
                        >

                          <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />

                          <span>
                            {condition}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* Link */}
                  <Link
                    href="/book-appointment"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#831843] group-hover:text-[#9D174D]"
                  >
                    Discuss your condition
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            INTEGRATED CARE SECTION
        ========================================================== */}
        <section className="bg-[#FDF2F8] border-y border-[#831843]/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left */}
              <div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                  Our Approach
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1F2937]">

                  One patient.
                  <br />

                  <span className="text-[#831843]">
                    The right approach.
                  </span>

                </h2>

                <p className="mt-6 text-base sm:text-lg leading-7 text-[#4B5563]">
                  Ayurveda and modern medicine can offer different tools for
                  different healthcare needs. At Suman Arogya, we focus on
                  understanding the individual condition before deciding what
                  type of care is appropriate.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full bg-white border border-[#047857]/15 px-4 py-2 text-xs font-bold text-[#047857]">
                    Ayurvedic Consultation
                  </span>

                  <span className="rounded-full bg-white border border-[#831843]/15 px-4 py-2 text-xs font-bold text-[#831843]">
                    Modern Medical Care
                  </span>

                  <span className="rounded-full bg-white border border-[#F59E0B]/20 px-4 py-2 text-xs font-bold text-[#9A5B00]">
                    Lifestyle Guidance
                  </span>

                </div>

              </div>


              {/* Right */}
              <div className="space-y-4">

                <div className="rounded-3xl bg-white border border-[#047857]/15 p-7 shadow-sm">

                  <div className="flex gap-5">

                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#047857]/10 flex items-center justify-center text-xl">
                      🌿
                    </div>

                    <div>

                      <h3 className="text-lg font-black text-[#1F2937]">
                        Ayurvedic Medicine
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                        Ayurvedic consultation, personalized lifestyle
                        guidance, diet recommendations and appropriate
                        Ayurvedic treatment based on individual needs.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="rounded-3xl bg-white border border-[#831843]/15 p-7 shadow-sm">

                  <div className="flex gap-5">

                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-xl text-[#831843]">
                      +
                    </div>

                    <div>

                      <h3 className="text-lg font-black text-[#1F2937]">
                        Modern Medicine
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                        Medical consultation, clinical assessment,
                        investigations and modern treatment when medically
                        appropriate.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="rounded-3xl bg-[#1F2937] p-7 text-white shadow-sm">

                  <div className="flex gap-5">

                    <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-[#F59E0B]">
                      ✓
                    </div>

                    <div>

                      <h3 className="text-lg font-black">
                        Personalized Care Plan
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        The goal is to choose a safe and appropriate care
                        pathway based on your condition, history and clinical
                        requirements.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            HOW WE CARE
        ========================================================== */}
        <section className="bg-white py-24 lg:py-32">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                How We Care For You
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2937]">
                From consultation to
                <span className="text-[#831843]">
                  {" "}ongoing care.
                </span>
              </h2>

              <p className="mt-5 text-[#4B5563] leading-7">
                We keep the process clear, personal and focused on your
                healthcare needs.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {careSteps.map((step, index) => (

                <div
                  key={step.number}
                  className="relative rounded-3xl border border-[#831843]/10 bg-white p-7 shadow-[0_10px_35px_rgba(31,41,55,0.04)]"
                >

                  {/* Connector */}
                  {index !== careSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-6 w-6 h-px bg-[#831843]/15" />
                  )}

                  <div className="flex items-center justify-between">

                    <span className="text-3xl font-black text-[#831843]/15">
                      {step.number}
                    </span>

                    <span className="h-9 w-9 rounded-full bg-[#FDF2F8] flex items-center justify-center text-[#047857] font-bold">
                      ✓
                    </span>

                  </div>

                  <h3 className="mt-7 text-lg font-black text-[#1F2937]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                    {step.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            CONDITIONS CTA
        ========================================================== */}
        <section className="px-6 pb-24 lg:pb-32">

          <div className="max-w-6xl mx-auto">

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#831843] px-7 py-14 sm:px-12 lg:px-20 lg:py-20 text-center">

              {/* Decorations */}
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

              <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#047857]/30 blur-3xl" />


              <div className="relative z-10 max-w-3xl mx-auto">

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-100">
                  Need Personalized Advice?
                </span>

                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">

                  Your health concern deserves
                  <span className="text-[#F59E0B]">
                    {" "}personal attention.
                  </span>

                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-pink-100">
                  Talk to our healthcare team about your condition and find
                  out which consultation and treatment approach may be
                  appropriate for you.
                </p>


                <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 font-bold text-[#831843] shadow-lg transition-all hover:bg-[#FDF2F8] hover:-translate-y-0.5"
                  >
                    Book Consultation
                  </Link>

                  <a
                    href="tel:+918700693622"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white transition-all hover:bg-white/15"
                  >
                    Call +91 8700693622
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}