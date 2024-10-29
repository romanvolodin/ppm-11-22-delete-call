<script setup>
import router from '@/router'
import { useRoute } from 'vue-router'

import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import DotsVerticalIcon from './icons/DotsVerticalIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
import LockIcon from './icons/LockIcon.vue'
import RectangleVerticalIcon from './icons/RectangleVerticalIcon.vue'
import ReloadIcon from './icons/ReloadIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import WorldIcon from './icons/WorldIcon.vue'
import { useFakeBrowserStore } from './store/fake-browser'

const fakeBrowser = useFakeBrowserStore()
const route = useRoute()

function exitFullscreen() {
  const safari = document.webkitExitFullscreen
  const ie11 = document.msExitFullscreen

  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (safari) {
    document.webkitExitFullscreen()
  } else if (ie11) {
    document.msExitFullscreen()
  }
}
function goBack() {
  router.go(-1)
}
function goForward() {
  router.go(1)
}
function openNewTab() {
  fakeBrowser.tabs.forEach((tab) => {
    tab.active = false
  })
  fakeBrowser.tabs.push({
    active: true,
    address: 'Введите адрес или поисковый запрос',
    favicon: '',
    title: 'Новая вкладка',
  })
}
</script>

<template>
  <div class="browser-bar">
    <div class="tabs hide-on-mobile">
      <div
        :class="{ 'active-tab': tab.active }"
        :key="index"
        class="tab"
        v-for="(tab, index) in fakeBrowser.tabs"
      >
        <div class="tab-favicon">
          <WorldIcon :size="18" v-if="tab.active" />
          <WorldIcon :size="18" v-else />
        </div>
        <span class="tab-title" v-if="tab.active">{{ route.meta.fakeTitle }}</span>
        <span class="tab-title" v-else>{{ tab.title }}</span>
        <span class="tab-close">✕</span>
      </div>
      <div class="spacer">
        <span @click="openNewTab()" class="tab-new">+</span>
      </div>
      <button @click="exitFullscreen" class="exit-fullscreen">✕</button>
    </div>
    <div class="address-bar-panel">
      <ArrowLeftIcon :size="32" @click="goBack" class="browser-bar-icon" />
      <ArrowRightIcon :size="32" @click="goForward" class="browser-bar-icon" />
      <ReloadIcon :size="30" class="browser-bar-icon hide-on-mobile" />
      <HomeIcon :size="30" class="browser-bar-icon hide-on-mobile" />
      <div class="address-bar">
        <LockIcon :size="16" class="address-bar-icon" />
        <input
          autofocus
          class="address-field"
          name="search"
          type="text"
          v-model="route.meta.fakeUrl"
        />
        <StarIcon :size="16" class="address-bar-icon" />
      </div>
      <RectangleVerticalIcon :size="30" class="browser-bar-icon hide-on-mobile" />
      <DotsVerticalIcon :size="30" class="browser-bar-icon hide-on-mobile" />
      <button @click="exitFullscreen" class="exit-fullscreen show-on-mobile">✕</button>
    </div>
  </div>
</template>

<style scoped>
* {
  --bg-color-primary: #353637;
  --bg-color-primary-hover: color-mix(in srgb, var(--bg-color-primary), #fff 15%);
  --bg-color-secondary: color-mix(in srgb, var(--bg-color-primary), #000 35%);
  --text-color-active: color-mix(in srgb, var(--bg-color-primary), #fff 70%);
  --text-color-muted: color-mix(in srgb, var(--bg-color-primary), #fff 30%);
}

.browser-bar {
  display: none;
  background-color: var(--bg-color-secondary);
  padding-top: 5px;
  width: 100%;
  font-family: sans-serif;
}

.tabs {
  display: flex;
  background-color: var(--bg-color-secondary);
}

.tab {
  display: flex;
  align-items: center;
  margin: 0 1px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 250px;
  height: 32px;
  color: var(--text-color-muted);
  font-size: 12px;
}

.active-tab {
  background-color: var(--bg-color-primary);
  color: var(--text-color-active);
}

.tab-favicon {
  margin: 0 7px;
}

.tab-title {
  flex-grow: 1;
  overflow: hidden;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-close {
  margin: 07px;
  user-select: none;
}

.spacer {
  flex-grow: 1;
}

.tab-new {
  padding: 0 10px;
  color: var(--text-color-active);
  font-weight: 500;
  font-size: 19px;
  user-select: none;
}

.exit-fullscreen {
  border: 0;
  background-color: var(--bg-color-primary);
  padding: 0 10px;
  color: var(--text-color-active);
}

:fullscreen .browser-bar {
  display: block;
}

:-ms-fullscreen .browser-bar {
  display: block;
}

:-webkit-full-screen .browser-bar {
  display: block;
}

.address-bar-panel {
  display: flex;
  align-items: center;
  background-color: var(--bg-color-primary);
  padding: 5px;
  color: var(--text-color-active);
}

.address-bar {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
  border-radius: 50vh;
  background-color: var(--bg-color-secondary);
  height: 34px;
}

.address-field {
  flex-grow: 1;
  border: none;
  background-color: inherit;
  color: var(--text-color-active);
  font-size: 14px;
}

.address-field:focus {
  outline: none;
}

.address-bar-icon {
  margin: 5px 10px;
}

.browser-bar-icon {
  border-radius: 50vh;
  padding: 5px 5px;
}

.browser-bar-icon:hover {
  background-color: var(--bg-color-primary-hover);
}
.show-on-mobile {
  display: none;
}
@media (max-width: 1000px) {
  .hide-on-mobile {
    display: none;
  }
  .show-on-mobile {
    display: block;
  }
}
</style>
