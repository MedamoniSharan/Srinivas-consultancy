import PageLayout from "@/components/PageLayout";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import { FileText, Search, Users, Award, Rocket } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Hiring Process — How We Interview at TelivAI",
    description:
      "From application to offer: screening, technical conversations, culture fit, and onboarding—what to expect when you apply to TelivAI.",
    path: "/careers/hiring-process",
  });
}

const steps = [
  {
    num: "01",
    title: "Application",
    desc: "Submit your application through our careers page. Ensure your resume highlights relevant skills, experience, and accomplishments.",
    icon: <FileText size={24} />,
  },
  {
    num: "02",
    title: "Screening",
    desc: "Our HR team reviews applications to shortlist candidates based on qualifications, experience, and cultural fit.",
    icon: <Search size={24} />,
  },
  {
    num: "03",
    title: "Interview",
    desc: "Shortlisted candidates are invited for technical and behavioral interviews with our engineering and leadership teams.",
    icon: <Users size={24} />,
  },
  {
    num: "04",
    title: "Offer",
    desc: "If you are selected, we will extend a job offer detailing compensation, benefits, and terms of employment.",
    icon: <Award size={24} />,
  },
  {
    num: "05",
    title: "Onboarding",
    desc: "Our onboarding process ensures you have everything you need to succeed from day one — tools, mentorship, and team integration.",
    icon: <Rocket size={24} />,
  },
];

export default function HiringProcessPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Hiring Process at <span className="text-[#a855f7]">TelivAI Solutions</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Here's a step-by-step guide to our process:
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-card/80 border border-border rounded-2xl p-6 md:p-8 hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {step.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#a855f7]">Tips for Preparation</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Practical tips to prepare for our hiring steps.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Review the Job Description", desc: "Understand the role and how your experience aligns with the requirements and responsibilities." },
            { title: "Prepare for Assessments", desc: "Brush up on relevant technical skills and problem-solving approaches for the domain." },
            { title: "Practice Interview Skills", desc: "Practice common interview questions and be ready to discuss your projects and achievements." },
            { title: "Showcase Your Passion", desc: "Demonstrate enthusiasm for the role and the company, and be ready to share your vision." },
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-card/80 border border-border rounded-2xl p-6 text-center hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
            >
              <h3 className="font-bold text-foreground mb-3">{tip.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-card/80 border border-border rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Submit Application</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Fill in your details and upload your resume. After submitting, a confirmation email will be sent to your mail id.
          </p>
          <CareerApplicationForm />
        </div>
      </section>
    </PageLayout>
  );
}
