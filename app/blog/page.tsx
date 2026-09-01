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
    title:
      "The Science of Gut Health: Bridging Ayurveda with Modern Medicine",
    excerpt:
      "Understand how digestive health, Agni and modern approaches to gut wellness can work together as part of a personalized care plan.",
    category: "Digestive Health",
    readTime: "5 min read",
    date: "July 12, 2026",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Ayurvedic & Modern Healthcare",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "science-of-gut-health-ayurveda-modern-medicine",
  },
  {
    title:
      "Managing Chronic Inflammation Through Lifestyle, Diet & Personalized Care",
    excerpt:
      "Explore practical approaches involving nutrition, daily habits and clinically guided care for people dealing with long-term inflammatory conditions.",
    category: "Lifestyle & Wellness",
    readTime: "7 min read",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Clinical Wellness Team",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "managing-chronic-inflammation",
  },
  {
    title: "Understanding Diabetes: Early Signs, Care & Lifestyle Management",
    excerpt:
      "Learn about common diabetes symptoms, the importance of timely medical evaluation and how lifestyle management supports long-term health.",
    category: "Diabetes Care",
    readTime: "6 min read",
    date: "June 04, 2026",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Ayurvedic & Modern Healthcare",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "understanding-diabetes-care",
  },
  {
    title: "Psoriasis & Skin Health: Understanding the Condition",
    excerpt:
      "A practical guide to understanding psoriasis, skin triggers and why a complete assessment can be important when managing chronic skin concerns.",
    category: "Skin Health",
    readTime: "5 min read",
    date: "May 22, 2026",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Integrative Healthcare Team",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "psoriasis-skin-health",
  },
  {
    title: "PCOS & Women's Health: Symptoms, Lifestyle & Medical Guidance",
    excerpt:
      "Understand common PCOS symptoms and how nutrition, lifestyle and appropriate medical guidance can support women's health.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "May 10, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Women's Health Care",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "pcos-womens-health",
  },
  {
    title: "Piles & Digestive Health: Understanding Symptoms and Treatment",
    excerpt:
      "Learn about common piles symptoms, contributing factors and why proper clinical evaluation is important for choosing suitable treatment.",
    category: "Piles & Digestive Care",
    readTime: "5 min read",
    date: "May 02, 2026",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Ayurvedic & Modern Healthcare",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "piles-digestive-health",
  },
  {
    title: "10 Early Warning Signs of Diabetes You Should Know",
    excerpt:
      "Learn about common early warning signs of diabetes and why recognizing them can help you seek timely medical advice.",
    category: "Diabetes",
    readTime: "5 min read",
    date: "August 19, 2026",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Suman Arogya",
      role: "Ayurvedic & Modern Healthcare",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=85",
    },
    slug: "early-warning-signs-of-diabetes",
  },
];

