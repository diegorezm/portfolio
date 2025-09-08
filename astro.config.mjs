// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://diegorezm.xyz",
  image: {
    service: passthroughImageService(),
  },
});
