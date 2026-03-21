import React from "react";
import {
  ArrowUpRight,
  Check,
  Zap,
  Bot,
  BarChart3,
  Clock,
  MessageSquare,
  Menu,
  X,
  Sparkles,
  Database,
  PieChart,
  ChevronDown,
  Star,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-black rounded-sm rotate-45"></div>
        </div>
        <span className="text-xl font-bold text-white tracking-tighter">
          XTRACT
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Blog
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
        Book a call
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/20 blur-[120px] rounded-full -z-10"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-8">
        <span className="bg-[#a855f7] text-white px-2 py-0.5 rounded-full text-[10px]">
          New
        </span>
        Automated Lead Generation
      </div>

      <h1 className="text-4xl md:text-7xl font-bold text-white max-w-4xl mb-6 tracking-tight leading-[1.1]">
        Intelligent Automation for Modern Businesses.
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Xtract brings AI automation to your fingertips & streamline tasks.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="group flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all">
          Get in touch
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
        <button className="px-8 py-3 rounded-xl font-semibold text-white border border-white/10 hover:bg-white/5 transition-all">
          View services
        </button>
      </div>

      {/* Floating stars effect could be added here with absolute divs */}
    </section>
  );
};

const Logos = () => {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  return (
    <section className="py-20 px-6">
      <p className="text-center text-gray-500 text-sm mb-10 uppercase tracking-widest font-medium">
        Over 50+ business trust us
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="text-white font-bold text-xl">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      {/* Workflow Automation */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Dashboard Preview Mockup */}
        <div className="relative bg-zinc-900 rounded-3xl border border-white/5 p-6 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 bg-white/5 rounded-lg text-xs text-white border border-white/10">
              All Tasks
            </div>
            <div className="px-3 py-1 text-xs text-gray-500">
              Waiting for approval
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Employee Tracking",
                status: "2 days ago",
                icon: <Bot size={16} />,
              },
              {
                title: "Social media post",
                status: "Cancelled by user",
                icon: <MessageSquare size={16} />,
                color: "text-red-400",
              },
              {
                title: "Lead list",
                status: "70% prepared",
                icon: <BarChart3 size={16} />,
              },
              {
                title: "Payment reminder",
                status: "sent to selected clients",
                icon: <Clock size={16} />,
              },
            ].map((task, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                    {task.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {task.title}
                    </div>
                    <div className={`text-xs ${task.color || "text-gray-500"}`}>
                      {task.status}
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                  <Check size={10} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
            Workflow Automation
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Automate repetitive tasks
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We help you streamline internal operations by automating manual
            workflows like data entry, reporting, and approval chains saving
            time and cutting down errors.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
              Internal Task Bots
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
              100+ Automations
            </div>
          </div>
        </div>
      </div>

      {/* Content Generation */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
            Content Generation
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Content generation that scales
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Our AI-powered content engines can generate high-quality copy,
            images, and videos at scale, tailored to your brand voice and
            audience.
          </p>
          <ul className="space-y-4">
            {[
              "Automated Blog Posts",
              "Social Media Content",
              "Dynamic Ad Copy",
              "AI Image Generation",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full bg-[#a855f7]/20 flex items-center justify-center">
                  <Check size={12} className="text-[#a855f7]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 relative bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#a855f7]/10 to-transparent -z-10"></div>
          <div className="w-16 h-16 bg-[#a855f7] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] mb-6">
            <Sparkles size={32} className="text-white" />
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-xl mb-2">
              Generating...
            </div>
            <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
              <div className="w-2/3 h-full bg-[#a855f7]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Analytics */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Growth", value: "+142%", icon: <Zap size={16} /> },
              { label: "Users", value: "2.4k", icon: <Database size={16} /> },
              { label: "Revenue", value: "$12k", icon: <PieChart size={16} /> },
              { label: "Efficiency", value: "98%", icon: <Clock size={16} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 rounded-2xl border border-white/5"
              >
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  {stat.icon}
                  <span className="text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
            Data Analytics
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Intelligent insights at your fingertips
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We build custom dashboards and reporting tools that aggregate data
            from multiple sources and provide actionable insights powered by
            machine learning.
          </p>
          <button className="flex items-center gap-2 text-[#a855f7] font-semibold hover:gap-3 transition-all">
            Learn more about analytics <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      name: "James Carter",
      title: "CEO at TechFlow Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      name: "Sophia Martinez",
      title: "Operations Manager at NexaCorp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote:
        "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      name: "David Reynolds",
      title: "Head of Sales at GrowthPeak",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
      name: "Emily Wong",
      title: "Customer Success Lead at SupportHive",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Why Businesses Love
          <br />
          Our AI Solutions
        </h2>
        <p className="text-gray-400 text-lg">
          Real businesses, real results with AI automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-white/20 transition-all"
          >
            {/* 5 Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-white text-white" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-lg mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is AI automation?",
      a: "AI automation is the use of artificial intelligence to perform tasks that would normally require human intelligence, such as data entry, content creation, and decision making.",
    },
    {
      q: "How much does it cost?",
      a: "We offer tailored pricing based on the complexity and scale of the automation needs. Contact us for a custom quote.",
    },
    {
      q: "How long does implementation take?",
      a: "Typical implementation ranges from 2-4 weeks depending on the scope of the project.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes, we provide 24/7 monitoring and support for all our automation systems.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400">
          Everything you need to know about working with Xtract.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">{faq.q}</h4>
              <ChevronDown
                size={20}
                className="text-gray-500 group-hover:text-white transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/5 p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to automate your business?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 50+ businesses that are already scaling with Xtract's intelligent
          automation solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl font-bold transition-all w-full sm:w-auto">
            Get started now
          </button>
          <button className="text-white border border-white/10 hover:bg-white/5 px-8 py-3 rounded-xl font-bold transition-all w-full sm:w-auto">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-black rounded-sm rotate-45"></div>
        </div>
        <span className="text-lg font-bold text-white tracking-tighter uppercase">
          Xtract
        </span>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[#a855f7] transform -rotate-45 translate-y-2"></div>
        </div>
        <span className="text-xs text-gray-400">Made in Framer</span>
      </div>

      <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
        Another AI Template
        <ArrowUpRight size={14} />
      </button>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-[#a855f7] selection:text-white">
      {/* Stars Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Logos />
          <Services />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .hero-glow {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
