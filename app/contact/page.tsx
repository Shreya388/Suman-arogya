"use client";

import Footer from '@/components/Footer';
import React, { useState } from 'react';

interface ContactInfoItem {
  icon: string;
  title: string;
  detail: string;
  sub: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'metabolic',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect your database/email API endpoint here in the future
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  const contactDetails: ContactInfoItem[] = [
    {
      icon: "📞",
      title: "Direct Care Line",
      detail: "+91 98765 43210",
      sub: "Mon - Sat (9:00 AM - 6:00 PM)"
    },
    {
      icon: "✉️",
      title: "Clinical Email Support",
      detail: "care@sumanarogya.com",
      sub: "We reply within 24 business hours"
    },
    {
      icon: "📍",
      title: "Our Main Headquarters",
      detail: "1st Floor, Suman Complex, Sector 15",
      sub: "Noida, UP - 201301"
    }
  ];

  return (
    <>
    <div className="bg-[#fafafa] text-slate-900 min-h-screen selection:bg-teal-500 selection:text-white antialiased pb-24">
      
      {/* 1. Modern Minimalist Hero */}
      <section className="relative pt-32 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-teal-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 tracking-wide uppercase mb-6 border border-teal-100">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            Let's start your <br />
            <span className="bg-gradient-to-r from-rose-600 via-rose-600 to-fuchsia-500 bg-clip-text text-transparent">
              health transformation.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Have questions about our metabolic programs, appointment schedules, or lab tests? Drop us a line below—our patient care team is here to guide you.
          </p>
        </div>
      </section>

      {/* 2. Form & Detail Grid Segment */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Dynamic Intake Form (Grid 7/12) */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200/60 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 text-3xl rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received Successfully!</h3>
              <p className="text-slate-500 font-light max-w-sm mx-auto">
                Thank you for reaching out to Suman Arogya. Our clinical intake coordinator will contact you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-semibold text-teal-600 hover:text-teal-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Clinical Intake Questionnaire</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter 10-digit mobile number" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Pathway of Interest</label>
                <select 
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none appearance-none"
                >
                  <option value="metabolic">Metabolic Alignment & Diabetes Reversal</option>
                  <option value="cardio">Preventative Cardiology & Blood Pressure</option>
                  <option value="nutrition">Behavioral Dietetics & Gut Alignment</option>
                  <option value="preventative">Longevity & General Checkup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Goals / Medical History Briefly</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Share details on what you wish to resolve or achieve..." 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Consultation Request
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Essential Clinical Coordinates (Grid 5/12) */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 sm:p-10 shadow-lg">
            <h4 className="text-xl font-bold mb-2 text-teal-300">Quick Availability</h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
              You can drop by without a prior booking for emergency cases, but standard clinical diagnostics require structured scheduling.
            </p>
            <div className="border-t border-slate-850 pt-4 space-y-2.5 text-sm font-light">
              <div className="flex justify-between">
                <span className="text-slate-400">Monday - Friday:</span>
                <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Saturday:</span>
                <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sunday:</span>
                <span className="text-rose-400 font-semibold">Closed</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/60 p-6 flex items-start gap-4 shadow-sm"
              >
                <div className="text-2xl bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-base font-bold text-slate-900 mt-1">{item.detail}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-light">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
    <Footer />
    </>
  );
}