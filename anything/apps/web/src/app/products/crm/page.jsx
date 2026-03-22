import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ProductKeyBullets } from "@/components/product/ProductKeyBullets";
import { ProductRequestDemoSection } from "@/components/product/ProductRequestDemoSection";
import { ProductTelivaiBenefits } from "@/components/product/ProductTelivaiBenefits";
import { ArrowUpRight, Kanban, MailCheck, TrendingUp } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "CRM Platform — Pipelines, Automation & Customer Insights",
    description:
      "TelivAI CRM: pipeline management, email automation, and revenue analytics—nurture leads and grow accounts with a unified customer view.",
    path: "/products/crm",
  });
}

const crmModules = [
  "Sales pipeline and opportunity management",
  "Centralized contacts, accounts, and activity history",
  "Marketing campaigns, sequences, and engagement tracking",
  "Service cases, SLAs, and customer communication tools",
  "Dashboards, forecasting, and revenue reporting",
  "Mobile access, collaboration, and integration APIs",
];

const features = [
  {
    icon: Kanban,
    title: "Pipeline Management",
    description:
      "Visual pipeline tracking with intuitive drag-and-drop stages. Monitor deals in real time, set custom milestones, and keep opportunities moving.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: MailCheck,
    title: "Automated Follow-ups",
    description:
      "Smart email sequences that engage leads at the right moment. Set triggers, personalize at scale, and improve conversion without manual effort.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Advanced Reporting",
    description:
      "Real-time dashboards and revenue insights. Track team performance, pipeline velocity, and customer health in a single view.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

export default function CRMPage() {
  return (
    <PageLayout>
      <section className="relative px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-1.5 text-sm font-medium text-[#a855f7]">
              CRM Platform
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">CRM Platform</h1>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                Our Customer Relationship Management (CRM) platform enables organizations to manage customer data, track sales activities, and improve engagement with prospects and clients. The system centralizes customer information in one secure environment and provides automation tools that help businesses build stronger relationships and improve sales performance.
              </p>
              <p>
                A well-designed CRM helps organizations manage leads effectively, track interactions, and maintain consistent communication with customers. It provides valuable insights into customer behavior and supports stronger marketing and sales strategies.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"
                alt="CRM Platform"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProductKeyBullets title="CRM Modules" items={crmModules} />

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

      <ProductRequestDemoSection productName="our CRM platform" />
      <ProductTelivaiBenefits />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Supercharge your sales pipeline</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              See how TelivAI CRM can unify your customer data and workflows.
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
