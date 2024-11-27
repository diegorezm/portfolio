import type {Project} from "../types/project";
import {genId} from "../utils/gen-id";

const projectsContent: Project[] = [
  {
    id: genId(),
    name: "Convenience Store",
    sourceCode: "https://github.com/diegorezm/convenience.store.api",
    description:
      "Convenience store built with Spring Boot as the backend and Next.js as the frontend. It allows users to manage their products, create transactions and generate pdfs of those transactions.",
    tech: ["java", "docker", "spring boot", "nextjs", "typescript", "tailwind"],
    details: "https://www.youtube.com/watch?v=Qd2bRPsiaZE",
    image: "/convenience-store.jpg",
  },
  {
    id: genId(),
    name: "Start page",
    sourceCode: "https://github.com/diegorezm/start_page",

    description:
      "A customizable browser start page built with nextjs and TypeScript. Users can manage bookmarks, switch themes, and change the background image for a personalized experience.",
    tech: ["typescript", "nextjs", "tailwind"],
    details: "https://diegorezm-start-page.netlify.app/",

    image:
      "/start-page.png"
  },
  {
    id: genId(),
    name: "Clinic",
    sourceCode: "https://github.com/diegorezm/clinica",
    description:
      "A freelance project for managing patients, doctors, and appointments, featuring scheduling, backups, and more. Built with Laravel and Livewire for a smooth user experience.",
    tech: ["php", "laravel", "livewire", "alpinejs"],
    details: "https://www.youtube.com/watch?v=ZEDnGtRIqUo",
    image:
      "/clinic.png"
  },
];

export default projectsContent;
