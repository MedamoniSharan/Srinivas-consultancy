import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex shrink-0 flex-col">
            <a href="/" className="inline-flex items-start">
              <img
                src="/images/TelivAI.png"
                alt="TelivAI Solutions"
                className="block h-20 w-auto object-contain object-left sm:h-24"
                width={640}
                height={140}
              />
            </a>
          </div>

          <nav
            className="grid min-w-0 flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10 lg:max-w-2xl lg:justify-items-stretch xl:max-w-none"
            aria-label="Footer"
          >
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/products/ai-agents" className="transition-colors hover:text-foreground">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="/products/crm" className="transition-colors hover:text-foreground">
                    CRM Platform
                  </a>
                </li>
                <li>
                  <a href="/products/erp" className="transition-colors hover:text-foreground">
                    ERP System
                  </a>
                </li>
                <li>
                  <a href="/products/procurement" className="transition-colors hover:text-foreground">
                    Procurement System
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/services/staffing" className="transition-colors hover:text-foreground">
                    IT Staffing & Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/ai-development" className="transition-colors hover:text-foreground">
                    AI Development
                  </a>
                </li>
                <li>
                  <a href="/services/mobile-development" className="transition-colors hover:text-foreground">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="/services/web-development" className="transition-colors hover:text-foreground">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/services/custom-software" className="transition-colors hover:text-foreground">
                    Custom Software
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="transition-colors hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/careers/hiring-process" className="transition-colors hover:text-foreground">
                    Hiring Process
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/industries" className="transition-colors hover:text-foreground">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="/technologies" className="transition-colors hover:text-foreground">
                    Technologies
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TelivAI Solutions. All rights reserved.</p>
          <p className="text-center sm:text-right">Visioned and Crafted by TelivAI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
