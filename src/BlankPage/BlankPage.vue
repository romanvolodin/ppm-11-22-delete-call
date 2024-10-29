<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/blank">About</RouterLink>
  </nav>
  <p>Blank Page</p>
</template>
