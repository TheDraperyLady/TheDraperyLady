<template>
  <RouterLink v-if="isInternal" :to="href" v-bind="$attrs">
    <slot />
  </RouterLink>
  <a v-else :href="href" target="_blank" rel="noopener noreferrer" v-bind="$attrs">
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
})

const isInternal = computed(() => {
  return props.href.startsWith('/') || props.href.startsWith('#')
})
</script>
