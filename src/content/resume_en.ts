const education: Education[] = [
  {
    title: "UNITAU - Taubaté, SP",
    description: "Systems Analysis and Development",
    startDate: "January 2023",
    endDate: "December 2025",
  },
]

const experiences: Experience[] =
  [
    {
      title: "Scientific Research - Oral Biopatology",
      description: "UNITAU, Taubaté, SP - 2024",
      bulletPoints: [
        "Data analysis and data visualization using Python libraries such as Matplotlib for supporting academic research and decision-making based on data.",
      ],
    },
    {
      title: "Soldier",
      description:
        "Brazilian Army, Pindamonhangaba, SP - March 2022 - January 2023",
      bulletPoints: [
        "Responsible for security and guarding military installations.",
        "Collaboration in team for execution of missions and tasks.",
        "Strict control of access to military control points.",
        "Recognized with a certificate of honor for exemplary performance.",
      ],
    },
  ]

const projects: ResumeProject[] = [
  {
    title: "Clinica Integrada Amaral Haga (Clinic Management System)",
    description: "PHP, Laravel, Livewire, Alpine.js, MySQL",
    link: "https://github.com/diegorezm/clinica",
    bulletPoints: [
      "Developed a robust backend system with Laravel for managing patient, doctor, and appointment records.",
      "Complete CRUD functionality, allowing efficient creation, editing, viewing, and deletion of clinical records.",
      "Automatic verification of doctor availability, facilitating scheduling and organization of appointments.",
      "Interactive and responsive user interface built with Alpine.js and Livewire.",
      "Integration with MySQL database for secure and structured information storage.",
      "Full deployment on Hostinger, ensuring stability and online system accessibility.",
      "Modular architecture, enabling easy expansion and customization to meet specific clinic demands.",
    ],
  },
];

const certifications: Certification[] = [
  {
    href: "https://cert.efset.org/KdGLiQ",
    label: "English Proficiency Certificate - EF SET",
  },
  {
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-6fc7d4af-701d-446a-b69b-8e167018a749.jpg?v=1706800581000",
    label: "JavaScript and TypeScript from Basic to Advanced - Udemy",
  },
  {
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-7074fe91-0541-4bfd-bc58-af41912a6361.jpg?v=1703254492000",
    label: "Data Structures and Algorithms - Udemy",
  },
  {
    href: "https://www.cursoemvideo.com/validacao-de-certificado/?codigo=798CE-654D-9",
    label: "Excel 40 Hours - Curso em Vídeo",
  },
]

const skills: Skill[] = [
  {
    name: "Programming Languages",
    items: ["Java", "JavaScript/TypeScript", "Python", "PHP"],
  },
  {
    name: "Frameworks",
    items: ["Spring Boot", "Next.js", "React", "Svelte", "Laravel"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    name: "Tools",
    items: [
      "Git",
      "Docker",
      "Node.js",
      "Tailwind CSS",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    name: "Markup",
    items: ["HTML", "CSS", "Markdown"],
  },
]

export const RESUME_EN = {
  education,
  experiences,
  projects,
  certifications,
  skills,
}

