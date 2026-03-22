import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

export function ProductRequestDemoSection({ productName }) {
  return (
    <section id="request-demo" className="scroll-mt-24 px-6 pb-24">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-[#a855f7]/15 via-card to-background p-10 text-center md:p-14">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Request a Demo</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            See {productName} in action. Our team will walk you through capabilities tailored to your organization and answer your questions.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#a855f7] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#a855f7]/25 transition-colors hover:bg-[#9333ea]"
            >
              Schedule Demo <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted/40"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
