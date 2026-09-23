// ============================================================================
// CONTENU DU SITE — modifie uniquement ce fichier pour changer les textes,
// dates, liens, etc. Aucune connaissance de code nécessaire pour ça.
// Les lignes marquées "// TODO" sont encore à trancher.
// ============================================================================

export const profile = {
  name: "Léonard Court",
  tagline: "Robotics, Systems and Control student at ETH Zurich, building AI automation for regulated industries",
  intro:
    "M.Sc. student in Robotics, Systems and Control at ETH Zurich, following a B.Sc. in Mechanical Engineering at EPFL (with a study-abroad year at the University of Illinois Urbana-Champaign). Interested in control systems, robotics, and applied AI automation for real-world businesses.",
  availability: "Available from September 2027. Open to conversations before then.",
  location: "Zurich, Switzerland",
  schools: "ETH Zurich · EPFL",
  photoUrl: "/images/portrait-candidate.jpg", // TODO: photo d'action (en train de présenter) — fonctionne, mais un portrait posé de face type "headshot" (comme celui de Thibault) rendrait plus classique pour un hero de portfolio. À remplacer facilement ici si tu en as un.
  email: "lcourt@ethz.ch", // repris de ton CV — dis-moi si tu préfères en afficher un autre publiquement
  linkedin: "https://www.linkedin.com/in/l%C3%A9onard-court-285a44332/",
  github: "", // TODO: as-tu un GitHub actif à lier ?
  cvUrl: "/documents/Court_Leonard_CV.pdf",
};

export const areasOfFocus = [
  {
    title: "Robotics & Control",
    description:
      "Robot dynamics, optimal control, model predictive control, and simulation-to-hardware systems.",
  },
  {
    title: "Applied AI & Automation",
    description:
      "Building practical AI-driven automations (N8N) for businesses with real operational and regulatory constraints.",
  },
  {
    title: "Probabilistic Methods",
    description:
      "Probabilistic AI, dynamic programming and optimal control, computer vision for mobile robotics.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  date: string;
  description: string;
  tools: string[];
  image?: string;
  link?: string;
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
    tools: ["N8N", "AI automation", "Workflow design"],
    image: "/images/projects/deadal-ia.png",
  },
  {
    slug: "epfl-rocket-team",
    title: "EPFL Rocket Team — Firehorn 2025",
    category: "Aerospace · Mechanical Engineering",
    role: "Ground Station Subsystem Engineer",
    date: "Sep 2024 – Jul 2026",
    description:
      "Contributed to the mechanical design, prototyping, and testing of ground support components for competition-level rocketry. Developed CAD models and manufactured prototype parts (SolidWorks, 3D printing, CNC machining), and supported system integration across mechanical, electrical, and operational subsystems within a multidisciplinary team.",
    tools: ["SolidWorks", "3D printing", "CNC machining", "Systems integration"],
  },
  {
    slug: "the-academy",
    title: "The Academy",
    category: "Entrepreneurship · EdTech",
    role: "Founder & Director",
    date: "Jan 2021 – Jul 2023",
    description:
      "Founded and led an online academic support platform bringing together several thousand students, organizing peer-to-peer learning opportunities and student-led classes, and generating revenue through advertising partnerships.",
    tools: [],
  },
  {
    slug: "teaching-assistant",
    title: "Teaching Assistant",
    category: "Teaching",
    role: "TA — EPFL",
    date: "Sep 2024 – Jul 2025",
    description:
      "Supported a cohort of 500+ students across four course assignments — Physics: Mechanics (Prof. P. Müllhaupt), Physics: Thermodynamics (Prof. S. Bréchet & Prof. J. Genoud), and Information, Computation, Communication (Prof. O. Lévêque). Guided students through exercises, graded midterms, and coached on academic strategy.",
    tools: [],
  },
];

export const education = [
  {
    school: "ETH Zurich",
    date: "Sep 2026 – Aug 2028 (expected)",
    degree: "M.Sc. Robotics, Systems and Control",
    location: "Zurich, Switzerland",
    note: "",
  },
  {
    school: "University of Illinois Urbana-Champaign",
    date: "2025 – 2026",
    degree: "Study-abroad year, Mechanical Engineering",
    location: "Urbana-Champaign, Illinois",
    note: "GPA 4.0 / 4.0",
  },
  {
    school: "EPFL",
    date: "2023 – 2026",
    degree: "B.Sc. Mechanical Engineering",
    location: "Lausanne, Switzerland",
    note: "Graduated with an overall average of 5.51/6",
  },
];

export const coursework = [
  "Robot Dynamics",
  "Probabilistic Artificial Intelligence",
  "Model Predictive Control",
  "Dynamic Programming and Optimal Control",
  "Vision Algorithms for Mobile Robotics (UZH)",
];

export const capabilities = {
  methods: ["Control systems", "Optimal control", "Probabilistic modeling", "Optimization"],
  programming: ["Python", "C", "MATLAB"],
  systems: ["SolidWorks", "Fusion 360", "CATIA", "Abaqus", "N8N"],
  languages: ["French (native)", "English (C1)", "Spanish (B1)"],
};

export const contact = {
  heading: "Let's talk robotics, AI automation, or opportunities.",
  subtext:
    "Open to conversations about internships, robotics, control systems, and applied AI automation.",
};
