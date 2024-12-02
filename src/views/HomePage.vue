<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeroImg from "@/assets/img/undraw_web_developer_re_h7ie.svg";
import AboutImg from "@/assets/img/about-svg.svg";
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
  <div class="hero-container min-h-screen w-full overflow:">
    <div
      class="relative md:top-20 top-24 lg:top-40 md:flex md:justify-between lg:px-28 px-10 md:px-24 md:py-10 w-full h-full"
    >
      <div class="lg:pt-10">
        <h1 class="text-4xl font-bold text-white capitalize">
          Hi there! <span class="wave-hand" aria-hidden="true">👋</span>
        </h1>
        <h1 class="md:text-3xl lg:text-4xl pt-5 font-bold text-white">
          I'M <span class="text-[#c770F0]">OBASAN JOSEPH OLANIYI</span>
        </h1>
        <div class="text-2xl pt-5 py-7">
          <span class="gradient-text">I </span>
          <span class="relative gradient-text">
            <span aria-live="polite">{{ displayText }}</span>
            <span
              v-if="cursorVisible"
              class="absolute top-0 animate-blink"
              aria-hidden="true"
            >
            </span>
          </span>
        </div>
      </div>
      <div>
        <img :src="HeroImg" alt="Hero Image" class="w-96" />
      </div>
    </div>
  </div>
  <!-- about me section  -->
  <div class="pt-20">
    <div>
      <h1>About Me</h1>
      <div class="md:flex md:justify-center gap-4 lg:px-28">
        <div class="w-full">
          <p class="text-xl">
            Hello! I'm a passionate Front-End Developer based in Nigeria,
            aspiring to become a Full-Stack Developer. I thrive on transforming
            complex problems into simple, beautiful, and intuitive designs. My
            goal is to build websites that are not only functional and
            user-friendly but also visually appealing. I believe in adding a
            personal touch to every project, ensuring that the final product is
            eye-catching and easy to navigate.
          </p> <br> 
          <!-- <p>
            As a tech enthusiast, I am deeply committed to continuously
            enhancing my web development skills. I enjoy problem-solving and
            writing code, always eager to explore new technologies. Currently,
            I'm also diving into the world of cybersecurity, aiming to broaden
            my expertise and secure digital spaces.
          </p> -->
          <!-- <p>
            When I'm not coding, you can find me gaming, listening to music, or
            watching anime. I also love working out and enjoying comedies. I’m
            passionate about sharing knowledge and meeting new people, as I
            believe collaboration is key to growth in the tech community.
          </p> -->
        </div>
         <div class="w-full -mt-9">
          <img :src="AboutImg" alt="" srcset="" class="w-96">
         </div>
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
