import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { title: "How AI Is Reshaping Modern Business Operations", tag: "AI Automation", date: "March 15, 2026" },
    { title: "5 Ways to Automate Your Sales Pipeline Today", tag: "Sales", date: "March 10, 2026" },
    { title: "The Future of Customer Support with AI Assistants", tag: "Customer Support", date: "March 5, 2026" },
    { title: "Why Data-Driven Decisions Outperform Gut Instinct", tag: "Analytics", date: "February 28, 2026" },
    { title: "Scaling Your Startup with Intelligent Automation", tag: "Growth", date: "February 20, 2026" },
    { title: "AI in Healthcare: Reducing Errors, Saving Lives", tag: "Healthcare", date: "February 14, 2026" },
  ];

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
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/blog" className="text-white">Blog</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Book a call
        </button>
      </nav>

      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Blog</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Insights on AI automation and business efficiency
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-full h-48 bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/10 rounded-xl mb-4 group-hover:from-[#a855f7]/30 transition-all duration-300"></div>
              <div className="inline-block px-3 py-1 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full text-xs text-[#a855f7] mb-3">
                {post.tag}
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-[#a855f7] transition-colors">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                Discover how AI automation is transforming modern businesses and streamlining operations...
              </p>
              <p className="text-xs text-gray-600">{post.date}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
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
