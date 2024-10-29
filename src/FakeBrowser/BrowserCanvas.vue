<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="browser-canvas">
    <RouterView />
  </div>
</template>

<style scoped>
.browser-canvas {
  flex-grow: 1;
  overflow: scroll;
}
</style>
