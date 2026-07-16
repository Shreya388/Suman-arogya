import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 text-slate-600 border-t border-slate-200">
      
      {/* 1. Top Newsletter / Clinic Announcement Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Stay Updated on Health & Wellness</h3>
            <p className="text-sm text-slate-500">Subscribe to our monthly newsletter for clinical insights, diet roadmaps, and health tips.</p>
          </div>
          <div className="lg:col-span-6">
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md lg:ml-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:border-rose-500 text-slate-800 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-rose-100 transition-colors whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Brand Identity */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Suman Arogya
                </span>
                <span className="text-[10px] text-rose-600 font-semibold tracking-widest uppercase mt-0.5">
                  Consultation Clinic
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Providing modern, compassionate healthcare consultation solutions. Dedicated to improving family wellness through clinical excellence and early diagnostics.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/" className="hover:text-rose-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-rose-600 transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-rose-600 transition-colors">Our Doctors</Link></li>
              <li><Link href="/contact" className="hover:text-rose-600 transition-colors">Contact Desk</Link></li>
            </ul>
          </div>

          {/* Specialities Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><Link href="/services" className="hover:text-rose-600 transition-colors">General Medicine</Link></li>
              <li><Link href="/services" className="hover:text-rose-600 transition-colors">Pediatric Care</Link></li>
              <li><Link href="/services" className="hover:text-rose-600 transition-colors">Cardiology Screening</Link></li>
              <li><Link href="/services" className="hover:text-rose-600 transition-colors">Diet & Wellness</Link></li>
            </ul>
          </div>

          {/* Direct Address & Clean SVG Icons */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Clinic Desk
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-500 font-medium">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sector 4, New Delhi, 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-rose-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-rose-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">support@sumanarogya.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Legal Copyright Strip */}
        <div className="pt-8 mt-12 border-t border-slate-200 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Suman Arogya. All rights reserved.</p>
          <div className="flex space-x-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}