<script>
  import ProjectListDesktop from "$lib/components/project_list_desktop.svelte";
  import ProjectListMobile from "$lib/components/project_list_mobile.svelte";
  import Section from "$lib/components/section.svelte";

  import vibeShowcase from "$lib/assets/projects/vibe.png";
  import elxGistShowcase from "$lib/assets/projects/elx_gist.jpeg";

  /** @type {App.Project[]} */
  const projects = [
    {
      title: "Vibe",
      description:
        "Criador de sites feito com TypeScript, Node.js e TanStack Start. O usuário interage com um chatbot que gera e modifica o código de um projeto em Next.js conforme as instruções recebidas.",
      sourceCode: "https://github.com/diegorezm/vibe",
      showcaseImage: vibeShowcase,
      showcaseLink:
        "https://www.linkedin.com/posts/diegorezm_ai-ia-desenvolvimento-activity-7346543173751484418-xX1n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEE98H8BRXB9pIqIEKScL4bMXXlHtXpWqTs",
    },
    {
      title: "DBlockchain",
      description:
        "Aplicação em Go que simula uma blockchain descentralizada, permitindo criar carteiras, enviar moedas e minerar blocos com proof‑of‑work.",
      sourceCode: "https://github.com/diegorezm/DBlockchain",
      showcaseLink: "https://youtu.be/Yc0siGAoukg",
    },
    {
      title: "Lox Interpreter",
      description:
        "Implementação da linguagem Lox em Zig, inspirada no livro Crafting Interpreters.",
      sourceCode: "https://github.com/diegorezm/lox-interpreter",
      showcaseLink: "https://youtu.be/42TNbk-Zqk0",
    },
    {
      title: "Github Gist",
      description:
        "Clone do GitHub Gist feito em Elixir com o framework Phoenix.",
      sourceCode: "https://github.com/diegorezm/elx_gist",
      showcaseLink: "https://youtu.be/nMKj-lfwp8Y?si=BmJzTeWPhIjkw2kV",
      showcaseImage: elxGistShowcase,
    },
  ];

  /** @type {string|null} */
  let openProject = null;

  function randomPerms() {
    const perms = ["drwxr-xr-x", "drwxr-xr--", "drwxrwxr-x"];
    return perms[Math.floor(Math.random() * perms.length)];
  }

  function randomDetails() {
    const days = [7, 10, 14, 17, 18, 19];
    const months = ["jan", "fev", "mar", "abr", "mai", "jun"];
    const hours = ["10:12", "14:25", "19:09", "20:50", "16:06"];
    return `${days[Math.floor(Math.random() * days.length)]} ${
      months[Math.floor(Math.random() * months.length)]
    } ${hours[Math.floor(Math.random() * hours.length)]}`;
  }
</script>

<Section>
  <h1
    class="text-4xl font-bold before:content-['$'] before:text-dark-yellow before:mr-2"
  >
    <span class="text-dark-yellow">ls</span> projects/
  </h1>

  <ProjectListMobile {projects} {openProject} />
  <ProjectListDesktop {projects} {openProject} {randomPerms} {randomDetails} />
</Section>
