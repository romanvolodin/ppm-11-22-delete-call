<script setup>
// import { useRoute } from 'vue-router'

import battery_icon from '@/MobileDevice/assets/icons/battery-half.svg'
import wifi_icon from '@/MobileDevice/assets/icons/wifi.svg'
import network_icon from '@/MobileDevice/assets/icons/reception-4.svg'

// const route = useRoute()
</script>

<template>
  <main class="bar">
    <div class="icons">
      <img :src="network_icon" style="width: 16px" />
      <img :src="wifi_icon" style="width: 18px" />
      <img :src="battery_icon" style="width: 22px" />
      <span class="battery-percentage">38%</span>
    </div>
    <div class="time">20:46</div>
  </main>
</template>

<style scoped>
.bar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background-color: #00000008;
  padding: 3px 13px;
  width: 100%;
  font-size: 14px;
}
.icons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.time {
  font-weight: 500;
}
.battery-percentage {
  font-weight: bold;
}
</style>
