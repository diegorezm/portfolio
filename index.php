<?php
$isDevelopment = getenv('DEV_MODE') === 'true';

$PROJECTS = [
  [
    "name" => "Convenience Store",
    "sourceCode" => "https://github.com/diegorezm/convenience.store.api",
    "description" => "Convenience store built with Spring Boot as the backend and Next.js as the frontend. It allows users to manage their products, create transactions, and generate PDFs of those transactions.",
    "tech" => ["java", "docker", "spring boot", "nextjs", "typescript", "tailwind"],
    "details" => "https://www.youtube.com/watch?v=Qd2bRPsiaZE",
    "image" => "/convenience-store.jpg",
  ],
  [
    "name" => "Start page",
    "sourceCode" => "https://github.com/diegorezm/start_page",
    "description" => "A customizable browser start page built with Next.js and TypeScript. Users can manage bookmarks, switch themes, and change the background image for a personalized experience.",
    "tech" => ["typescript", "nextjs", "tailwind"],
    "details" => "https://diegorezm-start-page.netlify.app/",
    "image" => "/start-page.png",
  ],
  [
    "name" => "Clinic",
    "sourceCode" => "https://github.com/diegorezm/clinica",
    "description" => "A freelance project for managing patients, doctors, and appointments, featuring scheduling, backups, and more. Built with Laravel and Livewire for a smooth user experience.",
    "tech" => ["php", "laravel", "livewire", "alpinejs"],
    "details" => "https://www.youtube.com/watch?v=ZEDnGtRIqUo",
    "image" => "/clinic.jpeg",
  ],
  [
    "name" => "Resumemk",
    "sourceCode" => "https://github.com/diegorezm/resumemk",
    "description" => "This project is a resume builder that allows you to generate a resume from a Markdown file. It also includes a Markdown editor that can be run directly in your browser to help you write your resume.",
    "tech" => ["rust", "react"],
    "details" => "https://resumemk.xyz/",
    "image" => "/resumemk.png",
  ],
];

function gen_project_markup($project)
{
  return "
        <li class='project-card styled-shadow-primary'>
            <h2 class='project-card-title'>{$project['name']}</h2>
            <img src='/images/projects/{$project['image']}' alt='{$project['name']} showcase' class='project-card-image'>
            <p class='project-card-desc text-md'>
                {$project['description']}
            </p>
            <div class='flex gap-4'>
                <a class='group btn btn-outline btn-sm' href='{$project['sourceCode']}' target='_blank'>
                    <img src='/icons/github-dark.svg' alt='github icon' class='block w-6 group-hover:hidden transition-opacity duration-300'>
                    <img src='/icons/github.svg' alt='github icon' class='hidden w-6 group-hover:block transition-opacity duration-300'>
                </a>
                <a class='btn btn-ghost btn-sm' href='{$project['details']}' target='_blank'>
                    <img src='/icons/info.svg' alt='github icon' class='w-6'>
                </a>
            </div>
        </li>
    ";
}
ob_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">

  <title>Portfolio</title>
  <meta name="description" content="The personal portfolio of Diego Rezende, a fullstack developer specializing in Java, TypeScript, and open-source contributions. Explore projects, contact details, and more.">

  <meta name="theme-color" content="#605f4b" />
  <meta property="og:image" content="https://diegorezm.netlify.app/images/og.png" />
  <meta property="og:title" content="Diego Rezende - Fullstack developer" />
  <meta property="og:description" content="Diego Rezende personal portfolio." />
  <meta property="og:url" content="https://diegorezm.netlify.app/" />
  <meta property="og:type" content="website" />

  <meta name="keywords" content="Portfolio, Diego Rezende, Fullstack Developer, Java Developer, TypeScript, Open Source, Freelancer, Brazil, Junior Developer" />

  <link rel="canonical" href="https://diegorezm.netlify.app/" />

  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />

  <script defer src="/js/theme.js"></script>
  <script defer src="/js/index.js"></script>
  <link rel="stylesheet" href="/styles/style.css">
</head>

