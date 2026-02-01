<script>
  import Section from "$lib/components/section.svelte";
</script>

<Section>
  <h1
    class="text-4xl font-bold before:content-['$'] before:text-dark-yellow before:mr-2"
  >
    <span class="text-dark-yellow">cat</span> bem_vindo.txt
  </h1>

  <div
    class="border-l-2 border-dark-yellow pl-3 font-mono text-md text-grey leading-relaxed space-y-2"
  >
    <h2 class="text-dark-yellow font-semibold">Bem vindo!</h2>
    <p class="italic text-md">
      Meu nome é Diego, eu sou um desenvolvedor fullstack<span
        class="text-dark-yellow blink">_</span
      >
    </p>
  </div>

  <a
    class="text-lg mt-6 text-dark-yellow hover:text-dark-yellow/70 font-bold before:content-['$'] before:text-dark-yellow hover:before:text-dark-yellow/70 before:mr-2"
    href="/projects"
  >
    cd ~/code/projects/
  </a>
</Section>
