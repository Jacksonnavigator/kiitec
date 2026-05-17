import { Navigate } from "react-router-dom";

/** Legacy route — admissions content lives on the Apply page. */
export function Admissions() {
  return <Navigate to="/apply-here#admissions" replace />;
}
