import Link from "next/link";
import React from "react";
import Image from "next/image"; // Fixed: Image is a default import from next/image
import treatment from "../public/treatment.webp";
import pcos from "../public/pcos.webp";
import piles from "../public/piles.webp";
import infertility from "../public/infertility.webp";
import skinproblem from "../public/skinproblem.webp";
import joint from "../public/joint.webp";
import thyroid from "../public/thyroid.png";
import diabetes from "../public/diabetes.png";
import digestion from "../public/digestion.png";
import backpain from "../public/backpain.png";


interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreValues: CoreValue[] = [
  {
    title: "Prakriti-Centric Treatment",
    description: "Your constitutional blueprint comes first. We map every therapeutic herb and lifestyle plan to your exact Vata, Pitta, and Kapha metabolic state.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Vaidya Faculty",
    description: "Gain direct clinical access to certified Ayurvedic doctors and senior practitioners with decades of combined Nadi Pariksha diagnostic experience.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Advanced Bio-Purification",
    description: "We orchestrate traditional clinical Panchakarma and cellular detox programs inside highly precise, modern medical clean-room setups.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">

          {/* Left Column: Premium Interactive Graphic Stack */}
          <div className="lg:col-span-6 order-last lg:order-first relative">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none aspect-[4/5] sm:w-[90%]">
              {/* Geometric Decorative Underlays */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 rounded-3xl -z-10 opacity-70"></div>
              <div className="absolute -bottom-10 -right-6 w-48 h-48 bg-amber-50 rounded-full -z-10 opacity-80 blur-2xl"></div>

              {/* Premium Asymmetric Border Frame */}
              <div className="absolute inset-0 border border-slate-200/80 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>

              {/* Main Medical Image Canvas */}
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-white">
                <Image
                  src={treatment}
                  alt="Suman Arogya Ayurvedic Clinical Consultation Suite"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Floating Glassmorphic Mission Plate */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest block mb-1">Our Mission</span>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    To deliver evidence-based physiotherapy solutions that address the underlying causes of pain, mobility limitations, and physical dysfunction while supporting safe and sustainable recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy Layout */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                About Suman Arogya Ayurveda
              </span>
            </div>

            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Ancient Medical Science Refined for Your Modern Wellness Journey
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg sm:text-lg font-normal">
              At Suman Arogya, our physiotherapy care is focused on helping you reduce pain, restore movement, and return to your daily activities with greater strength and confidence. We provide personalized treatment based on your condition, physical limitations, lifestyle, and recovery goals, with a focus on addressing the underlying cause of discomfort rather than providing temporary relief.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg sm:text-lg font-normal">
              From back and neck pain, joint stiffness, sports injuries, and muscle problems to post-surgical rehabilitation and mobility concerns, our physiotherapy approach combines targeted exercises, manual therapy, mobility training, and professional guidance. Each treatment plan is designed to support safe recovery, improve physical function, and promote long-term strength and overall wellbeing.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white text-emerald-600 border border-emerald-600 hover:border-emerald-500 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 group"
              >
                <span>Meet Our Certified Vaidyas & Staff</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-emerald-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Layout Grid: Core Value Cards */}
        <div className="border-t border-pink-100/70 pt-20">

          {/* =========================
      SECTION HEADER
  ========================== */}
          <div className="max-w-4xl mx-auto text-center mb-14">

            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 border border-pink-100 px-4 py-2 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-700"></span>

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-pink-900">
                Integrated Healthcare
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">
              One Clinic.{" "}
              <span className="text-pink-900">Complete Care.</span>
            </h3>

            <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
              At Suman Arogya, Ayurvedic wisdom, modern medical guidance, and
              physiotherapy come together to create personalized healthcare plans
              based on your condition, lifestyle, and individual needs.
            </p>

          </div>


          {/* =========================
      MAIN SERVICE CARDS
  ========================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">


            {/* ================= CARD 1 ================= */}
            <div
              className="
        group relative overflow-hidden
        rounded-3xl
        bg-white
        border border-pink-100
        p-7 sm:p-8
        shadow-[0_10px_40px_rgba(131,24,67,0.06)]
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(131,24,67,0.12)]
        transition-all duration-500
      "
            >

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink-900"></div>

              {/* Decorative circle */}
              <div
                className="
          absolute -right-14 -top-14
          w-32 h-32
          rounded-full
          bg-pink-50
          opacity-80
          group-hover:scale-150
          transition-transform duration-700
        "
              ></div>


              <div className="relative">

                {/* Icon + Category */}
                <div className="flex items-center justify-between mb-7">

                  <div
                    className="
              w-14 h-14
              rounded-2xl
              bg-pink-50
              border border-pink-100
              flex items-center justify-center
              text-pink-900
              group-hover:bg-pink-900
              group-hover:text-white
              transition-all duration-300
            "
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M12 3C8.5 6.5 5 10.2 5 14a7 7 0 0014 0c0-3.8-3.5-7.5-7-11z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M9 15c1.2 1 2.8 1 4 0"
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-900 bg-pink-50 px-3 py-1.5 rounded-full">
                    Ayurveda
                  </span>

                </div>


                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-900 transition-colors">
                  Ayurvedic Healthcare
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Personalized Ayurvedic care focused on understanding your health
                  condition, lifestyle, dietary habits, and individual requirements.
                  Treatment plans may include Ayurvedic medicines, diet and lifestyle
                  guidance, and traditional therapies when appropriate.
                </p>


                {/* Feature list */}
                <div className="space-y-3">

                  {[
                    "Personalized Ayurvedic medicines",
                    "Diet & lifestyle guidance",
                    "Traditional Ayurvedic therapies",
                    "Long-term wellness support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">

                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-emerald-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 12l4 4L19 6"
                          />
                        </svg>
                      </div>

                      <span className="text-xs sm:text-sm text-gray-600">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            </div>


            {/* ================= CARD 2 ================= */}
            <div
              className="
        group relative overflow-hidden
        rounded-3xl
        bg-white
        border border-emerald-100
        p-7 sm:p-8
        shadow-[0_10px_40px_rgba(4,120,87,0.06)]
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(4,120,87,0.12)]
        transition-all duration-500
      "
            >

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-700"></div>

              {/* Decorative circle */}
              <div
                className="
          absolute -right-14 -top-14
          w-32 h-32
          rounded-full
          bg-emerald-50
          opacity-80
          group-hover:scale-150
          transition-transform duration-700
        "
              ></div>


              <div className="relative">

                {/* Icon + Category */}
                <div className="flex items-center justify-between mb-7">

                  <div
                    className="
              w-14 h-14
              rounded-2xl
              bg-emerald-50
              border border-emerald-100
              flex items-center justify-center
              text-emerald-700
              group-hover:bg-emerald-700
              group-hover:text-white
              transition-all duration-300
            "
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M9 12l2 2 4-4m5.6-4A11.9 11.9 0 0112 3a11.9 11.9 0 01-8.6 3A12 12 0 003 9c0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1-.1-2-.4-3z"
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                    Modern Care
                  </span>

                </div>


                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  Modern Medicine & Consultation
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Modern medical consultation and treatment support are provided
                  according to individual healthcare needs, helping patients receive
                  appropriate medical evaluation, guidance, and ongoing care.
                </p>


                {/* Feature list */}
                <div className="space-y-3">

                  {[
                    "Modern medical consultation",
                    "Condition-based treatment planning",
                    "Medication guidance",
                    "Ongoing health monitoring",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">

                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-emerald-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 12l4 4L19 6"
                          />
                        </svg>
                      </div>

                      <span className="text-xs sm:text-sm text-gray-600">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            </div>


            {/* ================= CARD 3 ================= */}
            <div
              className="
        group relative overflow-hidden
        rounded-3xl
        bg-white
        border border-amber-100
        p-7 sm:p-8
        shadow-[0_10px_40px_rgba(245,158,11,0.05)]
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(245,158,11,0.10)]
        transition-all duration-500
      "
            >

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>

              {/* Decorative circle */}
              <div
                className="
          absolute -right-14 -top-14
          w-32 h-32
          rounded-full
          bg-amber-50
          opacity-80
          group-hover:scale-150
          transition-transform duration-700
        "
              ></div>


              <div className="relative">

                {/* Icon + Category */}
                <div className="flex items-center justify-between mb-7">

                  <div
                    className="
              w-14 h-14
              rounded-2xl
              bg-amber-50
              border border-amber-100
              flex items-center justify-center
              text-amber-500
              group-hover:bg-amber-500
              group-hover:text-white
              transition-all duration-300
            "
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="5"
                        r="2.5"
                        strokeWidth={1.7}
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M8 22l2-8m6 8l-2-8m-5-4h6m-3 0v4"
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                    Physiotherapy
                  </span>

                </div>


                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  Physiotherapy & Rehabilitation
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Individualized physiotherapy support for improving movement,
                  strength, mobility, posture, and physical function through
                  appropriate therapeutic exercises and rehabilitation techniques.
                </p>


                {/* Feature list */}
                <div className="space-y-3">

                  {[
                    "Therapeutic exercises",
                    "Pain & mobility management",
                    "Posture & movement correction",
                    "Recovery & rehabilitation support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">

                      <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 12l4 4L19 6"
                          />
                        </svg>
                      </div>

                      <span className="text-xs sm:text-sm text-gray-600">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>


          {/* =========================
      CONDITIONS SECTION
  ========================== */}
          <div className="mt-14">

            <div className="px-30 gap-4 mb-7">

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                  Our Areas of Care
                </span>

                <h4 className="mt-2 text-2xl font-bold text-gray-800">
                  Health Conditions We Support
                </h4>
              </div>

              <p className="max-w-md text-xs sm:text-sm text-gray-600 leading-relaxed">
                Personalized care is planned according to your individual condition,
                medical history, and healthcare requirements.
              </p>

            </div>


            {/* Condition Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

              {[
                {
                  name: "Piles",
                  category: "Digestive Health",
                  image: "piles.webp",
                },
                {
                  name: "Diabetes",
                  category: "Metabolic Health",
                  image: "diabetes.png",
                },
                {
                  name: "PCOS",
                  category: "Women's Health",
                  image: "pcos.webp",
                },
                {
                  name: "Skin Diseases",
                  category: "Skin & Wellness",
                  image: "skinproblem.webp",
                },
                {
                  name: "Thyroid",
                  category: "Hormonal Health",
                  image: "thyroid.png",
                },
                {
                  name: "Arthritis",
                  category: "Joint & Mobility",
                  image: "joint.webp",
                },
                {
                  name: "Digestive Problems",
                  category: "Digestive Health",
                  image: "digestion.png",
                },
                {
                  name: "Joint & Back Pain",
                  category: "Physiotherapy",
                  image: "backpain.png",
                },
              ].map((condition) => (

                <div
                  key={condition.name}
                  className="
            group
            rounded-2xl
            px-4 py-4
            items-center
            transition-all duration-300
            cursor-default
          "
                >

                  <div className="flex items-center justify-center gap-3">

                    <div className="min-w-0 text-center">
                      <div className="bg-white rounded-full border border-gray-200 hover:border-pink-300 py-8 px-8 my-6">
                      <img
                        src={condition.image}
                        className="h-[80px] w-[80px]"
                        alt="category"
                      />
                      </div>
                      <p className="text-sm font-bold text-gray-800 truncate group-hover:text-pink-900 transition-colors">
                        {condition.name}
                      </p>

                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {condition.category}
                      </p>
                      
                    </div>
                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
      BOTTOM INTEGRATED CARE BANNER
  ========================== */}
          <div
            className="
      mt-10
      relative overflow-hidden
      rounded-3xl
      bg-pink-50
      border border-pink-100
      px-6 py-7 sm:px-8
    "
          >

            {/* Decorative elements */}
            <div className="absolute -right-10 -bottom-16 w-40 h-40 rounded-full bg-white/70"></div>
            <div className="absolute right-24 -top-10 w-24 h-24 rounded-full bg-emerald-50/80"></div>


            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="flex items-start gap-4">

                <div
                  className="
            w-12 h-12
            rounded-2xl
            bg-white
            border border-pink-100
            text-pink-900
            flex items-center justify-center
            shrink-0
            shadow-sm
          "
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z"
                    />
                  </svg>
                </div>


                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h4 className="text-lg font-bold text-gray-800">
                      Healthcare Designed Around You
                    </h4>

                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                      Personalized
                    </span>

                  </div>

                  <p className="mt-2 max-w-2xl text-sm text-gray-600 leading-relaxed">
                    Whether you need Ayurvedic care, modern medical consultation,
                    physiotherapy, or support for a chronic health concern, our
                    approach is centered around your individual healthcare needs.
                  </p>

                </div>

              </div>


              <Link
                href="/contact"
                className="
          relative shrink-0
          inline-flex items-center justify-center
          gap-2
          rounded-xl
          bg-pink-900
          hover:bg-pink-800
          text-white
          px-6 py-3
          text-sm font-bold
          shadow-lg shadow-pink-900/10
          transition-all duration-300
          hover:-translate-y-0.5
        "
              >
                Book a Consultation

                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 12h14m-5-5l5 5-5 5"
                  />
                </svg>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}