<body class="mx-auto max-w-screen-2xl transition-colors">
  <nav class="fixed top-0 left-0 z-20 w-full bg-th-background" id="nav-wrapper">
    <div class="flex items-center justify-between px-6 py-2 mx-auto">
      <a href="#" class="text-2xl font-bold">
        <img src="/images/favicon.ico" alt="icon" class="w-8" id="nav-logo">
      </a>
      <!-- Hamburger Menu for Small Screens -->
      <button id="menu-toggle" aria-label="Toggle navigation menu" class="block md:hidden text-th-primary focus:outline-none">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <!-- Navbar Links -->
      <ul id="menu" class="items-center hidden md:flex space-x-6">
        <li><a href="#hero" class="link">Home</a></li>
        <li><a href="#about" class="link">About</a></li>
        <li><a href="#projects" class="link">Projects</a></li>
        <li><a href="#contact" class="link">Contact</a></li>
        <li><button class="p-2 btn btn-outline" id="desktop-theme-button">Theme</button></li>
      </ul>
    </div>
  </nav>

  <!-- Sidebar for Small Screens -->
  <aside id="sidebar" class="fixed inset-y-0 right-0 z-50 hidden w-64 bg-th-primary text-th-background transform translate-x-full transition-transform duration-300">
    <button id="sidebar-close" class="absolute top-4 right-4 text-th-background focus:outline-none">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <ul class="px-6 mt-12 text-2xl space-y-6">
      <li><a href="#hero" class="link">Home</a></li>
      <li><a href="#about" class="link">About</a></li>
      <li><a href="#projects" class="link">Projects</a></li>
      <li><a href="#contact" class="link">Contact</a></li>
      <li><button class="link" id="mobile-theme-button">Theme</button></li>
    </ul>
  </aside>

  <main class="flex flex-col items-center justify-center mt-10 md:mt-0">
    <section class="section flex flex-col md:flex-row h-[650px] 2xl:h-[1050px] items-center gap-12 " id="hero">
      <div class="flex flex-col items-center w-2/3 gap-12">
        <h1 class="text-5xl font-bold leading-tight tracking-wide text-center">
          Welcome! My name is Diego, I&apos;m a <span class="text-th-secondary">fullstack developer
          </span>
        </h1>
        <a href="#contact" class="btn btn-outline btn-lg">
          Contact me!
        </a>
        <ul class="flex gap-12">
          <li>
            <!-- nextjs icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
              <path d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z" />
            </svg>
          </li>
          <li>
            <!-- spring boot icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
              <path d="M21.854 1.416a10.5 10.5 0 0 1-1.284 2.247A11.967 11.967 0 1 0 3.852 20.776l.444.395a11.954 11.954 0 0 0 19.632-8.297c.346-3.013-.568-6.865-2.074-11.458M5.58 20.875a1.017 1.017 0 1 1-.149-1.433a1.04 1.04 0 0 1 .149 1.432m16.199-3.581c-2.939 3.926-9.26 2.593-13.286 2.79c0 0-.716.05-1.432.148c0 0 .272-.123.618-.247c2.84-.987 4.173-1.185 5.901-2.074c3.235-1.654 6.47-5.284 7.112-9.038c-1.235 3.606-4.988 6.717-8.396 7.976c-2.346.865-6.568 1.704-6.568 1.704l-.173-.099c-2.865-1.407-2.963-7.63 2.272-9.63c2.296-.89 4.47-.395 6.963-.988c2.643-.617 5.705-2.593 6.94-5.186c1.382 4.174 3.061 10.643.049 14.644" />
            </svg>
          </li>
          <li>
            <!-- laravel icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" class="icon">
              <path d="M23.642 5.43a.4.4 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.38.38 0 0 1-.188.326L9.93 23.949a.3.3 0 0 1-.066.027l-.024.01a.35.35 0 0 1-.192 0q-.016-.005-.03-.012q-.031-.01-.062-.025L.533 18.755a.38.38 0 0 1-.189-.326V2.974q0-.05.014-.098c.003-.012.01-.02.014-.032a.4.4 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045l.037-.027q.02-.018.041-.034H.53L5.043.05a.38.38 0 0 1 .375 0L9.93 2.647h.002q.021.015.04.033l.038.027c.013.014.02.03.033.045c.008.011.02.021.025.033q.014.029.024.058c.003.011.01.021.013.032q.014.047.014.098v9.652l3.76-2.164V5.527q0-.05.013-.098q.007-.014.013-.032l.024-.059c.007-.012.018-.02.025-.033l.033-.043q.019-.017.037-.028q.02-.017.041-.032h.001l4.513-2.598a.38.38 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031l.036.028l.034.044c.008.012.019.021.024.033a.3.3 0 0 1 .024.06q.01.015.015.032m-.74 5.032V6.179l-1.578.908l-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225l-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445l-.002-.003H5.04L5 16.169l-.035-.027l-.001-.002q-.018-.018-.031-.04q-.016-.016-.028-.036h-.002l-.02-.047c-.006-.016-.014-.027-.018-.043l-.008-.057q-.005-.02-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164l3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91l-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163l3.76 2.163l3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256l1.58.908zm-8.65 9.654l5.514-3.148l2.756-1.572l-3.757-2.163l-4.323 2.489l-3.941 2.27z" />
            </svg>
          </li>
        </ul>
      </div>
      <div class="flex-col items-center hidden md:flex gap-2">
        <!-- <img src="/images/undraw_drink-coffee.svg" alt="Guy drinking coffe" class="h-96 w-96"> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="623.65002" height="623.63" viewBox="0 0 623.65002 623.63" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/" class="w-96 h-96 fill-th-primary">
          <path d="m311.82001,623.63c-7.10999,0-14.20001-.23999-21.06-.70001-7.09-.46997-14.19-1.19-21.12-2.14001-3.04999-.40997-5.81-.82001-8.44-1.25-7.81-1.27002-15.75999-2.88-23.62-4.79999-2.69-.65002-5.33-1.33002-7.83-2.03003-.88-.22998-1.78-.47998-2.67-.72998-3.8-1.07001-7.48-2.17999-10.92-3.29999-.22-.06-.48-.15002-.74001-.22998-3.11-1-6.35001-2.10999-9.62-3.29999-2.75999-1-5.56-2.06-8.56-3.23999-6.25-2.46002-12.50999-5.17999-18.61-8.07001-2.53999-1.19-5.19-2.5-8.11-3.97998-.52-.26001-1.05-.53003-1.57001-.79999l-.60001-.31c-34.28-17.79999-64.67-41.54999-90.31-70.58002C27.72,461.19,0,387.89999,0,311.81c0-83.29001,32.44-161.60001,91.33-220.49001C150.22,32.43,228.53,0,311.82001,0s161.60001,32.43,220.5,91.32c58.90002,58.88999,91.33002,137.19999,91.33002,220.49,0,48.94-11.02002,95.79001-32.73999,139.25-20.71997,41.44-51.04999,78.42999-87.73001,106.96002-8.62,6.71997-17.70001,13.03998-26.98001,18.79999-9.41,5.85999-19.28,11.28998-29.34,16.13-2.23999,1.08002-4.64001,2.20001-7.56,3.51001l-.28.12c-.35999.15997-.72.32001-1.07999.46997-2.17999.96997-4.39999,1.91998-6.59,2.82001l-.98999.41998c-.62.26001-1.20001.5-1.78.71997-7.42999,3-14.92001,5.70001-22.26001,8.01001-.57999.20001-1.17001.38-1.76999.56l-.51999.15997c-6.10001,1.89001-12.51999,3.65002-19.04999,5.21997-23.79001,5.73999-48.41,8.65002-73.16,8.65002v.02002h0l-.00006.00006Zm0-621.63c-82.76001,0-160.56,32.22-219.08,90.74C34.23,151.25,2,229.05,2,311.81c0,75.60999,27.54,148.41998,77.55,205.02997,25.48,28.84003,55.67,52.44,89.73,70.12l.60001.31c.50999.27002,1.03.53003,1.55.78998,2.91,1.47998,5.53999,2.78003,8.06,3.96002,6.06,2.87,12.28,5.57001,18.49001,8.01001,2.98,1.17999,5.75999,2.22998,8.5,3.21997,3.25,1.17999,6.47,2.28003,9.57001,3.28003.24001.08002.47.15002.7.21997,3.45,1.12,7.09,2.21997,10.87,3.28998.87.25,1.75999.5,2.64.72998,2.5.69,5.11,1.37,7.78,2.02002,7.82001,1.90997,15.71001,3.52002,23.48001,4.77002,2.60999.42999,5.35001.84003,8.38,1.25,6.88.94,13.94,1.65997,20.98001,2.12,6.82001.46002,13.85999.70001,20.92001.70001,24.60001,0,49.04999-2.89001,72.70001-8.59003,6.48999-1.56,12.85999-3.31,18.94-5.19l.51999-.15997c.57999-.17999,1.14999-.34998,1.73001-.54999,7.31-2.29999,14.76001-4.97998,22.14999-7.96997.57999-.22998,1.14001-.46002,1.70001-.69l1.23001-.51001c2.10999-.87,4.25-1.78998,6.37-2.72998.37-.15997.70999-.31,1.06-.46997l.28-.12c2.89999-1.31,5.29001-2.41998,7.51001-3.48999,10-4.81,19.81-10.20001,29.16-16.03003,9.22-5.71997,18.23999-12.01001,26.81-18.67999,36.44-28.35999,66.58002-65.10999,87.16998-106.28,21.58002-43.17001,32.52997-89.72,32.52997-138.35001,0-82.76001-32.22998-160.56-90.75-219.07001C472.39001,34.22,394.57999,2,311.82001,2Z" />
          <polygon points="273.97 426.13 349.73999 444.28 340.95001 338.10001 274.03 343.64001 273.97 426.13" fill="#f3a3a6" />
          <circle cx="328.17001" cy="294.73999" r="73.76001" fill="#f3a3a6" />
          <path d="m406.01999,608.08002c-.59.20001-1.17001.38-1.76001.56-.17001.04999-.34.10999-.51001.15997-6.25,1.94-12.59,3.66998-19,5.21002-23.38998,5.64001-47.82001,8.62-72.92999,8.62-7.06,0-14.06-.22998-20.98999-.70001-7.09-.46997-14.10999-1.17999-21.04999-2.13-2.82001-.38-5.62-.78998-8.41-1.25-7.95-1.28998-15.81-2.90002-23.55-4.78998-2.61-.63-5.21001-1.29999-7.8-2.02002-.89-.22998-1.78-.47998-2.66-.72998-3.64999-1.03003-7.28-2.12-10.88-3.28998-.24001-.07001-.49001-.15002-.73-.22998-3.22-1.03998-6.42-2.14001-9.60001-3.28998-2.86-1.03003-5.7-2.10999-8.53-3.22998-6.28999-2.47998-12.47-5.15997-18.55-8.03998l2.34-10.59998,8.11-36.72003,17.61-79.78,17.8-80.62,46.77,1.29999h.01999l2.28.07001,71.13,1.98001,31.12.87,29.76999,218.64996h0l.00003-.00006Z" fill="#dadbdc" />
          <path d="m475.67999,575.96997c-9.42001,5.87-19.19,11.23999-29.25,16.08002-2.48999,1.20001-5.01001,2.35999-7.54001,3.5-.45001.20001-.89001.40002-1.34.59003-2.17999.96997-4.37,1.90997-6.57999,2.82001h0l-.98999.41998c-.57999.23999-1.16.47998-1.75.71002-7.26999,2.94-14.67001,5.62-22.20001,7.98999-.59.20001-1.17001.38-1.76001.56l-65.23999-166.92999-4.41-11.26999-12.29999-31.48999-4.07999-10.42999,26.92999.42001,31.09.48999c28.22,3.60999,51.62,23.57999,59.63,50.87l39.79999,135.66998h-.01001v-.00006Z" fill="#dadbdc" />
          <path d="m276.42999,328.44c2.62-.44,5.23999-.89001,7.85999-1.32999.62-14.01001,1.97-29.63998,12.45999-38.95001,5.78-5.13,14.14001-8.12,17.01001-15.29999,2.38-5.95001.16-13.26001,3.48001-18.74001,3.48999-5.77,11.29001-6.8,18.03-7.22,10.54999-.64999,21.29001-1.28999,31.56,1.21001,10.26999,2.50999,20.17999,8.69,24.56,18.31,1.35001,2.95999,2.13,6.14999,2.91,9.31,2.63,10.69,6.66,31.03,6.66,31.03,0,0,.78-4.20999,3-12.39999,4.53-6.48001,10.06-12.45999,12.72-19.89999,3.20001-8.95999,1.79001-18.97-1.35001-27.94-7.13-20.41-23.67001-37.66-44.26999-44.22-20.60999-6.55-40.10001-10.25999-55.5,4.92-2.89001,2.85001-5.48999,6.03-8.79001,8.39-6.10001,4.37-13.89001,5.47-20.76999,8.49001-15.31,6.72-29.14999,22.88-32.60001,39.24001-3.45,16.35999-1.64999,33.31.17,49.94,1.57001,14.34,8.37999,30.32999,20.31999,38.42999.48999-7.34.98001-14.67001,1.47-22.01001l1.06-1.25h.01001v-.01001Z" fill="#2f2e43" />
          <path d="m317.26001,397.39999l-.72,1.17999-20.13998,32.92001-29.85999,48.84-6.04999,9.89001-22.06,36.07999s-7.16,10.07001-19.24001,22.97998l-.03999.03998c-4.39,4.67999-9.42,9.72998-14.99001,14.79999-.03999.04999-.08.09003-.13.12-6.8,6.20001-14.39999,12.42999-22.62,18.08002-3.38,2.33002-6.86,4.54999-10.42,6.63-.73-.35999-1.45-.73999-2.17-1.10999-34.22-17.77002-64.72-41.71002-90.02-70.34998,26.41-42.17999,78.67001-89.48001,112.33999-117.64999,19.05-15.95001,44.5-21.95999,68.66-16.17999l11.89999,2.84,2.29999.54999,43.26001,10.34h-.00003Z" fill="#dadbdc" />
          <path d="m411.22,387.25c-12.97-4.67001-47.29999-4.69-62.70001.51001-2.98999,1.01001-4.79999,4.04999-4.28,7.16l.60999,3.69c-1.34-.20001-2.64999-.57999-3.89001-1.14999-3.67001-1.67999-10.89999-3.95999-18.20001-.32001-5.10001,2.54001-8.69,7.32999-9.95001,12.89999-3.01001,13.32001,4.57999,20.69,4.57999,20.69l10.10999,9.48999c8.47,7.94,17.70999,15.01999,27.57999,21.12l.20001.12-3.60001-21.66c-2.03,3.57001-6.62,4.73999-10.10999,2.57999-8.82001-5.45999-23.23001-16.39999-21.48001-28.82001,1.22-8.66,6.03-10.5,10.64999-10.10999,5.17001.44,9.67999,3.69,11.89001,8.38.53,1.12,1.39999,2.04001,2.48001,2.64001l2.60001,1.42001,7.62,45.91c.34,2.06,1.66,3.84,3.53,4.76001,17.92001,8.79001,37.26001,4.23001,43.95001,2.17999,1.53-.47,2.84-1.48001,3.66-2.85999l1.44-2.39001c.5-.82001.79999-1.75.89999-2.70001l6.64999-66.82001c.29001-2.95001-1.45999-5.70999-4.25-6.72h.01007Z" style='fill: var(--primary);' />
          <ellipse cx="380.17001" cy="390.79999" rx="30.13" ry="2.84" fill="#dedfe0" />
          <path id="uuid-add59a10-2c6d-45b5-a06d-26741c0f8cf5-399" d="m319.98001,447.72c16.35001-12.51001,22.82001-31.32001,14.45001-42.01001-8.35999-10.69-28.38998-9.22-44.75,3.29999-6.60001,4.91-11.88,11.37-15.37,18.84l-68.56,53.89001,27.22,32.56,64.70001-56.59c8.19-1.47,15.84-4.89999,22.29999-9.98999h.00998Z" fill="#f3a3a6" />
          <polygon points="274.62 494.54001 247.5 446.84 148.81 493.28 204.03 564.26001 274.62 494.54001" fill="#dadbdc" />
          <path d="m215.47,461.91s-71.94,52.67001-69.28,52.37997c2.66-.28998,38.13-19.79999,38.13-19.79999l31.14999-32.58002h0v.00003Z" fill="#272223" isolation="isolate" opacity=".1" />
        </svg>
        <a href="https://undraw.co/" class="text-sm link" target="_blank">undraw.co</a>
      </div>
    </section>

    <section class="py-12 section bg-th-primary text-th-background" id="about">
      <h1 class="mb-8 text-3xl font-bold text-center text-th-secondary">
        About Me
        <span class="block w-12 h-1 mx-auto mt-2 bg-th-secondary"></span>
      </h1>
      <div class="flex flex-col items-center lg:flex-row gap-12">
        <!-- Image Section -->
        <div class="flex items-center justify-center w-full lg:w-1/3">
          <img src="/images/my-picture.jpg" alt="A picture of me in a suit." class="w-full h-auto max-w-sm rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        </div>
        <!-- Text Section -->
        <div class="flex flex-col lg:w-2/3 space-y-6">
          <p class="mx-auto text-lg leading-relaxed text-justify max-w-prose lg:mx-0">
            Hello! I'm <span class="font-semibold text-th-secondary">Diego Rezende</span>, a software developer from
            Brazil
            with a passion for coding and learning new things. I'm currently in college, but I'm always on the lookout
            for
            challenges and opportunities. I’m a big fan of open-source and have created a few projects myself—feel free
            to
            check them out on my GitHub! I’ve been using Linux since high school
            <span class="italic text-th-secondary">(Arch btw)</span>.
          </p>
          <!-- Links Section -->
          <div class="flex justify-center lg:justify-start gap-6">

            <div class="relative group">
              <a href="https://github.com/diegorezm" target="_blank">
                <img src="/icons/github.svg" alt="GitHub icon" class="w-8 h-8">
              </a>
              <span class="absolute -top-12 left-[50%] -translate-x-[50%] 
      z-20 origin-left scale-0 px-3 rounded-lg 
       bg-th-primary py-2 text-sm font-bold
      shadow-lg transition-all duration-300 ease-in-out 
        group-hover:scale-100">github<span>
                </span>
              </span>
            </div>

            <div class="relative group">
              <a href="https://www.linkedin.com/in/diegorezm/" target="_blank">
                <img src="/icons/linkedin.svg" alt="LinkedIn icon" class="w-8 h-8">
              </a>
              <span class="absolute -top-12 left-[50%] -translate-x-[50%] 
      z-20 origin-left scale-0 px-3 rounded-lg 
       bg-th-primary py-2 text-sm font-bold
      shadow-lg transition-all duration-300 ease-in-out 
        group-hover:scale-100">linkedin<span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-full section text-th-foreground" id="projects">
      <h1 class="mb-8 text-3xl font-bold text-center text-th-primary">
        Projects
        <span class="block w-12 h-1 mx-auto mt-2 bg-th-primary"></span>
      </h1>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-4">
        <?php
        foreach ($PROJECTS as $project) {
          echo gen_project_markup($project);
        }
        ?>
      </ul>
    </section>
    <section class="section bg-th-secondary" id="contact">
      <h1 class="mb-8 text-3xl font-bold text-center text-th-background">
        Contact
        <span class="block w-12 h-1 mx-auto mt-2 bg-th-background"></span>
      </h1>
      <form netlify-honeypot="bot-field" method="POST" class="w-full mx-auto space-y-6 lg:w-2/3" name="contact-form" netlify>
        <h1 class="text-lg font-medium">Get in touch - <a class="hover:underline text-th-primary" href="mailto:diegommrez12@gmail.com">diegommrez12@gmail.com</a> </h1>
        <p class="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="email" class="input" placeholder="Your email..." name="email">
        <input type="text" class="input" placeholder="Your name..." maxlength="255" minlength="2" name="name">
        <textarea cols="10" rows="5" class="input" placeholder="Your message..." minlength="10" maxlength="1200" name="message"></textarea>
        <button class="btn btn-outline btn-md">
          Send
        </button>
      </form>
    </section>
    <footer class="flex items-center w-full p-2 border-t gap-6 border-th-foreground">
      <a href="/#hero">
        <img src="/images/favicon.ico" alt="logo" class="w-8" id="footer-logo">
      </a>
      <?php
      $year = date("Y");
      echo "<p>$year Diego Rezende</p>"
      ?>
    </footer>
  </main>
</body>

</html>

<?php
$htmlContent = ob_get_clean();
if ($isDevelopment) {
  echo $htmlContent;
} else {
  file_put_contents('index.html', $htmlContent);
  echo "Static HTML file generated successfully!\n";
}

?>
