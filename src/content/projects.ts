import type {Project} from "../types/project";
import {genId} from "../utils/gen-id";

const projectsContent: Project[] = [
  {
    id: genId(),
    name: "Convenience Store",
    sourceCode: "https://github.com/diegorezm/convenience.store.api",
    description:
      "Full-stack application consisting of a Spring Boot API that interacts with a SQL database. It includes authentication, tests using JUnit and MockMvc, and utilizes Docker for easy deployment. The frontend is built with Next.js",
    tech: ["java", "docker", "spring boot", "nextjs", "typescript", "tailwind"],
    details: "https://www.youtube.com/watch?v=Qd2bRPsiaZE",
    image: "https://i.ytimg.com/vi/Qd2bRPsiaZE/maxresdefault.jpg",
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
      "https://raw.githubusercontent.com/diegorezm/start_page/refs/heads/main/public/showcase.png"
  },
  {
    id: genId(),
    name: "WallpaperCL",
    sourceCode: "https://github.com/diegorezm/wallpapercl",
    description:
      "WallpaperCL is a lightweight wallpaper management application built with Rust, TypeScript, and React, powered by Tauri. It’s designed specifically for tiling window managers.",
    tech: ["rust", "typescript", "react", "tailwind"],
    details: "https://www.youtube.com/watch?v=n_2mIcaMpBM",
    image:
      "https://raw.githubusercontent.com/diegorezm/wallpapercl/main/showcase.png",
  },
];

export default projectsContent;
