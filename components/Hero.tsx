import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-fuchsia-50 via-white to-slate-50 overflow-hidden py-16 md:py-24 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading & Action Buttons */}
          <div className="space-y-6 lg:col-span-7 text-center lg:text-left z-10">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span>Accepting New Patients Today</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Your Health, Our <span className="text-rose-500">Priorities</span>. Trusted Consultation.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to Suman Arogya. Connect with experienced medical professionals for personalized, compassionate healthcare and expert clinical consultations tailored to your wellbeing.
            </p>

            {/* Crucial Clinic Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary Call To Action */}
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto text-center bg-rose-500 hover:bg-fuchsia-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-fuchsia-200 transition-all transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>

              {/* Secondary Call To Action */}
              <Link
                href="/services"
                className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-xl border border-slate-200 shadow-sm transition-all"
              >
                Explore Specialities
              </Link>
            </div>

            {/* Micro-Trust Info */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-medium">Expert Doctors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">99%</p>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-xs text-slate-500 font-medium">Emergency Care</p>
              </div>
            </div>

          </div>

          {/* Right Column: Aesthetic Graphic/Placeholder Asset Layout */}
          <div className="lg:col-span-5 relative flex justify-center">
            <img
        src="https://images.pexels.com/photos/7789602/pexels-photo-7789602.jpeg"
        alt="Medical facility consultation area"
        className="w-full h-auto rounded-2xl shadow-md object-cover max-h-[500px]"
      />
          </div>

        </div>
      </div>
    </section>
  );
}