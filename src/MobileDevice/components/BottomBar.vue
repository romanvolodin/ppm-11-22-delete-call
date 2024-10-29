<script setup>
import { useRouter } from 'vue-router'
import square_icon from '@/MobileDevice/assets/icons/square-fill.svg'
import circle_icon from '@/MobileDevice/assets/icons/circle-fill.svg'
import triangle_icon from '@/MobileDevice/assets/icons/caret-left-fill.svg'
const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <main class="bar">
    <div class="icons">
      <img :src="square_icon" style="width: 16px" />
      <img :src="circle_icon" style="width: 16px" />
      <img :src="triangle_icon" style="width: 22px" @click="goBack" />
    </div>
  </main>
</template>

<style scoped>
.bar {
  display: flex;
  justify-content: space-around;
  background-color: #00000010;
  padding: 3px;
  padding-bottom: 5px;
  width: 100%;
}
.icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  width: 250px;
}
</style>
