import { FormEvent, useState } from "react";
import { siteContact } from "../site/contact";
import { diplomaCourseCategoryLabel, diplomaPrograms } from "../data/diplomaPrograms";

export function ApplicationForm() {
  const [sentHint, setSentHint] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Submit to Formspree
      const response = await fetch("https://kiitec.ac.tz/api/send-application.php", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSentHint(true);
        form.reset();
        setIsSubmitting(false);
      } else {
        setError("Failed to send application. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
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
          <p className="app-form-success__title">Application submitted!</p>
          <p className="app-form-success__text">
            Your application has been sent to <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>. The registrar will review your details and reply with next steps.
          </p>
        </div>
      ) : null}

      {error ? (
        <div className="app-form-error" role="alert" style={{ padding: "1rem", marginBottom: "1rem", backgroundColor: "#ffebee", border: "1px solid #ef5350", borderRadius: "8px", color: "#c62828" }}>
          <p>{error}</p>
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
                <optgroup label={diplomaCourseCategoryLabel}>
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
          <button type="submit" className="btn btn-primary app-form__submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Submit application"}
          </button>
          <p className="app-form__footnote">
            Your application goes directly to the registrar's email. You'll receive a response within 2–3 business days.
          </p>
        </div>
      </form>
    </div>
  );
}
