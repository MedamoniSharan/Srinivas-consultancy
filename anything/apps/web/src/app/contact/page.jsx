import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Contact Us — Talk to Our Team",
    description:
      "Reach TelivAI Solutions for AI development, staffing, and enterprise software projects. Send a message and we will respond quickly.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Ready to transform your business? Let's start a conversation.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Mail size={20} />, label: "Email", value: "info@telivai.com" },
            { icon: <Phone size={20} />, label: "Phone", value: "+1 (678) 463-9506" },
            {
              icon: <MapPin size={20} />,
              label: "Location",
              value: "2570 Highbrooke Trl, Duluth, GA 30097",
            },
            { icon: <Clock size={20} />, label: "Hours", value: "Mon - Fri, 9am - 6pm" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 bg-card/80 border border-border rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mx-auto mb-3">
                {item.icon}
              </div>
              <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
              <div className="text-foreground font-medium text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-card/80 border border-border rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                <input
                  type="text"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder:text-muted-foreground"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Service Interested In</label>
                <select className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#a855f7]/50 transition-colors">
                  <option value="">Select a service</option>
                  <option value="ai">AI Development</option>
                  <option value="staffing">IT Staffing & Consulting</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="web">Web Development</option>
                  <option value="custom">Custom Software</option>
                  <option value="products">AI Products (CRM/ERP/Agents)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                rows="5"
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#a855f7]/50 transition-colors resize-none placeholder:text-muted-foreground"
                placeholder="Tell us about your project or requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#a855f7] hover:bg-[#9333ea] px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
