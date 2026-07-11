"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function ClinicHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* 1. Top Informational Bar (Crucial for Clinics) */}
      <div className="bg-lime-900 text-gray-200 text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency: +91 98765 43210
          </span>
          <span className="hidden md:inline-flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mon - Sat: 9:00 AM - 8:00 PM
          </span>
        </div>
        <div>
          <span className="bg-lime-600 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">
            ✓ Online & In-Clinic
          </span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Medical Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="p-2 bg-teal-50 text-lime-600 rounded-lg">
                  {/* Medical Cross Icon */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">
                    Suman Arogya
                  </span>
                  <span className="text-[10px] text-lime-600 font-semibold tracking-widest uppercase mt-0.5">
                    Consultation Clinic
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Action Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/book-appointment"
                className="bg-lime-600 hover:bg-lime-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-teal-100 transition-all transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Open/Close Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-slate-500 hover:text-teal-600 p-2 focus:outline-none"
                aria-label="Toggle Navigation"
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
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-teal-600 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-teal-600 text-white font-semibold px-4 py-3 rounded-xl shadow"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}