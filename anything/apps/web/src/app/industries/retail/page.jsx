import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { RequestTalentForm } from "@/components/industries/RequestTalentForm";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Retail & E-Commerce Technology",
    description:
      "TelivAi Solutions helps retail and e-commerce companies optimize digital platforms, analytics, and supply chain technology with skilled professionals.",
    path: "/industries/retail",
  });
}

export default function Retail() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#a855f7]">
          Retail &amp; E-Commerce
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">Retail &amp; E-Commerce</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Digital Commerce and Retail Technology
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
              Retail organizations rely heavily on digital platforms, customer analytics, and supply chain technologies to remain competitive in the modern marketplace. TelivAi Solutions LLC provides professionals and solutions that help retail companies optimize their technology systems and enhance the customer experience.
            </p>
            <p className="text-gray-300">
              Our professionals help retail businesses implement technology systems that improve operational efficiency and customer engagement.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">Hire retail and e-commerce technology talent</h2>
          <p className="mb-6 text-sm text-gray-400">Complete the form and we&apos;ll reach out to discuss your needs.</p>
          <a
            href="#request-talent"
            className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-3 font-semibold text-white transition-all hover:bg-[#9333ea]"
          >
            Request Talent <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <RequestTalentForm defaultIndustry="Retail & E-Commerce" />
    </PageLayout>
  );
}
