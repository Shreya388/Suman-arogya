"use client";

import Link from "next/link";
import React from "react";

export default function DiseaseCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#FDF2F8]">

      {/* Soft decorative background */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#831843]/5 blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-[#047857]/5 blur-3xl" />

      <div className="relative max-w-full mx-auto px-5 sm:px-8 lg:px-10">

        <div className="min-h-[620px] lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">

          {/* =====================================================
              Left CONTENT
          ====================================================== */}

          <div className="lg:col-span-5 py-12 lg:py-16 z-10">

            {/* Small badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#047857]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#047857]">
                Suman Arogya
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black leading-[1.05] tracking-tight text-[#1F2937]">
              Complete Care.
              <span className="block text-[#831843]">
                Root Cause Treatment.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[#4B5563]">
              Personalized healthcare combining the wisdom of{" "}
              <strong className="text-[#047857]">
                Ayurveda
              </strong>{" "}
              with the precision of{" "}
              <strong className="text-[#831843]">
                modern medicine
              </strong>{" "}
              for comprehensive care and long-term wellness.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">

              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-xl bg-[#831843] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/20 transition-all duration-300 hover:bg-[#9D174D] hover:-translate-y-0.5"
              >
                Book a Consultation
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#047857] bg-white px-6 py-3.5 text-sm font-bold text-[#047857] transition-all duration-300 hover:bg-[#047857] hover:text-white"
              >
                Explore Treatments
              </Link>

            </div>

            {/* Mini trust line */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full bg-[#831843] border-2 border-white" />
                <span className="h-7 w-7 rounded-full bg-[#047857] border-2 border-white" />
                <span className="h-7 w-7 rounded-full bg-[#F59E0B] border-2 border-white" />
              </div>

              <p className="text-xs sm:text-sm text-[#4B5563]">
                Compassionate care with a personalized approach
              </p>
            </div>

          </div>
          {/* =====================================================
              Center — DOCTOR IMAGE
          ====================================================== */}
          <div className="lg:col-span-4 relative h-[430px] sm:h-[500px] lg:h-[490px] flex items-end justify-center">


            {/* Doctor image */}
            <img
              src="/headerImage.png"
              alt="Doctor at Suman Arogya"
              className="relative z-10 rounded h-full top-0 w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
            />

            {/* Doctor badge */}
            <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 w-[230px] sm:w-[270px]">

              <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-[#831843]/10 shadow-xl px-4 py-3 text-center">

                <p className="text-lg font-bold uppercase tracking-[0.15em] text-[#047857]">
                  Mr. Dinesh Kumar
                </p>

                <p className="mt-1 text-sm sm:text-base font-black text-[#831843]">
                  Founder & Director
                </p>

              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONSULTATION CARD
          ====================================================== */}
          <div className="lg:col-span-3 pb-10 lg:pb-0 z-20">

            <div className="rounded-[26px] overflow-hidden bg-white border border-[#831843]/10 shadow-2xl shadow-[#831843]/10">

              {/* Card header */}
              <div className="bg-pink-900 px-6 py-5">

                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Personalized Healthcare
                </p>

                <h2 className="mt-1 text-xl font-black text-white">
                  Book a Consultation
                </h2>

                <p className="mt-1 text-xs text-white/75">
                  Discuss your health with our care team.
                </p>

              </div>

              {/* Form */}
              <form className="p-5 sm:p-6 space-y-4">

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[#1F2937]">
                    Patient Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition focus:border-[#831843] focus:ring-2 focus:ring-[#831843]/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[#1F2937]">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition focus:border-[#047857] focus:ring-2 focus:ring-[#047857]/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[#1F2937]">
                    Health Concern
                  </label>

                  <select
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#4B5563] outline-none transition focus:border-[#831843] focus:ring-2 focus:ring-[#831843]/10"
                  >
                    <option>Select your concern</option>
                    <option>Diabetes / Sugar</option>
                    <option>Thyroid</option>
                    <option>Digestive Problems</option>
                    <option>Skin Problems</option>
                    <option>Piles</option>
                    <option>PCOS / Women's Health</option>
                    <option>Joint & Arthritis</option>
                    <option>Other Health Concern</option>
                  </select>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#831843] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/20 transition-all duration-300 hover:bg-[#9D174D] hover:-translate-y-0.5"
                >
                  Book Consultation
                </button>

                {/* reassurance */}
                <div className="flex items-start gap-2 rounded-xl bg-[#FDF2F8] p-3">

                  <span className="text-[#047857] text-sm">
                    ✓
                  </span>

                  <p className="text-[11px] leading-5 text-[#4B5563]">
                    Your information is used only to help our team understand
                    your consultation needs.
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>


      {/* Bottom service strip */}
      <div className="relative border-t border-[#831843]/10 bg-white">

        <div className="max-w-full mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#831843]/10">

            <div className="px-4 py-4 text-center">
              <p className="text-lg font-bold text-[#831843]">
                Ayurveda
              </p>
              <p className="mt-1 text-[14px] text-[#4B5563]">
                Traditional Healing
              </p>
            </div>

            <div className="px-4 py-4 text-center">
              <p className="text-lg font-bold text-[#047857]">
                Modern Medicine
              </p>
              <p className="mt-1 text-[14px] text-[#4B5563]">
                Evidence-Based Care
              </p>
            </div>

            <div className="px-4 py-4 text-center">
              <p className="text-lg font-bold text-[#831843]">
                Personalized
              </p>
              <p className="mt-1 text-[14px] text-[#4B5563]">
                Individual Treatment Plans
              </p>
            </div>

            <div className="px-4 py-4 text-center">
              <p className="text-lg font-bold text-[#F59E0B]">
                Comprehensive
              </p>
              <p className="mt-1 text-[14px] text-[#4B5563]">
                Care for Your Wellness
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}