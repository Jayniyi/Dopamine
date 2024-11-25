<!-- src/components/ThemeProvider.vue -->
<template>
  <div :class="theme">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue"; // Ensure all necessary functions are imported

const theme = ref("light"); // Default theme

const isDarkMode = ref(false); // Track if dark mode is active

function toggleDarkMode() {
  theme.value = isDarkMode.value ? "light" : "dark"; // Toggle theme
  isDarkMode.value = !isDarkMode.value; // Update dark mode status
}

// Provide the dark mode properties to children
provide("isDarkMode", isDarkMode);
provide("toggleDarkMode", toggleDarkMode);

// Optionally, you can use onMounted to do something when the component mounts
onMounted(() => {
  // Initial setup, if needed
  console.log("ThemeProvider mounted!");
});
</script>

<style scoped>
/* Styles for light and dark themes */
.light {
  background-image: linear-gradient(270deg, rgb(27, 20, 41), rgb(20, 15, 35));
  color: #ffffff;
}
.dark {
  background-color: #000;
  color: #fff;
}
</style>
