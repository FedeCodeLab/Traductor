"use client";
import useThemeStore from "@/store/themeStore";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      className="cursor-pointer fixed z-50 size-16 bottom-10 right-10 border-2 bg-white hover:bg-highlight-neutral-300 border-neutral-300 dark:bg-transparent rounded-full"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <span className="text-[26px]">{theme === "light" ? "🌞" : "🌙"}</span>
    </button>
  );
};
