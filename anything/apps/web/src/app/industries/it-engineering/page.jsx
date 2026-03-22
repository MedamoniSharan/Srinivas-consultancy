import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { RequestTalentForm } from "@/components/industries/RequestTalentForm";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "IT & Engineering Staffing & Technology Consulting",
    description:
      "TelivAi Solutions connects organizations with skilled IT and engineering professionals—contract staffing, consulting, and project-based technology delivery.",
    path: "/industries/it-engineering",
  });
}

export default function ITEngineering() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#a855f7]">
          IT | Engineering
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">IT &amp; Engineering</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          IT and Engineering Staffing and Technology Consulting
        </p>
        <a
          href="#request-talent"
          className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea]"
        >
          Request Talent <ArrowUpRight size={18} />
        </a>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <AnimatedSection>
          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              TelivAi Solutions LLC is a technology consulting and staffing company specializing in connecting organizations with highly skilled IT and engineering professionals. We provide contract staffing, consulting services, and project-based solutions to companies that require experienced technical talent to support critical business initiatives.
            </p>
            <p>
              Our team works with organizations across industries to deliver professionals who possess the technical expertise and industry knowledge needed to build modern technology platforms, manage infrastructure, and support digital transformation initiatives.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <AnimatedSection delay={80}>
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Are You Looking for Technical Talent?</h2>
          <p className="mb-6 text-gray-400">
            Skilled STEM professionals are in high demand, making it increasingly difficult for organizations to find qualified candidates who align with their technical requirements and business goals. That&apos;s where TelivAi Solutions LLC can help.
          </p>
          <ul className="mb-8 space-y-4 text-gray-300">
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 font-bold text-[#a855f7]">•</span>
              <span>
                As a technology staffing and consulting partner, we help businesses identify and place highly skilled professionals who can support enterprise technology projects, software development initiatives, infrastructure modernization, and advanced analytics solutions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 font-bold text-[#a855f7]">•</span>
              <span>
                Working closely with our clients, we ensure that the professionals we provide are well-aligned with each organization&apos;s technical environment, project goals, and operational needs.
              </span>
            </li>
          </ul>
          <a
            href="#request-talent"
            className="inline-flex items-center gap-2 rounded-xl border border-[#a855f7]/40 bg-[#a855f7]/10 px-8 py-3 font-semibold text-[#a855f7] transition-colors hover:bg-[#a855f7]/20"
          >
            Request Talent <ArrowUpRight size={18} />
          </a>
        </AnimatedSection>
      </section>

      <RequestTalentForm defaultIndustry="IT & Engineering" />
    </PageLayout>
  );
}
