<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeroImg from "@/assets/img/undraw_web_developer_re_h7ie.svg";

const textOptions = [
  "Learn Everyday",
  "Build My Ideas",
  "Write and test Codes",
  "Explore New Technologies",
  "Collaborate with Others",
  "Create Impactful Solutions",
  "Lead Innovative Projects",
];
const currentTextIndex = ref(0);
const currentCharIndex = ref(0);
const isTyping = ref(true);
const cursorVisible = ref(true);
const typingSpeed = 150; // Adjust this value to control typing speed (in milliseconds)

const currentText = computed(() => textOptions[currentTextIndex.value]);
const displayText = computed(() =>
  currentText.value.slice(0, currentCharIndex.value)
);

let animationFrame;

const animate = () => {
  if (isTyping.value) {
    // Typing Mode
    if (currentCharIndex.value < currentText.value.length) {
      currentCharIndex.value++;
      setTimeout(animate, typingSpeed); // Typing delay
    } else {
      isTyping.value = false; // Switch to backspacing mode
      setTimeout(animate, 2000); // Pause before backspacing
    }
  } else {
    // Backspacing Mode
    if (currentCharIndex.value > 0) {
      currentCharIndex.value--;
      setTimeout(animate, typingSpeed); // Backspacing delay
    } else {
      // Switch back to typing mode after backspacing
      isTyping.value = true;
      currentTextIndex.value =
        (currentTextIndex.value + 1) % textOptions.length; // Move to next text
      setTimeout(animate, typingSpeed); // Start typing again
    }
  }
};

onMounted(() => {
  animationFrame = requestAnimationFrame(animate);
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="hero-container md:h-screen h-screen w-full">
    <div
      class="relative md:top-20 top-24 lg:top-40 md:flex md:justify-between lg:px-28 md:px-24 md:py-10 w-full h-full"
    >
      <div class="lg:pt-10">
        <h1 class="text-4xl font-bold text-white capitalize">
          Hi there! <span class="wave-hand" aria-hidden="true">👋</span>
        </h1>
        <h1 class="md:text-3xl lg:text-4xl pt-5 font-bold text-white">
          I'M <span class="text-[#c770F0]">OBASAN JOSEPH OLANIYI</span>
        </h1>
        <div class="text-2xl pt-5">
          <span class="gradient-text">I &nbsp;</span>
          <span class="relative gradient-text">
            <span aria-live="polite">{{ displayText }}</span>
            <span
              v-if="cursorVisible"
              class="absolute top-0 animate-blink"
              aria-hidden="true"
            >
              |
            </span>
          </span>
        </div>
      </div>
      <div>
        <img :src="HeroImg" alt="Hero Image" class="w-96" />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --wave-duration: 1s;
  --blink-duration: 1s;
}

.gradient-text {
  background: linear-gradient(to right, #ffffff, #ff77b4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.wave-hand {
  font-size: 3rem;
  display: inline-block;
  animation: wave var(--wave-duration) infinite ease-in-out;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink var(--blink-duration) infinite;
}
</style>
