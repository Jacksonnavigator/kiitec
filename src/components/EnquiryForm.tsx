import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { diplomaPrograms } from "../data/diplomaPrograms";
import { siteContact } from "../site/contact";

export function EnquiryForm() {
  const [sentHint, setSentHint] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const programme = String(fd.get("programme") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim() || "Website enquiry — Don Bosco KIITEC";
    const message = String(fd.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Reply email: ${email}`,
      `Phone: ${phone || "(not provided)"}`,
      programme ? `Programme interest: ${programme}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentHint(true);
  }

  return (
    <div id="registrar-enquiry" className="contact-form-wp">
      <h2 className="contact-form-wp__title">Contact us</h2>
      <p className="contact-form-wp__intro">
        Submit opens your email app. To apply formally, use the <Link to="/apply-here">Apply</Link> page instead.
      </p>
      <form className="enquiry-form enquiry-form--classic" onSubmit={handleSubmit}>
        <div className="enquiry-form__grid">
          <div className="form-row">
            <label className="form-label" htmlFor="enq-name">
              Your name <span className="form-required">*</span>
            </label>
            <input id="enq-name" name="name" className="form-input" type="text" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="enq-email">
              Your email <span className="form-required">*</span>
            </label>
            <input id="enq-email" name="email" className="form-input" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="enq-phone">
            Phone number
          </label>
          <input id="enq-phone" name="phone" className="form-input" type="tel" autoComplete="tel" placeholder="+255 …" />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="enq-programme">
            Programme you are writing about
          </label>
          <select id="enq-programme" name="programme" className="form-input form-select" defaultValue="">
            <option value="">Select programme (optional)</option>
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
            </optgroup>
            <optgroup label="Other">
              <option value="General enquiry">General enquiry</option>
            </optgroup>
          </select>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="enq-subject">
            Subject <span className="form-required">*</span>
          </label>
          <input
            id="enq-subject"
            name="subject"
            className="form-input"
            type="text"
            required
            placeholder="e.g. Question about diploma intake"
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="enq-message">
            Your message <span className="form-required">*</span>
          </label>
          <textarea id="enq-message" name="message" className="form-textarea form-textarea--tall" rows={8} required />
        </div>
        <div className="enquiry-form__actions">
          <button type="submit" className="btn btn-primary enquiry-form__submit">
            Submit
          </button>
        </div>
      </form>
      {sentHint ? (
        <p className="form-footnote" role="status">
          If your mail program did not open, copy <strong>{siteContact.email}</strong> and send your message manually.
        </p>
      ) : null}
    </div>
  );
}
