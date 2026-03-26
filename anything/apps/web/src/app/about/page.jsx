import React from "react";
import {
  Users,
  Eye,
  Target,
  Award,
  Briefcase,
  Globe2,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "About Us — Who We Are, Vision & Mission",
    description:
      "TelivAI Solutions empowers businesses with AI products, IT staffing, and custom software. Learn our vision, mission, and how we partner with enterprises worldwide.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About Us</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Empowering businesses with intelligent technology solutions and world-class talent.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Users size={28} />,
              title: "Who We Are",
              desc: "TelivAI Solutions is a technology solutions company specializing in AI products, IT staffing, and custom software development. We partner with businesses across industries to deliver intelligent, scalable solutions that create lasting impact.",
            },
            {
              icon: <Eye size={28} />,
              title: "Our Vision",
              desc: "To be the most trusted technology partner for enterprises worldwide — enabling every organization to harness the power of AI, data, and digital innovation to achieve extraordinary outcomes.",
            },
            {
              icon: <Target size={28} />,
              title: "Our Mission",
              desc: "To empower businesses with cutting-edge technology solutions and exceptional talent, driving digital transformation that accelerates growth, improves efficiency, and creates competitive advantage.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card/80 border border-border rounded-3xl p-8 lg:p-10 hover:border-[#a855f7]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] mb-6">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "8+", label: "Industries Served" },
            { value: "200+", label: "Engineers Placed" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-card/80 border border-border rounded-2xl">
              <div className="text-3xl font-bold text-[#a855f7] mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-card/80 border border-border rounded-3xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award size={24} />, title: "Proven Expertise", desc: "Years of experience delivering enterprise-grade solutions across multiple industries." },
              { icon: <Briefcase size={24} />, title: "End-to-End Delivery", desc: "From strategy and design to development and ongoing support — we handle it all." },
              { icon: <Globe2 size={24} />, title: "Global Talent Network", desc: "Access to a curated pool of top-tier technology professionals worldwide." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
