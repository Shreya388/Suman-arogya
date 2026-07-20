"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
}


const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
];

// Comprehensive 32-disease clinical index for maximum patient trust
const diseaseCategories = [
  {
    title: "Chronic & Metabolic Care",
    items: [
      { label: "Diabetes Mellitus (Type 1 & 2)", href: "/diseases/diabetes" },
      { label: "Hypertension (Blood Pressure)", href: "/diseases/hypertension-bp" },
      { label: "Thyroid (Hypo/Hyperthyroidism)", href: "/diseases/thyroid" },
      { label: "Hyperlipidemia (High Cholesterol)", href: "/diseases/cholesterol" },
      { label: "Fatty Liver Disease (NAFLD)", href: "/diseases/fatty-liver" },
      { label: "Gout & High Uric Acid", href: "/diseases/gout" },
      { label: "Obesity & Metabolic Syndrome", href: "/diseases/obesity" },
      { label: "Anemia & Blood Disorders", href: "/diseases/anemia" },
    ]
  },
  {
    title: "Skin & Hair (Dermatology)",
    items: [
      { label: "Eczema & Dermatitis", href: "/diseases/eczema" },
      { label: "Psoriasis Management", href: "/diseases/psoriasis" },
      { label: "Severe Acne & Rosacea", href: "/diseases/acne" },
      { label: "Fungal Infections (Ringworm, etc.)", href: "/diseases/fungal-infections" },
      { label: "Chronic Urticaria (Hives)", href: "/diseases/hives" },
      { label: "Alopecia & Hair Loss Care", href: "/diseases/hair-loss" },
      { label: "Skin Allergies & Rashes", href: "/diseases/skin-allergies" },
      { label: "Vitiligo & Pigmentation", href: "/diseases/vitiligo" },
    ]
  },
  {
    title: "Digestive & Proctology",
    items: [
      { label: "Piles (Haemorrhoids)", href: "/diseases/piles" },
      { label: "Anal Fissures & Fistulas", href: "/diseases/fissures" },
      { label: "GERD, Acidity & Heartburn", href: "/diseases/gerd-acidity" },
      { label: "Gastric & Peptic Ulcers", href: "/diseases/ulcers" },
      { label: "Irritable Bowel Syndrome (IBS)", href: "/diseases/ibs" },
      { label: "Chronic Constipation & Bloating", href: "/diseases/constipation" },
      { label: "Fatty Food Intolerance", href: "/diseases/indigestion" },
      { label: "Gallbladder Stones", href: "/diseases/gallstones" },
    ]
  },
  {
    title: "Respiratory, Joint & Family",
    items: [
      { label: "Asthma & Respiratory Allergies", href: "/diseases/asthma" },
      { label: "COPD & Chronic Bronchitis", href: "/diseases/copd" },
      { label: "Migraine & Chronic Headaches", href: "/diseases/migraine" },
      { label: "Urinary Tract Infections (UTI)", href: "/diseases/uti" },
      { label: "PCOS & Female Hormonal Care", href: "/diseases/pcos" },
      { label: "Osteoarthritis & Joint Pain", href: "/diseases/joint-pain" },
      { label: "Rheumatoid & Autoimmune Pain", href: "/diseases/rheumatoid" },
      { label: "Viral Fevers (Dengue/Typhoid)", href: "/diseases/viral-fevers" },
    ]
  }
];

export default function ClinicHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled past the top bar (approx 40px), make it sticky
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* 1. Continuous Scrolling Informational Bar */}
      <div className="w-full bg-slate-900 py-2 overflow-hidden border-b border-slate-900">
        <div className="whitespace-nowrap animate-marquee flex items-center text-white font-medium text-xs sm:text-sm font-medium">
          <span className="mx-4">
            If you are struggling with piles, psoriasis, diabetes, skin problems, or other health conditions, Call: 7002470396 for a personalized consultation.
          </span>
          {/* Duplicate the span so it appears seamless */}
          <span className="mx-4">
            If you are struggling with piles, psoriasis, diabetes, skin problems, or other health conditions, Call:  7002470396 for a personalized consultation.
          </span>
        </div>
      </div>

      <style jsx>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: inline-block;
    animation: marquee 20s linear infinite;
  }
`}</style>

      {/* 2. Main Navigation Bar */}
      <nav className={`left-0 right-0 z-50 bg-white border-b border-gray-100 backdrop-blur-md bg-opacity-95 transition-all ${isSticky ? "fixed top-0 w-full shadow-md animate-in fade-in duration-200" : "relative"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* Medical Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">
                    Suman Arogya
                  </span>
                  <span className="text-[10px] text-teal-600 font-semibold tracking-widest uppercase mt-0.5">
                    Consultation Clinic
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 font-semibold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* DISEASES MEGA MENU TRIGGER */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-slate-600 hover:text-teal-600 font-semibold text-sm transition-colors flex items-center space-x-1 py-2 focus:outline-none"
                >
                  <span>Diseases</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Desktop Mega Layout Panel */}
                {isDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[980px] lg:w-[1180px] bg-white border border-slate-100 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    {diseaseCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="text-xs font-bold text-teal-700 uppercase tracking-wider pb-1.5 border-b border-teal-50">
                          {category.title}
                        </h4>
                        <div className="flex flex-col space-y-1.5">
                          {category.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="text-gray-600 hover:text-teal-500 text-xs font-semibold py-0.5 transition-colors block text-left leading-relaxed"
                            >
                              • {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-teal-600 font-semibold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Action Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/book-appointment"
                className="bg-teal-400 hover:bg-teal-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-slate-500 hover:text-teal-600 p-2 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* 3. Mobile Expandable Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-teal-600 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Responsive Accordion */}
            <div className="border-b border-gray-50 py-2">
              <button
                onClick={() => setIsMobileAccordionOpen(!isMobileAccordionOpen)}
                className="w-full flex justify-between items-center text-left text-base font-medium text-slate-700 hover:text-teal-600 focus:outline-none"
              >
                <span>Diseases Treated</span>
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${isMobileAccordionOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileAccordionOpen && (
                <div className="mt-2 pl-3 space-y-4 bg-slate-50 p-3 rounded-xl max-h-[350px] overflow-y-auto">
                  {diseaseCategories.map((category, index) => (
                    <div key={index} className="space-y-1">
                      <h5 className="text-[11px] font-bold text-teal-800 uppercase tracking-wider mt-2">
                        {category.title}
                      </h5>
                      {category.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileAccordionOpen(false);
                          }}
                          className="block py-1 text-sm text-gray-600 hover:text-teal-500 font-medium"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-teal-600 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-teal-400 hover:bg-teal-50 text-white font-semibold px-4 py-3 rounded-xl shadow"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* Add this spacer line */}
      {isSticky && <div className="h-20 w-full" />}
    </header>
  );
}