import { Link } from "react-router-dom";
import { ApplicationForm } from "../components/ApplicationForm";

export function Apply() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Application form</h1>
          <p>
            Apply for <strong>long term</strong> or <strong>short term</strong> courses at Don Bosco KIITEC. Programme names and
            indicative timings are listed on the <Link to="/programs">Programs</Link> page; use this form to start a written
            application by email.
          </p>
        </div>
      </div>
      <div className="section container prose apply-page-notes">
        <p>
          For sponsorship support, download the PDF from the <Link to="/admissions">Admissions</Link> page. For general questions
          without a full application, use <Link to="/contact#registrar-enquiry">Contact</Link>.
        </p>
      </div>
      <div className="section container" style={{ paddingTop: 0 }}>
        <ApplicationForm />
      </div>
    </>
  );
}
