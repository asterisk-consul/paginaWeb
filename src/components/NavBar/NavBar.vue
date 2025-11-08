<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Menu, X, Sun, Moon } from "lucide-vue-next";
import Logo from "../VLogo.vue";
import { useTheme } from "../../composables/useTheme";

const menuOpen = ref(false);
const { toggleTheme, isDark } = useTheme();

// asegurar que solo accede a window en cliente
onMounted(() => {});

const navLinks = [
  { to: "/nosotros", text: "Nosotros" },
  { to: "/blog", text: "Blog" },
  { to: "/#servicios", text: "Servicios" },
];
</script>

<template>
  <header
    class="bg-card/80 backdrop-blur-sm sticky top-0 z-40 border-b transition-colors h-14 md:h-16"
  >
    <nav
      class="container mx-auto px-10 py-3.5 flex justify-between items-center"
    >
      <a href="/" class="group flex items-center space-x-2">
        <div
          class="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:rotate-90"
        >
          <Logo class="w-full h-full text-primary" size="2rem" />
        </div>
        <span class="text-2xl text-foreground font-family-sans font-medium"
          >Asterisk</span
        >
      </a>

      <!-- Desktop Menu -->
      <div
        class="hidden md:flex items-center space-x-4 font-family-tight font-medium text-sm"
      >
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          {{ link.text }}
        </a>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-400 flex items-center px-1 cursor-pointer transition-colors"
          :aria-label="
            isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
          "
        >
          <span
            class="w-5 h-5 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300"
            :class="isDark ? 'translate-x-7' : 'translate-x-0'"
          >
            <Sun v-if="!isDark" class="w-3 h-3 text-background" />
            <Moon v-else class="w-3 h-3 text-foreground" />
          </span>
        </button>

        <a
          href="/#contacto"
          class="btn btn-primary font-family-tight text-sm py-1.5 px-2.5"
          >Contáctanos</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-2">
        <button @click="toggleTheme">
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>

        <button @click="menuOpen = !menuOpen" class="text-foreground">
          <Menu v-if="!menuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-card border-t">
      <div class="flex flex-col items-center space-y-4 py-4">
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          @click="menuOpen = false"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          {{ link.text }}
        </a>
        <a href="/#contacto" @click="menuOpen = false" class="btn btn-primary"
          >Contáctanos</a
        >
      </div>
    </div>
  </header>
</template>
