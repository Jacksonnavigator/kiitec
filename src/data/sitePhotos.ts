import { legacyImagesBase } from "../site/brand";

const u = (path: string) => `${legacyImagesBase}/${path}`;

/** Time each full-bleed home hero background is shown (ms). */
export const HOME_HERO_SLIDE_INTERVAL_MS = 10_000;

/**
 * Five high-resolution hero backgrounds: campus overview, identity, flagship labs,
 * hands-on automation/electrical training, and graduation.
 */
export const homeHeroBackgroundSlides = [
  {
    src: u("2025/05/IMG_6384-1536x1024.jpg"),
    a11yLabel: "Campus buildings and grounds from an elevated viewpoint.",
  },
  {
    src: u("2023/06/Kiitec-welcome.jpeg"),
    a11yLabel: "Solar and electrical laboratory entrance with welcome banner and partner logos.",
  },
  {
    src: u("2023/06/labs.jpeg"),
    a11yLabel: "Training laboratories overview with equipment and learners.",
  },
  {
    src: u("2025/05/DB-Kiitec-38-1024x684.jpg"),
    a11yLabel: "Industrial automation and electrical practical workbench in the workshop.",
  },
  {
    src: u("2024/11/DBKiitec-322-scaled.jpg"),
    a11yLabel: "Graduation ceremony with academic dress and guests seated outdoors.",
  },
] as const;

/**
 * Curated photos: no `src` is shared between *routes* for the main strips (Home vs Campus vs Programs vs About).
 * Each item has a short `title` for visible labels and a fuller `alt` for accessibility—both describe the same scene.
 */

/** Home — campus & labs mosaic. */
export const homeCampusLifePhotos = [
  {
    src: u("2025/05/DB-Kiitec-43-scaled.jpg"),
    title: "Computer laboratory",
    alt: "Rows of desktop computers on wooden desks with teal office chairs in a KIITEC computer teaching lab.",
  },
  {
    src: u("2025/05/DB-Kiitec-44-scaled.jpg"),
    title: "Industrial automation workshop",
    alt: "Workbenches with industrial automation trainers, motor drives, and patch-wired panels in a KIITEC workshop.",
  },
  {
    src: u("2025/06/new-scaled.jpg"),
    title: "Electronics training benches",
    alt: "Laboratory with grey workbenches, flight cases, electronic training kits, and measuring instruments for practical classes.",
  },
  {
    src: u("2025/05/DB-Kiitec-46-scaled.jpg"),
    title: "Electro-pneumatic trainer",
    alt: "Scientech 2470 electro-pneumatic workbench with PLC, solenoid valves, blue air hoses, and coloured patch leads.",
  },
  {
    src: u("2025/05/DB-Kiitec-47-scaled.jpg"),
    title: "Renewable energy & electrical lab",
    alt: "Training lab with solar panel trainer, small wind turbine model, electrical consoles, and patch-cord experiment stations.",
  },
  {
    src: u("2025/05/DB-Kiitec-48-scaled.jpg"),
    title: "Electronics & solar bench",
    alt: "Close-up of electronics training modules, oscilloscopes on shelves, and a small solar PV panel on a stand in the lab.",
  },
] as const;

/** Home — diploma section photo grid (visible title = `title`, screen reader = `alt`). */
export const homeDiplomaShowcasePhotos = [
  {
    src: u("2024/08/IMG_5947-scaled.jpg"),
    title: "Robotics in the lab",
    alt: "Students in uniform gathered around a small wheeled robot on a table while an instructor leads the session.",
  },
  {
    src: u("2024/08/IMG_6038-scaled.jpg"),
    title: "Courtyard between classes",
    alt: "Students in white shirts and navy uniforms walking across the paved courtyard of the multi-storey main teaching block.",
  },
  {
    src: u("2024/08/IMG_6267-scaled.jpg"),
    title: "Automatic beverage system project",
    alt: "Students around a wooden-frame student project labelled Automatic Beverage System with wiring and components.",
  },
  {
    src: u("2024/08/IMG_6469-scaled.jpg"),
    title: "St Monica School exhibition visit",
    alt: "Students in St Monica School Moshono tracksuits presenting a tabletop engineering model to adults at an indoor exhibition.",
  },
  {
    src: u("2024/08/IMG_6567-scaled.jpg"),
    title: "Outdoor solar PV lesson",
    alt: "Outdoor demonstration boards labelled Home Solar PV System with instructors and students on the campus grounds.",
  },
  {
    src: u("2024/08/IMG_6578-scaled.jpg"),
    title: "Electrical panel instruction",
    alt: "Two people reviewing wiring and modules inside an open electrical control panel next to Schneider equipment in a lab.",
  },
] as const;

