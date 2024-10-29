<script setup>
import TopBar from '@/MobileDevice/components/TopBar.vue'
import BottomBar from '@/MobileDevice/components/BottomBar.vue'
</script>

<template>
  <main class="wrapper bg">
    <TopBar />
    <div class="main">
      <h1 class="header">Геопозиция</h1>
      <h2 class="device">Устройство "Александр"</h2>
      <div class="box">
        <span class="title">Найти телефон</span>
        <span class="value">Вкл.</span>
      </div>
      <p class="help">Телефон и другие поддерживаемые устройства будут отображаться на карте.</p>
      <div class="box">
        <span class="title">Моя геопозиция</span>
        <span class="value">Это устройство</span>
      </div>
      <div class="box">
        <span class="title">Поделиться геопозицией</span>
        <div class="switch">
          <div></div>
        </div>
      </div>
      <p class="help">
        Поделитесь свой геопозицией со своей семьей и друзьями в приложениях "Мессенджер" и
        "Геопозиция".
      </p>
    </div>
    <BottomBar />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 15px;
}
.header {
  margin: 0;
}
.device {
  margin-bottom: 20px;
  font-size: 18px;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: hsl(175, 10%, 92%);
  padding: 15px;
  width: 100%;
}
.title {
  font-weight: bold;
  font-size: 19px;
}
.switch {
  display: flex;
  align-items: center;
  border-radius: 50vh;
  background-color: #9d9d9d;
  padding: 3px;
  width: 50px;
  height: 30px;
}
.switch > div {
  border-radius: 50vh;
  background-color: white;
  width: 24px;
  height: 24px;
}
.help {
  margin-bottom: 25px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1.2;
}
</style>
