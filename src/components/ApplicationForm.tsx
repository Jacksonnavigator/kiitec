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
    <div className="app-form-panel">
      <header className="app-form-panel__head">
        <h2 className="app-form-panel__title">Application</h2>
        <p className="app-form-panel__intro">
          Required fields are marked <span className="app-form-required">*</span>. Submit opens email to{" "}
          <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>.
        </p>
      </header>

      {sentHint ? (
        <div className="app-form-success" role="status">
          <p className="app-form-success__title">Email draft ready</p>
          <p className="app-form-success__text">
            If your mail program did not open, send your details manually to{" "}
            <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a> with the subject line{" "}
            <strong>Application — [your name]</strong>.
          </p>
        </div>
      ) : null}

      <form className="app-form" onSubmit={handleSubmit} noValidate={false}>
        <fieldset className="app-form__section">
          <legend className="app-form__legend">Personal details</legend>
          <div className="app-form__grid app-form__grid--2">
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-name">
                Full name <span className="app-form-required">*</span>
              </label>
              <input
                id="app-name"
                name="applicant_name"
                className="app-form__input"
                type="text"
                autoComplete="name"
                required
                placeholder="As on your certificates"
              />
            </div>
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-dob">
                Date of birth
              </label>
              <input id="app-dob" name="dob" className="app-form__input" type="date" />
            </div>
          </div>

          <div className="app-form__grid app-form__grid--2">
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-email">
                Email <span className="app-form-required">*</span>
              </label>
              <input
                id="app-email"
                name="email"
                className="app-form__input"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-phone">
                Phone <span className="app-form-required">*</span>
              </label>
              <input
                id="app-phone"
                name="phone"
                className="app-form__input"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+255 …"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="app-form__section">
          <legend className="app-form__legend">Programme choice</legend>
          <div className="app-form__field">
            <label className="app-form__label" htmlFor="app-programme">
              Programme applied for <span className="app-form-required">*</span>
            </label>
            <div className="app-form__select-wrap">
              <select id="app-programme" name="programme" className="app-form__input app-form__select" required defaultValue="">
                <option value="" disabled>
                  Select a programme
                </option>
                <optgroup label="Long term — NACTE diplomas">
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
                  <option value="Short — Other (specify in message)">Other (describe below)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="app-form__grid app-form__grid--2">
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-education">
                Education / qualifications
              </label>
              <input
                id="app-education"
                name="education"
                className="app-form__input"
                type="text"
                autoComplete="off"
                placeholder="e.g. Form IV, 4 passes incl. Physics"
              />
              <p className="app-form__hint">Include level, subjects, and year if known.</p>
            </div>
            <div className="app-form__field">
              <label className="app-form__label" htmlFor="app-intake">
                Preferred intake or year
              </label>
              <input
                id="app-intake"
                name="intake"
                className="app-form__input"
                type="text"
                placeholder="e.g. March 2026"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="app-form__section">
          <legend className="app-form__legend">Additional information</legend>
          <div className="app-form__field">
            <label className="app-form__label" htmlFor="app-message">
              Message to the registrar
            </label>
            <textarea
              id="app-message"
              name="message"
              className="app-form__input app-form__textarea"
              rows={5}
              placeholder="Scholarship interest, prior experience, questions about fees or instalments…"
            />
          </div>
        </fieldset>

        <div className="app-form__footer">
          <button type="submit" className="btn btn-primary app-form__submit">
            Submit application
          </button>
          <p className="app-form__footnote">
            By submitting, you start an email to the institute—not an automated portal. The registrar will reply with next steps.
          </p>
        </div>
      </form>
    </div>
  );
}
