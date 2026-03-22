import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ProductKeyBullets } from "@/components/product/ProductKeyBullets";
import { ProductRequestDemoSection } from "@/components/product/ProductRequestDemoSection";
import { ProductTelivaiBenefits } from "@/components/product/ProductTelivaiBenefits";
import { ArrowUpRight, MessageSquare, Clock, BarChart3 } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "AI Agents — Conversational Automation & NLP",
    description:
      "Deploy intelligent AI agents with NLP, 24/7 automation, and analytics—customer support, sales, and operations on TelivAI’s enterprise-ready platform.",
    path: "/products/ai-agents",
  });
}

const keyFeatures = [
  "Natural language understanding for customer and internal conversations",
  "Workflow automation across support, operations, and data handling",
  "Integration with CRM, ERP, and collaboration tools",
  "Real-time analytics and quality monitoring for every interaction",
  "Virtual assistants for 24/7 customer and employee service",
  "Enterprise security, roles, and scalable deployment",
];

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Advanced NLP capabilities enable human-like conversations across channels. Our agents understand context, sentiment, and intent to deliver accurate, empathetic responses every time.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Clock,
    title: "24/7 Task Automation",
    description:
      "Automate repetitive workflows around the clock without human intervention. From ticket routing to data entry, our agents handle it so your team can focus on strategic work.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics Dashboard",
    description:
      "Real-time insights into agent performance, conversation metrics, and customer satisfaction scores — all in one intuitive dashboard with exportable reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

export default function AIAgentsPage() {
  return (
    <PageLayout>
      <section className="relative px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-1.5 text-sm font-medium text-[#a855f7]">
              AI Agents
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">AI Agents</h1>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                Our AI Agents are intelligent automation systems that assist organizations in managing business processes, customer interactions, and operational workflows. These AI-powered solutions use advanced machine learning models and natural language processing technologies to automate repetitive tasks and provide real-time insights.
              </p>
              <p>
                AI Agents can function as virtual assistants for customer support, internal operations, data processing, and decision-making. They help businesses reduce operational workload, improve productivity, and deliver faster services to customers.
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop"
                alt="AI Agents"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProductKeyBullets title="Key Features" items={keyFeatures} />

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

      <ProductRequestDemoSection productName="AI Agents" />
      <ProductTelivaiBenefits />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Deploy your first AI agent</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
              Book a demo or speak with our team about intelligent automation for your organization.
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
