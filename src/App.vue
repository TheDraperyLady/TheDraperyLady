<script setup>
import { RouterView } from 'vue-router'
import DesignSwitcher from './components/DesignSwitcher.vue'
</script>

<template>
  <RouterView />
  <DesignSwitcher />
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

/* Remove any grid layout constraints */
@media (min-width: 1024px) {
  #app {
    display: block;
  }
}
</style>
