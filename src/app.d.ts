// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface Project {
      title: string;
      description: string;
      sourceCode?: string;
      showcaseLink?: string;
      showcaseImage?: string;
    }
  }
}

export { };
