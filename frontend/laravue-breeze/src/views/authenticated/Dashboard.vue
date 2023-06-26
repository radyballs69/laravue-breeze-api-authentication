<script setup>
import { onMounted } from "vue";

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
onMounted(() => {
    authStore.getCurrentUser();
});

/* Using composables */
// import useAuth from "@/composables/auth.js";

// const { user, getCurrentUser } = useAuth();
// const emit = defineEmits(["mounted"]);

// onMounted(() => {
//     getCurrentUser();
//     emit("mounted", user);
// });
</script>
<template>
    <section class="md:container">
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
