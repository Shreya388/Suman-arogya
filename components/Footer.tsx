import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">

      {/* =====================================================
          MAP SECTION
      ====================================================== */}
      <div className="relative w-full h-72 sm:h-80 overflow-hidden border-b border-gray-700">

        <iframe
          title="Suman Arogya Clinic Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1049504780516!2d77.2089!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjQiTiA3N8KwMTInMzIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter:
              "grayscale(20%) contrast(105%)",
          }}
          loading="lazy"
          aria-label="Clinic Location Map"
        />

        {/* Map overlay */}
        <div className="absolute inset-0 bg-gray-800/10 pointer-events-none" />

        {/* Location Card */}
        <div className="absolute bottom-5 left-5 sm:left-8 z-10">
          <div className="bg-white/95 backdrop-blur-md text-gray-800 border border-pink-100 p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs">

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-pink-900"
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

              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                Visit Us
              </span>
            </div>

            <h4 className="text-md font-bold text-gray-800">
              Suman Arogya Clinic
            </h4>

            <p className="text-sm text-gray-600 mt-1">
              Sector 4, New Delhi, 110001
            </p>
          </div>
        </div>
      </div>


      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="bg-pink-50 border-b border-pink-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="bg-white rounded-3xl border border-pink-100 shadow-sm p-6 sm:p-8 lg:p-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7">

                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-700" />
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                    Health & Wellness
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                  Stay Updated on Your Health
                </h3>

                <p className="mt-2 text-md text-gray-600 max-w-xl leading-relaxed">
                  Get monthly health tips, Ayurvedic wellness insights,
                  diet guidance and updates from Suman Arogya.
                </p>

              </div>


              <div className="lg:col-span-5">

                <form className="flex flex-col sm:flex-row gap-3">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      flex-1
                      px-4 py-3
                      bg-white
                      border border-gray-200
                      rounded-xl
                      text-md
                      text-gray-800
                      placeholder-gray-600
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
                      px-6 py-3
                      rounded-xl
                      bg-pink-900
                      hover:bg-pink-800
                      text-white
                      font-semibold
                      text-md
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
          MAIN FOOTER
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">


          {/* =================================================
              BRAND
          ================================================== */}
          <div className="lg:col-span-4">

            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >

              {/* Logo mark */}
              <div className="
                w-11 h-11
                rounded-xl
                bg-pink-900
                flex items-center justify-center
                shadow-lg
                group-hover:bg-pink-800
                transition-colors
              ">

                <svg
                  className="w-5 h-5 text-white"
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
                <span className="block text-xl font-bold tracking-tight text-white">
                  Suman Arogya
                </span>

                <span className="block text-[10px] text-gray-600 bg-white px-2 py-0.5 rounded mt-1 w-fit font-semibold tracking-widest uppercase">
                  Ayurvedic & Modern Care
                </span>
              </div>

            </Link>


            <p className="mt-5 text-md text-gray-300 leading-relaxed max-w-sm">
              Compassionate healthcare with an approach that combines
              Ayurvedic wisdom with modern healthcare practices for
              complete wellness.
            </p>


            {/* Green accent */}
            <div className="flex items-center gap-2 mt-6">

              <span className="w-8 h-[2px] bg-pink-900" />

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

            <h4 className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white
              mb-5
            ">
              Navigation
            </h4>

            <ul className="space-y-3 text-md">

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
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================== */}
          <div className="lg:col-span-3">

            <h4 className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white
              mb-5
            ">
              Our Services
            </h4>

            <ul className="space-y-3 text-md">

              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  General Medicine
                </Link>
              </li>

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
              CONTACT
          ================================================== */}
          <div className="lg:col-span-3">

            <h4 className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white
              mb-5
            ">
              Clinic Desk
            </h4>


            <ul className="space-y-4 text-md">


              {/* Address */}
              <li className="flex items-start gap-3">

                <div className="
                  w-9 h-9
                  rounded-lg
                  bg-emerald-700/10
                  border border-emerald-700/20
                  flex items-center justify-center
                  flex-shrink-0
                ">

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

                <span className="text-gray-300 leading-relaxed">
                  Sector 4, New Delhi,
                  <br />
                  110001
                </span>

              </li>


              {/* Phone */}
              <li className="flex items-center gap-3">

                <div className="
                  w-9 h-9
                  rounded-lg
                  bg-emerald-700/10
                  border border-emerald-700/20
                  flex items-center justify-center
                  flex-shrink-0
                ">

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
              <li className="flex items-center gap-3">

                <div className="
                  w-9 h-9
                  rounded-lg
                  bg-emerald-700/10
                  border border-emerald-700/20
                  flex items-center justify-center
                  flex-shrink-0
                ">

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
                  href="mailto:support@sumanarogya.com"
                  className="text-gray-300 hover:text-white transition-colors truncate"
                >
                  support@sumanarogya.com
                </a>

              </li>

            </ul>

          </div>

        </div>


        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}
        <div className="
          mt-12
          pt-7
          border-t border-gray-700
          flex flex-col sm:flex-row
          justify-between
          items-center
          gap-4
        ">

          <p className="text-sm sm:text-md text-gray-400">
            © {currentYear} Suman Arogya. All rights reserved.
          </p>


          <div className="flex items-center gap-6 text-sm sm:text-md">

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