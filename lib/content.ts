// ============================================================================
// CONTENU DU SITE — modifie uniquement ce fichier pour changer les textes,
// dates, liens, etc. Aucune connaissance de code nécessaire pour ça.
// Règle : garde les guillemets "..." et les virgules en fin de ligne.
// ============================================================================

export const profile = {
  name: "Léonard Court",
  initials: "LC",
  eyebrow: "ETH Zurich · EPFL",
  tagline: "Robot Learning, Reinforcement Learning & Computer Vision",
  intro: [
    "M.Sc. student in Robotics, Systems and Control at ETH Zurich, following a B.Sc. in Mechanical Engineering at EPFL and a study-abroad year at the University of Illinois Urbana-Champaign.",
    "I am focusing on robot learning and computer vision: teaching robots to act from data through imitation and reinforcement learning, and to perceive their environment, with rigorous evaluation on situations they have never seen.",
  ],
  availability: "Available from September 2027. Open to conversations before then.",
  location: "Zurich, Switzerland",
  photoUrl: "/images/portrait-candidate.jpg",
  photoAlt: "Léonard Court presenting",
  email: "lcourt@ethz.ch",
  linkedin: "https://www.linkedin.com/in/l%C3%A9onard-court-285a44332/",
  github: "https://github.com/leonardcrt", // vide = le bouton GitHub n'apparaît pas
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
  heading: "The technical areas connecting my projects and studies.",
  intro:
    "I am building toward robot learning and computer vision, on top of a foundation in control and mechanical engineering: learned behavior is only useful if it stays reliable on hardware and on unseen situations.",
  areas: [
    {
      title: "Robot Learning & Reinforcement Learning",
      description:
        "Imitation learning (behavior cloning, DAgger), reinforcement learning (PPO), policy architectures, and evaluation on unseen environments.",
    },
    {
      title: "Computer Vision for Robotics",
      description:
        "Visual perception for mobile robots: feature-based vision, camera geometry, and visual odometry, studied through Vision Algorithms for Mobile Robotics.",
    },
    {
      title: "Control & Dynamics",
      description:
        "Robot dynamics, model predictive control, and optimal control, used both on their own and as strong baselines and experts for learning-based methods.",
    },
  ],
};

