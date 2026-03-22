import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ProductKeyBullets } from "@/components/product/ProductKeyBullets";
import { ProductRequestDemoSection } from "@/components/product/ProductRequestDemoSection";
import { ProductTelivaiBenefits } from "@/components/product/ProductTelivaiBenefits";
import { ArrowUpRight, Landmark, UserCog, Truck } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "ERP System — Finance, HR, Inventory & Operations",
    description:
      "Unify finance, HR, inventory, and supply chain on TelivAI’s ERP—real-time reporting, compliance, and operational visibility for enterprises.",
    path: "/products/erp",
  });
}

const erpModules = [
  "Financial management, accounting, and reporting",
  "Human resources, payroll, and workforce planning",
  "Inventory, warehousing, and materials management",
  "Procurement, sourcing, and supplier collaboration",
  "Manufacturing, planning, and shop-floor operations",
  "Analytics, dashboards, and executive visibility",
];

const features = [
  {
    icon: Landmark,
    title: "Financial Management",
    description:
      "Real-time accounting, budgeting, and financial reporting with multi-currency support. Automate reconciliations, track cash flow, and support compliance.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: UserCog,
    title: "HR & Payroll",
    description:
      "Employee lifecycle management — recruitment and onboarding through payroll, leave, and performance — in one unified platform.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Truck,
    title: "Supply Chain Intelligence",
    description:
      "Visibility across procurement, inventory, and logistics. Plan demand, optimize stock, and coordinate operations with clearer data.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
  },
];

export default function ERPPage() {
  return (
    <PageLayout>
      <section className="relative px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-1.5 text-sm font-medium text-[#a855f7]">
              ERP System
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">ERP System</h1>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                Our Enterprise Resource Planning (ERP) system integrates core business operations into a unified platform so organizations can manage finance, human resources, inventory, procurement, and operations efficiently.
              </p>
              <p>
                ERP provides real-time visibility into processes, helps streamline operations, improve resource utilization, and supports informed decisions based on accurate, consolidated data.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
                alt="ERP System"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProductKeyBullets title="ERP Modules" items={erpModules} />

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

      <ProductRequestDemoSection productName="our ERP system" />
      <ProductTelivaiBenefits />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Unify your enterprise operations</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              Connect departments with one source of truth. Request a tailored walkthrough.
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
