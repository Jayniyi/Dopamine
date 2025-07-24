import { createRouter, createWebHistory } from "vue-router";

// Import the pages (components)
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import Project from "@/views/Project.vue";

// Define routes
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  {path: "/project", name: "Project", component: Project, props: true },

];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
