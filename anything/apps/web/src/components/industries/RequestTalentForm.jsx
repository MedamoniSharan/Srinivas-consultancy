import { useState, useEffect } from "react";
import { toast } from "sonner";

const inputClass =
  "w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-[#a855f7]/50 focus:outline-none focus:ring-1 focus:ring-[#a855f7]/30";
const labelClass = "mb-2 block text-sm font-medium text-foreground";

export function RequestTalentForm({ defaultIndustry = "" }) {
  const [jobTitle, setJobTitle] = useState("");
  const [industry, setIndustry] = useState(defaultIndustry);

  useEffect(() => {
    if (defaultIndustry) setIndustry(defaultIndustry);
  }, [defaultIndustry]);
  const [positionType, setPositionType] = useState("full-time");
  const [shift, setShift] = useState("");
  const [travel, setTravel] = useState("");
  const [duties, setDuties] = useState("");
  const [location, setLocation] = useState("");
  const [heardAbout, setHeardAbout] = useState("");
  const [comments, setComments] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [respondBy, setRespondBy] = useState("email");
  const [bestTime, setBestTime] = useState("");

  function handleSubmit(e, label) {
    e.preventDefault();
    if (!jobTitle.trim() || !email.trim() || !firstName.trim() || !lastName.trim() || !company.trim() || !phone.trim()) {
      toast.error("Please fill in all required fields (job title, name, company, phone, email).");
      return;
    }
    toast.success(
      `${label}: Thank you — we received your request and will contact you shortly. For immediate needs, call or email us from the Contact page.`,
      { duration: 5000 }
    );
  }

  return (
    <section id="request-talent" className="scroll-mt-24 px-6 pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/60 p-8 md:p-12">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">Start Your Search Today</h2>
        <p className="mb-2 text-center text-sm font-medium text-[#a855f7]">TelivAI Executive Search</p>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          We act as an extension of your business to connect you with experienced, proven, and well-aligned talent. If you are looking for great people—whether the need is short term or direct hire—fill out the form below to get started. We will promptly be in touch to discuss your needs in greater detail. We look forward to helping you achieve your strategic goals.
        </p>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3 className="mb-6 border-b border-border pb-2 text-lg font-semibold text-foreground">Job Information</h3>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Job Title *</label>
                <input className={inputClass} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
              </div>
              <div>
                <label className={labelClass}>Industry *</label>
                <input className={inputClass} value={industry} onChange={(e) => setIndustry(e.target.value)} required />
              </div>
              <fieldset>
                <legend className={`${labelClass} mb-3`}>Is this position temporary or full time? *</legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="positionType"
                      value="temporary"
                      checked={positionType === "temporary"}
                      onChange={() => setPositionType("temporary")}
                      className="text-[#a855f7] focus:ring-[#a855f7]"
                    />
                    Temporary
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="positionType"
                      value="full-time"
                      checked={positionType === "full-time"}
                      onChange={() => setPositionType("full-time")}
                      className="text-[#a855f7] focus:ring-[#a855f7]"
                    />
                    Full Time
                  </label>
                </div>
              </fieldset>
              <div>
                <label className={labelClass}>Shift *</label>
                <input className={inputClass} value={shift} onChange={(e) => setShift(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Travel Requirements *</label>
                <input className={inputClass} value={travel} onChange={(e) => setTravel(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Duties &amp; Responsibilities *</label>
                <textarea className={`${inputClass} min-h-[120px] resize-y`} value={duties} onChange={(e) => setDuties(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Location *</label>
                <input className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <input className={inputClass} value={heardAbout} onChange={(e) => setHeardAbout(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Additional Comments</label>
                <textarea className={`${inputClass} min-h-[80px] resize-y`} value={comments} onChange={(e) => setComments(e.target.value)} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 border-b border-border pb-2 text-lg font-semibold text-foreground">Your Contact Information</h3>
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input className={inputClass} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input className={inputClass} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div>
                <label className={labelClass}>Company *</label>
                <input className={inputClass} value={company} onChange={(e) => setCompany(e.target.value)} required />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input type="tel" className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <fieldset>
                <legend className={`${labelClass} mb-3`}>Respond by</legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="respondBy"
                      value="phone"
                      checked={respondBy === "phone"}
                      onChange={() => setRespondBy("phone")}
                      className="text-[#a855f7]"
                    />
                    Phone
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="respondBy"
                      value="email"
                      checked={respondBy === "email"}
                      onChange={() => setRespondBy("email")}
                      className="text-[#a855f7]"
                    />
                    Email
                  </label>
                </div>
              </fieldset>
              <div>
                <label className={labelClass}>Best Time to Respond</label>
                <input className={inputClass} value={bestTime} onChange={(e) => setBestTime(e.target.value)} placeholder="e.g. Weekdays 9am–5pm IST" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "Request Talent")}
              className="rounded-xl bg-[#a855f7] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#9333ea]"
            >
              Request Talent — Start Search Today
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "Employee request")}
              className="rounded-xl border border-border px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted/40"
            >
              Request Employee
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
