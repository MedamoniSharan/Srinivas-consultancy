import AnimatedSection from "@/components/AnimatedSection";

export function ProductKeyBullets({ title, items }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <AnimatedSection>
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="shrink-0 font-bold text-[#a855f7]">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
