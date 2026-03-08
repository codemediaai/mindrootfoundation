import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolved: "light" | "dark";
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolved: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("mindroot-theme") as Theme) || "system";
  });

  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", isDark);
      setResolved(isDark ? "dark" : "light");
    };

    apply();
    localStorage.setItem("mindroot-theme", theme);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
