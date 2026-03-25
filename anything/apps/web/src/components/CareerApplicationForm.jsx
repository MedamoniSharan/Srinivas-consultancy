"use client";

import { useMemo, useRef, useState } from "react";

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) errors.email = "Mail id is required.";
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.position.trim()) errors.position = "Position is required.";
  if (!values.resumeFile) errors.resumeFile = "Resume file is required.";
  return errors;
}

export default function CareerApplicationForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    resumeFile: null,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  const canSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

  const onChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus({ type: "idle", message: "" });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!canSubmit) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "idle", message: "" });

      const formData = new FormData();
      formData.append("firstName", values.firstName.trim());
      formData.append("lastName", values.lastName.trim());
      formData.append("email", values.email.trim());
      formData.append("phone", values.phone.trim());
      formData.append("position", values.position.trim());
      formData.append("resume", values.resumeFile);

      const response = await fetch("/api/careers/application", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit application.");
      }

      setStatus({
        type: "success",
        message: "Application submitted. A confirmation email has been sent to your mail id.",
      });
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        resumeFile: null,
      });
      setErrors({});
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm transition-colors focus:outline-none bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-[#a855f7]/50";

  const onPickFile = () => {
    fileInputRef.current?.click();
  };

  const onDropFile = (file) => {
    if (!file) return;
    onChange("resumeFile", file);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer?.files?.[0] || null;
    if (!file) return;

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const extOk = /\.(pdf|doc|docx)$/i.test(file.name || "");
    const typeOk = !file.type || allowed.includes(file.type);

    if (!extOk || !typeOk) {
      setErrors((prev) => ({ ...prev, resumeFile: "Only .pdf, .doc, or .docx is allowed." }));
      setStatus({ type: "error", message: "Please upload a valid resume file." });
      return;
    }

    onDropFile(file);
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={values.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={inputClass}
          />
          {errors.firstName ? <p className="mt-1 text-xs text-red-400">{errors.firstName}</p> : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={values.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={inputClass}
          />
          {errors.lastName ? <p className="mt-1 text-xs text-red-400">{errors.lastName}</p> : null}
        </div>
      </div>

      <input
        type="email"
        placeholder="Mail id"
        value={values.email}
        onChange={(e) => onChange("email", e.target.value)}
        className={inputClass}
      />
      {errors.email ? <p className="text-xs text-red-400">{errors.email}</p> : null}

      <input
        type="tel"
        placeholder="Phone Number"
        value={values.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className={inputClass}
      />
      {errors.phone ? <p className="text-xs text-red-400">{errors.phone}</p> : null}

      <input
        type="text"
        placeholder="Position"
        value={values.position}
        onChange={(e) => onChange("position", e.target.value)}
        className={inputClass}
      />
      {errors.position ? <p className="text-xs text-red-400">{errors.position}</p> : null}

      <div>
        <label className="block text-xs text-muted-foreground mb-2">Choose file (resume)</label>
        <div
          role="button"
          tabIndex={0}
          onClick={onPickFile}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onPickFile();
          }}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`w-full rounded-xl border border-dashed px-4 py-4 transition-colors ${
            isDragging ? "border-[#a855f7] bg-[#a855f7]/10" : "border-border bg-card/60"
          }`}
          aria-label="Upload resume (drag and drop or click)"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">Drag & drop your resume here</p>
              <p className="text-xs text-muted-foreground">Or click to browse. Accepted: .pdf, .doc, .docx</p>
            </div>
            <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#a855f7] px-4 py-2 text-xs font-semibold text-white">
              Choose File
            </span>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            {values.resumeFile ? (
              <span>
                Selected: <span className="text-foreground">{values.resumeFile.name}</span>
              </span>
            ) : (
              <span>No file chosen</span>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => onDropFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </div>
        {errors.resumeFile ? <p className="mt-1 text-xs text-red-400">{errors.resumeFile}</p> : null}
      </div>

      {status.type === "error" ? <p className="text-xs text-red-400">{status.message}</p> : null}
      {status.type === "success" ? (
        <p className="text-xs text-emerald-300">{status.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-[#a855f7] hover:bg-[#9333ea] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

