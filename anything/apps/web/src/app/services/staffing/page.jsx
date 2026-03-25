import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Search, Clock, UserPlus, RefreshCw, Handshake } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "IT Staffing & Consulting — Vetted Technical Talent",
    description:
      "Contract, full-time, contract-to-hire, and C2C/W2 staffing across AI, data, cloud, and enterprise technologies. Requirement analysis through onboarding with TelivAI Solutions.",
    path: "/services/staffing",
  });
}

const staffingServices = [
  {
    title: "Contract Staffing",
    description: "Hire experienced professionals for short-term or project-based needs.",
    icon: <Clock size={22} />,
  },
  {
    title: "Full-Time Hiring",
    description: "Find permanent employees tailored to your business goals.",
    icon: <UserPlus size={22} />,
  },
  {
    title: "Contract-to-Hire",
    description: "Evaluate candidates before making full-time decisions.",
    icon: <RefreshCw size={22} />,
  },
  {
    title: "C2C & W2 Engagements",
    description: "Flexible hiring models to suit your business requirements.",
    icon: <Handshake size={22} />,
  },
];

const processSteps = [
  {
    title: "Requirement Analysis",
    description: "Clarify role scope, skills stack, and team fit with your stakeholders.",
  },
  {
    title: "Candidate Screening",
    description: "Resume review and initial qualification against your criteria.",
  },
  {
    title: "Technical Evaluation",
    description: "Structured technical conversations and skills validation.",
  },
  {
    title: "Client Submission",
    description: "Curated shortlist of vetted profiles for your review.",
  },
  {
    title: "Interview Coordination",
    description: "We schedule and facilitate interviews with your hiring team.",
  },
  {
    title: "Onboarding",
    description: "Contracts, start dates, and a smooth handoff into your organization.",
  },
];

export default function StaffingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <AnimatedSection>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/35 px-4 py-1.5 text-xs font-medium text-[#a855f7]">
            <Search size={14} /> Staffing & Consulting
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            IT Staffing &amp; Consulting
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            TelivAI Solutions provides highly skilled IT professionals and AI experts to help businesses accelerate innovation and deliver successful projects.
          </p>
        </AnimatedSection>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <AnimatedSection>
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">Overview</h2>
          <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            We specialize in delivering top talent across AI, Data, Cloud, and Enterprise technologies.
          </p>
        </AnimatedSection>
      </section>

      {/* Our Staffing Services */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <AnimatedSection>
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Our Staffing Services</h2>
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {staffingServices.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 transition-all duration-300 hover:border-[#a855f7]/35">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/35 text-[#a855f7]">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Our Process — horizontal timeline (desktop), stacked (mobile) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <AnimatedSection>
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
        </AnimatedSection>

        {/* Mobile / tablet: vertical with connector */}
        <div className="relative mx-auto max-w-lg lg:hidden">
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
          <ol className="space-y-10">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 60}>
                <li className="relative flex gap-5 pl-1">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#a855f7] text-sm font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2 text-left">
                    <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-8 h-px bg-gradient-to-r from-transparent via-[#a855f7]/35 to-transparent"
            aria-hidden
          />
          <ol className="grid grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 80}>
                <li className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#a855f7] text-sm font-bold text-white shadow-[0_0_24px_rgba(168,85,247,0.3)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-sm font-bold leading-snug text-foreground xl:text-base">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground xl:text-sm">{step.description}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Showcase */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop"
              alt="Staffing and consulting teamwork"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-12">
              <p className="text-xl font-semibold italic leading-relaxed text-foreground md:text-2xl">
                &ldquo;TelivAI placed three senior engineers on our team in under two weeks. They understood our needs from day one.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-[#a855f7]">— VP Engineering, Fortune 500 Client</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <AnimatedSection>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#a855f7]/20 via-card to-background p-12 text-center md:p-16">
            <div className="absolute left-1/2 top-0 -z-10 h-1/2 w-full -translate-x-1/2 bg-[#a855f7]/10 blur-[100px]" />
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">Ready to Scale Your Team?</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">Tell us what you need — we&apos;ll find the perfect fit.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Get Started <ArrowUpRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
