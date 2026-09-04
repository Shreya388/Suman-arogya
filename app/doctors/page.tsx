import Footer from "@/components/Footer";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import oshi from "../../public/oshi.png";
import gaurav from "../../public/gaurav.png";
import doctor from "../../public/doctor.png";


interface Doctor {
  name: string;
  degree: string;
  experience: string;
  tagline: string;
  image: string | StaticImageData;
}

export default function DoctorsPage() {
  const doctors: Doctor[] = [
    {
      name: "Dr. Mayank Prajapati",
      degree: "BPT (Bachelors in Physiotherapy)",
      experience: "1 years experience",
      tagline:
        "Focused on personalized physiotherapy for pain relief, improved mobility, and better day-to-day movement.",
      image: doctor,
    },
    {
      name: "Dr. Gaurav Kumar",
      degree: "BPT (Bachelors in Physiotherapy)",
      experience: "2 Years Experience",
      tagline:
        "Providing exercise-based rehabilitation to improve strength, flexibility, mobility, and functional recovery.",
      image:
        gaurav,
    },
    {
      name: "Dr. Oshi Chauhan",
      degree: "BPT (Bachelors in Physiotherapy)",
      experience: "2",
      tagline:
        "Helping patients recover from musculoskeletal pain and injuries through targeted exercises and rehabilitation.",
      image: oshi,
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937] antialiased overflow-hidden">

        {/* =====================================================
            1. HERO SECTION
        ====================================================== */}
        <section className="relative bg-[#FDF2F8] overflow-hidden">

          {/* Soft decorative background */}
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#831843]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#047857]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">

            <div className="max-w-4xl mx-auto text-center">

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#831843]/10 px-4 py-2 shadow-sm mb-7">

                <span className="h-2 w-2 rounded-full bg-[#047857]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#831843]">
                  Our Medical Team
                </span>

              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-[#1F2937]">

                Experienced Doctors.
                <br />

                <span className="text-[#831843]">
                  Personalized Healthcare.
                </span>

              </h1>

              {/* Description */}
              <p className="max-w-3xl mx-auto mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-[#4B5563]">

                Meet the doctors at Suman Arogya who bring together
                Ayurvedic wisdom and appropriate modern medical care to
                understand your health concerns and guide you toward
                personalized treatment.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-[#831843] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/20 transition-all duration-300 hover:bg-[#9D174D] hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#047857] bg-white px-7 py-3.5 text-sm font-bold text-[#047857] transition-all duration-300 hover:bg-[#047857] hover:text-white"
                >
                  Contact Suman Arogya
                </Link>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            2. INTRO STRIP
        ====================================================== */}
        <section className="relative z-20 -mt-8 px-6">

          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl border border-[#831843]/10 p-6 shadow-[0_12px_35px_rgba(131,24,67,0.08)]">

                <div className="flex items-center gap-3 mb-3">

                  <div className="h-10 w-10 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#831843] font-bold">
                    ✦
                  </div>

                  <h3 className="font-bold text-[#1F2937]">
                    Ayurvedic Wisdom
                  </h3>

                </div>

                <p className="text-sm leading-relaxed text-[#4B5563]">
                  Individualized care inspired by traditional Ayurvedic
                  principles.
                </p>

              </div>


              <div className="bg-white rounded-2xl border border-[#047857]/10 p-6 shadow-[0_12px_35px_rgba(4,120,87,0.07)]">

                <div className="flex items-center gap-3 mb-3">

                  <div className="h-10 w-10 rounded-xl bg-[#047857]/10 flex items-center justify-center text-[#047857] font-bold">
                    +
                  </div>

                  <h3 className="font-bold text-[#1F2937]">
                    Modern Medical Care
                  </h3>

                </div>

                <p className="text-sm leading-relaxed text-[#4B5563]">
                  Contemporary medical evaluation and treatment when
                  appropriate.
                </p>

              </div>


              <div className="bg-white rounded-2xl border border-[#F59E0B]/20 p-6 shadow-[0_12px_35px_rgba(245,158,11,0.06)]">

                <div className="flex items-center gap-3 mb-3">

                  <div className="h-10 w-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] font-bold">
                    ✓
                  </div>

                  <h3 className="font-bold text-[#1F2937]">
                    Personalized Guidance
                  </h3>

                </div>

                <p className="text-sm leading-relaxed text-[#4B5563]">
                  Care plans designed around the individual and their health
                  needs.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            3. DOCTORS SECTION
        ====================================================== */}
        <section className="bg-white py-24 lg:py-32">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 mb-14">

              <div className="max-w-3xl">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                  Meet Our Doctors
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1F2937]">

                  Care from professionals who
                  <span className="text-[#831843]">
                    {" "}understand your health.
                  </span>

                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] max-w-2xl">
                  Our team brings together different areas of medical
                  expertise so that patients can receive appropriate,
                  personalized guidance for their healthcare needs.
                </p>

              </div>

              <Link
                href="/our-doctors"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#831843] hover:text-[#9D174D] transition-colors"
              >
                View all doctors
                <span>→</span>
              </Link>

            </div>


            {/* Doctor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

              {doctors.map((doc, index) => (

                <article
                  key={index}
                  className="group bg-white rounded-[2rem] border border-[#831843]/10 overflow-hidden shadow-[0_12px_40px_rgba(31,41,55,0.06)] hover:shadow-[0_20px_50px_rgba(131,24,67,0.12)] hover:-translate-y-1 transition-all duration-500"
                >

                  {/* Image */}
                  <div className="relative aspect-[4/4.7] overflow-hidden bg-[#FDF2F8]">

                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1F2937]/70 via-[#1F2937]/10 to-transparent" />

                  </div>


                  {/* Card content */}
                  <div className="p-7">

                    <h3 className="mt-2 text-2xl font-black text-[#1F2937] group-hover:text-[#831843] transition-colors">
                      {doc.name}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-[#4B5563]">
                      {doc.degree}
                    </p>


                    {/* Experience */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FDF2F8] border border-[#831843]/10 px-3 py-2">

                      <span className="text-[#F59E0B]">
                        ★
                      </span>

                      <span className="text-xs font-bold text-[#831843]">
                        {doc.experience}
                      </span>

                    </div>

                    {/* Description */}
                    <p className="text-sm leading-6 text-[#4B5563]">
                      {doc.tagline}
                    </p>


                    {/* CTA */}
                    <Link
                      href="/book-appointment"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#831843] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#9D174D] hover:shadow-lg hover:shadow-[#831843]/20"
                    >
                      Book Consultation
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            4. AYURVEDA + MODERN MEDICINE
        ====================================================== */}
        <section className="bg-[#FDF2F8] border-y border-[#831843]/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

            <div className="max-w-3xl mx-auto text-center mb-16">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                Our Integrated Approach
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2937] leading-tight">

                Ayurveda and modern medicine,
                <span className="text-[#831843]">
                  {" "}working together.
                </span>

              </h2>

              <p className="mt-5 text-[#4B5563] text-base sm:text-lg leading-relaxed">
                At Suman Arogya, we believe healthcare should be based on
                understanding the individual and choosing the appropriate
                approach for their condition.
              </p>

            </div>


            <div className="grid lg:grid-cols-2 gap-7">

              {/* Ayurveda */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#047857] p-8 sm:p-10 text-white">

                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10" />

                <div className="relative z-10">

                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                    🌿
                  </div>

                  <span className="mt-7 block text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100">
                    Natural & Traditional Care
                  </span>

                  <h3 className="mt-3 text-3xl font-black">
                    Ayurvedic Medicine
                  </h3>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-emerald-50">
                    Ayurvedic consultation and treatment principles can help
                    us understand health through an individualized view of
                    diet, lifestyle, daily routine and wellbeing.
                  </p>

                  <div className="mt-7 space-y-3">

                    {[
                      "Individualized Ayurvedic consultation",
                      "Aahar & Vihar guidance",
                      "Lifestyle and daily routine",
                      "Personalized Ayurvedic treatment",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center text-xs">
                          ✓
                        </span>

                        <span className="text-sm text-white/90">
                          {item}
                        </span>
                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* Modern */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#831843] p-8 sm:p-10 text-white">

                <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-white/10" />

                <div className="relative z-10">

                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                    ✚
                  </div>

                  <span className="mt-7 block text-[10px] font-bold uppercase tracking-[0.18em] text-pink-100">
                    Contemporary Medical Care
                  </span>

                  <h3 className="mt-3 text-3xl font-black">
                    Modern Medicine
                  </h3>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-pink-50">
                    When medically appropriate, modern clinical evaluation,
                    investigations and treatment can form part of a patient's
                    personalized care plan.
                  </p>

                  <div className="mt-7 space-y-3">

                    {[
                      "Modern medical consultation",
                      "Clinical evaluation",
                      "Diagnostic guidance when required",
                      "Appropriate medical treatment",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center text-xs">
                          ✓
                        </span>

                        <span className="text-sm text-white/90">
                          {item}
                        </span>
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            5. WHY CHOOSE OUR TEAM
        ====================================================== */}
        <section className="bg-white py-24 lg:py-32">

          <div className="max-w-6xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                  Why Suman Arogya
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1F2937]">

                  Healthcare should feel
                  <span className="text-[#831843]">
                    {" "}personal.
                  </span>

                </h2>

                <p className="mt-6 text-[#4B5563] leading-7">
                  Your health concerns deserve time, attention and clear
                  communication. Our doctors work across different areas of
                  healthcare so that you can receive guidance that is relevant
                  to your individual needs.
                </p>

              </div>


              <div className="space-y-4">

                {[
                  [
                    "01",
                    "Listen First",
                    "We begin by understanding your concerns and health history.",
                  ],
                  [
                    "02",
                    "Understand",
                    "We assess your condition and identify the appropriate care approach.",
                  ],
                  [
                    "03",
                    "Personalize",
                    "Your treatment guidance is tailored around your individual needs.",
                  ],
                  [
                    "04",
                    "Support",
                    "We help you stay informed and involved throughout your care journey.",
                  ],
                ].map(([num, title, desc]) => (

                  <div
                    key={num}
                    className="flex gap-5 rounded-2xl border border-[#831843]/10 p-5 hover:bg-[#FDF2F8] transition-colors"
                  >

                    <span className="text-sm font-black text-[#831843]">
                      {num}
                    </span>

                    <div>

                      <h3 className="font-bold text-[#1F2937]">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                        {desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            6. CTA
        ====================================================== */}
        <section className="px-6 pb-24 lg:pb-32">

          <div className="max-w-6xl mx-auto">

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#831843] px-7 py-14 sm:px-12 lg:px-20 lg:py-20 text-center">

              <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#047857]/30 blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto">

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-100">
                  Start Your Health Journey
                </span>

                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">

                  Meet the right doctor
                  <br />

                  <span className="text-[#F59E0B]">
                    for your healthcare needs.
                  </span>

                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-pink-100">
                  Book a consultation with Suman Arogya and discuss your
                  health concerns with our medical team.
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