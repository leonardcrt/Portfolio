// ============================================================================
// CONTENU DU SITE — modifie uniquement ce fichier pour changer les textes,
// dates, liens, etc. Aucune connaissance de code nécessaire pour ça.
// Règle : garde les guillemets "..." et les virgules en fin de ligne.
// ============================================================================

export const profile = {
  name: "Léonard Court",
  initials: "LC",
  eyebrow: "ETH Zurich · EPFL",
  tagline: "Robotics, Control & Applied AI Automation",
  intro: [
    "M.Sc. student in Robotics, Systems and Control at ETH Zurich, following a B.Sc. in Mechanical Engineering at EPFL and a study-abroad year at the University of Illinois Urbana-Champaign.",
    "My interests lie at the intersection of control, robotics, and applied AI, with a focus on systems that hold up outside the classroom: on hardware, and inside real businesses.",
  ],
  availability: "Available from September 2027. Open to conversations before then.",
  location: "Zurich, Switzerland",
  photoUrl: "/images/portrait-candidate.jpg",
  photoAlt: "Léonard Court presenting",
  email: "lcourt@ethz.ch",
  linkedin: "https://www.linkedin.com/in/l%C3%A9onard-court-285a44332/",
  github: "", // vide = le bouton GitHub n'apparaît pas
  cvUrl: "/documents/Court_Leonard_CV.pdf",
};

// Liens de la barre de navigation (l'id doit correspondre à une section)
export const navLinks = [
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "projects", label: "Projects" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// AREAS OF FOCUS
// ---------------------------------------------------------------------------
export const focus = {
  eyebrow: "Areas of focus",
  heading: "The technical areas connecting my projects and experience.",
  intro:
    "My work spans control, robotics, mechanical design, and AI-driven automation, with a focus on systems that stay reliable once they leave the simulator or the slide deck.",
  areas: [
    {
      title: "Control & Optimal Decision-Making",
      description:
        "Dynamical systems, robot dynamics, model predictive control, and dynamic programming for optimal control.",
    },
    {
      title: "Robotics & Mechanical Systems",
      description:
        "Mechanical design, prototyping, and system integration, from CAD and manufacturing to testing on real hardware.",
    },
    {
      title: "Applied AI & Automation",
      description:
        "Probabilistic AI and LLM-based automation pipelines that turn manual, document-heavy workflows into reliable systems.",
    },
  ],
};

// ---------------------------------------------------------------------------
// PROJET MIS EN AVANT
// ---------------------------------------------------------------------------
export const featured = {
  eyebrow: "Featured project",
  title: "Deadal.IA — AI Tender-Monitoring and Proposal Pipeline",
  meta: ["Deadal.IA", "Founder", "2026 – present"],
  description:
    "An end-to-end automation built in N8N that monitors Swiss public procurement notices on simap.ch, ranks each tender against a company's profile with an LLM, and prepares a structured application folder for every relevant opportunity.",
  scopeTitle: "Pipeline scope",
  scope: [
    "Automated collection of tenders from simap.ch",
    "Normalization and de-duplication against already-processed notices",
    "LLM relevance triage (Claude) with a strict output schema: relevant or not, score, rationale",
    "Ranked summary report exported as PDF",
    "Per-tender loop: extraction, independent review, cover letter, quality check, feasibility",
    "Delivery into a structured Google Drive folder per tender",
  ],
  contributionsTitle: "What I built",
  contributions: [
    "Designed the full workflow architecture in N8N, from monitoring trigger to Drive delivery.",
    "Wrote the triage logic comparing the requested trade with the company profile, with a strict schema so every verdict is machine-readable.",
    "Added a second-pass review and a bounded rewrite step (one retry max) so generated documents are checked before delivery.",
  ],
  image: "/images/projects/deadal-ia.png",
  imageCaption: "N8N workflow (excerpt)",
  pipelineLabel: "simap.ch · LLM triage",
  pipeline: [
    "Tender monitoring",
    "Normalization",
    "LLM triage",
    "Ranked report",
    "Proposal drafting",
    "Drive delivery",
  ],
};

// ---------------------------------------------------------------------------
// PROJETS (carrousel)
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  date: string;
  recognition?: string;
  description: string;
  tools: string[];
  image: string;
  imageCaption: string;
};

