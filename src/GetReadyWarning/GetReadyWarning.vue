<script setup>
import { ref } from 'vue'

const isNotIphone = ref(!window.navigator.userAgent.toLowerCase().includes('iphone'))

function openFullscreen() {
  const elem = document.documentElement

  const safari = elem.webkitRequestFullscreen
  const ie11 = elem.msRequestFullscreen

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (safari) {
    elem.webkitRequestFullscreen()
  } else if (ie11) {
    elem.msRequestFullscreen()
  }
}

function hideButton() {
  const button = document.getElementById('get-ready-warning')
  button.style.display = 'none'
}
</script>

<template>
  <button
    @click.self="openFullscreen"
    class="get-ready-warning"
    id="get-ready-warning"
    v-show="isNotIphone"
  >
    <button @click="hideButton" class="hide-warning">✕</button>
    🚨 🚨 🚨<br />Приготовились к съемке!<br />🚨 🚨 🚨
  </button>
</template>

<style scoped>
.get-ready-warning {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 20px;

  border: 0;
  border-radius: 10px;
  background-color: #ffb300;
  width: 350px;

  color: #000;
  font-size: 20px;
}

.get-ready-warning:hover {
  background-color: #ffd000;
  color: #2c2c2c;
}

.hide-warning {
  position: absolute;
  right: 0;
  margin: 4px;

  border: 0;
  border-radius: 7px;

  background-color: #ff9915;
  width: 40px;
  height: 40px;
}

:fullscreen .get-ready-warning {
  display: none;
}

:-ms-fullscreen .get-ready-warning {
  display: none;
}

:-webkit-full-screen .get-ready-warning {
  display: none;
}
</style>
