<script setup>
import { RouterView } from "vue-router";
import Nav from "@/views/layouts/Nav.vue";

/* Using composables */
// import useAuth from "@/composables/auth.js";
// const user = ref(null);
// const getCurrentUser = (data) => (user.value = data);
</script>
<template>
    <header>
        <Nav />
    </header>
    <main class="max-w-7xl mx-auto min-h-screen pt-4">
        <RouterView />
    </main>
</template>
