<script setup>
import { RouterView, useRouter } from "vue-router";
import Nav from "@/views/layouts/Nav.vue";
</script>
<template>
    <header>
        <Nav />
    </header>
    <main class="max-w-7xl mx-auto min-h-screen">
        <RouterView />
    </main>
</template>
