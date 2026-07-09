import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/Login.vue";
import Register from "@/views/login/Register.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
