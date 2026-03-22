import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { RequestTalentForm } from "@/components/industries/RequestTalentForm";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Pharmaceutical Technology & Research Support",
    description:
      "TelivAi Solutions provides technical professionals for pharmaceutical software, data analytics, compliance, and digital transformation.",
    path: "/industries/pharmaceutical",
  });
}

export default function Pharmaceutical() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#a855f7]">
          Pharmaceutical
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">Pharmaceutical</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Pharmaceutical Technology and Research Support
        </p>
        <a
          href="#request-talent"
          className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea]"
        >
          Request Talent <ArrowUpRight size={18} />
        </a>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <AnimatedSection>
          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              The pharmaceutical industry depends on advanced technology systems to support research, manufacturing, regulatory compliance, and supply chain operations. TelivAi Solutions LLC provides specialized technical professionals who support pharmaceutical companies with software platforms, data analytics systems, and digital transformation initiatives.
            </p>
            <p className="text-gray-300">
              Our professionals assist pharmaceutical organizations in implementing digital solutions that improve research efficiency and operational transparency.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">Build your pharma technology team</h2>
          <p className="mb-6 text-sm text-gray-400">Share your requirements and we&apos;ll follow up promptly.</p>
          <a
            href="#request-talent"
            className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea]"
          >
            Request Talent <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <RequestTalentForm defaultIndustry="Pharmaceutical" />
    </PageLayout>
  );
}
