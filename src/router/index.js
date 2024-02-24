import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoxVue from "../views/Box.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Sum",
      name: "Sum",
      component: () => import("../views/Sum.vue"),
    },
    {
      path: "/Main",
      name: "Main",
      component: () => import("../views/Main.vue"),
    },
    
  ],
});

export default router;
