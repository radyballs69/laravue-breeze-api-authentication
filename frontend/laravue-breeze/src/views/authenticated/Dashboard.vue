<script setup>
import LoadingFull from "@/components/LoadingFull.vue";
/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
    <LoadingFull :show="!authStore.user" />
    <section class="md:container pt-4" v-show="authStore.user">
        <h1 class="text-lg font-medium text-center py-3 bg-gray-100 rounded">
            Welcome {{ authStore?.user?.name }}
        </h1>
        <p class="text-center mt-1">
            You're logging in using this email:
            <strong>{{ authStore?.user?.email }}</strong
            >.
        </p>
    </section>
</template>
