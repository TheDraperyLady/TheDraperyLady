<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watch } from 'vue'
import ElegantFooter from './components/ElegantFooter.vue'
import ElegantNav from './components/ElegantNav.vue'

const route = useRoute()

// Watch for route changes and force scroll to top
watch(
  () => route.path,
  () => {
    // Force scroll to top on every route change
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="app-container">
    <ElegantNav />
    <RouterView />
    <ElegantFooter />
  </div>
</template>

<style>
/* Base styles without layout constraints */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  min-height: 100vh;
  color: #333;
  background: #ffffff;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main content should take up available space, pushing footer to bottom */
.app-container > *:not(.elegant-footer) {
  flex: 1 0 auto;
}

/* Remove any grid layout constraints */
@media (min-width: 1024px) {
  #app {
    display: block;
  }
}
</style>
