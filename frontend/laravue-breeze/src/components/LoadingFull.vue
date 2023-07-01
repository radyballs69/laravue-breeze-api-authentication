<script setup>
import { computed } from "vue";

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div
        v-show="show"
        class="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50"
    >
        <div class="grid grid-rows-2 text-center top-1/2 my-0 mx-auto relative">
            <div class="flex justify-center space-x-2 animate-pulse">
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
            <div class="text-gray-600 font-medium">
                Please wait while loading...
            </div>
        </div>
    </div>
</template>
