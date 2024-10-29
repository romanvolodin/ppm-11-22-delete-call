<script setup>
import TopBar from '@/MobileDevice/components/TopBar.vue'
import BottomBar from '@/MobileDevice/components/BottomBar.vue'
import NotificationBox from '@/MobileDevice/components/NotificationBox.vue'
</script>

<template>
  <main class="wrapper bg">
    <TopBar class="top-bar" />
    <div class="main">
      <h2 class="title">Сообщения</h2>
      <NotificationBox
        icon-color="#ffb465"
        sender="Инесса Станиславовна"
        time="1 мин"
        body="Вот координаты места: 59.985306, 30.165443"
      />
    </div>
    <BottomBar class="bottom-bar" />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.bg {
  background-image: url(screen.jpg);
  background-position: center;
  background-size: cover;
}
.main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  padding-top: 20px;
}
.title {
  margin-bottom: 20px;
}
.greenScreen {
  background-image: none;
  background-color: #0f0;
}
.greenScreen > .main > .time-widget {
  opacity: 0;
}
.greenScreen > .top-bar,
.greenScreen > .bottom-bar {
  opacity: 0;
}
</style>
