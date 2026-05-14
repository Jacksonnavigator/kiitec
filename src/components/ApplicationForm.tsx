import { FormEvent, useState } from "react";
import { siteContact } from "../site/contact";
import { diplomaPrograms } from "../data/diplomaPrograms";

export function ApplicationForm() {
  const [sentHint, setSentHint] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("applicant_name") ?? "").trim();
    const dob = String(fd.get("dob") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const programme = String(fd.get("programme") ?? "").trim();
    const education = String(fd.get("education") ?? "").trim();
    const intake = String(fd.get("intake") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = `Application — ${name || "Applicant"}`;
    const body = [
      "APPLICATION (submitted via website form)",
      "",
      `Full name: ${name}`,
      `Date of birth: ${dob || "(not provided)"}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Programme: ${programme || "(not selected)"}`,
      `Education / qualifications: ${education || "(not provided)"}`,
      `Preferred intake / year: ${intake || "(not provided)"}`,
      "",
      "Additional information:",
      message || "(none)",
    ].join("\n");
    window.location.href = `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentHint(true);
  }

  return (
    <div className="contact-form-wp application-form-wp">
      <h2 className="contact-form-wp__title">Application form</h2>
      <p className="contact-form-wp__intro">
        Complete the fields below and press <strong>Submit</strong>. Your email program will open with this application addressed to{" "}
        {siteContact.email}. Confirm entry requirements, fees, and intake dates with the registrar before you rely on email alone for
        time-sensitive decisions.
      </p>
      <form className="enquiry-form enquiry-form--classic" onSubmit={handleSubmit}>
        <div className="enquiry-form__grid">
          <div className="form-row">
            <label className="form-label" htmlFor="app-name">
              Full name <span className="form-required">*</span>
            </label>
            <input id="app-name" name="applicant_name" className="form-input" type="text" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="app-dob">
              Date of birth
            </label>
            <input id="app-dob" name="dob" className="form-input" type="date" />
          </div>
        </div>
        <div className="enquiry-form__grid">
          <div className="form-row">
            <label className="form-label" htmlFor="app-email">
              Email <span className="form-required">*</span>
            </label>
            <input id="app-email" name="email" className="form-input" type="email" autoComplete="email" required />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="app-phone">
              Phone <span className="form-required">*</span>
            </label>
            <input id="app-phone" name="phone" className="form-input" type="tel" autoComplete="tel" required />
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="app-programme">
            Programme applied for <span className="form-required">*</span>
          </label>
          <select id="app-programme" name="programme" className="form-input form-select" required defaultValue="">
            <option value="">Select programme</option>
            <optgroup label="Long term courses">
              {diplomaPrograms.map((p) => (
                <option key={p.formValue} value={p.formValue}>
                  {p.title}
                </option>
              ))}
              <option value="Professional — IT and Security System courses">IT and Security System courses (professional)</option>
            </optgroup>
            <optgroup label="Short term courses">
              <option value="Short — Domestic and Electrical Installation">Domestic and Electrical Installation</option>
              <option value="Short — Basic Computer Applications">Basic Computer Applications</option>
              <option value="Short — Other (specify in message)">Other (describe in your message)</option>
            </optgroup>
          </select>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="app-education">
            Education / qualifications (e.g. Form IV, diploma, other)
          </label>
          <input id="app-education" name="education" className="form-input" type="text" autoComplete="off" />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="app-intake">
            Preferred intake or year
          </label>
          <input id="app-intake" name="intake" className="form-input" type="text" placeholder="e.g. March 2026" />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="app-message">
            Additional information
          </label>
          <textarea id="app-message" name="message" className="form-textarea form-textarea--tall" rows={6} />
        </div>
        <div className="enquiry-form__actions">
          <button type="submit" className="btn btn-primary enquiry-form__submit">
            Submit application
          </button>
        </div>
      </form>
      {sentHint ? (
        <p className="form-footnote" role="status">
          If your mail program did not open, send your application manually to <strong>{siteContact.email}</strong> with the same
          details.
        </p>
      ) : null}
    </div>
  );
}