/** Campus page gallery — `title` appears under each image in the gallery list. */
export const campusGalleryPhotos = [
  {
    src: u("2024/08/IMG_6800-1024x683.jpg"),
    title: "Business studies in the computer classroom",
    alt: "Instructor presenting a slide on business types to a large class of students seated at computers in a teaching room.",
  },
  {
    src: u("2025/05/DB-Kiitec-12-1024x684.jpg"),
    title: "Hostel block with solar water heating",
    alt: "Four-storey campus building with red roof, solar hot-water panels, and water tanks, set on a green lawn with trees.",
  },
  {
    src: u("2025/05/DB-Kiitec-28-1024x684.jpg"),
    title: "Main entrance — Centre of Excellence",
    alt: "Main entrance with sign reading The Center of Excellence, KIITEC logo, brick path, hedges, and statues beside the doors.",
  },
  {
    src: u("2025/05/DB-Kiitec-32-1024x684.jpg"),
    title: "Innovation lab with 3D printer",
    alt: "Laboratory with computers, a 3D printer, networking gear, and student projects including solar and AI-themed coursework.",
  },
  {
    src: u("2025/05/DB-Kiitec-37-1024x684.jpg"),
    title: "Ground-mounted solar array",
    alt: "Rows of photovoltaic panels and a small blue service building on the institute grounds, seen from above.",
  },
  {
    src: u("2025/05/DB-Kiitec-38-1024x684.jpg"),
    title: "Computer & electronics lab",
    alt: "Long desk with PCs, switches, soldering helpers, and a wind turbine model under a sloped wooden ceiling.",
  },
  {
    src: u("2025/05/new4-1024x683.jpg"),
    title: "Main gate & course signboard",
    alt: "Campus entrance gate with large Don Bosco KIITEC sign listing NACTE registration, diploma fields, and short courses.",
  },
  {
    src: u("2025/05/new5-1024x683.jpg"),
    title: "PLC & automation practical class",
    alt: "Students at a Scientech multi-PLC workbench with Siemens and Allen-Bradley modules and laptops in the automation lab.",
  },
  {
    src: u("2025/05/Loc1-768x576.jpg"),
    title: "Students by the course sign",
    alt: "Students in navy and orange uniforms walking past the Don Bosco KIITEC entrance sign listing programmes and contact details.",
  },
  {
    src: u("2025/05/Loc2-768x576.jpg"),
    title: "Hand-painted KIITEC wall sign",
    alt: "Exterior wall with hand-painted KIITEC logo, Mount Kilimanjaro graphic, and full institute name in block lettering.",
  },
  {
    src: u("2025/05/DB-Kiitec-49-scaled.jpg"),
    title: "Regenerative braking trainer",
    alt: "Laboratory bench with regenerative braking and energy storage training unit, patch leads, motors, and whiteboard notes.",
  },
] as const;

/** Programs page showcase — graduation portraits; section copy matches this (not lab work). */
export const programsStripPhotos = [
  {
    src: u("2024/11/DBKiitec-22-scaled.jpg"),
    title: "Graduates with faculty",
    alt: "Formal group photo of graduates in black gowns with red and green hoods alongside faculty in academic dress on the campus porch.",
  },
  {
    src: u("2024/11/DBKiitec-27-scaled.jpg"),
    title: "Graduation group portrait",
    alt: "Graduates standing in gowns with green and red hoods behind a seated row of officials in ceremonial academic robes.",
  },
  {
    src: u("2024/11/DBKiitec-29-scaled.jpg"),
    title: "Faculty and student cohort",
    alt: "Large formal group with seated officials in academic regalia and standing students in white shirts on the institute terrace.",
  },
] as const;

