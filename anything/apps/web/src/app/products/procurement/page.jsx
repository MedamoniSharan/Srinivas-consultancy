import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ProductKeyBullets } from "@/components/product/ProductKeyBullets";
import { ProductRequestDemoSection } from "@/components/product/ProductRequestDemoSection";
import { ProductTelivaiBenefits } from "@/components/product/ProductTelivaiBenefits";
import { ArrowUpRight, Contact, FileCheck2, PieChart } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Procurement & Purchase System — Vendors, POs & Spend",
    description:
      "Streamline sourcing, purchase orders, approvals, and spend analytics with TelivAI’s procurement platform built for control and speed.",
    path: "/products/procurement",
  });
}

const procurementFeatures = [
  "Vendor onboarding, profiles, and performance tracking",
  "Purchase requisitions with configurable approval chains",
  "Purchase orders, receiving, and three-way matching",
  "Spend analytics, budgets, and category visibility",
  "Supplier collaboration and catalog management",
  "Audit trails and compliance-ready documentation",
];

const features = [
  {
    icon: Contact,
    title: "Vendor Management",
    description:
      "Centralized vendor profiles with performance tracking and contract context. Evaluate suppliers and strengthen your supply base.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: FileCheck2,
    title: "Purchase Order Automation",
    description:
      "Streamlined PO creation, multi-level approvals, and matching workflows that reduce errors and speed up procurement cycles.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: PieChart,
    title: "Spend Analytics",
    description:
      "Visibility into organizational spending with dashboards, category breakdowns, and budget signals so you can optimize every dollar.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

export default function ProcurementPage() {
  return (
    <PageLayout>
      <section className="relative px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-1.5 text-sm font-medium text-[#a855f7]">
              Procurement
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-5xl md:leading-tight lg:text-6xl">
              Procurement / Purchase Management
            </h1>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                Our Procurement Management platform enables organizations to manage purchasing operations efficiently by streamlining vendor management, purchase approvals, and supply chain coordination.
              </p>
              <p>
                The system helps maintain transparency in procurement, reduce purchasing costs, and improve supplier relationships.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#request-demo"
                className="inline-flex items-center gap-2 rounded-full bg-[#a855f7] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#a855f7]/25 transition-colors hover:bg-[#9333ea]"
              >
                Request Demo <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
                alt="Procurement System"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProductKeyBullets title="Key Features" items={procurementFeatures} />

      <section className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
        {features.map((feature, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <AnimatedSection key={feature.title}>
              <div className={`grid items-center gap-12 md:grid-cols-2 ${!imageFirst ? "md:[direction:rtl]" : ""}`}>
                <div className="overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] md:[direction:ltr]">
                  <img src={feature.image} alt={feature.title} className="h-full w-full object-cover" />
                </div>
                <div className="md:[direction:ltr]">
                  <feature.icon className="mb-4 h-10 w-10 text-[#a855f7]" />
                  <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                  <p className="text-lg leading-relaxed text-zinc-400">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </section>

      <ProductRequestDemoSection productName="our procurement platform" />
      <ProductTelivaiBenefits />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Take control of procurement</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              Request a demo to see purchasing, approvals, and spend analytics in one place.
            </p>
            <a
              href="#request-demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#7c3aed] transition-colors hover:bg-white/90"
            >
              Request a Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
