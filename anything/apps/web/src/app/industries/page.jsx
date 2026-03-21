import { ArrowUpRight, Monitor, HeartPulse, FlaskConical, Landmark, ShoppingCart } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Monitor size={24} />,
      title: "IT & Engineering",
      desc: "End-to-end technology solutions for digital transformation, cloud migration, and software modernization.",
      href: "/industries/it-engineering",
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Healthcare",
      desc: "HIPAA-compliant digital health solutions including EHR integration, telemedicine, and patient analytics.",
      href: "/industries/healthcare",
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Pharmaceutical",
      desc: "AI-powered drug discovery, clinical trial management, and regulatory compliance automation.",
      href: "/industries/pharmaceutical",
    },
    {
      icon: <Landmark size={24} />,
      title: "Finance",
      desc: "Secure fintech solutions for fraud detection, algorithmic trading, and digital banking platforms.",
      href: "/industries/finance",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Retail & E-Commerce",
      desc: "Intelligent retail solutions for inventory management, personalization, and omnichannel experiences.",
      href: "/industries/retail",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#a855f7] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-sm">SC</span>
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight leading-none">Srinivas</span>
            <span className="block text-[10px] text-[#a855f7] font-medium tracking-widest uppercase">Consultancy</span>
          </div>
        </a>
        <a href="/contact" className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">Get in Touch</a>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">Industries</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Industries We Serve</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Deep domain expertise across sectors that drive the global economy.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <a key={i} href={ind.href} className="group bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-[#a855f7]/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] mb-6">{ind.icon}</div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {ind.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#a855f7]" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2rem] border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">Let&apos;s discuss how we can help transform your business.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all">Contact Us <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Srinivas Consultancy. All rights reserved.</p>
          <a href="/" className="text-sm text-[#a855f7] hover:text-[#c084fc] transition-colors">Back to Home</a>
        </div>
      </footer>
    </div>
  );
}
