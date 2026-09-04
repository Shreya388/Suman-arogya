"use client";

import Link from "next/link";
import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  conditions: string[];
}

const clinicServices: Service[] = [
  {
    title: "Diabetes & Thyroid Care",
    description:
      "Personalized care for blood sugar, thyroid and related hormonal concerns with a focus on long-term health.",
    image:
      "https://images.pexels.com/photos/7653129/pexels-photo-7653129.jpeg?auto=compress&cs=tinysrgb&w=1000",
    conditions: ["Diabetes", "Thyroid", "PCOS"],
  },

  {
    title: "Digestive & Piles Care",
    description:
      "Supportive treatment for digestive discomfort, piles and other common gastrointestinal concerns.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",
    conditions: ["Piles", "Acidity", "IBS"],
  },

  {
    title: "Skin & Psoriasis Care",
    description:
      "Individualized care for chronic skin concerns with attention to overall health and recurring symptoms.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85",
    conditions: ["Psoriasis", "Eczema", "Dermatitis"],
  },

  {
    title: "Joint & Arthritis Care",
    description:
      "Comprehensive support for joint pain, stiffness and arthritis to help improve everyday movement and comfort.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    conditions: ["Arthritis", "Joint Pain", "Back Pain"],
  },

  {
    title: "Blood Pressure & Heart Care",
    description:
      "Preventive and supportive care for blood pressure, cholesterol and cardiovascular health concerns.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",
    conditions: ["High BP", "Cholesterol", "Heart Health"],
  },

  {
    title: "Respiratory & Allergy Care",
    description:
      "Care for recurring respiratory problems, allergies and breathing-related concerns with personalized guidance.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85",
    conditions: ["Asthma", "Allergy", "Sinusitis"],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Soft background decoration */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-pink-50 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-700/5 blur-3xl" />

      <div className="relative mx-auto max-w-full px-5 sm:px-6 lg:px-8">

        {/* ------------------------------------------------
            SECTION HEADER
        ------------------------------------------------ */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">
            <span className="h-px w-7 bg-emerald-700" />
            Areas of Care
            <span className="h-px w-7 bg-emerald-700" />
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-[42px]">
            Health Conditions We Support
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Personalized Ayurvedic and modern healthcare for a wide range of
            chronic and lifestyle-related health concerns.
          </p>
        </div>

        {/* ------------------------------------------------
            SERVICE GRID
        ------------------------------------------------ */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {clinicServices.map((service, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(31,41,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(131,24,67,0.12)]"
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-pink-50">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/45 via-transparent to-transparent" />

                
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold leading-snug text-gray-800 transition-colors duration-200 group-hover:text-pink-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* Conditions */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.conditions.map((condition) => (
                    <span
                      key={condition}
                      className="rounded-full bg-pink-50 px-3 py-1.5 text-[11px] font-semibold text-pink-900"
                    >
                      {condition}
                    </span>
                  ))}
                </div>

                {/* Bottom link */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition-all duration-200 hover:gap-3 hover:text-pink-900"
                  >
                    Learn More
                    <span className="text-base">→</span>
                  </Link>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* ------------------------------------------------
            BOTTOM CTA
        ------------------------------------------------ */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-pink-50 px-6 py-10 sm:px-10 md:px-14">

          {/* Decorative circle */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-900/5" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-700/5" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div className="max-w-2xl">

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                Personalized Care
              </span>

              <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                Not sure which treatment is right for you?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Talk to our doctor and understand the right care approach for
                your health concern.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-pink-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-900/15 transition-all duration-200 hover:bg-pink-800 hover:-translate-y-0.5"
            >
              Book Consultation
              <span className="ml-2">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}