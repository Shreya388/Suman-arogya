import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Science of Gut Health: Bridging Ancient Ayurveda with Modern Microbiome Research",
    excerpt: "Discover how traditional Ayurvedic views on Agni (digestive fire) align with modern clinical findings on gut microbiota and systemic immunity.",
    category: "Gastroenterology",
    readTime: "5 min read",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Rajesh Sharma",
      role: "Chief Ayurvedic Physician",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    },
    slug: "science-of-gut-health-ayurveda-microbiome",
  },
  {
    title: "Managing Chronic Inflammation Naturally Through Targeted Dietary Protocols",
    excerpt: "An evidence-based exploration of anti-inflammatory herbs, spices, and clinical meal sequencing designed to reduce systemic pain.",
    category: "Metabolic Wellness",
    readTime: "7 min read",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Ananya Iyer",
      role: "Clinical Nutrition Expert",
      avatar: "https://images.unsplash.com/photo-1594824813576-92c2a613b53c?auto=format&fit=crop&w=200&q=80",
    },
    slug: "managing-chronic-inflammation-dietary-protocols",
  },
  {
    title: "Understanding Your Doshas: A Clinical Perspective on Metabolic Types",
    excerpt: "Break down Vata, Pitta, and Kapha through the lens of modern endocrinology and personalized medicine frameworks.",
    category: "Preventive Care",
    readTime: "4 min read",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Rajesh Sharma",
      role: "Chief Ayurvedic Physician",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    },
    slug: "understanding-doshas-clinical-perspective",
  },
  {
    title: "Holistic Approaches to Managing Type 2 Diabetes and Insulin Resistance",
    excerpt: "Review clinical protocols combining herbal adjuncts, structured exercise routines, and glycemic index mapping for stable blood sugar.",
    category: "Endocrinology",
    readTime: "6 min read",
    date: "June 04, 2026",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Vikram Malhotra",
      role: "Internal Medicine Specialist",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80",
    },
    slug: "holistic-approaches-type-2-diabetes",
  },
  {
    title: "Dermatological Health: Healing Psoriasis and Eczema from Within",
    excerpt: "Why topical treatments alone often fall short, and how deep internal detoxification supports long-term skin barrier restoration.",
    category: "Dermatology",
    readTime: "5 min read",
    date: "May 22, 2026",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Ananya Iyer",
      role: "Clinical Nutrition Expert",
      avatar: "https://images.unsplash.com/photo-1594824813576-92c2a613b53c?auto=format&fit=crop&w=200&q=80",
    },
    slug: "dermatological-health-healing-skin-from-within",
  },
  {
    title: "The Role of Adaptogenic Herbs in Managing Chronic Stress and Fatigue",
    excerpt: "An analytical look at Ashwagandha, Brahmi, and Turmeric in down-regulating cortisol and restoring adrenal balance.",
    category: "Mental Wellness",
    readTime: "6 min read",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Rajesh Sharma",
      role: "Chief Ayurvedic Physician",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    },
    slug: "adaptogenic-herbs-managing-stress-fatigue",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
    <div className="bg-[#fafafa] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-widest block">
            Clinical Insights & Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Health Intelligence & Articles
          </h1>
          <p className="text-slate-500 text-base font-light max-w-2xl mx-auto">
            Explore evidence-based medical articles, diet roadmaps, and expert commentary blending traditional Ayurveda with modern clinical practice.
          </p>
        </div>

        {/* Featured Hero Blog Post (Height Optimized) */}
        <div className="mb-16">
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white border border-slate-200/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-6 h-60 sm:h-72 lg:h-full relative overflow-hidden bg-slate-100">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                  Featured Insight
                </span>
              </div>
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                    <span className="text-teal-600 uppercase tracking-wider font-bold">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{featuredPost.author.name}</h4>
                      <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Regular Grid of Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post, index) => (
            <Link 
              key={index}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-slate-200/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full bg-slate-100 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  <span className="text-xs font-bold text-slate-800">{post.author.name}</span>
                </div>
                <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.15),transparent_40%)] pointer-events-none" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight">Never miss a clinical update</h3>
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              Get our curated monthly digest straight to your inbox. Direct clinical insights, holistic diet guides, and expert wellness tips.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-teal-400 text-white placeholder-slate-400 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm shadow-lg shadow-teal-950/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}