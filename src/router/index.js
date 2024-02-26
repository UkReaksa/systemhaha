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
    {
      path: "/All",
      name: "All",
      component: () => import("../views/All.vue"),
    },
    {
      path: "/Drk",
      name: "Drk",
      component: () => import("../components/Drk.vue"),
    },
    {
      path: "/Kound",
      name: "Kound",
      component: () => import("../components/Kound.vue"),
    },
    {
      path: "/Jeak",
      name: "Jeak",
      component: () => import("../components/Jeak.vue"),
    },
    
  ],
});

export default router;
