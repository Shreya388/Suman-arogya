"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a live app, you would send this data to your database or an email system here
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset alert after 5 seconds
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-widest block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            We Are Ready to Assist You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have a question about our treatments or want to reach our support desk? Drop us a line or visit our facility.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Call Us Directly</h4>
                <p className="text-slate-600 text-sm mt-1">General Desk: +91 98765 43210</p>
                <p className="text-slate-600 text-sm">Emergency Line: +91 98765 43211</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Email Correspondence</h4>
                <p className="text-slate-600 text-sm mt-1">support@sumanarogya.com</p>
                <p className="text-slate-600 text-sm">consult@sumanarogya.com</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Clinic Location</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  123 Medical Wellness Lane, Sector 4,<br />
                  Near Central Health Park, New Delhi, 110001
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl text-sm font-medium border border-emerald-200">
                ✓ Thank you! Your message has been sent successfully. Our clinic desk will call you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-slate-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-slate-800"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-slate-800"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-slate-800 resize-none"
                  placeholder="Tell us briefly about your inquiry or setup request..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md shadow-rose-100"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}