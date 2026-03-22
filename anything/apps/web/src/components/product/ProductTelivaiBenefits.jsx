import AnimatedSection from "@/components/AnimatedSection";
import { Layers, Cpu, Cloud, BarChart3, SlidersHorizontal } from "lucide-react";

const advantages = [
  {
    icon: Layers,
    title: "Integrated Business Systems",
    description:
      "Our platforms connect multiple business functions into a single ecosystem for improved collaboration and data sharing.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Automation",
    description: "Automation capabilities reduce manual workloads and improve operational productivity.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Architecture",
    description: "Solutions are built using cloud-ready technologies that scale with organizational growth.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Insights",
    description: "Real-time dashboards and reporting tools help organizations make data-driven decisions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Customization",
    description: "Systems can be customized to meet the unique needs of different industries and business models.",
  },
];

export function ProductTelivaiBenefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <AnimatedSection>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Benefits of TelivAI Products</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Organizations that implement TelivAI solutions benefit from modern technology platforms designed to improve operational efficiency and support business growth.
          </p>
        </div>
      </AnimatedSection>
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-[#a855f7]">Key Advantages</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 60}>
            <div className="h-full rounded-2xl border border-border bg-card/80 p-6 transition-colors hover:border-[#a855f7]/30">
              <item.icon className="mb-4 h-9 w-9 text-[#a855f7]" />
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
