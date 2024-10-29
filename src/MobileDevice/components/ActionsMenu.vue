<script setup>
const items = [
  { text: 'Перезвонить', icon: '⮌' },
  { text: 'Скопировать номер', icon: '❒' },
  { text: 'Удалить', icon: '𐄂' },
]
</script>

<template>
  <ul class="menu">
    <li class="item" v-for="item in items" :key="item.text">
      <div class="icon">{{ item.icon }}</div>
      {{ item.text }}
    </li>
  </ul>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  box-shadow: 0 13px 32px 0 #00000033;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
  width: 250px;
  list-style: none;
}
.item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 20px;
}
</style>
