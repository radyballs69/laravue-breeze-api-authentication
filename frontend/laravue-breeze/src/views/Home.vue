<script setup></script>
<template>
    <section class="flex items-center justify-center">
        <div
            class="max-w-md p-6 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <a href="#">
                <h2
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Welcome to Vue Authentication
                </h2>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This mini system is using Laravel Breeze API for the backend
                authentication. Frontend using Tailwind CSS and Flowbite design
                template.
            </p>
            <div class="flex space-x-2 mt-4">
                <RouterLink
                    :to="{ name: 'login' }"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </RouterLink>
                <RouterLink
                    :to="{ name: 'register' }"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Register
                </RouterLink>
            </div>
        </div>
    </section>
</template>
