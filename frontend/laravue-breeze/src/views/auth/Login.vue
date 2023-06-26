<script setup>
import { reactive } from "vue";
import Link from "@/components/Link.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Alert from "@/components/Alert.vue";

/* Using composables */
// import useAuth from "@/composables/auth.js";

// const { errors, login } = useAuth();

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();

const form = reactive({
    email: "",
    password: "",
    remember: false,
});
</script>
<template>
    <section class="flex items-center justify-center">
        <div
            class="w-full max-w-sm p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <form class="space-y-6" @submit.prevent="authStore.login(form)">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                    Vue Laravel Breeze Login
                </h5>
                <Alert
                    :show="authStore.status"
                    :alert="'success'"
                    @close="authStore.status = null"
                >
                    {{ authStore.status }}
                    <span>
                        You may
                        <Link :to="{ name: 'login' }">login</Link> now!</span
                    >
                </Alert>
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
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                v-model="form.remember"
                                id="remember"
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            />
                        </div>
                        <label
                            for="remember"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Remember me</label
                        >
                    </div>
                    <Link
                        :to="{ name: 'forgot-password' }"
                        class="ml-auto text-sm"
                        >Forgot password?</Link
                    >
                </div>
                <PrimaryButton type="submit" :isLoading="authStore.isLoading"
                    >Login to your account</PrimaryButton
                >
                <div
                    class="text-sm font-medium text-gray-500 dark:text-gray-300"
                >
                    Not registered?
                    <Link :to="{ name: 'register' }">Create account</Link>
                </div>
            </form>
        </div>
    </section>
</template>
