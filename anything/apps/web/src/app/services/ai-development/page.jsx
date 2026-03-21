import { ArrowUpRight, Brain, Bot, Globe, Check, Code, Briefcase } from "lucide-react";

export default function AIDevelopmentPage() {
  const features = [
    {
      icon: <Brain size={22} />,
      title: "Custom ML Models",
      desc: "Purpose-built machine learning models trained on your data to solve your specific business challenges with high accuracy.",
    },
    {
      icon: <Bot size={22} />,
      title: "NLP Solutions",
      desc: "Natural language processing for chatbots, sentiment analysis, document understanding, and text classification at scale.",
    },
    {
      icon: <Globe size={22} />,
      title: "Computer Vision",
      desc: "Image recognition, object detection, and visual inspection systems powered by state-of-the-art deep learning architectures.",
    },
    {
      icon: <Code size={22} />,
      title: "Predictive Analytics",
      desc: "Data-driven forecasting models for demand planning, churn prediction, risk assessment, and revenue optimization.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "AI Strategy Consulting",
      desc: "Expert guidance on AI adoption — from opportunity assessment and roadmap development to governance frameworks.",
    },
    {
      icon: <Check size={22} />,
      title: "Model Training & Deployment",
      desc: "End-to-end MLOps — model training, validation, deployment pipelines, monitoring, and continuous retraining at production scale.",
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
        <a href="/contact" className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Get in Touch
        </a>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">Service</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">AI Development</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Custom AI and machine learning solutions — from predictive analytics and NLP to computer vision and intelligent automation.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-[#a855f7]/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2rem] border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">{"Let's build intelligent AI solutions tailored to your business."}</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Contact Us <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Srinivas Consultancy. All rights reserved.</p>
          <a href="/" className="text-sm text-[#a855f7] hover:text-[#c084fc] transition-colors">Back to Home</a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section { animation: fadeInUp 0.6s ease-out; }
      `}</style>
    </div>
  );
}
