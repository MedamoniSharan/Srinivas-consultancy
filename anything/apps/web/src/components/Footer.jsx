import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex max-w-sm shrink-0 flex-col sm:max-w-md lg:max-w-[min(100%,680px)]">
            <a href="/" className="mb-0 inline-flex w-full items-start justify-start">
              <div className="h-48 w-[520px] overflow-hidden sm:h-56 sm:w-[600px] md:h-64 md:w-[680px] lg:h-[22rem] lg:w-[820px]">
                <img
                  src="/images/TelivAI.png"
                  alt="TelivAI Solutions"
                  className="block h-full w-full object-cover object-left object-top"
                  width={1400}
                  height={300}
                />
              </div>
            </a>
            <p className="text-sm leading-snug text-muted-foreground">
              Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 lg:mt-auto lg:pt-10">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="min-w-0 flex-1 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#a855f7]/50 focus:outline-none sm:max-w-[200px]"
              />
              <button
                type="button"
                className="shrink-0 rounded-lg bg-[#a855f7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#9333ea]"
              >
                Subscribe
              </button>
            </div>
          </div>

          <nav
            className="grid min-w-0 flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10 lg:max-w-2xl lg:justify-items-stretch xl:max-w-none"
            aria-label="Footer"
          >
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/products/ai-agents"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    AI Agents
                  </a>
                </li>
                <li>
                  <a
                    href="/products/crm"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    CRM Platform
                  </a>
                </li>
                <li>
                  <a
                    href="/products/erp"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    ERP System
                  </a>
                </li>
                <li>
                  <a
                    href="/products/procurement"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Procurement System
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/services/staffing"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    IT Staffing & Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="/services/ai-development"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    AI Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/mobile-development"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/web-development"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/custom-software"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Custom Software
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/about"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/hiring-process"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Hiring Process
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/industries"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/technologies"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-colors group-hover:text-[#a855f7]" />
                    Technologies
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TelivAI Solutions. All rights reserved.</p>
          <p className="text-center sm:text-right">Visioned and Crafted by TelivAI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