// ---------------------------------------------------------------------------
// PROJET MIS EN AVANT
// ---------------------------------------------------------------------------
export const featured = {
  eyebrow: "Featured project",
  title: "Learning-Based Robot Navigation",
  meta: ["Personal project (solo)", "2026", "PyTorch · Stable-Baselines3 · ROS 2"],
  description:
    "A simulated two-wheeled robot must reach a goal while avoiding obstacles. I compared three ways of producing its behavior on the same 500 unseen test maps: a hand-written controller, a neural network that imitates it (behavior cloning + DAgger), and a network trained by reinforcement learning (PPO) that never sees the expert.",
  video: "/videos/showcase.mp4",
  poster: "/videos/showcase_poster.png",
  mediaCaption: "Training progress and expert vs imitation vs reinforcement learning on an unseen map",
  stats: [
    { value: "97%", label: "PPO success rate on 500 unseen test maps, matching the expert without any demonstrations" },
    { value: "34%", label: "faster than the hand-written expert on average" },
    { value: "93% → 96%", label: "imitation-learning success after DAgger (collisions cut from 3% to 0.2%)" },
    { value: "93% vs 33%", label: "success of a permutation-invariant network vs a standard MLP of similar size" },
  ],
  builtTitle: "What I built",
  built: [
    "A 2D navigation environment (differential drive, collision checking, Gymnasium API) with guaranteed-solvable maps and disjoint train / val / test sets.",
    "A hand-written expert (Vector Field Histogram, 97% success, 0 collisions), after showing that potential fields plateau at 76% because of local minima.",
    "A permutation-invariant DeepSets policy in PyTorch, shared by imitation and RL so the comparison isolates the learning method.",
    "BC and DAgger pipelines; PPO with custom features and reward shaping.",
    "An evaluation protocol with confidence intervals, ablations, learning-progress videos and an interactive simulator.",
    "A ROS 2 closed-loop policy node, packaged with Docker, tests and CI.",
  ],
  learnedTitle: "What I learned",
  learned: [
    "Low loss is not good behavior: the MLP matched DeepSets' validation loss but failed 67% of the time once its own actions fed back into the next state.",
    "Imitation learning suffers from compounding errors; DAgger fixes them by having the expert correct the states the learner actually visits.",
    "Inductive bias matters as much as the algorithm: encoding obstacles as a set rather than a list tripled the success rate.",
    "A time penalty made PPO 34% faster, but riskier (2.6% collisions).",
    "Understand classical limits (e.g. local minima) before replacing them.",
    "Rigorous evaluation: disjoint test sets, confidence intervals, ablations, and one observation function shared by training, evaluation and ROS 2 deployment.",
  ],
  tools: ["PyTorch", "Stable-Baselines3", "ROS 2", "Docker", "Gymnasium"],
  link: { label: "View code on GitHub", url: "https://github.com/leonardcrt/robot-learn" },
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
  image: string; // image, ou image d'attente (poster) si une vidéo est fournie
  video?: string; // optionnel : chemin d'une vidéo .mp4 muette qui tourne en boucle
  imageCaption: string;
  highlightsTitle?: string;
  highlights?: string[];
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    slug: "robot-learning",
    title: "Learning-Based Robot Navigation",
    category: "Robotics · Machine Learning · Reinforcement Learning",
    role: "Personal project (solo)",
    date: "2026",
    description:
      "A simulated two-wheeled robot learns to reach a goal while avoiding obstacles. I compared a hand-written controller, imitation learning (BC + DAgger) and reinforcement learning (PPO) on 500 unseen test maps.",
    tools: ["PyTorch", "Stable-Baselines3", "ROS 2", "Docker", "Gymnasium"],
    image: "/videos/showcase_poster.png",
    video: "/videos/showcase.mp4",
    imageCaption: "Expert vs imitation vs reinforcement learning",
    link: { label: "View code on GitHub", url: "https://github.com/leonardcrt/robot-learn" },
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
    slug: "deadal-ia",
    title: "Deadal.IA",
    category: "Side project · Applied AI · Automation",
    role: "Founder",
    date: "2026 – present",
    description:
      "Side project building AI automations in N8N for Swiss companies in regulated technical-inspection industries, including a pipeline that monitors public tenders on simap.ch, ranks them against a company profile with an LLM, and drafts an application folder for each relevant one.",
    tools: ["N8N", "LLM workflows", "AI automation", "Product development"],
    image: "/images/projects/deadal-ia.png",
    imageCaption: "Tender-monitoring workflow in N8N",
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
  fullCourseworkTitle?: string;
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
      { name: "Probabilistic Artificial Intelligence" },
      { name: "Vision Algorithms for Mobile Robotics (UZH)" },
      { name: "Robot Dynamics" },
      { name: "Model Predictive Control" },
      { name: "Dynamic Programming and Optimal Control" },
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
    ],
    coursesTitle: "Selected quantitative coursework",
    courses: [
      { name: "Dynamical Systems", grade: "6.00 / 6.0" },
      { name: "Numerical Analysis", grade: "6.00 / 6.0" },
      { name: "Analysis III", grade: "6.00 / 6.0" },
      { name: "Probability and Statistics", grade: "5.75 / 6.0" },
      { name: "Programming for Engineers", grade: "5.75 / 6.0" },
      { name: "Electrical Engineering Science & Technology", grade: "5.75 / 6.0" },
      { name: "Analysis IV", grade: "5.50 / 6.0" },
    ],
    gradingNote: "EPFL grading scale: 6.0 is the highest possible grade; 4.0 is the passing grade.",
    fullCourseworkTitle: "other coursework",
    fullCoursework: [
      "Analysis I & II",
      "Linear Algebra",
      "Information, Computation, Communication",
      "General Physics: Mechanics",
      "General Physics: Thermodynamics",
      "General Physics: Electromagnetism",
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
// BACKGROUND — EXPERIENCE (dans l'ordre d'affichage)
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
    org: "EPFL",
    date: "Sep 2024 – Jul 2025",
    role: "Teaching Assistant — Physics, Thermodynamics & Computation",
    tag: "Teaching",
    description:
      "Supported a cohort of 500+ students across four course assignments: Physics: Mechanics (Prof. P. Müllhaupt), Physics: Thermodynamics (Prof. S. Bréchet and Prof. J. Genoud), and Information, Computation, Communication (Prof. O. Lévêque). Led exercise sessions, graded midterms, and gave feedback.",
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
  intro: "Tools and methods I work with across robot learning, control, engineering, and software.",
  groups: [
    {
      title: "Methods",
      items: [
        "Reinforcement learning (PPO)",
        "Imitation learning (BC, DAgger)",
        "Control systems & optimal control",
        "Probabilistic modeling",
        "Numerical methods",
      ],
    },
    {
      title: "Programming",
      items: ["Python", "PyTorch", "ROS 2", "C", "MATLAB"],
    },
    {
      title: "Evaluation & tooling",
      items: [
        "Stable-Baselines3 & Gymnasium",
        "Docker, unit tests & CI",
        "Held-out test sets",
        "Confidence intervals & ablations",
        "N8N & LLM workflows",
      ],
    },
    {
      title: "Engineering",
      items: ["SolidWorks", "Fusion 360", "CATIA", "Abaqus", "3D printing & CNC machining"],
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
    "First semester of the M.Sc. Robotics, Systems and Control at ETH Zurich, with coursework in probabilistic AI, vision for mobile robots, and optimal control. Graduating in 2028.",
    "Looking for internships in robot learning, reinforcement learning, and computer vision from September 2027.",
  ],
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's build robots that learn and hold up in the real world.",
  subtext:
    "Open to conversations and opportunities in robot learning, reinforcement learning, computer vision, and control.",
};
