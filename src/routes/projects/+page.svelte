<script>
  import Section from "../../components/section.svelte";
  import { FolderIcon, FileTextIcon, ExternalLinkIcon } from "@lucide/svelte";
  import { slide } from "svelte/transition";

  /** @typedef {{
   *   title: string;
   *   description: string;
   *   sourceCode?: string;
   *   showcaseLink?: string;
   *   showcaseImage?: string;
   * }} Project
   */

  /** @type {Project[]} */
  const projects = [
    {
      title: "Vibe",
      description:
        "Criador de sites feito com TypeScript, Node.js e TanStack Start. O usuário interage com um chatbot que gera e modifica o código de um projeto em Next.js conforme as instruções recebidas.",
      sourceCode: "https://github.com/diegorezm/vibe",
      showcaseImage: "/projects/vibe.png",
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
      showcaseImage: "/projects/elx_gist.jpeg",
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

  <div
    class="grid sm:grid-cols-[auto_auto_auto_auto_auto_1fr] grid-cols-1 gap-x-3 text-sm w-full"
  >
    {#each projects as p}
      <span class="hidden sm:inline text-dark-yellow">{randomPerms()}</span>
      <span class="hidden sm:inline text-grey">-</span>
      <span class="hidden sm:inline text-grey">diego</span>
      <span class="hidden sm:inline text-grey"
        >{Math.floor(Math.random() * 10) + 6}</span
      >
      <span class="hidden sm:inline text-grey">{randomDetails()}</span>

      <button
        class="flex items-center gap-1 text-left text-dark-yellow hover:underline"
        on:click={() =>
          (openProject = openProject === p.title ? null : p.title)}
      >
        <FolderIcon class="size-4" />
        {p.title.toLowerCase().replaceAll(" ", "-")}
      </button>

      {#if openProject === p.title}
        <div class="col-span-6 mt-2" transition:slide>
          <div
            class="border-l-2 border-dark-yellow pl-3 text-sm text-grey space-y-3"
          >
            <div class="flex items-center gap-2 text-dark-yellow">
              <FileTextIcon class="size-4" />
              <span
                >cat {p.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}/README.md</span
              >
            </div>

            <div class="text-xs leading-relaxed space-y-2">
              <h2 class="text-dark-yellow text-base font-bold">
                # {p.title}
              </h2>

              <p class="text-grey">{p.description}</p>

              {#if p.showcaseImage}
                <img
                  src={p.showcaseImage}
                  alt={`preview de ${p.title}`}
                  class="w-full max-w-lg rounded border border-dark-blue"
                />
              {/if}

              <ul class="list-disc list-inside space-y-1 text-grey">
                {#if p.sourceCode}
                  <li>
                    [<a
                      href={p.sourceCode}
                      target="_blank"
                      class="text-dark-yellow hover:underline"
                      >Código Fonte <ExternalLinkIcon
                        class="inline size-3"
                      /></a
                    >]
                  </li>
                {/if}
                {#if p.showcaseLink}
                  <li>
                    [<a
                      href={p.showcaseLink}
                      target="_blank"
                      class="text-dark-yellow hover:underline"
                      >Ver demonstração <ExternalLinkIcon
                        class="inline size-3"
                      /></a
                    >]
                  </li>
                {/if}
              </ul>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</Section>
