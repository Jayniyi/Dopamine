<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

const skills = ref([
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'React', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Firebase', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Git/GitHub', level: 85 }
]);

const downloadResume = () => {
  // Create a simple resume content
  const resumeContent = `
OBASAN JOSEPH OLANIYI
Full-Stack Developer

Contact Information:
Email: obasanjoseph@gmail.com
Phone: +234 707 988 7893
Location: Nigeria

SUMMARY
Passionate Full-stack Developer with expertise in modern web technologies including Vue.js, React, and Firebase. 
Currently completing final year in Computer Science at Hallmark University with strong focus on building 
responsive and user-friendly web applications.

EDUCATION
Bachelor's in Computer Science
Hallmark University | 2021 - 2025
- Top performing student
- Built multiple web projects during studies

Senior Secondary School
Federal Science and Technical College (FSTC) | 2019-2021
- Computer Craft in CSS
- Completed NECO, NABTEB, and WAEC exams

EXPERIENCE
Web Developer (Self-Taught)
720 Degree Innovation Hub | During University
- Served as main manager overseeing operations
- Applied leadership skills in technical role

Web Developer (Internship)
720 Degree Innovation Hub | 2022 - 2023
- Enhanced web development skills
- Worked with development team
- Gained hands-on experience

UI/UX Designer
720 Degree Innovation Hub | Before University
- Built foundation in design principles
- Created user-friendly interfaces

TECHNICAL SKILLS
- Frontend: HTML5, CSS3, JavaScript, Vue.js, React
- Styling: Tailwind CSS, Bootstrap, Bulma
- Backend: Node.js, Firebase
- Tools: Git, GitHub, VS Code, Figma
- Other: Responsive Design, RESTful APIs

PROJECTS
- E-Commerce Platform (Vue.js, Firebase)
- Task Management App (Vue.js, Node.js)
- Weather Dashboard (JavaScript, APIs)
- Portfolio Website (Vue.js, Tailwind CSS)

INTERESTS
- Cybersecurity (expanding knowledge)
- Forex Trading (analytical skills development)
- Continuous Learning in Web Technologies
`;

  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Obasan_Joseph_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
</script>

<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <div class="relative lg:px-28 px-10 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          My <span class="text-[#c770F0]">Resume</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Download my resume or view my qualifications, experience, and skills below.
        </p>
        <button
          @click="downloadResume"
          class="inline-flex items-center gap-3 bg-[#c770F0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b060e0] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <i class="bi bi-download text-xl"></i>
          Download Resume
        </button>
      </div>

      <!-- Resume Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Personal Info -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white mb-2">OBASAN JOSEPH OLANIYI</h2>
            <p class="text-xl text-[#c770F0] mb-4">Full-Stack Developer</p>
            <div class="flex flex-wrap justify-center gap-6 text-gray-300">
              <div class="flex items-center gap-2">
                <i class="bi bi-envelope"></i>
                <span>obasanjoseph@gmail.com</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-phone"></i>
                <span>+234 707 988 7893</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-geo-alt"></i>
                <span>Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <i class="bi bi-person-circle text-[#c770F0]"></i>
            Professional Summary
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Passionate Full-stack Developer with expertise in modern web technologies including Vue.js, React, and Firebase. 
            Currently completing final year in Computer Science at Hallmark University with strong focus on building 
            responsive and user-friendly web applications. Experienced in both frontend and backend development with 
            a keen eye for UI/UX design and a growing interest in cybersecurity.
          </p>
        </div>

        <!-- Education -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-mortarboard text-[#c770F0]"></i>
            Education
          </h3>
          <div class="space-y-6">
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h4 class="text-xl font-semibold text-white">Bachelor's in Computer Science</h4>
              <p class="text-[#c770F0] font-medium">Hallmark University | 2021 - 2025</p>
              <ul class="text-gray-300 mt-2 space-y-1">
                <li>• Top performing student with excellent academic record</li>
                <li>• Built multiple web projects during studies</li>
                <li>• Strong foundation in computer science principles</li>
              </ul>
            </div>
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h4 class="text-xl font-semibold text-white">Senior Secondary School</h4>
              <p class="text-[#c770F0] font-medium">Federal Science and Technical College (FSTC) | 2019-2021</p>
              <ul class="text-gray-300 mt-2 space-y-1">
                <li>• Computer Craft in CSS specialization</li>
                <li>• Completed NECO, NABTEB, and WAEC examinations</li>
                <li>• Built technical foundation in computer systems</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-briefcase text-[#c770F0]"></i>
            Professional Experience
          </h3>
          <div class="space-y-6">
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h4 class="text-xl font-semibold text-white">Web Developer (Self-Taught)</h4>
              <p class="text-[#c770F0] font-medium">720 Degree Innovation Hub | During University</p>
              <ul class="text-gray-300 mt-2 space-y-1">
                <li>• Served as main manager overseeing operations and technical projects</li>
                <li>• Applied leadership skills in coordinating development teams</li>
                <li>• Managed multiple web development projects simultaneously</li>
              </ul>
            </div>
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h4 class="text-xl font-semibold text-white">Web Developer (Internship)</h4>
              <p class="text-[#c770F0] font-medium">720 Degree Innovation Hub | 2022 - 2023</p>
              <ul class="text-gray-300 mt-2 space-y-1">
                <li>• Enhanced web development skills through hands-on experience</li>
                <li>• Collaborated with experienced developers on real-world projects</li>
                <li>• Gained proficiency in modern web development frameworks</li>
              </ul>
            </div>
            <div class="border-l-4 border-[#c770F0] pl-6">
              <h4 class="text-xl font-semibold text-white">UI/UX Designer</h4>
              <p class="text-[#c770F0] font-medium">720 Degree Innovation Hub | Before University</p>
              <ul class="text-gray-300 mt-2 space-y-1">
                <li>• Built strong foundation in design principles and user experience</li>
                <li>• Created user-friendly interfaces and design systems</li>
                <li>• Developed skills in Figma and design thinking</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-code-slash text-[#c770F0]"></i>
            Technical Skills
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-white font-medium">{{ skill.name }}</span>
                <span class="text-[#c770F0] font-semibold">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white/10 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[#c770F0] to-[#b060e0] h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Highlight -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="bi bi-laptop text-[#c770F0]"></i>
            Featured Projects
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 class="text-lg font-semibold text-white mb-2">E-Commerce Platform</h4>
              <p class="text-gray-300 text-sm mb-3">Full-stack solution with Vue.js and Firebase</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-[#c770F0]/20 text-[#c770F0] px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-[#c770F0]/20 text-[#c770F0] px-2 py-1 rounded text-xs">Firebase</span>
              </div>
            </div>
            <div class="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 class="text-lg font-semibold text-white mb-2">Task Management App</h4>
              <p class="text-gray-300 text-sm mb-3">Real-time collaboration with drag-and-drop</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-[#c770F0]/20 text-[#c770F0] px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-[#c770F0]/20 text-[#c770F0] px-2 py-1 rounded text-xs">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
          <p class="text-gray-300 mb-6">Let's discuss how I can contribute to your next project.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:obasanjoseph@gmail.com"
              class="inline-flex items-center gap-2 bg-[#c770F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b060e0] transition-all duration-300 hover:scale-105"
            >
              <i class="bi bi-envelope"></i>
              Email Me
            </a>
            <a
              href="https://wa.me/07079887893"
              class="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <i class="bi bi-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>