import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-black rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">XTRACT</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Book a call
        </button>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About XTRACT</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We're on a mission to make intelligent automation accessible to every business, big or small.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At Xtract, we believe that AI automation should empower businesses to focus on what truly matters — innovation, growth, and human connection. We build tools that eliminate tedious work and unlock new potential.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              A world where every business, regardless of size, has access to enterprise-grade AI automation — making operations seamless, decisions smarter, and growth limitless.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Businesses Served" },
            { value: "200+", label: "Automations Built" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-[#a855f7] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#a855f7] hover:text-[#c084fc] font-medium transition-colors"
          >
            Back to Home <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
