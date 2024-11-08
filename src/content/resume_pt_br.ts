const education: Education[] = [
  {
    title: "UNITAU - Taubaté, SP",
    description: "Análise e Desenvolvimento de Sistemas",
    startDate: "Janeiro 2023",
    endDate: "Dezembro 2025",
  },
]

const experiences: Experience[] =
  [
    {
      title: "Pesquisa Científica - Biopatologia Oral",
      description: "UNITAU, Taubaté, SP - 2024",
      bulletPoints: [
        "Análise de dados e geração de visualizações usando bibliotecas Python como Matplotlib para apoiar pesquisa acadêmica e tomada de decisões baseadas em dados.",
      ],
    },
    {
      title: "Soldado",
      description:
        "Exército Brasileiro, Pindamonhangaba, SP - Março 2022 - Janeiro 2023",
      bulletPoints: [
        "Responsável pela segurança e guarda das instalações militares.",
        "Colaboração em equipe para a execução de missões e tarefas.",
        "Controle rigoroso de acesso em pontos de controle militar.",
        "Reconhecido com um certificado de honra pelo desempenho exemplar.",
      ],
    },
  ]

const projects: ResumeProject[] =
  [
    {
      title: "Clínica Integrada Amaral Haga (Sistema de Gestão de Clínica)",
      description: "PHP, Laravel, Livewire, Alpine.js, MySQL",
      link: "https://github.com/diegorezm/clinica",
      bulletPoints: [
        "Desenvolvimento de um sistema backend robusto com Laravel para gestão de registros de pacientes, médicos e consultas.",
        "Funcionalidade completa de CRUD, permitindo criação, edição, visualização e exclusão eficiente de registros clínicos.",
        "Verificação automática da disponibilidade de médicos, facilitando o agendamento e organização de consultas.",
        "Interface de usuário interativa e responsiva construída com Alpine.js e Livewire.",
        "Integração com o banco de dados MySQL para armazenamento seguro e estruturado de informações.",
        "Implantação completa no Hostinger, garantindo estabilidade e acessibilidade do sistema online.",
        "Arquitetura modular, permitindo fácil expansão e personalização para atender às demandas específicas da clínica.",
      ],
    },
  ]

const certifications: Certification[] =
  [
    {
      href: "https://cert.efset.org/KdGLiQ",
      label: "Certificado de Proficiência em Inglês - EF SET",
    },
    {
      href: "https://udemy-certificate.s3.amazonaws.com/image/UC-6fc7d4af-701d-446a-b69b-8e167018a749.jpg?v=1706800581000",
      label: "JavaScript e TypeScript do Básico ao Avançado - Udemy",
    },
    {
      href: "https://udemy-certificate.s3.amazonaws.com/image/UC-7074fe91-0541-4bfd-bc58-af41912a6361.jpg?v=1703254492000",
      label: "Estruturas de Dados e Algoritmos - Udemy",
    },
    {
      href: "https://www.cursoemvideo.com/validacao-de-certificado/?codigo=798CE-654D-9",
      label: "Excel 40 Horas - Curso em Vídeo",
    },
  ]

const skills: Skill[] =
  [
    {
      name: "Linguagens de Programação",
      items: ["Java", "JavaScript/TypeScript", "Python", "PHP"],
    },
    {
      name: "Frameworks",
      items: ["Spring Boot", "Next.js", "React", "Svelte", "Laravel"],
    },
    {
      name: "Bancos de Dados",
      items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    },
    {
      name: "Ferramentas",
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

export const RESUME_PT_BR = {
  education,
  experiences,
  projects,
  certifications,
  skills,
}
