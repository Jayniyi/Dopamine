<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Vue.js and Firebase, featuring user authentication, product management, and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that provides real-time weather information, forecasts, and interactive maps using weather APIs.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and interactive elements.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and emoji support built with modern web technologies.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Firebase", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A content management system for bloggers with rich text editor, SEO optimization, and social media integration.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Express.js", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack"
  }
]);

const selectedCategory = ref('All');
const categories = ref(['All', 'Frontend', 'Full Stack', 'Web App']);

const filteredProjects = ref(projects.value);

const filterProjects = (category) => {
  selectedCategory.value = category;
  if (category === 'All') {
    filteredProjects.value = projects.value;
  } else {
    filteredProjects.value = projects.value.filter(project => project.category === category);
  }
};

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <div class="relative lg:px-28 px-10 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          My <span class="text-[#c770F0]">Projects</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents a unique challenge 
          and showcases different aspects of my development skills.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterProjects(category)"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            selectedCategory === category
              ? 'bg-[#c770F0] text-white shadow-lg transform scale-105'
              : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-white/10"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4">
              <span class="bg-[#c770F0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-[#c770F0] transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4">
              <a
                :href="project.liveUrl"
                class="flex-1 bg-[#c770F0] text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-[#b060e0] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i class="bi bi-eye"></i>
                Live Demo
              </a>
              <a
                :href="project.githubUrl"
                class="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i class="bi bi-github"></i>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <h2 class="text-3xl font-bold text-white mb-4">
          Interested in working together?
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and exciting projects. 
          Let's create something amazing together!
        </p>
        <a
          href="mailto:obasanjoseph@gmail.com"
          class="inline-flex items-center gap-2 bg-[#c770F0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b060e0] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <i class="bi bi-envelope"></i>
          Get In Touch
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer mt-16 lg:px-8 pt-8 lg:bg-[#0a0416] capitalize border-t border-white/10">
      <div class="lg:flex justify-between text-center px-10 lg:px-28">
        <h4 class="lg:pt-5 text-gray-300">
          Designed and developed by <i class="text-[#c770F0]">obasan joseph</i>
        </h4>
        <h4 class="lg:pt-5 text-gray-300">
          <p>&copy; {{ currentYear }} DevJay. All rights reserved.</p>
        </h4>
        <div class="hidden lg:block">
          <div class="card">
            <a
              class="socialContainer containerTwo"
              href="https://x.com/OlanJayy?t=xvgrR1CmDUI_-aqYx_L5qg&s=09"
            >
              <svg viewBox="0 0 16 16" class="socialSvg twitterSvg">
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path>
              </svg>
            </a>

            <a
              class="socialContainer containerThree"
              href="https://www.instagram.com/jayni_yi/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
                xml:space="preserve"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              class="socialContainer containerFour"
              href="https://wa.me/07079887893"
            >
              <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
}

/* for all social containers*/
.socialContainer {
  width: 32px;
  height: 32px;
  background-color: rgb(65, 29, 131);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
  border-radius: 30px;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
  transform: scale(1.2);
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128c7e;
  transition-duration: 0.3s;
  transform: scale(1.2);
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>