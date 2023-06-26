<script setup>
import { reactive, ref } from "vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Alert from "@/components/Alert.vue";

/* Using stores pinia */
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();

const form = reactive({
    email: null,
});
</script>

<template>
    <section class="flex items-center justify-center">
        <div
            class="w-full max-w-sm p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <form
                class="space-y-6"
                @submit.prevent="authStore.forgotPassword(form)"
            >
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                    Vue Laravel Breeze Forgot Password
                </h5>
                <Alert
                    :show="authStore.status"
                    :alert="'success'"
                    @close="authStore.status = null"
                >
                    {{ authStore.status }}
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
                <PrimaryButton type="submit" :isLoading="authStore.isLoading"
                    >Submit</PrimaryButton
                >
            </form>
        </div>
    </section>
</template>
