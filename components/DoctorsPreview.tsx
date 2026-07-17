// components/DoctorsPreview.tsx
import Link from "next/link";
import Image from "next/image";

interface Doctor {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  speciality: string;
  image: string; // Real image source URL
}

const featuredDoctors: Doctor[] = [
  {
    name: "Dr. Suman Sharma",
    role: "Chief Medical Consultant",
    qualifications: "MD, MBBS (Internal Medicine)",
    experience: "15+ Years Experience",
    speciality: "Chronic Care & Metabolic Disorders",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Dr. Rohan Verma",
    role: "Senior Consultant Dermatologist",
    qualifications: "MD, DVD (Dermatology & Hair Care)",
    experience: "12+ Years Experience",
    speciality: "Advanced Dermatology & Trichology",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Dr. Ananya Reddy",
    role: "Senior Gastro & Proctology Specialist",
    qualifications: "MS, MBBS (General Surgery)",
    experience: "10+ Years Experience",
    speciality: "Digestive Care & Laser Proctology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80",
  },
];

export default function DoctorsPreview() {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
            Clinical Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Meet Our Experienced Medical Professionals
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Get personalized, evidence-based consultations from our dedicated team of senior healthcare specialists.
          </p>
        </div>

        {/* Doctors Layout Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center p-6 text-center"
            >
              {/* Doctor Avatar Profile (Swapped from SVG to Next.js Image) */}
              <div className="w-28 h-28 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 mb-6 relative overflow-visible bg-slate-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="112px"
                  className="rounded-full object-cover"
                  priority={index === 0}
                />
                {/* Online Indicator Dot */}
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full z-10"></span>
              </div>

              {/* Profile Details */}
              <div className="space-y-2 flex-grow">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-fuchsia-600 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-xs font-semibold text-rose-500 tracking-wider uppercase">
                  {doctor.role}
                </p>
                <p className="text-xs font-medium text-slate-400">
                  {doctor.qualifications}
                </p>
                
                <hr className="w-12 border-slate-100 mx-auto my-3" />
                
                <div className="bg-slate-50 rounded-xl px-4 py-2.5 text-xs text-slate-600 font-medium space-y-1">
                  <div className="text-slate-800 font-semibold">{doctor.speciality}</div>
                  <div className="text-slate-400 text-[11px]">{doctor.experience}</div>
                </div>
              </div>

              {/* Action Trigger Card */}
              <div className="w-full pt-6 mt-4 border-t border-slate-50">
                <Link
                  href="/book-appointment"
                  className="w-full inline-block bg-slate-50 hover:bg-fuchsia-50 text-slate-700 hover:text-fuchsia-600 font-semibold text-xs py-2.5 rounded-xl transition-colors"
                >
                  Book Slot Direct
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Section Action Footer */}
        <div className="text-center mt-12">
          <Link
            href="/our-doctors"
            className="inline-flex items-center text-sm font-bold text-fuchsia-600 hover:text-rose-500 transition-colors group"
          >
            View Our Full Medical Directory
            <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7-7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}