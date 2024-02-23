import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Sum from "../views/Sum.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/Sum",
          name: "Sum",
          component: Sum,
        }
       
      ],
    },
  ],
});

export default router;
