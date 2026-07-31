"use client";

import { useTheme } from "@/components/ThemeProvider/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover-wiggle cursor-pointer select-none text-base leading-none"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={theme === "light" ? "lights off" : "lights on"}
    >
      {theme === "light" ? "☾" : "☀"}
    </button>
  );
}
