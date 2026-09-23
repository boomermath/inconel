"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";

export function useDarkMode() {
  const [{ theme }, setTheme] = useCookies(["theme"]);

  useEffect(() => {
    if (!theme) {
      const next = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme("theme", next, { path: "/" });
      return;
    }

    window.document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme("theme", theme === "dark" ? "light" : "dark", { path: "/" });
  };

  return [theme, toggleTheme];
}
