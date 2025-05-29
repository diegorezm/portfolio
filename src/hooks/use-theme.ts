import { useState, useEffect, useCallback } from "preact/hooks";

const THEMES = [
  "default",
  "solarized-light",
  "gruvbox-light",
  "moonfly",
  "mocha",
];

const LOCAL_STORAGE_KEY = "app-theme";

export const useTheme = () => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LOCAL_STORAGE_KEY) || "default";
    }
    return "default";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: string) => {
    if (THEMES.includes(newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(
        `Attempted to set an unknown theme: ${newTheme}. Falling back to 'default'.`,
      );
      setThemeState("default");
    }
  }, []);

  return { theme, setTheme, themes: THEMES };
};
