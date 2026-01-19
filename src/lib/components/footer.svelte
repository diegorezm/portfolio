<script>
  import { GithubIcon, LinkedinIcon, MailIcon } from "@lucide/svelte";
</script>

<footer
  class="border-t border-dark-blue text-grey font-mono text-xs md:text-sm py-4 flex flex-col items-center space-y-2"
>
  <div class="flex items-center justify-center flex-wrap gap-4">
    <a
      href="https://linkedin.com/in/diegorezm"
      target="_blank"
      class="flex items-center gap-1 hover:text-dark-yellow transition-colors"
    >
      <LinkedinIcon class="size-4" />
      <span>linkedin</span>
    </a>

    <span class="text-dark-blue">|</span>

    <a
      href="https://github.com/diegorezm"
      target="_blank"
      class="flex items-center gap-1 hover:text-dark-yellow transition-colors"
    >
      <GithubIcon class="size-4" />
      <span>github</span>
    </a>

    <span class="text-dark-blue hidden sm:inline">|</span>

    <a
      href="mailto:diegommrez12@gmail.com"
      target="_blank"
      class="hidden sm:flex items-center gap-1 hover:text-dark-yellow transition-colors"
    >
      <MailIcon class="size-4" />
      <span>email</span>
    </a>
  </div>

  <p class="text-dark-blue text-center">
    © {new Date().getFullYear()} Diego Rezende — Todos os direitos reservados.
  </p>
</footer>
