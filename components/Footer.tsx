import Link from "next/link";

export default function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="bg-gray-900 text-white">

```
  {/* =====================================================
      MAP SECTION
  ====================================================== */}
  <div className="relative w-full h-80 sm:h-96 overflow-hidden border-b border-gray-700">

    <iframe
      title="Suman Arogya Clinic Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1049504780516!2d77.2089!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjQiTiA3N8KwMTInMzIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{
        border: 0,
        filter: "grayscale(20%) contrast(105%)",
      }}
      loading="lazy"
      aria-label="Clinic Location Map"
    />

    <div className="absolute inset-0 bg-gray-900/10 pointer-events-none" />

    {/* Location Card */}
    <div className="absolute bottom-6 left-5 sm:left-8 lg:left-12 z-10">
      <div className="bg-white/95 backdrop-blur-md text-gray-800 border border-pink-100 p-5 sm:p-6 rounded-2xl shadow-xl max-w-sm">

        <div className="flex items-center gap-3 mb-3">

          <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-pink-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            Visit Suman Arogya
          </span>

        </div>

        <h4 className="text-lg font-bold text-gray-900">
          Suman Arogya Clinic
        </h4>

        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Sector 73, Noida,
          <br />
          Uttar Pradesh 201316
        </p>

      </div>
    </div>

  </div>


  {/* =====================================================
      NEWSLETTER / HEALTH UPDATE
  ====================================================== */}
  <section className="bg-pink-50 border-b border-pink-100">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

      <div className="bg-white rounded-3xl border border-pink-100 shadow-sm p-7 sm:p-9 lg:p-11">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7">

            <div className="flex items-center gap-2 mb-3">

              <span className="w-2.5 h-2.5 rounded-full bg-emerald-700" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Health & Wellness
              </span>

            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Stay Informed About Your Health
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
              Receive helpful health tips, Ayurvedic wellness insights,
              lifestyle guidance and updates from Suman Arogya Clinic.
            </p>

          </div>


          <div className="lg:col-span-5">

            <form className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  px-4 py-3.5
                  bg-white
                  border border-gray-200
                  rounded-xl
                  text-sm
                  text-gray-800
                  placeholder-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-pink-900/20
                  focus:border-pink-900
                "
                required
              />

              <button
                type="submit"
                className="
                  px-7 py-3.5
                  rounded-xl
                  bg-pink-900
                  hover:bg-pink-800
                  text-white
                  font-semibold
                  text-sm
                  shadow-sm
                  transition-all
                  duration-200
                  whitespace-nowrap
                "
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  </section>


  {/* =====================================================
      MAIN CLINIC FOOTER
  ====================================================== */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">


      {/* =================================================
          BRAND / CLINIC INTRO
      ================================================== */}
      <div className="lg:col-span-4">

        <Link
          href="/"
          className="inline-flex items-center gap-3 group"
        >

          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-pink-900
              flex items-center justify-center
              shadow-lg
              group-hover:bg-pink-800
              transition-colors
            "
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>


          <div>

            <span className="block text-2xl font-bold tracking-tight text-white">
              Suman Arogya
            </span>

            <span className="block mt-1 text-[10px] text-gray-700 bg-white px-2.5 py-1 rounded font-semibold tracking-[0.16em] uppercase w-fit">
              Ayurvedic & Modern Care
            </span>

          </div>

        </Link>


        <p className="mt-7 text-sm sm:text-base text-gray-300 leading-7 max-w-md">
          Suman Arogya Clinic provides compassionate healthcare with
          Ayurvedic wisdom and modern medical practices, focused on
          personalized treatment and long-term wellbeing.
        </p>


        {/* Clinic Values */}
        <div className="flex items-center gap-2 mt-7">

          <span className="w-10 h-[2px] bg-pink-900" />

          <span className="w-2 h-2 rounded-full bg-emerald-700" />

          <span className="text-sm text-gray-400">
            Care • Trust • Wellness
          </span>

        </div>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================== */}
      <div className="lg:col-span-2">

        <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white mb-6">
          Quick Links
        </h4>

        <ul className="space-y-4 text-sm sm:text-base">

          <li>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/doctors"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Our Doctors
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Treatments
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </li>

        </ul>

      </div>


      {/* =================================================
          SERVICES
      ================================================== */}
      <div className="lg:col-span-3">

        <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white mb-6">
          Our Care
        </h4>

        <ul className="space-y-4 text-sm sm:text-base">

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Ayurvedic Consultation
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Modern Medicine
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Physiotherapy
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Diet & Wellness
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Lifestyle Management
            </Link>
          </li>

        </ul>

      </div>


      {/* =================================================
          CLINIC CONTACT
      ================================================== */}
      <div className="lg:col-span-3">

        <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white mb-6">
          Clinic Contact
        </h4>


        <ul className="space-y-5 text-sm sm:text-base">


          {/* Address */}
          <li className="flex items-start gap-4">

            <div
              className="
                w-10 h-10
                rounded-xl
                bg-emerald-700/10
                border border-emerald-700/20
                flex items-center justify-center
                flex-shrink-0
              "
            >

              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

            </div>

            <span className="text-gray-300 leading-6">
              Sector 73, Noida,
              <br />
              Uttar Pradesh 201316
            </span>

          </li>


          {/* Phone */}
          <li className="flex items-center gap-4">

            <div
              className="
                w-10 h-10
                rounded-xl
                bg-emerald-700/10
                border border-emerald-700/20
                flex items-center justify-center
                flex-shrink-0
              "
            >

              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

            </div>

            <a
              href="tel:+918700693622"
              className="text-gray-300 hover:text-white transition-colors"
            >
              +91 87006 93622
            </a>

          </li>


          {/* Email */}
          <li className="flex items-center gap-4">

            <div
              className="
                w-10 h-10
                rounded-xl
                bg-emerald-700/10
                border border-emerald-700/20
                flex items-center justify-center
                flex-shrink-0
              "
            >

              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

            </div>

            <a
              href="mailto:sumanarogyaa@gmail.com"
              className="text-gray-300 hover:text-white transition-colors truncate"
            >
              sumanarogyaa@gmail.com
            </a>

          </li>

        </ul>


        {/* Appointment CTA */}
        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            mt-7
            px-5 py-3
            rounded-xl
            bg-pink-900
            hover:bg-pink-800
            text-white
            text-sm
            font-semibold
            transition-colors
          "
        >
          Book a Consultation
        </Link>

      </div>

    </div>


    {/* =====================================================
        BOTTOM STRIP
    ====================================================== */}
    <div
      className="
        mt-16
        pt-8
        border-t border-gray-700
        flex flex-col
        sm:flex-row
        justify-between
        items-center
        gap-5
      "
    >

      <p className="text-sm text-gray-400 text-center sm:text-left">
        © {currentYear} Suman Arogya Clinic. All rights reserved.
      </p>


      <div className="flex items-center gap-6 text-sm">

        <Link
          href="/privacy-policy"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Terms of Service
        </Link>

      </div>

    </div>

  </div>

</footer>


);
}
