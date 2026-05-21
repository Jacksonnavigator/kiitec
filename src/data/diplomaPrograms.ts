/** NACTVET diploma pathways as published on the 2026 Skills to Fly / Mastercard Foundation poster. */
export const diplomaCourseCategoryLabel = "3 Years Courses - NACTVET" as const;

export interface DiplomaProgram {
  title: string;
  body: string;
  /** Value stored in application / enquiry forms */
  formValue: string;
}

export const diplomaPrograms: DiplomaProgram[] = [
  {
    title: "Electrical & Computer Engineering",
    body: "Electrical foundations with computing for networks, systems, and modern digital workplaces.",
    formValue: "Diploma — Electrical & Computer Engineering",
  },
  {
    title: "Electronics & Telecommunication Engineering",
    body: "Circuits, signals, and communications infrastructure for connected organisations.",
    formValue: "Diploma — Electronics & Telecommunication Engineering",
  },
  {
    title: "Electrical & Industrial Automation Engineering",
    body: "Control systems, drives, and automation for safe, productive industry.",
    formValue: "Diploma — Electrical & Industrial Automation Engineering",
  },
  {
    title: "Electrical & Renewable Energy Engineering",
    body: "Power systems and sustainable energy technologies for communities and industry.",
    formValue: "Diploma — Electrical & Renewable Energy Engineering",
  },
  {
    title: "Artificial Intelligence & Machine Learning Engineering",
    body: "Data-driven models, intelligent systems, and applied machine learning in engineering contexts.",
    formValue: "Diploma — Artificial Intelligence & Machine Learning Engineering",
  },
  {
    title: "Data Science & Analytics Engineering",
    body: "Analytics pipelines, statistical modelling, and decision support from engineering data.",
    formValue: "Diploma — Data Science & Analytics Engineering",
  },
  {
    title: "Robotics & Drones Engineering",
    body: "Mechatronics, autonomous platforms, and unmanned systems for inspection and field work.",
    formValue: "Diploma — Robotics & Drones Engineering",
  },
] as const;
