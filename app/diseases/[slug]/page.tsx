import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import React from "react";

import { diseaseDatabase, DiseaseDetail } from "@/data/diseases";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params;

  const disease = diseaseDatabase[slug];

  const displayData = disease || {
    title: slug
      .charAt(0)
      .toUpperCase() + slug.slice(1).replace(/-/g, " "),

    category: "Specialized Clinical Consultation",

    overview: `Comprehensive clinical guidance, medical evaluation, and structured treatment planning are provided for ${slug.replace(
      /-/g,
      " "
    )}.`,

    imageUrl:
      "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop",

    symptoms: [
      "Requires individual clinical assessment",
      "Symptoms may vary depending on severity and stage",
    ],

    treatments: [
      "Personalized treatment planning",
      "Professional clinical evaluation and follow-up",
    ],

    ayurvedicPerspective: {
      doshaImbalance: "Individual assessment required",
      rootCauseText:
        "Ayurvedic evaluation considers the individual's constitution, lifestyle, digestion and other contributing factors.",

      ahar: [
        "Prefer fresh, warm and easily digestible meals",
        "Maintain regular meal timings",
        "Choose food according to individual digestive capacity",
      ],

      vihar: [
        "Maintain a consistent daily routine",
        "Include appropriate physical activity and relaxation",
        "Prioritize adequate sleep and stress management",
      ],

      aushadh: [
        "Treatment is selected according to individual assessment",
        "Ayurvedic medicines are prescribed under professional guidance",
      ],

      herbalRemedies: [
        "Personalized herbal support may be considered after evaluation.",
      ],

      lifestyleAdjustments: [
        "Healthy daily routines designed according to individual needs.",
      ],
    },

    detailedArticle:
      "Every individual may experience health concerns differently. At Suman Arogya, the clinical approach focuses on understanding the individual's symptoms, lifestyle and overall health before developing an appropriate care plan.",
  };

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937]">

        {/* =====================================================
            TOP SPACER / PAGE HEADER
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#FDF2F8] pt-28 pb-14 md:pt-32 md:pb-20">

          {/* Decorative background */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#9D174D]/5 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#047857]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

            {/* Breadcrumb */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#047857] transition-colors hover:text-[#831843]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m7 7H3"
                />
              </svg>

              Back to Suman Arogya
            </Link>

            {/* =================================================
                HERO
            ================================================== */}

            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

              {/* LEFT */}
              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#831843]/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#831843]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
                  {displayData.category}
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                  {displayData.title}
                </h1>

                <div className="mt-6 h-[3px] w-16 rounded-full bg-[#831843]" />

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#4B5563] md:text-lg">
                  {displayData.overview}
                </p>

                {/* Care approach */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#047857]/20 bg-white px-4 py-2.5 text-sm font-medium text-[#047857]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#047857]/10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    Ayurvedic Care
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#831843]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#831843]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#831843]/10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-3-3v6m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Modern Clinical Care
                  </div>

                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center lg:justify-end">

                {/* subtle background */}
                <div className="absolute right-4 top-6 h-[78%] w-[82%] rounded-[2rem] bg-[#047857]/10" />

                <div className="relative w-full max-w-[430px]">

                  <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_25px_60px_rgba(31,41,55,0.14)]">

                    <div className="relative aspect-[5/4]">
                      <Image
                        src={displayData.imageUrl}
                        alt={displayData.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 430px"
                        className="object-cover"
                        priority
                      />
                    </div>

                  </div>

                  {/* Floating clinic badge */}
                  <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl sm:-left-7">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F8] text-[#831843]">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M12 21s8-4.5 8-10.5A4.5 4.5 0 0012 7a4.5 4.5 0 00-8 3.5C4 16.5 12 21 12 21z"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#4B5563]">
                          Suman Arogya
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-[#1F2937]">
                          Care with Guidance
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="bg-white py-16 md:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            {/* =================================================
                INTRO + AYURVEDIC VIEW
            ================================================== */}

            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">

              {/* Clinical Overview */}
              <div>

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#831843]">
                  Understanding Your Condition
                </p>

                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#1F2937] md:text-4xl">
                  A thoughtful approach to your health
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#4B5563] md:text-lg">
                  {displayData.overview}
                </p>

                <div className="mt-8 h-px max-w-2xl bg-gray-100" />

                <p className="mt-6 max-w-3xl text-sm leading-7 text-[#4B5563]">
                  At Suman Arogya, treatment planning is based on an
                  individual's symptoms, health history and overall
                  requirements. Ayurveda and modern clinical approaches can
                  be considered as part of a personalized care journey.
                </p>

              </div>


              {/* Ayurvedic Perspective */}
              <div className="rounded-[1.75rem] border border-[#831843]/10 bg-[#FDF2F8] p-7">

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#831843] shadow-sm">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M12 3c2.5 3 6 5.5 6 10a6 6 0 01-12 0c0-4.5 3.5-7 6-10z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#831843]">
                      Ayurvedic Perspective
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-[#1F2937]">
                      Individual Assessment
                    </h3>
                  </div>

                </div>

                <p className="text-sm font-semibold leading-6 text-[#1F2937]">
                  {displayData.ayurvedicPerspective.doshaImbalance}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#4B5563]">
                  {displayData.ayurvedicPerspective.rootCauseText}
                </p>

              </div>

            </div>


            {/* =================================================
                SYMPTOMS / MODERN CARE
            ================================================== */}

            <div className="mt-20">

              <div className="mb-10 max-w-2xl">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#047857]">
                  Care & Guidance
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937] md:text-4xl">
                  What your care plan may include
                </h2>

              </div>


              <div className="grid gap-6 md:grid-cols-2">

                {/* Symptoms */}
                <div className="rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-[0_12px_40px_rgba(31,41,55,0.05)]">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF2F8] text-[#831843]">

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 5h6M9 3h6a2 2 0 012 2v1a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2V5a2 2 0 012-2z"
                        />
                      </svg>

                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#831843]">
                        Common Concerns
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-[#1F2937]">
                        What you may experience
                      </h3>
                    </div>

                  </div>


                  <ul className="mt-7 space-y-4">

                    {displayData.symptoms.map(
                      (symptom: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-6 text-[#4B5563]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#831843]" />
                          <span>{symptom}</span>
                        </li>
                      )
                    )}

                  </ul>

                </div>


                {/* Modern Treatment */}
                <div className="rounded-[1.5rem] border border-[#047857]/15 bg-[#047857]/[0.025] p-7 shadow-[0_12px_40px_rgba(31,41,55,0.04)]">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#047857]/10 text-[#047857]">

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#047857]">
                        Modern Clinical Care
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-[#1F2937]">
                        Professional treatment approach
                      </h3>
                    </div>

                  </div>


                  <ul className="mt-7 space-y-4">

                    {displayData.treatments.map(
                      (treatment: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-6 text-[#4B5563]"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#047857]/10 text-[#047857]">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>

                          <span>{treatment}</span>
                        </li>
                      )
                    )}

                  </ul>

                </div>

              </div>

            </div>


            {/* =================================================
                AYURVEDIC CARE
            ================================================== */}

            <section className="mt-20 overflow-hidden rounded-[2rem] bg-[#FDF2F8]">

              <div className="px-6 py-10 md:px-10 md:py-12">

                <div className="max-w-2xl">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#831843]">
                    Ayurveda at Suman Arogya
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2937] md:text-4xl">
                    Aahar • Vihar • Aushadh
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#4B5563] md:text-base">
                    Ayurvedic care looks beyond symptoms and considers diet,
                    lifestyle and individual requirements while creating a
                    personalized approach to wellness.
                  </p>

                </div>


                <div className="mt-10 grid gap-5 md:grid-cols-3">

                  {/* AHAR */}
                  <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                      <span className="text-2xl font-semibold text-[#831843]">
                        आहार
                      </span>

                      <span className="rounded-full bg-[#FDF2F8] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#831843]">
                        Diet
                      </span>

                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">
                      Aahar
                    </h3>

                    <p className="mt-1 text-sm text-[#4B5563]">
                      Food and nourishment according to individual needs.
                    </p>

                    <ul className="mt-5 space-y-3">

                      {(displayData.ayurvedicPerspective.ahar || []).map(
                        (item: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-6 text-[#4B5563]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#831843]" />
                            {item}
                          </li>
                        )
                      )}

                    </ul>

                  </div>


                  {/* VIHAR */}
                  <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                      <span className="text-2xl font-semibold text-[#047857]">
                        विहार
                      </span>

                      <span className="rounded-full bg-[#047857]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#047857]">
                        Lifestyle
                      </span>

                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">
                      Vihar
                    </h3>

                    <p className="mt-1 text-sm text-[#4B5563]">
                      Daily habits that support healthier living.
                    </p>

                    <ul className="mt-5 space-y-3">

                      {(displayData.ayurvedicPerspective.vihar || []).map(
                        (item: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-6 text-[#4B5563]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#047857]" />
                            {item}
                          </li>
                        )
                      )}

                    </ul>

                  </div>


                  {/* AUSHADH */}
                  <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                      <span className="text-2xl font-semibold text-[#047857]">
                        औषध
                      </span>

                      <span className="rounded-full bg-[#047857]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#047857]">
                        Guidance
                      </span>

                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">
                      Aushadh
                    </h3>

                    <p className="mt-1 text-sm text-[#4B5563]">
                      Medicines selected according to individual assessment.
                    </p>

                    <ul className="mt-5 space-y-3">

                      {(
                        displayData.ayurvedicPerspective.aushadh ||
                        displayData.ayurvedicPerspective.herbalRemedies ||
                        []
                      ).map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-6 text-[#4B5563]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#047857]" />
                          {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                DETAILED ARTICLE
            ================================================== */}

            <section className="mx-auto mt-20 max-w-4xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#831843]" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#831843]">
                  Our Approach
                </p>

              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#1F2937] md:text-4xl">
                Understanding your health journey
              </h2>

              <p className="mt-6 text-base leading-8 text-[#4B5563]">
                {displayData.detailedArticle}
              </p>

            </section>


            {/* =================================================
                DISCLAIMER
            ================================================== */}

            <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5">

              <p className="text-xs leading-6 text-[#4B5563]">
                <span className="font-semibold text-[#1F2937]">
                  Important:
                </span>{" "}
                The information on this page is for general educational
                purposes and should not replace an individual consultation
                with a qualified healthcare professional. Treatment and
                medicines should be considered only after appropriate
                assessment and professional guidance.
              </p>

            </div>


            {/* =================================================
                FINAL CTA
            ================================================== */}

            <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#831843]">

              {/* decorative circles */}
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#047857]/20" />

              <div className="relative flex flex-col gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">

                <div className="max-w-2xl">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FDF2F8]">
                    Suman Arogya
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Looking for personalized guidance?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Speak with our team to understand the right next step
                    for your health and wellness journey.
                  </p>

                </div>


                <Link
                  href="/book-appointment"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#F59E0B] px-6 py-3.5 text-sm font-bold text-[#1F2937] shadow-lg transition-all duration-300 hover:bg-white"
                >
                  Book Consultation

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>

                </Link>

              </div>

            </section>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}