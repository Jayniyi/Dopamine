import { createRouter, createWebHistory } from "vue-router";

// Import the pages (components)
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";

// Define routes
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
