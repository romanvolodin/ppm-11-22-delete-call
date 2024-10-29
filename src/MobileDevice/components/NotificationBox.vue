<script setup>
import chevron_icon from '@/MobileDevice/assets/icons/chevron-down.svg'
import person_icon from '@/MobileDevice/assets/icons/person-fill.svg'
import { computed } from 'vue'
const props = defineProps({
  iconColor: String,
  sender: String,
  time: String,
  body: String,
})
const color = computed(() => {
  return { 'background-color': props.iconColor }
})
</script>

<template>
  <div class="box">
    <div class="grp">
      <img class="icon" :src="person_icon" :style="color" />
      <div class="text">
        <p class="top">
          <span class="sender">{{ sender }}</span>
          •
          <span class="time">{{ time }}</span>
        </p>
        <p class="body">{{ body }}</p>
      </div>
    </div>

    <img class="icon-chevron" :src="chevron_icon" />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 10px 20px #0003;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  width: 100%;
}
.grp {
  display: flex;
  align-items: start;
  gap: 15px;
}
.text {
  display: flex;
  flex-direction: column;
}
.top {
  font-size: 14px;
}
.icon {
  border-radius: 50vh;
  /* background-color: coral; */
  padding: 10px;
  width: 35px;
  height: 35px;
}
.sender {
  font-weight: bold;
}
.time {
  color: gray;
}
.body {
  font-size: 18px;
}
.icon-chevron {
  border-radius: 50vh;
  background-color: #f2f2f2;
  padding: 5px;
  width: 25px;
  height: 25px;
}
</style>