export const projects: Project[] = [
  {
    slug: "deadal-ia",
    title: "Deadal.IA",
    category: "Applied AI · Automation · Entrepreneurship",
    role: "Founder",
    date: "2026 – present",
    description:
      "Founded an AI consulting and automation studio building N8N-based automations for Swiss companies in regulated technical-inspection industries (electrical inspection NIV/OIBT, elevator maintenance) across French-speaking Switzerland and the Zurich area.",
    tools: ["N8N", "LLM workflows", "Claude", "Google Workspace"],
    image: "/images/projects/deadal-ia.png",
    imageCaption: "Tender-monitoring workflow",
  },
  {
    slug: "epfl-rocket-team",
    title: "EPFL Rocket Team — Firehorn",
    category: "Aerospace · Mechanical Engineering",
    role: "Ground Station Subsystem Engineer",
    date: "Sep 2024 – Jul 2026",
    description:
      "Contributed to the mechanical design, prototyping, and testing of ground support components for competition-level rocketry. Developed CAD models, manufactured prototype parts, and supported integration across mechanical, electrical, and operational subsystems.",
    tools: ["SolidWorks", "3D printing", "CNC machining", "Systems integration"],
    image: "/images/projects/rocket-team.jpg",
    imageCaption: "Firehorn team and rocket",
  },
  {
    slug: "the-academy",
    title: "The Academy",
    category: "Entrepreneurship · EdTech",
    role: "Founder & Director",
    date: "Jan 2021 – Jul 2023",
    description:
      "Created and led an online academic support platform bringing together several thousand students, organizing peer-to-peer learning and student-led classes, and generating revenue through advertising partnerships.",
    tools: ["Community building", "Partnerships", "Operations"],
    image: "/images/projects/the-academy.png",
    imageCaption: "Peer-to-peer learning platform",
  },
];

// ---------------------------------------------------------------------------
// BACKGROUND — EDUCATION
// ---------------------------------------------------------------------------
export type Course = { name: string; grade?: string };

export type EducationEntry = {
  school: string;
  date: string;
  degree: string;
  location: string;
  status?: string;
  note?: string;
  activitiesTitle?: string;
  activities?: string[];
  coursesTitle?: string;
  courses?: Course[];
  gradingNote?: string;
  fullCoursework?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "ETH Zurich",
    date: "Sep 2026 – Aug 2028 (expected)",
    degree: "M.Sc. Robotics, Systems and Control",
    location: "Zurich, Switzerland",
    status: "Current graduate student",
    coursesTitle: "Current coursework (Fall 2026)",
    courses: [
      { name: "Robot Dynamics" },
      { name: "Probabilistic Artificial Intelligence" },
      { name: "Model Predictive Control" },
      { name: "Dynamic Programming and Optimal Control" },
      { name: "Vision Algorithms for Mobile Robotics (UZH)" },
    ],
  },
  {
    school: "University of Illinois Urbana-Champaign",
    date: "Aug 2025 – May 2026",
    degree: "Study-abroad year, Mechanical Engineering (Grainger College of Engineering)",
    location: "Urbana-Champaign, Illinois",
    note: "Credited as the third year of the EPFL B.Sc.",
    coursesTitle: "Selected coursework",
    courses: [
      { name: "Applied Machine Learning" },
      { name: "Control Systems" },
      { name: "Intermediate Dynamics" },
      { name: "Dynamics of Mechanical Systems" },
      { name: "Intermediate Solid Mechanics" },
      { name: "Finite Element Analysis" },
      { name: "Technology Innovation & Strategy" },
    ],
  },
  {
    school: "École Polytechnique Fédérale de Lausanne (EPFL)",
    date: "Sep 2023 – Jul 2026",
    degree: "B.Sc. Mechanical Engineering",
    location: "Lausanne, Switzerland",
    note: "Overall average 5.51 / 6.0",
    activitiesTitle: "Activities & leadership",
    activities: [
      "Ground Station Engineer, EPFL Rocket Team",
      "Teaching Assistant (4 courses)",
      "First-Year Student Coach",
      "National-level gymnast",
    ],
    coursesTitle: "Selected quantitative coursework",
    courses: [
      { name: "Dynamical Systems", grade: "6.00 / 6.0" },
      { name: "Numerical Analysis", grade: "6.00 / 6.0" },
      { name: "Analysis III", grade: "6.00 / 6.0" },
      { name: "Mechanics of Structures", grade: "6.00 / 6.0" },
      { name: "Probability and Statistics", grade: "5.75 / 6.0" },
      { name: "Programming for Engineers", grade: "5.75 / 6.0" },
      { name: "Electrical Engineering Science & Technology", grade: "5.75 / 6.0" },
    ],
    gradingNote: "EPFL grading scale: 6.0 is the highest possible grade; 4.0 is the passing grade.",
    fullCoursework: [
      "Analysis I, II, III, IV",
      "Linear Algebra",
      "Numerical Analysis",
      "Probability and Statistics",
      "Dynamical Systems",
      "Programming for Engineers",
      "Information, Computation, Communication",
      "General Physics: Mechanics",
      "General Physics: Thermodynamics",
      "General Physics: Electromagnetism",
      "Electrical Engineering Science & Technology",
      "Mechanics of Structures",
      "Introduction to Structural Mechanics",
      "Mechanical Systems",
      "Fluid Mechanics",
      "Thermodynamics and Energetics I",
      "Mechanical Behaviour of Materials",
      "Materials: from Chemistry to Properties",
      "Mechanical Construction I & II",
      "Industrial Production Processes",
      "Sustainable Products and Supply Chains",
    ],
  },
];

