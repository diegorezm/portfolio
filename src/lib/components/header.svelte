<script>
  import { onMount } from "svelte";
  import { getFormattedClock } from "$lib/index";
  import { FolderIcon, UserIcon, HouseIcon, ClockIcon } from "@lucide/svelte";
  import { page } from "$app/state";

  /**
   * @typedef {{
   *   id: string,
   *   label: string,
   *   icon: typeof import('@lucide/svelte').Icon,
   *   href: string
   * }} Workspace
   */

  /** @type {Workspace[]} */
  const workspaces = [
    { id: "home", label: "Início", icon: HouseIcon, href: "/" },
    { id: "projects", label: "Projetos", icon: FolderIcon, href: "/projects" },
    { id: "about", label: "Sobre", icon: UserIcon, href: "/about" },
  ];

  let time = $state("");

  onMount(() => {
    const updateClock = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      time = getFormattedClock(isMobile);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000 * 60);
    window.addEventListener("resize", updateClock);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateClock);
    };
  });
</script>

<header
  class="bg-grey text-dark-blue flex justify-between items-center px-3 h-6 text-sm font-mono"
>
  <nav class="flex space-x-3 select-none">
    {#each workspaces as ws}
      <a
        href={ws.href}
        class={`flex items-center gap-1 px-1 transition-colors text-md ${
          ws.href === page.route.id
            ? "text-dark-yellow underline underline-offset-[3px]"
            : "text-dark-blue hover:text-dark-yellow"
        }`}
      >
        <ws.icon class="size-3" />
        <span>{ws.label}</span>
      </a>
    {/each}
  </nav>

  <div class="flex items-center space-x-4">
    <p class="text-dark-blue truncate flex gap-1 items-center">
      <ClockIcon class="size-3" />
      <span>{time}</span>
    </p>
  </div>
</header>
