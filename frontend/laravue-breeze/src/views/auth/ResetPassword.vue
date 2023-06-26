<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import PrimaryButton from "@/components/PrimaryButton.vue";

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const route = useRoute();
const authStore = useAuthStore();

const form = reactive({
    email: route.query.email,
    token: route.params.token,
    password: "",
    password_confirmation: "",
});
</script>
<template>
    <section class="flex items-center justify-center">
        <div
            class="w-full max-w-sm p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <form
                class="space-y-6"
                @submit.prevent="authStore.resetPassword(form)"
            >
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                    Vue Laravel Breeze Reset Password
                </h5>
                <div>
                    <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your email</label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        readonly
                    />
                    <small
                        class="text-red-500 font-medium"
                        v-if="authStore.errors && authStore.errors.email"
                        >{{ authStore.errors.email[0] }}</small
                    >
                </div>
                <div>
                    <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your password</label
                    >
                    <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                    <small
                        class="text-red-500 font-medium"
                        v-if="authStore.errors && authStore.errors.password"
                        >{{ authStore.errors.password[0] }}</small
                    >
                </div>
                <div>
                    <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Confirm your password</label
                    >
                    <input
                        v-model="form.password_confirmation"
                        type="password"
                        name="password_confirmation"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                </div>
                <PrimaryButton type="submit" :isLoading="authStore.isLoading"
                    >Reset password</PrimaryButton
                >
            </form>
        </div>
    </section>
</template>
