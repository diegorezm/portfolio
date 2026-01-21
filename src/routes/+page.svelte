<script>
  import Section from "$lib/components/section.svelte";
</script>

<Section>
  <h1
    class="text-4xl font-bold before:content-['$'] before:text-dark-yellow before:mr-2"
  >
    <span class="text-dark-yellow">echo</span> "Bem vindo!"
  </h1>
  <p class="italic text-md">
    Meu nome é Diego, eu sou um desenvolvedor fullstack<span
      class="text-dark-yellow blink">_</span
    >
  </p>

  <a
    class="mt-4 text-dark-yellow hover:text-grey transition-colors text-sm font-mono before:content-['$'] before:mr-2"
    href="/projects"
  >
    cd ~/code/projects/
  </a>
</Section>
