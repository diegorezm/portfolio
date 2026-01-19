<script>
  import { FolderIcon, FileTextIcon, ExternalLinkIcon } from "@lucide/svelte";
  import { slide } from "svelte/transition";

  /**
   * @type {App.Project[]}
   */
  export let projects;

  /**
   * @type {() => string}
   */
  export let randomPerms;

  /**
   * @type {() => string}
   */
  export let randomDetails;

  /**
   * @type {string | null}
   */
  export let openProject;
</script>

<div
  class="hidden lg:grid sm:grid-cols-[auto_auto_auto_auto_auto_1fr] grid-cols-1 gap-x-3 text-sm w-full"
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
      on:click={() => (openProject = openProject === p.title ? null : p.title)}
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
              >cat {p.title.toLowerCase().replaceAll(" ", "-")}/README.md</span
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
                    >Código Fonte <ExternalLinkIcon class="inline size-3" /></a
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
