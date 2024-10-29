<script setup>
import BrowserBar from '@/FakeBrowser/BrowserBar.vue'
import BrowserCanvas from '@/FakeBrowser/BrowserCanvas.vue'
import GetReadyWarning from '@/GetReadyWarning/GetReadyWarning.vue'
</script>

<template>
  <div class="wrapper">
    <BrowserBar />
    <BrowserCanvas />
    <!-- <GetReadyWarning /> -->
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
@media (max-width: 1000px) {
  .wrapper {
    height: auto;
  }
}
</style>
