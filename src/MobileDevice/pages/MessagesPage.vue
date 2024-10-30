<script setup>
import TopBar from '@/MobileDevice/components/TopBar.vue'
import BottomBar from '@/MobileDevice/components/BottomBar.vue'
import NotificationBox from '@/MobileDevice/components/NotificationBox.vue'
</script>

<template>
  <main class="wrapper bg">
    <TopBar class="top-bar" />
    <div class="main">
      <h2 class="title">Входящие</h2>
      <NotificationBox icon-color="#cf65ff" sender="Пантера" time="1 мин" body="Мобильный" />
      <NotificationBox icon-color="#cf65ff" sender="Пантера" time="1 мин" body="Мобильный" />
      <span class="sep">Вчера</span>
      <NotificationBox
        icon-color="#94c3c8"
        sender="Валера звукач"
        time="1 мин назад"
        body="Мобильный"
      />
      <NotificationBox icon-color="#ff7365" sender="Леха" time="2 мин" body="Мобильный" />
      <NotificationBox icon-color="#cf65ff" sender="Пантера" time="3 мин" body="Мобильный" />
      <span class="sep">Сегодня</span>
      <NotificationBox icon-color="#ffb465" sender="Жанка" time="1 мин назад" body="Мобильный" />
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
.sep {
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 50vh;
  background-color: #0001;
  padding: 3px 10px;
}
</style>
