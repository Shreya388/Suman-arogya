import Link from "next/link";
import Footer from "@/components/Footer";

export default function DiabetesBlogPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-slate-900">

        {/* Header */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 mb-8"
            >
              ← Back to Blog
            </Link>

            <span className="block text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">
              Diabetes
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              10 Early Warning Signs of Diabetes You Should Know
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-3xl">
              Learn about common warning signs of diabetes and why early
              medical evaluation can be important for your health.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
                alt="Healthcare professional"
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Suman Arogya
                </p>
                <p className="text-xs text-slate-500">
                  Ayurvedic & Modern Healthcare
                </p>
              </div>

              <span className="text-slate-300">•</span>

              <span className="text-sm text-slate-500">
                August 19, 2026
              </span>
            </div>

          </div>
        </section>

        {/* Main Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

          {/* Main Photo */}
          <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=85"
              alt="Diabetes health consultation"
              className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <div className="space-y-10">

            {/* Introduction */}
            <section>
              <p className="text-xl text-slate-600 leading-9">
                Diabetes is a common health condition that affects how
                the body manages blood glucose. Some people may experience
                noticeable symptoms, while others may have few or no
                obvious symptoms.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                Recognizing possible warning signs and speaking with a
                qualified healthcare professional when appropriate can
                help with timely evaluation and management.
              </p>
            </section>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Doctor discussing health with patient"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Signs */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Common Warning Signs of Diabetes
              </h2>

              <p className="text-slate-600 leading-8 mb-6">
                Some symptoms that can occur with diabetes include:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  "Increased thirst",
                  "Frequent urination",
                  "Increased hunger",
                  "Unusual tiredness",
                  "Blurred vision",
                  "Slow-healing wounds",
                  "Unexplained weight changes",
                  "Dry or itchy skin",
                  "Tingling or numbness",
                  "Recurring infections",
                ].map((sign, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>

                      <span className="font-semibold text-slate-800">
                        {sign}
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </section>

            {/* Nutrition Photo */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85"
                  alt="Healthy nutritious food"
                  className="w-full h-72 object-cover"
                />
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-center">
                <span className="text-teal-600 text-sm font-bold uppercase tracking-wider">
                  Healthy Lifestyle
                </span>

                <h2 className="text-2xl font-black text-slate-900 mt-3">
                  Nutrition Matters
                </h2>

                <p className="text-slate-600 leading-7 mt-4">
                  A balanced eating pattern and appropriate portion sizes
                  can be important components of diabetes management.
                </p>
              </div>

            </div>

            {/* Section */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Why Early Evaluation Matters
              </h2>

              <p className="text-slate-600 leading-8">
                Persistent high blood glucose can affect different parts
                of the body over time. If you notice symptoms or have
                concerns about your blood glucose levels, consulting a
                qualified healthcare professional can help determine
                whether further evaluation is appropriate.
              </p>
            </section>

            {/* Doctor Photo */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85"
                alt="Medical consultation"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Lifestyle */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Supporting Your Health
              </h2>

              <p className="text-slate-600 leading-8">
                Regular physical activity, a balanced diet, adequate sleep,
                maintaining a healthy weight and following an appropriate
                treatment plan can all contribute to overall health.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                People who are already taking diabetes medication should
                not stop or change their medication without speaking with
                their healthcare professional.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-teal-50 border border-teal-100 rounded-3xl p-8 md:p-10">

              <span className="text-teal-700 text-sm font-bold uppercase tracking-widest">
                Suman Arogya
              </span>

              <h2 className="text-3xl font-black text-slate-900 mt-3">
                Have questions about your health?
              </h2>

              <p className="text-slate-600 mt-4 leading-7">
                Speak with a qualified healthcare professional for
                appropriate evaluation and personalised guidance.
              </p>

              <a
                href="tel:+918700693622"
                className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-3 rounded-xl transition-colors"
              >
                Call +91 8700693622
              </a>

            </section>

            {/* Back */}
            <div className="text-center pt-4">
              <Link
                href="/blog"
                className="text-teal-600 font-bold hover:text-teal-700"
              >
                ← Back to All Articles
              </Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}