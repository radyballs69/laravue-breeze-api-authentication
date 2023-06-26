<script setup>
import { RouterLink, useLink } from "vue-router";
import { computed, reactive } from "vue";

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

const classType = reactive({
    default:
        "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
    active: "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
});

const isExternalLink = computed(
    () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<template>
    <a
        v-if="isExternalLink"
        v-bind="$attrs"
        :href="to"
        :class="classType.default"
        target="_blank"
    >
        <slot />
    </a>
    <RouterLink
        v-else
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        :class="
            route.name === $attrs.to.name ? classType.active : classType.default
        "
        class="block py-2 pl-3 pr-4"
    >
        <slot />
    </RouterLink>
</template>
