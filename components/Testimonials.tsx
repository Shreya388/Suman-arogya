interface Testimonial {
  quote: string;
  author: string;
  role: string; // e.g., "Verified Patient" or condition treated
  treatment: string; // The service they received
  rating: number;
}

const patientReviews: Testimonial[] = [
  {
    quote: "Dr. Suman took the time to listen to my chronic back pain symptoms instead of rushing through the check-up. The personalized treatment map actually worked within two weeks.",
    author: "Ramesh Sharma",
    role: "Verified Patient",
    treatment: "General Medicine",
    rating: 5,
  },
  {
    quote: "The pediatric consultation here is wonderful. My 4-year-old daughter is usually terrified of clinics, but the environment was so gentle and comforting that she didn't cry once during her immunizations.",
    author: "Priya Patel",
    role: "Parent",
    treatment: "Pediatric Care",
    rating: 5,
  },
  {
    quote: "I visited for a preventive cardiology screening. The advanced diagnostic breakdown was incredibly clear, and the diet guidelines helped me stabilize my blood pressure naturally.",
    author: "Arjun Mehta",
    role: "Verified Patient",
    treatment: "Cardiology Screening",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-lime-600 uppercase tracking-widest block">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted by Hundreds of Happy Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Read firsthand experiences from individuals and families who achieved better health and wellness through our clinical consultation center.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute top-6 right-8 text-lime-200 text-6xl font-serif select-none leading-none pointer-events-none">
                “
              </span>

              <div className="space-y-4">
                {/* Star Rating Graphic */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Patient Quote Review Text */}
                <p className="text-slate-700 text-sm md:text-base italic leading-relaxed relative z-10">
                  "{review.quote}"
                </p>
              </div>

              {/* Patient Bio & Context Metadata */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {review.author}
                  </h4>
                  <p className="text-slate-500 text-xs font-medium">
                    {review.role}
                  </p>
                </div>
                
                {/* Treatment Category Tag */}
                <span className="text-[10px] sm:text-xs bg-lime-50 text-lime-700 font-semibold px-2.5 py-1 rounded-md">
                  {review.treatment}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            *To protect privacy, patient records and names conform to medical standard compliance profiles.
          </p>
        </div>

      </div>
    </section>
  );
}