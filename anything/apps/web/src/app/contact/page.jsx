import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
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
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
        <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Book a call
        </button>
      </nav>

      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Get in touch to discuss your automation needs
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Mail size={20} />, label: "Email", value: "hello@xtract.ai" },
            { icon: <Phone size={20} />, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: <MapPin size={20} />, label: "Location", value: "San Francisco, CA" },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mx-auto mb-3">
                {item.icon}
              </div>
              <div className="text-sm text-gray-500 mb-1">{item.label}</div>
              <div className="text-white font-medium text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder-gray-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors resize-none placeholder-gray-600"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#a855f7] hover:bg-[#9333ea] px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
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
