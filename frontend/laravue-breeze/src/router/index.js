import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/authenticated/Dashboard.vue"),
        meta: { middleware: "auth" },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/auth/Login.vue"),
        meta: { middleware: "guest" },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/Register.vue"),
        meta: { middleware: "guest" },
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("@/views/auth/ForgotPassword.vue"),
        meta: { middleware: "guest" },
    },
    {
        path: "/password-reset/:token",
        name: "password-reset",
        component: () => import("@/views/auth/ResetPassword.vue"),
        meta: { middleware: "guest" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
