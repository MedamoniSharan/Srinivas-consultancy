import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Lightbulb, Heart } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers — Join TelivAI Solutions",
    description:
      "Open roles in AI/ML, data engineering, networking, cybersecurity, design, and software development. Learn our culture and hiring process in Hyderabad and beyond.",
    path: "/careers",
  });
}

const positions = [
  {
    title: "AI/ML Engineer",
    location: "Hyderabad",
    department: "Engineering",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/ai-ml-engineer",
    description:
      "Design intelligent systems using machine learning, NLP, and computer vision to solve complex problems at scale.",
  },
  {
    title: "Data Engineer",
    location: "Hyderabad",
    department: "Engineering",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/data-engineer",
    description:
      "Build scalable data pipelines, warehouses, and real-time processing systems that power critical business decisions.",
  },
  {
    title: "Network Engineer",
    location: "Hyderabad",
    department: "Engineering",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/network-engineer",
    description:
      "Architect and manage robust network infrastructure across cloud and on-premise environments.",
  },
  {
    title: "Cyber Security Engineer",
    location: "Remote",
    department: "Security",
    experience: "Senior",
    type: "Full-time",
    href: "/careers/cybersecurity-engineer",
    description:
      "Protect our systems through penetration testing, incident response, and comprehensive security audits.",
  },
  {
    title: "UI/UX Designer",
    location: "Hyderabad",
    department: "Design",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/ui-ux-designer",
    description:
      "Craft intuitive user experiences through research, wireframes, and modern design systems.",
  },
  {
    title: "Java Developer",
    location: "Hyderabad",
    department: "Engineering",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/java-developer",
    description:
      "Develop enterprise applications with Spring Boot, microservices, and high-performance REST APIs.",
  },
  {
    title: "Software Developer",
    location: "Remote",
    department: "Engineering",
    experience: "Mid",
    type: "Full-time",
    href: "/careers/software-developer",
    description:
      "Build full-stack applications using React, Node.js, and modern development practices.",
  },
];

const LOCATION_OPTIONS = [
  { value: "all", label: "All Locations" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Remote", label: "Remote" },
];

const DEPARTMENT_OPTIONS = [
  { value: "all", label: "All Departments" },
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Security", label: "Security" },
];

const EXPERIENCE_OPTIONS = [
  { value: "any", label: "Any Experience" },
  { value: "Entry", label: "Entry" },
  { value: "Mid", label: "Mid" },
  { value: "Senior", label: "Senior" },
];

const benefits = [
  { icon: TrendingUp, title: "Growth Opportunities", description: "Clear career paths, mentorship programs, and leadership tracks to help you reach your full potential." },
  { icon: Lightbulb, title: "Cutting-Edge Tech", description: "Work with the latest technologies, frameworks, and tools—from AI/ML to cloud-native architectures." },
  { icon: Heart, title: "Collaborative Culture", description: "A supportive, inclusive environment where diverse perspectives are valued and every voice matters." },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format&fit=crop",
];

const selectClass =
  "min-w-0 flex-1 rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground shadow-sm focus:border-[#a855f7]/50 focus:outline-none focus:ring-1 focus:ring-[#a855f7]/40";

export default function CareersPage() {
  const [location, setLocation] = useState("all");
  const [department, setDepartment] = useState("all");
  const [experience, setExperience] = useState("any");
  const [appliedLocation, setAppliedLocation] = useState("all");
  const [appliedDepartment, setAppliedDepartment] = useState("all");
  const [appliedExperience, setAppliedExperience] = useState("any");

  const filteredPositions = useMemo(() => {
    return positions.filter((p) => {
      if (appliedLocation !== "all" && p.location !== appliedLocation) return false;
      if (appliedDepartment !== "all" && p.department !== appliedDepartment) return false;
      if (appliedExperience !== "any" && p.experience !== appliedExperience) return false;
      return true;
    });
  }, [appliedLocation, appliedDepartment, appliedExperience]);

  function applyFilters() {
    setAppliedLocation(location);
    setAppliedDepartment(department);
    setAppliedExperience(experience);
  }

  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-6 pb-8 pt-32 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">Join Our Team</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            We&apos;re looking for passionate people who want to make an impact. Explore open roles and find where you belong.
          </p>
        </section>
        <div className="relative mx-auto mb-16 w-full max-w-6xl overflow-hidden rounded-2xl px-6">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
            alt="Team collaboration"
            className="h-[340px] w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 mx-6 flex items-center justify-center rounded-2xl bg-black/40">
            <p className="text-2xl font-semibold text-foreground md:text-3xl">Build the future with us</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Current Openings + filters */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#a855f7] md:text-4xl">Current Openings</h2>
            <p className="text-muted-foreground">Filter by location, department or experience.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
            <label className="flex min-w-[160px] flex-1 flex-col gap-1.5 text-left text-xs font-medium text-muted-foreground sm:max-w-[220px]">
              <span className="sr-only">Location</span>
              <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass} aria-label="Filter by location">
                {LOCATION_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex min-w-[160px] flex-1 flex-col gap-1.5 text-left text-xs font-medium text-muted-foreground sm:max-w-[220px]">
              <span className="sr-only">Department</span>
              <select value={department} onChange={(e) => setDepartment(e.target.value)} className={selectClass} aria-label="Filter by department">
                {DEPARTMENT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex min-w-[160px] flex-1 flex-col gap-1.5 text-left text-xs font-medium text-muted-foreground sm:max-w-[220px]">
              <span className="sr-only">Experience</span>
              <select value={experience} onChange={(e) => setExperience(e.target.value)} className={selectClass} aria-label="Filter by experience level">
                {EXPERIENCE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={applyFilters}
              className="shrink-0 rounded-lg bg-[#a855f7] px-8 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(168,85,247,0.35)] transition-colors hover:bg-[#9333ea] sm:ml-1"
            >
              Filter
            </button>
          </div>
        </AnimatedSection>

        {filteredPositions.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No roles match these filters. Try adjusting your criteria.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPositions.map((pos, i) => (
              <AnimatedSection key={pos.title} delay={i * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-bold text-foreground">{pos.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pos.location} • {pos.department} • {pos.experience}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{pos.description}</p>
                  <a
                    href={pos.href}
                    className="mt-6 block w-full rounded-lg bg-[#a855f7] py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#9333ea]"
                  >
                    Apply Now
                  </a>
                </article>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* Why Work With Us */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <AnimatedSection>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Work With Us</h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 100}>
              <div className="rounded-2xl border border-[#a855f7]/20 bg-gradient-to-br from-card to-background p-8 text-center">
                <b.icon className="mx-auto mb-4 h-10 w-10 text-[#a855f7]" />
                <h3 className="mb-2 text-xl font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Culture Image Strip */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-3 gap-4">
          {cultureImages.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Team culture ${i + 1}`}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="rounded-2xl border border-[#a855f7]/20 bg-gradient-to-br from-card to-background p-10">
          <h2 className="mb-4 text-3xl font-bold">Don&apos;t See Your Role?</h2>
          <p className="mb-6 text-muted-foreground">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future openings.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-[#a855f7] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#9333ea]"
          >
            Get In Touch
          </a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
