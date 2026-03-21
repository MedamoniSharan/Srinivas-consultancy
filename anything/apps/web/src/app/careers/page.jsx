import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  X,
  Menu,
  Bot,
  Users,
  Building2,
  ShoppingCart,
  Briefcase,
  Brain,
  Smartphone,
  Globe,
  Code,
  Cpu,
  HeartPulse,
  Pill,
  Landmark,
  LineChart,
  Network,
  Lock,
  Palette,
  Database,
  Cog,
  Eye,
  Target,
  MapPin,
  Clock,
  TrendingUp,
  Lightbulb,
  Heart,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "AI Agents", href: "#", icon: <Bot size={16} /> },
      { label: "CRM Platform", href: "#", icon: <Users size={16} /> },
      { label: "ERP System", href: "#", icon: <Building2 size={16} /> },
      { label: "Procurement / Purchase System", href: "#", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "IT Staffing & Consulting", href: "#", icon: <Briefcase size={16} /> },
      { label: "AI Development", href: "#", icon: <Brain size={16} /> },
      { label: "Mobile App Development", href: "#", icon: <Smartphone size={16} /> },
      { label: "Web Development", href: "#", icon: <Globe size={16} /> },
      { label: "Custom Software Development", href: "#", icon: <Code size={16} /> },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "IT & Engineering", href: "#", icon: <Cpu size={16} /> },
      { label: "Healthcare", href: "#", icon: <HeartPulse size={16} /> },
      { label: "Pharmaceutical", href: "#", icon: <Pill size={16} /> },
      { label: "Finance", href: "#", icon: <Landmark size={16} /> },
      { label: "Retail & E-Commerce", href: "#", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Technologies",
    children: [
      { label: "AI/ML Engineering", href: "#", icon: <Brain size={16} /> },
      { label: "Data & Analytics", href: "#", icon: <LineChart size={16} /> },
      { label: "Network Engineering", href: "#", icon: <Network size={16} /> },
      { label: "Cyber Security", href: "#", icon: <Lock size={16} /> },
      { label: "UI/UX Designer", href: "#", icon: <Palette size={16} /> },
    ],
  },
  {
    label: "Careers",
    children: [
      { label: "AI/ML Engineer", href: "/careers/ai-ml-engineer", icon: <Brain size={16} /> },
      { label: "Data Engineer", href: "/careers/data-engineer", icon: <Database size={16} /> },
      { label: "Network Engineer", href: "/careers/network-engineer", icon: <Network size={16} /> },
      { label: "Cyber Security Engineer", href: "/careers/cybersecurity-engineer", icon: <Lock size={16} /> },
      { label: "UI/UX Designer", href: "/careers/ui-ux-designer", icon: <Palette size={16} /> },
      { label: "Java Developer", href: "/careers/java-developer", icon: <Code size={16} /> },
      { label: "Software Developer", href: "/careers/software-developer", icon: <Cog size={16} /> },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/about", icon: <Users size={16} /> },
      { label: "Our Vision", href: "/about", icon: <Eye size={16} /> },
      { label: "Our Mission", href: "/about", icon: <Target size={16} /> },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <span className="text-white font-black text-sm">SC</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-white tracking-tight leading-none">Srinivas</span>
            <span className="block text-[10px] text-[#a855f7] font-medium tracking-widest uppercase">Consultancy</span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.children && handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
              {item.href ? (
                <a href={item.href} className="px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">{item.label}</a>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              )}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl animate-fadeIn">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
                      <span className="text-gray-500 group-hover:text-[#a855f7] transition-colors">{child.icon}</span>
                      <span className="text-sm">{child.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <a href="/contact" className="hidden lg:flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
          Get in Touch <ArrowUpRight size={16} />
        </a>
        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto animate-slideDown">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a href={item.href} className="block px-4 py-3 text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>{item.label}</a>
                ) : (
                  <>
                    <button className="flex items-center justify-between w-full px-4 py-3 text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>
                            <span className="text-gray-500">{child.icon}</span>
                            <span className="text-sm">{child.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <a href="/contact" className="flex items-center justify-center gap-2 bg-[#a855f7] text-white w-full py-3 rounded-xl font-semibold">
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">SC</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight leading-none">Srinivas</span>
                <span className="block text-[10px] text-[#a855f7] font-medium tracking-widest uppercase">Consultancy</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">Automate Smarter, Optimize Faster, and Grow Stronger.</p>
            <div className="flex items-center gap-2">
              <input type="email" placeholder="Join our newsletter" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7]/50 flex-1 max-w-[200px]" />
              <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Subscribe</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ERP System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Procurement System</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">IT Staffing & Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Srinivas Consultancy. All rights reserved.</p>
          <p className="text-xs text-gray-600">Visioned and Crafted by Srinivas Consultancy</p>
        </div>
      </div>
    </footer>
  );
};

const positions = [
  { icon: <Brain size={24} />, title: "AI/ML Engineer", href: "/careers/ai-ml-engineer", desc: "Build intelligent systems using machine learning, NLP, and computer vision technologies." },
  { icon: <Database size={24} />, title: "Data Engineer", href: "/careers/data-engineer", desc: "Design and maintain scalable data pipelines, warehouses, and real-time processing systems." },
  { icon: <Network size={24} />, title: "Network Engineer", href: "/careers/network-engineer", desc: "Architect and manage robust network infrastructure across cloud and on-premise environments." },
  { icon: <Lock size={24} />, title: "Cyber Security Engineer", href: "/careers/cybersecurity-engineer", desc: "Protect systems through penetration testing, incident response, and security audits." },
  { icon: <Palette size={24} />, title: "UI/UX Designer", href: "/careers/ui-ux-designer", desc: "Craft intuitive user experiences through research, wireframes, and modern design systems." },
  { icon: <Code size={24} />, title: "Java Developer", href: "/careers/java-developer", desc: "Develop enterprise applications with Spring Boot, microservices, and REST APIs." },
  { icon: <Cog size={24} />, title: "Software Developer", href: "/careers/software-developer", desc: "Build full-stack applications using React, Node.js, and modern development practices." },
];

const benefits = [
  { icon: <TrendingUp size={24} />, title: "Growth Opportunities", desc: "Clear career paths, mentorship programs, and continuous learning opportunities to accelerate your professional growth." },
  { icon: <Lightbulb size={24} />, title: "Cutting-Edge Tech", desc: "Work with the latest technologies including AI/ML, cloud platforms, and modern frameworks across diverse projects." },
  { icon: <Heart size={24} />, title: "Collaborative Culture", desc: "Join a diverse, inclusive team that values open communication, knowledge sharing, and celebrating wins together." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#a855f7] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Join Our Team</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Build the future of technology with Srinivas Consultancy
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {positions.map((pos, i) => (
            <a key={i} href={pos.href} className="group bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mb-4 group-hover:bg-[#a855f7]/20 transition-colors">
                {pos.icon}
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-[#a855f7] transition-colors">{pos.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Clock size={12} /> Full-time</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Hyderabad, India / Remote</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{pos.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#a855f7] font-medium group-hover:gap-2 transition-all">
                View Details <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>

        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t See Your Role?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">We&apos;re always looking for talented people. Send us your resume and we&apos;ll reach out when a matching position opens up.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
          Get in Touch <ArrowUpRight size={16} />
        </a>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
