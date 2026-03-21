import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  Zap,
  Bot,
  BarChart3,
  Clock,
  MessageSquare,
  X,
  Sparkles,
  Database,
  PieChart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Menu,
  Rocket,
  Eye,
  DollarSign,
  Lightbulb,
  TrendingUp,
  Shield,
  Crown,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-black rounded-sm rotate-45"></div>
        </div>
        <span className="text-xl font-bold text-white tracking-tighter">
          XTRACT
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="/about" className="hover:text-white transition-colors">About</a>
        <a href="/blog" className="hover:text-white transition-colors">Blog</a>
        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button className="hidden md:block bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
        Book a call
      </button>

      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-slideDown">
          <a href="#" className="text-white py-2">Home</a>
          <a href="/about" className="text-gray-400 py-2">About</a>
          <a href="/blog" className="text-gray-400 py-2">Blog</a>
          <a href="/contact" className="text-gray-400 py-2">Contact</a>
          <button className="bg-[#a855f7] text-white px-5 py-3 rounded-lg text-sm font-semibold mt-2">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/20 blur-[120px] rounded-full -z-10"></div>

      <AnimatedSection>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-8">
          <span className="bg-[#a855f7] text-white px-2 py-0.5 rounded-full text-[10px]">
            New
          </span>
          Automated Lead Generation
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <h1 className="text-4xl md:text-7xl font-bold text-white max-w-4xl mb-6 tracking-tight leading-[1.1]">
          Intelligent Automation for Modern Businesses.
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Xtract brings AI automation to your fingertips & streamline tasks.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="group flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
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
      </AnimatedSection>
    </section>
  );
};

