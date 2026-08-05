"use client";

import React, { useState, FormEvent, useEffect } from "react";


interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    condition: "Diabetes Mellitus",
    preferredDate: "",
    notes: ""
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your API integration or form submission logic here
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      condition: "Diabetes Mellitus",
      preferredDate: "",
      notes: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-teal-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-teal-300">Expert Care Guidance</span>
            <h3 className="text-lg font-bold">Book Your Clinical Consultation</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-teal-800/80 hover:bg-teal-800 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-teal-100 shadow-sm">
                ✓
              </div>
              <h4 className="text-xl font-bold text-slate-900">Appointment Request Received!</h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our medical coordinator will reach out to your phone number (<span className="font-semibold text-slate-800">{formData.phone}</span>) shortly to confirm your consultation schedule.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Primary Health Concern
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors"
                  >
                    <option value="Diabetes Mellitus">Diabetes Mellitus</option>
                    <option value="Hypertension">Hypertension / Blood Pressure</option>
                    <option value="Piles & Fissures">Piles & Fissures</option>
                    <option value="Skin Conditions / Psoriasis">Skin Conditions / Psoriasis</option>
                    <option value="Digestive & Acidity">Digestive & Acidity (IBS/GERD)</option>
                    <option value="Joint & Arthritis Pain">Joint & Arthritis Pain</option>
                    <option value="PCOS / Hormonal Balance">PCOS / Hormonal Balance</option>
                    <option value="Other General Health Concern">Other General Concern</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Brief Medical Notes / Symptoms
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Describe your current symptoms or specific health goals..."
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-slate-800 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-3">
                  🔒 Your medical data is strictly confidential and protected by privacy standards.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}