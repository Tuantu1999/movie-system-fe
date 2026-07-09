import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Intro from "@/views/intro/Intro.vue";
import Login from "@/views/login/Login.vue";
import ForgotPassword from "@/views/login/ForgotPassword.vue";
import Register from "@/views/login/Register.vue";
import ResetPassword from "@/views/login/ResetPassword.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/intro",
    children: [
      {
        path: "/intro",
        name: "Intro",
        component: Intro,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const protectedPaths = ["/reset-password"];

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  const requiresAuth =
    protectedPaths.includes(to.path) ||
    to.matched.some((record) => record.meta?.requiresAuth);

  if (requiresAuth && !token) {
    next({ path: "/login", query: { redirect: to.fullPath } });
    return;
  }

  next();
});

export default router;