// ---------------------------------------------------------------------------
// BACKGROUND — EXPERIENCE
// ---------------------------------------------------------------------------
export type ExperienceEntry = {
  org: string;
  date: string;
  role: string;
  tag: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    org: "Deadal.IA",
    date: "2026 – present",
    role: "Founder",
    tag: "Entrepreneurship",
    description:
      "Building AI consulting and N8N automation offerings for Swiss companies in regulated technical-inspection industries, including an end-to-end public-tender monitoring and proposal pipeline.",
  },
  {
    org: "EPFL Rocket Team",
    date: "Sep 2024 – Jul 2026",
    role: "Ground Station Subsystem Engineer — Firehorn",
    tag: "Engineering",
    description:
      "Mechanical design, prototyping, and testing of ground support components for competition-level rocketry; CAD, 3D printing, CNC machining, and cross-subsystem integration.",
  },
  {
    org: "EPFL",
    date: "Sep 2024 – Jul 2025",
    role: "Teaching Assistant — Physics, Thermodynamics & Computation",
    tag: "Teaching",
    description:
      "Supported a cohort of 500+ students across four course assignments: Physics: Mechanics (Prof. P. Müllhaupt), Physics: Thermodynamics (Prof. S. Bréchet and Prof. J. Genoud), and Information, Computation, Communication (Prof. O. Lévêque). Led exercise sessions, graded midterms, and gave feedback.",
  },
  {
    org: "EPFL Coaching",
    date: "Sep 2024 – Jul 2025",
    role: "First-Year Student Coach",
    tag: "Leadership",
    description:
      "Mentored first-year students through their integration at EPFL, sharing study methods and strategies for the foundation year.",
  },
  {
    org: "The Academy",
    date: "Jan 2021 – Jul 2023",
    role: "Founder & Director",
    tag: "Entrepreneurship",
    description:
      "Created and led an online academic support platform bringing together several thousand students, with revenue generated through advertising partnerships.",
  },
];

// ---------------------------------------------------------------------------
// CAPABILITIES
// ---------------------------------------------------------------------------
export const capabilities = {
  eyebrow: "Capabilities",
  heading: "Technical breadth",
  intro: "Tools and methods I work with across control, engineering, software, and automation.",
  groups: [
    {
      title: "Methods",
      items: [
        "Control systems",
        "Optimal control & dynamic programming",
        "Probabilistic modeling",
        "Numerical methods",
        "Finite element analysis",
      ],
    },
    {
      title: "Programming",
      items: ["Python", "C", "MATLAB"],
    },
    {
      title: "Engineering",
      items: ["SolidWorks", "Fusion 360", "CATIA", "Abaqus", "3D printing & CNC machining"],
    },
    {
      title: "Automation",
      items: ["N8N workflows", "LLM pipelines", "Structured AI outputs", "Web data collection", "Google Workspace integration"],
    },
  ],
  languages: "French (native) · English (C1) · Spanish (B1)",
};

// ---------------------------------------------------------------------------
// CURRENTLY + CONTACT
// ---------------------------------------------------------------------------
export const currently = {
  eyebrow: "Status",
  heading: "Currently",
  lines: [
    "First semester of the M.Sc. Robotics, Systems and Control at ETH Zurich. Graduating in 2028.",
    "Building Deadal.IA alongside my studies. Open to internships and collaborations in robotics, control, and applied AI from September 2027.",
  ],
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's build systems that work in the real world.",
  subtext:
    "Open to conversations and opportunities in robotics, control systems, applied AI, and automation.",
};
