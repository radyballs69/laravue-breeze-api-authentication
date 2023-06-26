<script setup>
import { RouterLink, useLink } from "vue-router";
import { computed } from "vue";

const props = {
    ...RouterLink.props,
    inactiveClass: String,
};
const {
    // the resolved route object
    route,
    // the href to use in a link
    href,
    // boolean ref  indicating if the link is active
    isActive,
    // boolean ref  indicating if the link is exactly active
    isExactActive,
    // function to navigate to the link
    navigate,
} = useLink(props);

const isExternalLink = computed(
    () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<template>
    <a
        v-if="isExternalLink"
        v-bind="$attrs"
        :href="to"
        class="text-blue-700 hover:underline dark:text-blue-500"
        target="_blank"
    >
        <slot />
    </a>
    <RouterLink
        v-else
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        class="text-blue-700 hover:underline dark:text-blue-500"
    >
        <slot />
    </RouterLink>
</template>