/** Diploma cards on Programs + Home — image per pathway. */
export const diplomaProgramVisuals = [
  {
    title: "Electrical & Computer Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2025/05/DB-Kiitec-43-scaled.jpg"),
    imageAlt: "Computer teaching laboratory at KIITEC.",
  },
  {
    title: "Electronics & Telecommunication Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2025/06/new-scaled.jpg"),
    imageAlt: "Electronics training benches with instruments.",
  },
  {
    title: "Electrical & Industrial Automation Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2025/05/DB-Kiitec-44-scaled.jpg"),
    imageAlt: "Industrial automation workshop with trainers.",
  },
  {
    title: "Electrical & Renewable Energy Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2025/05/DB-Kiitec-47-scaled.jpg"),
    imageAlt: "Renewable energy and electrical training lab.",
  },
  {
    title: "Artificial Intelligence & Machine Learning Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2025/05/DB-Kiitec-32-1024x684.jpg"),
    imageAlt: "Innovation lab with computers and 3D printer.",
  },
  {
    title: "Data Science & Analytics Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2024/08/IMG_6267-scaled.jpg"),
    imageAlt: "Students with a robotics project in the lab.",
  },
  {
    title: "Robotics & Drones Engineering",
    meta: "Long term · NACTE",
    imageSrc: u("2024/08/IMG_5947-scaled.jpg"),
    imageAlt: "Student engineering project on a workbench.",
  },
] as const;

export const shortCourseVisuals = [
  {
    title: "IT and Security System courses",
    meta: "Professional · ~1 year",
    imageSrc: u("2025/05/DB-Kiitec-32-1024x684.jpg"),
    imageAlt: "IT and networking lab equipment.",
  },
  {
    title: "Domestic and Electrical Installation",
    meta: "Short term · ~6 months",
    imageSrc: u("2025/05/DB-Kiitec-38-1024x684.jpg"),
    imageAlt: "Electrical and computer training lab.",
  },
  {
    title: "Basic Computer Applications",
    meta: "Short term · ~2 months",
    imageSrc: u("2024/08/IMG_6800-1024x683.jpg"),
    imageAlt: "Students in a computer classroom.",
  },
] as const;

/** Home feature cards — image + short label. */
export const homeFeaturePhotos = [
  {
    src: u("2025/05/DB-Kiitec-44-scaled.jpg"),
    title: "Hands-on labs",
    alt: "Automation workshop at KIITEC.",
  },
  {
    src: u("2025/05/afternoon.jpeg"),
    title: "Campus life",
    alt: "Students on the outdoor basketball court.",
  },
  {
    src: u("2024/11/DBKiitec-27-scaled.jpg"),
    title: "Graduation day",
    alt: "Graduates in academic dress at KIITEC.",
  },
] as const;

/** About page mosaic. */
export const aboutGalleryPhotos = [
  {
    src: u("2023/06/KIITEC-IMAGE-1.jpeg"),
    title: "Electronics lab mentoring",
    alt: "Instructor and students in light blue uniforms smiling while discussing equipment on shelves in an electronics laboratory.",
  },
  {
    src: u("2023/06/solar-panels.jpeg"),
    title: "Solar training arrays",
    alt: "Ground-mounted solar photovoltaic panels installed for renewable-energy teaching and demonstration at the institute.",
  },
  {
    src: u("2024/11/DBKiitec-184-scaled.jpg"),
    title: "NACTE graduation moment",
    alt: "Graduate in black gown receiving a framed National Council certificate on stage from an official in red academic dress under a tent.",
  },
  {
    src: u("2025/06/new-scaled.jpg"),
    title: "5G & telecoms practical bench",
    alt: "Students using a 5G technology training kit and an oscilloscope at a telecommunications and electronics workbench.",
  },
] as const;
