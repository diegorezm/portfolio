<script>
  import "@fontsource/jetbrains-mono";
  import "./layout.css";
  import favicon from "$lib/assets/favicon.ico";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <!-- Primary Meta -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Diego Rezende" />
  <link rel="icon" href={favicon} type="image/x-icon" />

  <!-- SEO -->
  <meta
    name="description"
    content="Portfólio de Diego Rezende — Desenvolvedor Full‑Stack brasileiro com experiência em TypeScript, React, Node.js e SvelteKit. Focado em código limpo, performance e open‑source."
  />
  <meta
    name="keywords"
    content="Diego Rezende, Desenvolvedor, Full‑Stack, TypeScript, React, Node.js, SvelteKit, Portfolio, Tailwind, JavaScript, Desenvolvedor Web"
  />
  <link rel="canonical" href="https://diegorezm.xyz/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://diegorezm.xyz/" />
  <meta
    property="og:title"
    content="Diego Rezende | Desenvolvedor Full‑Stack"
  />
  <meta
    property="og:description"
    content="Desenvolvedor Full‑Stack especializado em TypeScript, React, Node.js e SvelteKit. Experiência com aplicações modernas e projetos open‑source."
  />
  <meta property="og:image" content="https://diegorezm.xyz/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://diegorezm.xyz/" />
  <meta
    name="twitter:title"
    content="Diego Rezende | Desenvolvedor Full‑Stack"
  />
  <meta
    name="twitter:description"
    content="Portfólio de Diego Rezende, Desenvolvedor Full‑Stack com experiência em TypeScript, React, Node.js e SvelteKit."
  />
  <meta name="twitter:image" content="https://diegorezm.xyz/og.png" />
  <title>Diego Rezende | Portfolio</title>
</svelte:head>

<main class="max-w-4xl mx-auto mt-10 lg:mt-20 px-2 lg:px-0">
  <Header />
  {@render children()}
  <Footer />
</main>
