<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from "vue";
import { RouterLink } from "vue-router";
import Buttonn from "@/components/Button.vue"; // Ensure the import path is correct

const open = ref(false);
const isScrolled = ref(false);

// Inject dark mode functionality
const isDarkMode = inject('isDarkMode');
const toggleDarkMode = inject('toggleDarkMode');

const Links = ref([
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Project", link: "/project" },
  { name: "Resume", link: "/resume" }
]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Change this threshold as needed
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    :style="{
      background: isScrolled
        ? (isDarkMode ? '#c770F' : 'linear-gradient(to bottom left, hsla(0, 3%, 6%, .678), rgba(12, 10, 22, .863))')
        : 'transparent'
    }"
    class="fixed w-full lg:flex md:px-24 px-8 justify-between lg:px-28 z-10 transition-colors duration-300 bg-blur"
  >    <div class="flex items-center md:bg-inherit md:py-4 pb-5 md:pb-0">
      <h1 class="text-xl px-3 py-3 md:px-0">Designer</h1>


    </div>

    <span
      class="absolute lg:hidden right-6 top-1.5 cursor-pointer text-white text-4xl"
      @click="open = !open"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']" class="z-10"></i>
    </span>
    
    <ul
      :class="[
        'lg:flex lg:items-center lg:px-0 px-24 pt-3 lg:pb-0 pb-5',
        open ? 'absolute left-0 top-15 w-full bg-black' : 'hidden lg:flex lg:static',
        'transition-all duration-300 ease-in'  // Smooth transition
      ]"
    >
      <li class="lg:mx-2 pt-2" v-for="link in Links" :key="link.name">
        <RouterLink :to="link.link" class="text-xl hover:underline">{{ link.name }}</RouterLink>
      </li>
      <Buttonn class="my-5" />
            <!-- Dark Mode/Purple Mode Toggle Button -->
            <button @click="toggleDarkMode" class="ml-4 flex items-center text-white">
        <!-- Display different icons based on the mode -->
        <i :class="[isDarkMode ? 'bi bi-brightness-high' : 'bi bi-moon', 'mr-2']"></i>
      </button>
    </ul>
  </div>
</template>
<style scoped>
/* Existing styles */
.bg-gradient {
  background: linear-gradient(to bottom left, hsla(0, 3%, 6%, 0.678), rgba(12, 10, 22, 0.863));
}

/* New class for blur effect */
.bg-blur {
  backdrop-filter: blur(10px); /* Adjust the blur strength as needed */
  background: rgba(255, 255, 255, 0.7); /* Use a semi-transparent background for effect */
}
</style>

