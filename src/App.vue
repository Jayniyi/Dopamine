<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import ThemeProvider from "./components/ThemeProvider.vue";
const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time (e.g., 3 seconds)
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<template>
  <ThemeProvider>
    <div v-if="isLoading" class="loading-overlay bgbg">
      <div class="text-center">
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div
            class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
        <p class="text-white">Welcome To DevJay Portfolio</p>
      </div>
    </div>

    <div class="lol relative" v-else>
      <Navbar />
      <RouterView />
      <div class="stars">
        <div class="star" v-for="n in 20" :key="n"></div>
      </div>
    </div>
  </ThemeProvider>
</template>
<style lang="css">
.lol {
  position: relative; /* Parent for stars */
}
.bgbg{
  background-image: linear-gradient(270deg, rgb(27, 20, 41), rgb(20, 15, 35));

}
.loading-overlay {
  position: fixed; /* Change to fixed to cover the viewport */
  top: 0;
  left: 0;
  width: 100vw; /* Use viewport width */
  height: 100vh; /* Use viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8); /* Optional: semi-transparent background */
  z-index: 50; /* Ensure it's above everything else */
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 0;
  animation: blink 1.5s infinite alternate;
}

/* Keyframes for blinking effect */
@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* Position stars randomly */
.star:nth-child(1) { top: 20%; left: 10%; width: 3px; height: 3px; animation-delay: 0s; }
.star:nth-child(2) { top: 40%; left: 30%; width: 2px; height: 2px; animation-delay: 0.2s; }
.star:nth-child(3) { top: 60%; left: 50%; width: 4px; height: 4px; animation-delay: 0.4s; }
.star:nth-child(4) { top: 80%; left: 70%; width: 2px; height: 2px; animation-delay: 0.6s; }
.star:nth-child(5) { top: 30%; left: 80%; width: 3px; height: 3px; animation-delay: 0.8s; }
.star:nth-child(6) { top: 10%; left: 60%; width: 2px; height: 2px; animation-delay: 1s; }
.star:nth-child(7) { top: 50%; left: 20%; width: 3px; height: 3px; animation-delay: 1.2s; }
.star:nth-child(8) { top: 70%; left: 40%; width: 4px; height: 4px; animation-delay: 1.4s; }
.star:nth-child(9) { top: 90%; left: 90%; width: 2px; height: 2px; animation-delay: 1.6s; }
.star:nth-child(10) { top: 15%; left: 85%; width: 3px; height: 3px; animation-delay: 1.8s; }
.star:nth-child(11) { top: 25%; left: 15%; width: 2px; height: 2px; animation-delay: 2s; }
.star:nth-child(12) { top: 45%; left: 75%; width: 3px; height: 3px; animation-delay: 2.2s; }
.star:nth-child(13) { top: 65%; left: 25%; width: 2px; height: 2px; animation-delay: 2.4s; }
.star:nth-child(14) { top: 85%; left: 45%; width: 4px; height: 4px; animation-delay: 2.6s; }
.star:nth-child(15) { top: 35%; left: 65%; width: 2px; height: 2px; animation-delay: 2.8s; }
.star:nth-child(16) { top: 55%; left: 85%; width: 3px; height: 3px; animation-delay: 3s; }
.star:nth-child(17) { top: 75%; left: 15%; width: 2px; height: 2px; animation-delay: 3.2s; }
.star:nth-child(18) { top: 95%; left: 35%; width: 3px; height: 3px; animation-delay: 3.4s; }
.star:nth-child(19) { top: 5%; left: 45%; width: 2px; height: 2px; animation-delay: 3.6s; }
.star:nth-child(20) { top: 15%; left: 95%; width: 4px; height: 4px; animation-delay: 3.8s; }
</style>