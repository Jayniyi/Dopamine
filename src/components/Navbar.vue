<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navItems = [
  { name: 'Home', path: '/', icon: 'bi-house' },
  { name: 'About', path: '/about', icon: 'bi-person' },
  { name: 'Projects', path: '/project', icon: 'bi-code-slash' },
  { name: 'Resume', path: '/resume', icon: 'bi-file-earmark-text' }
];
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink 
            to="/" 
            class="flex items-center space-x-2 group"
            @click="closeMenu"
          >
            <div class="w-10 h-10 bg-gradient-to-r from-[#c770F0] to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-lg">DJ</span>
            </div>
            <span class="text-white font-bold text-xl hidden sm:block group-hover:text-[#c770F0] transition-colors duration-300">
              DevJay
            </span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2',
                route.path === item.path
                  ? 'bg-[#c770F0] text-white shadow-lg shadow-purple-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              ]"
            >
              <i :class="item.icon"></i>
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Contact Button (Desktop) -->
        <div class="hidden md:block">
          <a
            href="mailto:obasanjoseph@gmail.com"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-[#c770F0] to-blue-400 text-white px-4 py-2 rounded-lg font-medium hover:from-[#b060e0] hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <i class="bi bi-envelope"></i>
            Contact
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            :class="[
              'inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300',
              'text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#c770F0]'
            ]"
          >
            <span class="sr-only">Open main menu</span>
            <div class="w-6 h-6 relative">
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                ]"
              ></span>
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3',
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                ]"
              ></span>
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                ]"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      :class="[
        'md:hidden transition-all duration-300 overflow-hidden',
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      ]"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md border-t border-white/10">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="closeMenu"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-3',
            route.path === item.path
              ? 'bg-[#c770F0] text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          ]"
        >
          <i :class="item.icon"></i>
          {{ item.name }}
        </RouterLink>
        
        <!-- Mobile Contact Button -->
        <a
          href="mailto:obasanjoseph@gmail.com"
          @click="closeMenu"
          class="block px-4 py-3 mt-4 bg-gradient-to-r from-[#c770F0] to-blue-400 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-[#b060e0] hover:to-blue-500"
        >
          <i class="bi bi-envelope mr-2"></i>
          Contact Me
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Additional styles for smooth animations */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: linear-gradient(to right, #c770F0, #60a5fa);
  border-radius: 1px;
}

/* Smooth backdrop blur transition */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Mobile menu animation */
@media (max-width: 768px) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }
  
  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>