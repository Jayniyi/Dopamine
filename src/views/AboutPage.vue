<script setup>
import ProgramImg from "@/assets/img/undraw_programming_65t2.svg";

const currentYear = new Date().getFullYear();

// Enhanced skills data with cybersecurity focus
const webSkills = [
  { name: 'Vue.js', level: 90, icon: '💚', color: 'from-green-400 to-green-600' },
  { name: 'JavaScript', level: 85, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 80, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
  { name: 'Firebase', level: 85, icon: '🔥', color: 'from-orange-400 to-orange-600' },
  { name: 'HTML/CSS', level: 95, icon: '🎨', color: 'from-pink-400 to-pink-600' },
  { name: 'Tailwind CSS', level: 90, icon: '🎯', color: 'from-cyan-400 to-cyan-600' }
];

const cyberSkills = [
  { name: 'Network Security', level: 65, icon: '🛡️', color: 'from-blue-400 to-blue-600' },
  { name: 'Ethical Hacking', level: 55, icon: '🔍', color: 'from-red-400 to-red-600' },
  { name: 'Penetration Testing', level: 50, icon: '🎯', color: 'from-purple-400 to-purple-600' },
  { name: 'Security Analysis', level: 60, icon: '🔒', color: 'from-green-400 to-green-600' },
  { name: 'Vulnerability Assessment', level: 58, icon: '🔎', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Digital Forensics', level: 45, icon: '🕵️', color: 'from-indigo-400 to-indigo-600' }
];

const certifications = [
  { name: 'CompTIA Security+', status: 'In Progress', icon: '📜' },
  { name: 'Certified Ethical Hacker (CEH)', status: 'Planning', icon: '🎓' },
  { name: 'CISSP', status: 'Future Goal', icon: '🏆' }
];
</script>

<template>
  <div class="min-h-screen pt-20 relative overflow-hidden">
    <!-- Enhanced Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div
      class="relative z-10 lg:px-28 px-10 py-16"
    >
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          Know Who <span class="text-[#c770F0]">I Am</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#c770F0] to-blue-400 mx-auto mb-8 rounded-full"></div>
      </div>

      <!-- Main Content -->
      <div class="lg:flex gap-16 justify-center items-start mb-20">
        <div class="w-full mb-12 lg:mb-0">
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <i class="bi bi-person-circle text-[#c770F0]"></i>
              About Me
            </h2>
            <p class="leading-7 text-lg text-gray-300">
              My name is <span class="text-[#c770F0] font-semibold">Obasan Joseph</span>, a passionate full-stack developer from Nigeria. 
              I am completing my final year in Computer Science at Hallmark University, with a strong focus on building 
              responsive and user-friendly web applications using technologies like HTML, CSS, JavaScript, Vue.js, and Firebase.
            </p>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <i class="bi bi-shield-lock text-blue-400"></i>
              My Cybersecurity Journey
            </h3>
            <p class="leading-7 text-lg text-gray-300 mb-4">
              I am <span class="text-blue-400 font-semibold">actively venturing into cybersecurity</span> and 
              <span class="text-green-400 font-semibold">progressing daily</span> in this fascinating field. 
              My current focus areas include:
            </p>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span><strong class="text-blue-400">Ethical Hacking</strong> - Learning penetration testing methodologies</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <span><strong class="text-green-400">Network Security</strong> - Understanding security protocols and implementations</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span><strong class="text-purple-400">Vulnerability Assessment</strong> - Identifying and analyzing security weaknesses</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span><strong class="text-yellow-400">Digital Forensics</strong> - Investigating security incidents and breaches</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <i class="bi bi-trophy text-yellow-400"></i>
              Career Goals
            </h3>
            <p class="leading-7 text-lg text-gray-300">
              I interned at <span class="text-[#c770F0] font-semibold">720 Degree Innovation Hub</span> and am currently expanding into cybersecurity 
              while exploring forex trading to sharpen my analytical skills. My goal is to become a 
              <span class="text-blue-400 font-semibold">certified cybersecurity professional</span> while continuing to build secure, 
              innovative web applications.
            </p>
          </div>
          
          <div class="text-center mt-8">
            <p class="text-[#9B7EAC] text-lg italic mb-2">
              "Building bridges between ideas and reality, one secure webpage at a time."
            </p>
            <h3 class="text-[#9B7EAC] font-semibold">— Obasan Joseph</h3>
          </div>
        </div>
        
        <div class="w-full flex justify-center relative">
          <div class="relative">
            <img :src="ProgramImg" alt="Programming illustration" class="w-96 lg:w-[450px] relative z-10" />
            <!-- Floating skill badges -->
            <div class="absolute -top-4 -right-4 bg-[#c770F0]/20 backdrop-blur-sm rounded-lg p-3 animate-bounce delay-300">
              <i class="bi bi-code-slash text-2xl text-[#c770F0]"></i>
            </div>
            <div class="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 animate-bounce delay-700">
              <i class="bi bi-shield-check text-2xl text-blue-400"></i>
            </div>
            <div class="absolute top-1/2 -left-8 bg-green-500/20 backdrop-blur-sm rounded-lg p-2 animate-pulse delay-1000">
              <span class="text-sm font-semibold text-green-400">Vue.js</span>
            </div>
            <div class="absolute top-1/4 -right-8 bg-red-500/20 backdrop-blur-sm rounded-lg p-2 animate-pulse delay-1500">
              <span class="text-sm font-semibold text-red-400">Security</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
            My <span class="text-[#c770F0]">Skillset</span>
          </h1>
          <p class="text-xl text-gray-300">
            Combining <span class="text-[#c770F0]">web development</span> expertise with growing <span class="text-blue-400">cybersecurity</span> knowledge
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-[#c770F0] to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <!-- Web Development Skills -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="bi bi-code-slash text-[#c770F0]"></i>
              Web Development
            </h3>
            <div class="space-y-6">
              <div
                v-for="skill in webSkills"
                :key="skill.name"
                class="space-y-3"
              >
                <div class="flex justify-between items-center">
                  <span class="text-white font-medium flex items-center gap-3">
                    <span class="text-xl">{{ skill.icon }}</span>
                    {{ skill.name }}
                  </span>
                  <span class="text-[#c770F0] font-bold text-lg">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-3">
                  <div
                    :class="`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Cybersecurity Skills -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="bi bi-shield-check text-blue-400"></i>
              Cybersecurity <span class="text-sm bg-blue-500/20 px-2 py-1 rounded-full">Growing Daily</span>
            </h3>
            <div class="space-y-6">
              <div
                v-for="skill in cyberSkills"
                :key="skill.name"
                class="space-y-3"
              >
                <div class="flex justify-between items-center">
                  <span class="text-white font-medium flex items-center gap-3">
                    <span class="text-xl">{{ skill.icon }}</span>
                    {{ skill.name }}
                  </span>
                  <span class="text-blue-400 font-bold text-lg">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-3">
                  <div
                    :class="`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications & Learning Path -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
            Cybersecurity <span class="text-blue-400">Learning Path</span>
          </h2>
          <p class="text-xl text-gray-300">
            My journey towards becoming a certified security professional
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
          >
            <div class="text-4xl mb-4">{{ cert.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ cert.name }}</h3>
            <span 
              :class="{
                'bg-yellow-500/20 text-yellow-400': cert.status === 'In Progress',
                'bg-blue-500/20 text-blue-400': cert.status === 'Planning',
                'bg-purple-500/20 text-purple-400': cert.status === 'Future Goal'
              }"
              class="px-3 py-1 rounded-full text-sm font-semibold"
            >
              {{ cert.status }}
            </span>
          </div>
        </div>
      </div>

      <!-- Education & Experience -->
      <div class="grid lg:grid-cols-2 gap-8 mb-20">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-mortarboard text-[#c770F0]"></i>
            My Education
          </h2>
          <div class="space-y-6">
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h3 class="text-lg font-semibold text-white">Bachelor's in Computer Science</h3>
              <p class="text-[#c770F0] font-medium">Hallmark University | 2021 - 2025 (Completed)</p>
              <p class="text-gray-300 mt-2">
                Graduated with excellent performance, ranking among top students. Built multiple web projects and gained strong foundation in computer science principles.
              </p>
            </div>
            <div class="border-l-4 border-blue-400 pl-6">
              <h3 class="text-lg font-semibold text-white">Senior Secondary School</h3>
              <p class="text-blue-400 font-medium">Federal Science and Technical College (FSTC) | 2019-2021</p>
              <p class="text-gray-300 mt-2">
                Specialized in Computer Craft in CSS. Completed NECO, NABTEB, and WAEC examinations, building technical foundation.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-briefcase text-blue-400"></i>
            My Experience
          </h2>
          <div class="space-y-6">
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h3 class="text-lg font-semibold text-white">Web Developer (Self-Taught)</h3>
              <p class="text-[#c770F0] font-medium">720 Degree Innovation Hub | During University</p>
              <p class="text-gray-300 mt-2">
                Served as main manager overseeing operations and technical projects. Applied leadership skills in coordinating development teams.
              </p>
            </div>
            <div class="border-l-4 border-blue-400 pl-6">
              <h3 class="text-lg font-semibold text-white">Web Developer (Internship)</h3>
              <p class="text-blue-400 font-medium">720 Degree Innovation Hub | 2022 - 2023</p>
              <p class="text-gray-300 mt-2">
                Enhanced web development skills through hands-on experience. Collaborated with experienced developers on real-world projects.
              </p>
            </div>
            <div class="border-l-4 border-green-400 pl-6">
              <h3 class="text-lg font-semibold text-white">UI/UX Designer</h3>
              <p class="text-green-400 font-medium">720 Degree Innovation Hub | Before University</p>
              <p class="text-gray-300 mt-2">
                Built strong foundation in design principles and user experience. Created user-friendly interfaces and design systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p class="text-xl text-gray-300 mb-6">
            Let's build something amazing together - secure, innovative, and impactful.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <RouterLink 
              to="/resume" 
              class="inline-flex items-center gap-2 bg-[#c770F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b060e0] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <i class="bi bi-file-earmark-text"></i>
              View Resume
            </RouterLink>
            <RouterLink 
              to="/project" 
              class="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <i class="bi bi-code-slash"></i>
              View Projects
            </RouterLink>
            <a
              href="mailto:obasanjoseph@gmail.com"
              class="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <i class="bi bi-envelope"></i>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer mt-16 pt-8 border-t border-white/10">
        <div class="text-center">
          <h4 class="text-gray-300 mb-2">
            Designed and developed by <span class="text-[#c770F0] font-semibold">Obasan Joseph</span>
          </h4>
          <p class="text-gray-300">
            &copy; {{ currentYear }} DevJay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Enhanced animations and effects */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Skill bar animations */
.skill-bar {
  transition: width 2s ease-in-out;
}

/* Hover effects for cards */
.hover-lift:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: #c770F0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b060e0;
}
</style>

            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<style scoped>
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-image: linear-gradient(270deg, rgb(0, 0, 0), rgb(20, 15, 35));
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(134, 134, 134);
}

.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

.card:hover {
  border-color: #9b7eac;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

.buttonn {
  position: relative;
  width: 168px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
}

.buttonn, .button__icon, .button__text {
  transition: all 0.3s;
}

.buttonn .button__text {
  transform: translateX(22px);
  color: #360a4f;
  font-weight: 600;
}

.buttonn .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #3e075e;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1.3rem;
}

.buttonn .svg {
  width: 20px;
  fill: #fff;
}

.buttonn:hover .button__text {
  color: transparent;
}

.buttonn:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.buttonn:active .button__icon {
  background-color: #9B7EAC;
}

.buttonn:active {
  border: 1px solid #fff;
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

ul {
  list-style: none;
}
.icon-content svg:hover {
  fill: #0274b3;
}
.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
  background-color: #25d366;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color: #24262a;
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #25d366,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #0274b3
  );
}
.example-2 .icon-content a[data-social="youtube"] .filled,
.example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
  background-color: #0274b3;
}

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
.cardd {
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
}

</style>