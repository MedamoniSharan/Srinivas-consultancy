import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { RequestTalentForm } from "@/components/industries/RequestTalentForm";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Healthcare Technology & Digital Transformation",
    description:
      "TelivAi Solutions supports healthcare organizations with technology talent and digital solutions for secure systems, analytics, and operational efficiency.",
    path: "/industries/healthcare",
  });
}

export default function Healthcare() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#a855f7]">
          Healthcare
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">Healthcare</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Healthcare Technology and Digital Transformation
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
              Healthcare organizations require secure and reliable technology systems to support patient care, clinical operations, and data management. TelivAi Solutions LLC provides technology professionals and digital solutions that help healthcare organizations modernize their infrastructure and improve operational efficiency.
            </p>
            <p>
              Our healthcare technology services focus on building secure systems, analytics platforms, and digital applications that support healthcare providers and healthcare technology companies.
            </p>
            <p className="text-gray-300">
              We help healthcare organizations adopt modern technology solutions that improve service delivery and operational performance.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">Need healthcare technology talent?</h2>
          <p className="mb-6 text-sm text-gray-400">Tell us about your role and we&apos;ll connect you with aligned professionals.</p>
          <a
            href="#request-talent"
            className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea]"
          >
            Request Talent <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <RequestTalentForm defaultIndustry="Healthcare" />
    </PageLayout>
  );
}