const categories = [
  "All Articles",
  "Ayurveda",
  "Diabetes",
  "Digestive Health",
  "Skin Health",
  "Women's Health",
  "Lifestyle",
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <main className="min-h-screen bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#FDF2F8]">
          {/* decorative shapes */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#831843]/5" />
          <div className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[#047857]/5" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

            <div className="max-w-4xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#831843]/15 bg-white px-4 py-2 shadow-sm mb-6">
                <span className="h-2 w-2 rounded-full bg-[#047857]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#831843]">
                  Suman Arogya Health Journal
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1F2937] leading-[1.08]">
                Trusted Health Guidance
                <span className="block text-[#831843] mt-2">
                  Rooted in Care.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-[#4B5563]">
                Practical health information from Suman Arogya, bringing
                together the principles of Ayurveda with appropriate modern
                medical care for a more complete approach to wellness.
              </p>

              {/* small trust points */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#047857] shadow-sm border border-[#047857]/10">
                  ✓ Ayurvedic Care
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#831843] shadow-sm border border-[#831843]/10">
                  ✓ Modern Medical Care
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#4B5563] shadow-sm border border-gray-100">
                  ✓ Patient Education
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            CATEGORY NAVIGATION
        ===================================================== */}
        <section className="bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">

              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`
                    whitespace-nowrap rounded-full px-4 py-2.5
                    text-xs font-bold transition-all
                    ${
                      index === 0
                        ? "bg-[#831843] text-white shadow-md"
                        : "bg-[#FDF2F8] text-[#831843] hover:bg-[#831843] hover:text-white"
                    }
                  `}
                >
                  {category}
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <section className="py-16 md:py-20 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* section heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#047857] mb-3">
                  Clinical Knowledge
                </p>

                <h2 className="text-3xl sm:text-4xl font-black text-[#1F2937]">
                  Health & Wellness Articles
                </h2>

                <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#4B5563] leading-7">
                  Understand common health conditions, treatment approaches,
                  lifestyle management and preventive care through easy-to-read
                  clinical information.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#4B5563]">
                <span className="h-2 w-2 rounded-full bg-[#047857]" />
                Evidence-informed health education
              </div>

            </div>

            {/* =================================================
                FEATURED ARTICLE
            ================================================= */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-[2rem] border border-[#831843]/10 bg-white shadow-[0_10px_40px_rgba(131,24,67,0.08)] hover:shadow-[0_20px_55px_rgba(131,24,67,0.13)] transition-all duration-300 mb-16"
            >

              <div className="grid lg:grid-cols-12">

                {/* image */}
                <div className="lg:col-span-6 h-72 sm:h-80 lg:h-[470px] relative overflow-hidden bg-[#FDF2F8]">

                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/55 via-transparent to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-wider text-[#831843] shadow-lg">
                      <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                      Featured Article
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-xs font-bold text-white">
                      Suman Arogya Health Journal
                    </span>
                  </div>

                </div>

                {/* content */}
                <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">

                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider mb-5">

                    <span className="text-[#047857]">
                      {featuredPost.category}
                    </span>

                    <span className="text-gray-300">•</span>

                    <span className="text-[#4B5563]">
                      {featuredPost.readTime}
                    </span>

                    <span className="text-gray-300">•</span>

                    <span className="text-[#4B5563]">
                      {featuredPost.date}
                    </span>

                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#1F2937] group-hover:text-[#831843] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-[#4B5563]">
                    {featuredPost.excerpt}
                  </p>

                  {/* author */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-11 w-11 rounded-full object-cover border-2 border-[#FDF2F8]"
                      />

                      <div>
                        <p className="text-xs font-bold text-[#1F2937]">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[11px] text-[#4B5563] mt-0.5">
                          {featuredPost.author.role}
                        </p>
                      </div>

                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-black text-[#831843]">
                      Read Article
                      <span className="text-base group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>

                  </div>

                </div>

              </div>
            </Link>

            {/* =================================================
                ARTICLE GRID
            ================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* image */}
                  <div className="relative h-56 overflow-hidden bg-[#FDF2F8]">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/35 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#831843] shadow-sm">
                        {post.category}
                      </span>
                    </div>

                  </div>

                  {/* content */}
                  <div className="p-6 flex flex-col flex-1">

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#4B5563]">
                      <span className="text-[#047857]">
                        {post.readTime}
                      </span>

                      <span className="text-gray-300">•</span>

                      <span>{post.date}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-black leading-snug text-[#1F2937] group-hover:text-[#831843] transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 flex items-center justify-between">

                      <div className="flex items-center gap-2.5">

                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full object-cover border border-gray-100"
                        />

                        <span className="text-[11px] font-bold text-[#1F2937]">
                          {post.author.name}
                        </span>

                      </div>

                      <span className="text-xs font-black text-[#831843] group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>

                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            AYURVEDA + MODERN MEDICINE SECTION
        ===================================================== */}
        <section className="bg-[#FDF2F8] py-16 md:py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="rounded-[2rem] bg-white border border-[#831843]/10 overflow-hidden shadow-sm">

              <div className="grid lg:grid-cols-2">

                {/* left */}
                <div className="p-8 sm:p-10 lg:p-14">

                  <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#047857]">
                    <span className="h-2 w-2 rounded-full bg-[#047857]" />
                    Our Approach to Care
                  </div>

                  <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-tight text-[#1F2937]">
                    Ayurveda & Modern Medicine,
                    <span className="block text-[#831843]">
                      Working Around You.
                    </span>
                  </h2>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-[#4B5563]">
                    At Suman Arogya, our healthcare approach is designed around
                    the individual. Depending on the condition and clinical
                    assessment, care may include Ayurvedic principles,
                    lifestyle guidance and appropriate modern medical
                    management.
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-[#FDF2F8] p-5 border border-[#831843]/10">
                      <div className="h-10 w-10 rounded-xl bg-[#831843] text-white flex items-center justify-center font-bold">
                        ✦
                      </div>

                      <h3 className="mt-4 font-black text-[#1F2937]">
                        Ayurvedic Care
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#4B5563]">
                        Personalized Ayurvedic guidance, lifestyle support and
                        traditional wellness principles.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#047857]/5 p-5 border border-[#047857]/10">
                      <div className="h-10 w-10 rounded-xl bg-[#047857] text-white flex items-center justify-center font-bold">
                        +
                      </div>

                      <h3 className="mt-4 font-black text-[#1F2937]">
                        Modern Medical Care
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#4B5563]">
                        Appropriate modern medical evaluation and treatment
                        when clinically required.
                      </p>
                    </div>

                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center mt-8 rounded-xl bg-[#831843] hover:bg-[#9D174D] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#831843]/15 transition-all"
                  >
                    Book a Consultation
                    <span className="ml-2">→</span>
                  </Link>

                </div>

                {/* right visual */}
                <div className="relative min-h-[380px] lg:min-h-full overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                    alt="Healthcare consultation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/75 via-[#1F2937]/20 to-transparent" />

                  <div className="absolute bottom-8 left-7 right-7">

                    <div className="inline-block rounded-2xl bg-white/95 backdrop-blur p-5 shadow-xl">

                      <div className="flex items-center gap-3">

                        <div className="h-11 w-11 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B] text-xl">
                          ★
                        </div>

                        <div>
                          <p className="text-sm font-black text-[#1F2937]">
                            Patient-Centred Healthcare
                          </p>

                          <p className="text-[11px] text-[#4B5563] mt-1">
                            Care based on individual needs and clinical
                            assessment.
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CONDITIONS WE COVER
        ===================================================== */}
        <section className="py-16 md:py-20 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10">

              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#047857]">
                Explore Health Topics
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#1F2937]">
                Health Conditions & Wellness
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#4B5563]">
                Browse educational resources covering common conditions,
                lifestyle concerns and holistic healthcare.
              </p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

              {[
                ["Diabetes", "🩺"],
                ["Digestive Health", "🌿"],
                ["Skin Health", "✦"],
                ["PCOS", "♡"],
                ["Piles", "＋"],
                ["Lifestyle", "◌"],
              ].map(([name, icon]) => (
                <Link
                  href="/services"
                  key={name}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm hover:border-[#831843]/20 hover:bg-[#FDF2F8] hover:-translate-y-1 transition-all"
                >
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-[#FDF2F8] group-hover:bg-white flex items-center justify-center text-xl text-[#831843]">
                    {icon}
                  </div>

                  <p className="mt-3 text-xs font-bold text-[#1F2937] group-hover:text-[#831843]">
                    {name}
                  </p>
                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            NEWSLETTER / CTA
        ===================================================== */}
        <section className="pb-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#831843] px-7 py-12 sm:px-12 md:py-14">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#047857]/20" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#F59E0B]">
                    Stay Informed
                  </span>

                  <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
                    Better health starts with better information.
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/75 max-w-xl">
                    Follow the Suman Arogya Health Journal for practical
                    information about Ayurveda, modern healthcare, nutrition,
                    lifestyle and common health conditions.
                  </p>
                </div>

                <form className="flex flex-col sm:flex-row gap-3">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-white/60"
                  />

                  <button
                    type="submit"
                    className="rounded-xl bg-[#F59E0B] hover:bg-[#fbbf24] px-6 py-3.5 text-sm font-black text-[#1F2937] transition-colors"
                  >
                    Subscribe
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}