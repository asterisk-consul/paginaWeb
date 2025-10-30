// src/composables/useTheme.ts
import { ref, watch, computed } from "vue";

type Theme = "dark" | "light";

const THEME_KEY = "app-theme";

// Estado global compartido entre todas las instancias
const theme = ref<Theme>("light");

export function useTheme() {
  const applyTheme = (newTheme: Theme): void => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      theme.value = prefersDark ? "dark" : "light";
    }
    applyTheme(theme.value);
  };

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  // Watch para aplicar cambios
  watch(theme, (newTheme) => {
    applyTheme(newTheme);
  });

  return {
    theme,
    toggleTheme,
    initTheme,
    isDark: computed(() => theme.value === "dark"),
  };
}
