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

          <div className="lg:col-span-6 py-12 lg:py-16 z-10">

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

          <div className="lg:col-span-6 relative h-[430px] sm:h-[500px] lg:h-[490px] flex items-end justify-center">

            {/* Doctor image */}
            <img
              src="/headerImage.png"
              alt="Doctor at Suman Arogya"
              className="relative z-10 rounded h-full top-0 w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
            />

            {/* Doctor badge */}
            <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 w-[230px] sm:w-[270px]">

              <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-[#831843]/10 shadow-xl px-4 py-3 text-center">

                <p className=" text-xs md:text-lg sm:text-lg font-bold uppercase tracking-[0.15em] text-[#047857]">
                  Mr. Dinesh Kumar
                </p>

                <p className="mt-1 text-xs sm:text-base md:text-lg sm:text-lg font-black text-[#831843]">
                  Founder & Director
                </p>

              </div>

            </div>
          </div>
      </div>
</div>

     {/* =====================================================
    BOTTOM SERVICE STRIP
====================================================== */}

<section className="relative border-t border-gray-200 bg-white">
  <div className="mx-auto max-w-7xl">

    <div className="grid grid-cols-2 lg:grid-cols-4">

      {/* =================================================
          AYURVEDA
      ================================================== */}
      <div
        className="
          group
          border-b border-r border-gray-200
          lg:border-b-0
        "
      >

        {/* Content */}
        <div className="px-4 py-5 text-center sm:px-6 sm:py-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#831843]">
            Ayurvedic Care
          </p>

          <h3 className="mt-2 text-[17px] font-semibold text-[#172033] sm:text-[18px]">
            Ayurveda
          </h3>

          <div className="mx-auto mt-3 h-[2px] w-7 rounded-full bg-[#831843]" />

          <p className="mx-auto mt-3 max-w-[230px] text-[12px] leading-5 text-gray-500 sm:text-[13px]">
            Traditional and holistic care focused on long-term wellness.
          </p>

        </div>
      </div>


      {/* =================================================
          PERSONALIZED CARE
      ================================================== */}
      <div
        className="
          group
          border-b border-gray-200
          lg:border-b-0 lg:border-r
        "
      >
       
        {/* Content */}
        <div className="px-4 py-5 text-center sm:px-6 sm:py-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#831843]">
            Individual Care
          </p>

          <h3 className="mt-2 text-[17px] font-semibold text-[#172033] sm:text-[18px]">
            Personalized Care
          </h3>

          <div className="mx-auto mt-3 h-[2px] w-7 rounded-full bg-[#831843]" />

          <p className="mx-auto mt-3 max-w-[230px] text-[12px] leading-5 text-gray-500 sm:text-[13px]">
            Treatment plans tailored to your health needs and goals.
          </p>

        </div>
      </div>


      {/* =================================================
          PHYSIOTHERAPY — CENTER
      ================================================== */}
      <div
        className="
          group
          border-r border-gray-200
        "
      >

        {/* Content */}
        <div className="px-4 py-5 text-center sm:px-6 sm:py-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B45309]">
            Rehabilitation
          </p>

          <h3 className="mt-2 text-[17px] font-semibold text-[#172033] sm:text-[18px]">
            Physiotherapy
          </h3>

          <div className="mx-auto mt-3 h-[2px] w-7 rounded-full bg-[#B45309]" />

          <p className="mx-auto mt-3 max-w-[230px] text-[12px] leading-5 text-gray-500 sm:text-[13px]">
            Support for pain management, mobility, strength and recovery.
          </p>

        </div>
      </div>


      {/* =================================================
          MODERN MEDICINE — END
      ================================================== */}
      <div className="group">
        {/* Content */}
        <div className="px-4 py-5 text-center sm:px-6 sm:py-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#047857]">
            Medical Care
          </p>

          <h3 className="mt-2 text-[17px] font-semibold text-[#172033] sm:text-[18px]">
            Modern Medicine
          </h3>

          <div className="mx-auto mt-3 h-[2px] w-7 rounded-full bg-[#047857]" />

          <p className="mx-auto mt-3 max-w-[230px] text-[12px] leading-5 text-gray-500 sm:text-[13px]">
            Medical guidance supporting accurate diagnosis and appropriate care.
          </p>

        </div>
      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          FLOATING WHATSAPP BUTTON — DESKTOP
      ====================================================== */}

      <a
        href="https://wa.me/918700693622?text=Hello%20Suman%20Arogya%2C%20I%20would%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Suman Arogya on WhatsApp"
        className="
          fixed
          right-5
          top-1/1
          -translate-y-1/1
          z-50
          hidden
          sm:flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          shadow-green-900/20
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
        "
      >

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.85c0 2.09.55 4.13 1.59 5.93L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.42-8.42ZM12.09 21.75h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.99 2.9 9.84 9.84 0 0 1 2.89 7c0 5.44-4.43 9.87-9.86 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>

        {/* Notification Dot */}
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />

      </a>


      {/* =====================================================
          FLOATING WHATSAPP BUTTON — MOBILE
      ====================================================== */}

      <a
        href="https://wa.me/918700693622?text=Hello%20Suman%20Arogya%2C%20I%20would%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Suman Arogya on WhatsApp"
        className="
          fixed
          right-4
          bottom-5
          z-50
          flex
          sm:hidden
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          shadow-green-900/20
          transition-all
          duration-300
          active:scale-95
        "
      >

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.85c0 2.09.55 4.13 1.59 5.93L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.42-8.42ZM12.09 21.75h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.99 2.9 9.84 9.84 0 0 1 2.89 7c0 5.44-4.43 9.87-9.86 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>

        {/* Notification Dot */}
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#831843] border-2 border-white" />

      </a>

    </section>
  );
}