import fs from 'node:fs/promises'
import path from 'node:path'

const FONT_DIR = "./font";
const IMAGES_DIR = "./images";
const ICONS_DIR = "./icons";

/**
 * @typedef {Object} Project
 * @property {string} name - The name of the project.
 * @property {string} sourceCode - A URL or reference to the project's source code.
 * @property {string} description - A brief description of the project.
 * @property {string[]} tech - A list of technologies used in the project.
 * @property {string} details - Detailed information about the project.
 * @property {string} image - A URL to an image representing the project.
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    name: "Convenience Store",
    sourceCode: "https://github.com/diegorezm/convenience.store.api",
    description:
      "Convenience store built with Spring Boot as the backend and Next.js as the frontend. It allows users to manage their products, create transactions and generate pdfs of those transactions.",
    tech: ["java", "docker", "spring boot", "nextjs", "typescript", "tailwind"],
    details: "https://www.youtube.com/watch?v=Qd2bRPsiaZE",
    image: "/convenience-store.jpg",
  },
  {
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
    name: "Clinic",
    sourceCode: "https://github.com/diegorezm/clinica",
    description:
      "A freelance project for managing patients, doctors, and appointments, featuring scheduling, backups, and more. Built with Laravel and Livewire for a smooth user experience.",
    tech: ["php", "laravel", "livewire", "alpinejs"],
    details: "https://www.youtube.com/watch?v=ZEDnGtRIqUo",
    image:
      "/clinic.jpeg"
  },
];


/**
 * @param {Project} project - The project data
 * @returns {String}
 */
function gen_project_markup(project) {
  return `
    <li class="project-card">
          <h2 class="project-card-title">${project.name}</h2>
          <img src="/images/projects/${project.image}" alt='${project.name} showcase' class="project-card-image">
          <p class="project-card-desc">
            ${project.description}
          </p>
          <div class="flex gap-4">
            <a class="flex items-center group btn btn-outline btn-sm gap-2" href="${project.sourceCode}" target="_blank">
              <img src="/icons/github-dark.svg" alt="github icon"
                class="w-6 group-hover:hidden transition-opacity duration-300">
              <img src="/icons/github.svg" alt="github icon"
                class="hidden w-6 group-hover:block transition-opacity duration-300">
            </a>
            <a class="btn btn-ghost btn-sm" href="${project.details}" target="_blank">
              <img src="/icons/info.svg" alt="github icon" class="w-6">
            </a>
          </div>
        </li>
  `
}

/**
 * Recursively copies a directory and its contents to a new location.
 * @param {string} source - The path of the source directory.
 * @param {string} destination - The path of the destination directory.
 */
async function copy_dir(source, destination) {
  // Ensure the source directory exists
  const items = await fs.readdir(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    const stats = await fs.stat(sourcePath);

    if (stats.isDirectory()) {
      // Recursively copy subdirectories
      copy_dir(sourcePath, destinationPath);
    } else if (stats.isFile()) {
      // Copy files
      await fs.cp(sourcePath, destinationPath);
    }
  }
}

/**
 * Generate the html
 * @param {String} html - The html as text
*/
async function build(html) {
  await fs.rm("out", {
    recursive: true,
    force: true
  })
  await fs.mkdir("out")
  await copy_dir(ICONS_DIR, "out/icons")
  await copy_dir(IMAGES_DIR, "out/images")
  await copy_dir(FONT_DIR, "out/font")
  const markup = [];
  PROJECTS.forEach((p) => {
    const m = gen_project_markup(p)
    markup.push(m)
  })
  const replaced = html.replace("{projects}", markup.join(" "))
  await fs.writeFile("out/index.html", replaced)
}

(async () => {
  const html = (await fs.readFile('index.html')).toString();
  await build(html);
})();
