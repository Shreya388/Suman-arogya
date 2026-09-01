import Footer from "@/components/Footer";
import React from "react";

interface StatItem {
  number: string;
  label: string;
  sub: string;
}

interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

interface CareItem {
  title: string;
  desc: string;
  tag: string;
}

export default function AboutPage() {
  const stats: StatItem[] = [
    {
      number: "01",
      label: "Personalized Care",
      sub: "Treatment plans designed around your health needs",
    },
    {
      number: "02",
      label: "Ayurvedic Approach",
      sub: "Traditional wisdom focused on the root cause",
    },
    {
      number: "03",
      label: "Modern Medical Care",
      sub: "Contemporary medical evaluation when required",
    },
    {
      number: "04",
      label: "Complete Guidance",
      sub: "Aahar, Vihar, medicines and lifestyle support",
    },
  ];

  const values: ValueItem[] = [
    {
      num: "01",
      title: "Understand the Root Cause",
      desc: "We look beyond temporary symptom relief and focus on understanding the factors affecting your health, lifestyle, diet and overall wellbeing.",
    },
    {
      num: "02",
      title: "Ayurveda + Modern Medicine",
      desc: "We combine the principles of Ayurveda with appropriate modern medical care to create a practical and personalized approach to treatment.",
    },
    {
      num: "03",
      title: "Care Designed Around You",
      desc: "Every person is different. Your consultation and treatment approach is planned according to your condition, health goals and individual needs.",
    },
  ];

  const careItems: CareItem[] = [
    {
      title: "Ayurvedic Consultation",
      tag: "AYURVEDA",
      desc: "Personalized Ayurvedic assessment with guidance based on traditional principles and your individual health condition.",
    },
    {
      title: "Modern Medical Consultation",
      tag: "MODERN CARE",
      desc: "When appropriate, modern medical evaluation and treatment guidance can be incorporated into your overall care plan.",
    },
    {
      title: "Aahar & Vihar Guidance",
      tag: "LIFESTYLE",
      desc: "Practical guidance on food, daily routine, lifestyle and habits that can support your treatment journey.",
    },
    {
      title: "Long-Term Health Support",
      tag: "WELLNESS",
      desc: "We aim to help you understand your health better and follow a sustainable approach rather than depending only on temporary solutions.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden">

        {/* =========================================================
            1. HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#FDF2F8]">

          {/* Decorative shapes */}
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#9D174D]/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#047857]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">

            <div className="max-w-4xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#831843]/15 bg-white px-4 py-2 mb-7 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#047857]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#831843]">
                  Suman Arogya
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-[#1F2937]">
                Ayurveda Rooted in Tradition.
                <br />

                <span className="text-[#831843]">
                  Supported by Modern Care.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-[#4B5563]">
                At Suman Arogya, we bring together the wisdom of Ayurveda
                and appropriate modern medical care to provide personalized
                treatment and complete health guidance.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">

                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#831843] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/20 transition-all duration-300 hover:bg-[#9D174D] hover:-translate-y-0.5"
                >
                  Book a Consultation
                </a>

                <a
                  href="#our-approach"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#047857] bg-white px-7 py-3.5 text-sm font-bold text-[#047857] transition-all duration-300 hover:bg-[#047857] hover:text-white"
                >
                  Explore Our Approach
                </a>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            2. INTRO / TRUST MESSAGE
        ========================================================= */}
        <section className="relative z-20 -mt-8 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-[#831843]/10 p-6 shadow-[0_12px_35px_rgba(131,24,67,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#047857]/30"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest text-[#831843]">
                      {stat.number}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#047857] group-hover:bg-[#F59E0B] transition-colors" />
                  </div>

                  <h3 className="font-bold text-[#1F2937] text-base">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {stat.sub}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            3. ABOUT SUMAN AROGYA
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div className="lg:col-span-5">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                About Suman Arogya
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1F2937]">
                Healthcare that looks at
                <span className="text-[#831843]"> the whole person.</span>
              </h2>

              <div className="mt-7 h-1 w-20 rounded-full bg-[#F59E0B]" />

            </div>


            {/* Right */}
            <div className="lg:col-span-7 space-y-6 text-[#4B5563] leading-relaxed">

              <p className="text-lg">
                At{" "}
                <strong className="text-[#831843]">
                  Suman Arogya
                </strong>
                , we believe healthcare should be personal, understandable
                and focused on your individual needs.
              </p>

              <p>
                Ayurveda provides a time-tested approach to understanding
                health through diet, lifestyle, daily routine and individual
                constitution. At the same time, modern medicine and
                contemporary diagnostic methods can play an important role
                when medically appropriate.
              </p>

              <p>
                Our approach is therefore not about choosing between
                traditional and modern healthcare. It is about understanding
                where each approach can support the patient's overall
                treatment journey.
              </p>

              <div className="pt-3">
                <div className="inline-flex items-center gap-3 rounded-xl bg-[#FDF2F8] border border-[#831843]/10 px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#047857] text-white font-bold">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-[#831843]">
                      Personalized Integrated Care
                    </p>

                    <p className="text-sm text-[#4B5563]">
                      Ayurveda + appropriate modern medical guidance
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            4. OUR APPROACH
        ========================================================= */}
        <section
          id="our-approach"
          className="bg-[#FDF2F8] border-y border-[#831843]/10"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

            <div className="max-w-3xl mb-16">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2937] leading-tight">
                Traditional wisdom.
                <br />
                <span className="text-[#831843]">
                  Modern understanding.
                </span>
              </h2>

              <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">
                We bring together different aspects of healthcare to create
                a more complete and practical treatment experience.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-[#831843]/10 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#831843]/10"
                >

                  <div className="flex items-center justify-between mb-7">

                    <span className="text-sm font-black text-[#831843]">
                      {value.num}
                    </span>

                    <div className="h-px flex-1 mx-4 bg-[#831843]/10" />

                    <div className="h-9 w-9 rounded-full bg-[#047857]/10 flex items-center justify-center text-[#047857] font-bold">
                      +
                    </div>

                  </div>

                  <h3 className="text-xl font-bold text-[#1F2937]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#4B5563]">
                    {value.desc}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            5. AYURVEDA + MODERN CARE
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Ayurveda */}
            <div className="relative">

              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#047857]/10 blur-2xl" />

              <div className="relative rounded-[2rem] bg-[#047857] p-8 sm:p-10 text-white overflow-hidden">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#F59E0B]/10" />

                <div className="relative z-10">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">
                    Care Approach 01
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl font-black">
                    Ayurvedic Care
                  </h3>

                  <p className="mt-5 text-emerald-50 leading-relaxed">
                    Ayurveda emphasizes individualized understanding of the
                    person, daily routine, food, lifestyle and other factors
                    that influence wellbeing.
                  </p>

                  <div className="mt-8 space-y-3">

                    {[
                      "Personalized Ayurvedic assessment",
                      "Aahar & Vihar guidance",
                      "Lifestyle and daily routine support",
                      "Traditional Ayurvedic treatment principles",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm">
                          ✓
                        </span>

                        <span className="text-sm font-medium text-white/90">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>


            {/* Modern */}
            <div className="relative">

              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#831843]/10 blur-2xl" />

              <div className="relative rounded-[2rem] bg-[#831843] p-8 sm:p-10 text-white overflow-hidden">

                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-[#F59E0B]/10" />

                <div className="relative z-10">

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-pink-100">
                    Care Approach 02
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl font-black">
                    Modern Medical Care
                  </h3>

                  <p className="mt-5 text-pink-50 leading-relaxed">
                    Modern medical evaluation, investigations and treatment
                    can be incorporated whenever appropriate for the
                    patient's condition and clinical needs.
                  </p>

                  <div className="mt-8 space-y-3">

                    {[
                      "Medical consultation",
                      "Clinical evaluation when required",
                      "Appropriate diagnostic guidance",
                      "Modern treatment support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm">
                          ✓
                        </span>

                        <span className="text-sm font-medium text-white/90">
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


        {/* =========================================================
            6. WHAT WE FOCUS ON
        ========================================================= */}
        <section className="bg-white py-24 lg:py-32">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                Comprehensive Care
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2937]">
                More than just treating a symptom.
              </h2>

              <p className="mt-5 text-lg text-[#4B5563] leading-relaxed">
                Our healthcare approach is designed to help you understand
                your condition and follow a personalized treatment and
                lifestyle plan.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {careItems.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-[#831843]/30 hover:shadow-lg hover:shadow-[#831843]/5"
                >

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FDF2F8] text-[#831843] font-black group-hover:bg-[#831843] group-hover:text-white transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>

                      <span className="text-[10px] font-black tracking-[0.16em] text-[#047857]">
                        {item.tag}
                      </span>

                      <h3 className="mt-1 text-xl font-bold text-[#1F2937]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================================
            7. PATIENT JOURNEY
        ========================================================= */}
        <section className="bg-[#FDF2F8] border-y border-[#831843]/10">

          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">

            <div className="text-center max-w-2xl mx-auto mb-16">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857]">
                Your Health Journey
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-[#1F2937]">
                Simple. Personal. Clear.
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              {[
                ["01", "Consultation", "Discuss your health concerns and goals."],
                ["02", "Assessment", "Understand your condition and individual needs."],
                ["03", "Treatment Plan", "Receive personalized Ayurvedic and/or modern care guidance."],
                ["04", "Follow-Up", "Review progress and adjust your care when required."],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="relative bg-white rounded-2xl border border-[#831843]/10 p-6"
                >

                  <span className="text-3xl font-black text-[#831843]/20">
                    {num}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-[#1F2937]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                    {desc}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================================
            8. FINAL CTA
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#831843] px-7 py-14 sm:px-12 lg:px-20 lg:py-20 text-center">

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#047857]/30 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">

              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-pink-100">
                Begin Your Health Journey
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Take the first step toward
                <span className="text-[#F59E0B]"> better health.</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-pink-100">
                Speak with our team to understand your health concerns and
                explore a personalized approach combining Ayurvedic wisdom
                with appropriate modern medical care.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 font-bold text-[#831843] shadow-lg transition-all duration-300 hover:bg-[#FDF2F8] hover:-translate-y-0.5"
                >
                  Book a Consultation
                </a>

                <a
                  href="tel:+918700693622"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:bg-white/15"
                >
                  Call +91 8700693622
                </a>

              </div>

            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}