<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import Nav from "@/views/layouts/Nav.vue";

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
const router = useRouter();
const isLoggedIn = ref(authStore.isLoggedIn());

router.beforeEach((to, from) => {
    if (to.meta.middleware === "auth") {
        if (!isLoggedIn) return { path: "/login" };
    } else {
        if (isLoggedIn) return { path: "/dashboard" };
    }
});
</script>
<template>
    <header>
        <Nav />
    </header>
    <main class="max-w-7xl mx-auto min-h-screen">
        <RouterView />
    </main>
</template>
