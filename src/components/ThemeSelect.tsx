import { useTheme } from "../hooks/use-theme";

export const ThemeSelect = () => {
  const { theme, setTheme, themes } = useTheme();

  const handleThemeChange = (event: any) => {
    setTheme(event.target.value);
  };

  return (
    <select
      id="theme-select"
      value={theme}
      onChange={handleThemeChange}
      className="p-2 bg-background text-foreground border border-primary rounded-sm cursor-pointer font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1).replace(/-/g, " ")}{" "}
        </option>
      ))}
    </select>
  );
};
