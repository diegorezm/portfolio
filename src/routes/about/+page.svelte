<script>
  import Section from "../../components/section.svelte";
  import { FileTextIcon } from "@lucide/svelte";
</script>

<Section>
  <h1
    class="text-4xl font-bold before:content-['$'] before:text-dark-yellow before:mr-2"
  >
    <span class="text-dark-yellow">cat</span> about.txt
  </h1>

  <div
    class="border-l-2 border-dark-yellow pl-3 font-mono text-sm text-grey leading-relaxed space-y-2"
  >
    <div class="flex items-center gap-2 text-dark-yellow">
      <FileTextIcon class="size-4" />
      <span>Lendo arquivo...</span>
    </div>

    <p>
      Olá! Meu nome é <span class="text-dark-yellow">Diego</span>, sou um
      desenvolvedor <span class="text-dark-yellow">Full‑Stack</span>.
    </p>

    <p>
      Costumo trabalhar com
      <span class="text-dark-yellow">TypeScript</span>,
      <span class="text-dark-yellow">Node.js</span> e
      <span class="text-dark-yellow">React</span>, mas também já utilizei
      linguagens como <span class="text-dark-yellow">Java</span>,
      <span class="text-dark-yellow">Go</span> e
      <span class="text-dark-yellow">Python</span>.
    </p>

    <p>
      Tenho experiência no desenvolvimento de aplicações full‑stack e também na
      configuração de <span class="text-dark-yellow">CI/CD pipelines</span>,
      <span class="text-dark-yellow">VPS</span> e
      <span class="text-dark-yellow">DNS</span>.
    </p>

    <p>
      Sou usuário do <span class="text-dark-yellow">Linux</span> desde o ensino
      médio e gosto de criar projetos
      <span class="text-dark-yellow">open‑source</span>.
    </p>

    <p>
      [<a
        href="https://linkedin.com/in/diegorezm"
        target="_blank"
        class="text-dark-yellow hover:underline">LinkedIn</a
      >] [<a
        href="https://github.com/diegorezm"
        target="_blank"
        class="text-dark-yellow hover:underline">GitHub</a
      >] [<a
        href="mailto:diegommrez12@gmail.com"
        target="_blank"
        class="text-dark-yellow hover:underline">Email</a
      >]
    </p>
  </div>
</Section>
