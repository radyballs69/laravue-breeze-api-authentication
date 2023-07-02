<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import Nav from "@/views/layouts/Nav.vue";

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

// const router = useRouter();

// router.beforeEach(async (to, from) => {
//     const authStore = useAuthStore();
//     await authStore.checkUserAuth();

//     if (to.meta.middleware === "auth") {
//         if (!authStore.isLoggedIn) return "/login";
//     } else {
//         if (authStore.isLoggedIn) return "/dashboard";
//     }
// });
</script>
<template>
    <header>
        <Nav />
    </header>
    <main class="max-w-7xl mx-auto min-h-screen">
        <RouterView />
    </main>
</template>