const Logos = () => {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  return (
    <AnimatedSection>
      <section className="py-20 px-6">
        <p className="text-center text-gray-500 text-sm mb-10 uppercase tracking-widest font-medium">
          Over 50+ business trust us
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <span className="text-white font-bold text-xl">{logo}</span>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

const Services = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      <AnimatedSection>
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            AI Solutions That Take Your
            <br />
            Business to the Next Level
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We design, develop, and implement automation tools that help you work
            smarter, not harder
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-zinc-900 rounded-3xl border border-white/5 p-6 shadow-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
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
                { title: "Payroll management", status: "Due on 2nd july", icon: <Bot size={16} /> },
                { title: "Employee Tracking", status: "2 days ago", icon: <Clock size={16} /> },
                { title: "Social media post", status: "Cancelled by user", icon: <MessageSquare size={16} />, color: "text-red-400" },
                { title: "Lead list", status: "70% prepared", icon: <BarChart3 size={16} /> },
                { title: "Payment reminder", status: "sent to selected clients", icon: <Zap size={16} /> },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                      {task.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{task.title}</div>
                      <div className={`text-xs ${task.color || "text-gray-500"}`}>{task.status}</div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                    <Check size={10} className="text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

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
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
              AI Assistant
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Delegate Daily Tasks
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From managing calendars to drafting emails and summarizing meetings,
              our AI assistants work around the clock to keep your business running
              smarter and faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Summaries</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Scheduling</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Many more</div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl flex flex-col items-center justify-center min-h-[400px] hover:border-white/10 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#a855f7]/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
                <p className="text-gray-400 text-sm mb-4">What can I help with?</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-gray-500 mb-4">
                  Weather you want help in customer handling or make changes in your system just give me command
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">Add document</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">Analyze</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">Generate Image</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl hover:border-white/10 transition-all duration-500">
            <div className="text-xs text-gray-500 mb-4">E-mail Sending..</div>
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white">LinkedIn</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-500">IT services</span>
              <span className="px-3 py-1 bg-[#a855f7]/20 border border-[#a855f7]/30 rounded-lg text-xs text-[#a855f7]">Founders</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Jack Daniel", company: "Xavier LLC", email: "justin@main.com" },
                { name: "Gorge Chapel", company: "Chapel LLC", email: "gorge@mail.com" },
                { name: "Mike Tylor", company: "CMB LLC", email: "mike@Cmb.com" },
                { name: "Thomas Shelby", company: "Shelby.co", email: "Thomas@Sby.com" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a855f7]/30 to-[#6366f1]/30 flex items-center justify-center text-xs text-white font-medium">
                      {lead.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{lead.name}</div>
                      <div className="text-[10px] text-gray-500">Founder · <span className="text-green-400">Verified</span></div>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500 text-right">
                    <div>{lead.email}</div>
                    <div>{lead.company}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-5">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">Draft</span>
              <span className="px-3 py-1 bg-[#a855f7] rounded-lg text-xs text-white">Schedule</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">Sent</span>
            </div>
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
              Sales & Marketing
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Accelerate Sales Growth
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              AI tools for lead generation, personalized outreach, and automated
              content creation that scales your sales efforts and builds stronger
              brand presence.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Leads</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Content</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Social post</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">
              Custom Projects
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build Smarter Systems
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you're starting from scratch or enhancing an existing system,
              we offer strategic consulting and develop custom AI projects aligned
              with your unique goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Strategy</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Custom AI</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">Consulting</div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative bg-zinc-900 rounded-3xl border border-white/5 p-6 shadow-2xl hover:border-white/10 transition-all duration-500">
            <p className="text-sm text-white mb-1">Hey David!</p>
            <p className="text-xs text-gray-500 mb-5">Here is your Custom project & schedule</p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">
              <div className="text-xs text-gray-500 mb-1">On going project :</div>
              <div className="text-sm text-white font-medium mb-3">Customer Support Chatbot</div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-[#a855f7] rounded-full transition-all duration-1000"></div>
              </div>
              <div className="text-[10px] text-gray-500 mt-1">90% Finished</div>
            </div>
            <div className="text-xs text-gray-500 mb-3">Schedule</div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div key={d} className="text-center text-[10px] text-gray-500 py-1">{d}</div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-xs text-white">Discovery call</div>
                <div className="text-[10px] text-gray-500">10:00 am to 10:30 am</div>
              </div>
              <div className="p-3 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-xl">
                <div className="text-xs text-white">Custom automation</div>
                <div className="text-[10px] text-gray-500">06:00 pm to 06:30 pm</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const CaseStudies = () => {
  const studies = [
    {
      quote: "AI-driven forecasting cut inventory waste by 40% for TrailForge",
      desc: "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
      stats: [
        "40% Less Inventory Waste",
        "35% Faster Production",
        "20% More Accurate Forecasting",
        "25% Faster Fulfillment",
      ],
    },
    {
      quote: "AI-powered workflows reduced error rate by 80% in daily operations",
      desc: "MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
      stats: [
        "80% Error reduction",
        "90% Accuracy in Data Logs",
        "30% Faster Delivery",
        "60+ Hours Saved",
      ],
    },
    {
      quote: "Automating 50% of operations saved 20% in costs within 2 months",
      desc: "FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
      stats: [
        "50% Operations Automated",
        "20% Cost Reduction",
        "70+ Hours Saved/Month",
        "2x Faster Client Onboarding",
      ],
    },
    {
      quote: "AI integration helped ScaleByte close 3x more deals in less time",
      desc: "ScaleByte's sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
      stats: [
        "3x More Deals",
        "40% Faster Responses",
        "95% Lead Accuracy",
        "CRM Fully Synced",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const prev = () => setCurrentIndex((i) => (i === 0 ? studies.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === studies.length - 1 ? 0 : i + 1));

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    if (Math.abs(diff) > 80) {
      diff > 0 ? prev() : next();
      setIsDragging(false);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <AnimatedSection>
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            See How Smart AI Automation
            <br />
            Transforms Businesses
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how AI automation streamlines operations, boosts and drives growth.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div
          ref={containerRef}
          className="relative mt-16 select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {studies.map((study, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden min-h-[400px] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent"></div>
                    <div className="relative z-10 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <span className="text-white font-bold">Logoipsum</span>
                      </div>
                      <div className="w-48 h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl mx-auto border border-white/5"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <span className="text-white font-bold">Logoipsum</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      "{study.quote}"
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{study.desc}</p>
                    <div>
                      <p className="text-gray-500 text-sm font-medium mb-3">Impact :</p>
                      <ul className="space-y-2">
                        {study.stats.map((stat, j) => (
                          <li key={j} className="flex items-center gap-3 text-white text-sm">
                            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full"></div>
                            {stat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {studies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-[#a855f7] w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Increased Productivity",
      desc: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    },
    {
      icon: <Eye size={24} />,
      title: "Better Customer Experience",
      desc: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Availability",
      desc: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Reduction",
      desc: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Data-Driven Insights",
      desc: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scalability & Growth",
      desc: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            The Key Benefits of AI
            <br />
            for Your Business Growth
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and drives
            business growth with smarter, faster processes.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="group bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-[#a855f7]/30 hover:bg-zinc-900 transition-all duration-500 cursor-default h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#a855f7] group-hover:border-[#a855f7]/30 transition-all duration-500 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: <Rocket size={20} />,
      price: isAnnual ? "$37" : "$45",
      period: "/month",
      desc: "Perfect for small businesses starting with AI automation.",
      cta: "Choose this plan",
      ctaStyle: "bg-white/5 border border-white/10 hover:bg-white/10 text-white",
      features: [
        "Basic workflow automation",
        "AI-powered personal assistant",
        "Standard analytics & reporting",
        "Email & chat support",
        "Up to 3 AI integrations",
      ],
    },
    {
      name: "Professional",
      icon: <Zap size={20} />,
      price: isAnnual ? "$75" : "$95",
      period: "/month",
      desc: "Perfect for small businesses starting with AI automation.",
      cta: "Choose this plan",
      ctaStyle: "bg-[#a855f7] hover:bg-[#9333ea] text-white",
      popular: true,
      features: [
        "Advanced workflow automation",
        "AI-driven sales & marketing tools",
        "Enhanced data analytics & insights",
        "Priority customer support",
        "Up to 10 AI integrations",
      ],
    },
    {
      name: "Enterprise",
      icon: <Crown size={20} />,
      price: "Custom",
      period: "",
      desc: "Perfect for small businesses starting with AI automation.",
      cta: "Schedule a call",
      ctaStyle: "bg-white/5 border border-white/10 hover:bg-white/10 text-white",
      features: [
        "Fully customizable AI automation",
        "Dedicated AI business consultant",
        "Enterprise-grade compliance",
        "24/7 VIP support",
        "Unlimited AI integrations",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            The Best AI Automation,
            <br />
            at the Right Price
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose a plan that fits your business needs and start automating with AI
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? "bg-[#a855f7]" : "bg-white/20"
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-gray-500"}`}>
            Annually
          </span>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div
              className={`relative rounded-3xl border p-8 lg:p-10 transition-all duration-500 h-full flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-[#a855f7]/10 to-zinc-900 border-[#a855f7]/30 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                  : "bg-zinc-900/50 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-0 right-6 px-3 py-1 bg-[#a855f7] rounded-b-lg text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#a855f7]">{plan.icon}</div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>

              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>

              <div className="mt-auto">
                <p className="text-sm text-gray-500 mb-4">What's Included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-[#a855f7] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      name: "James Carter",
      title: "CEO at TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      quote: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      name: "Sophia Martinez",
      title: "Operations Manager at NexaCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      name: "David Reynolds",
      title: "Head of Sales at GrowthPeak",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      quote: 'Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract',
      name: "Emily Wong",
      title: "Customer Success Lead at SupportHive",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Why Businesses Love
            <br />
            Our AI Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            Real businesses, real results with AI automation.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-[#a855f7]/20 transition-all duration-500 h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} className="fill-white text-white" />
                ))}
              </div>
              <p className="text-white text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can AI automation help my business?",
      a: "AI automation streamlines operations by handling repetitive tasks, analyzing data, and providing intelligent insights. It helps reduce costs, improve efficiency, and allows your team to focus on higher-value strategic work.",
    },
    {
      q: "Is AI automation difficult to integrate?",
      a: "Not at all. Our team handles the entire integration process, ensuring a smooth transition with minimal disruption to your existing workflows. We work with your current tech stack and provide full support throughout.",
    },
    {
      q: "What industries can benefit from AI automation?",
      a: "Virtually every industry can benefit—from healthcare and finance to retail, logistics, and manufacturing. Any business with repetitive processes, data-heavy operations, or customer-facing tasks can see significant improvements.",
    },
    {
      q: "Do I need technical knowledge to use AI automation?",
      a: "No technical expertise is required. Our solutions are designed with user-friendly interfaces and we provide comprehensive training and ongoing support to ensure your team can use them effectively.",
    },
    {
      q: "What kind of support do you offer?",
      a: "We offer 24/7 monitoring and support for all our automation systems, including dedicated account managers, technical assistance, and regular performance reviews to optimize your AI tools.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">
            FAQs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We've Got the Answers
            <br />
            You're Looking For
          </h2>
          <p className="text-gray-400">
            Quick answers to your AI automation questions.
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <AnimatedSection key={i} delay={i * 80}>
            <div
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-6">
                <h4 className="text-white font-medium">{faq.q}</h4>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180 text-[#a855f7]" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/5 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let AI do the Work so you
            <br />
            can Scale Faster
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a Call Today and Start Automating
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Book a free call
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
            <button className="flex items-center gap-2 text-white border border-white/10 hover:bg-white/5 px-8 py-3 rounded-xl font-bold transition-all">
              Another AI Template
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rounded-sm rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">
                XTRACT
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Xtract – Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7]/50 flex-1"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Pages</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Socials</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© All right reserved</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-[#a855f7] transform -rotate-45 translate-y-2"></div>
            </div>
            <span className="text-xs text-gray-400">Made in Framer</span>
          </div>
          <p className="text-xs text-gray-600">
            Visioned and Crafted by Kanishk Dubey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-[#a855f7] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: 3 + Math.random() * 4 + "s",
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
          <CaseStudies />
          <Benefits />
          <Pricing />
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
