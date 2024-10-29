<script setup>
defineProps({
  size: {
    default: 24,
    type: Number,
  },
})
</script>

<template>
  <svg
    :height="size"
    :width="size"
    class="icon icon-tabler icon-tabler-world"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M3.6 9h16.8"></path>
    <path d="M3.6 15h16.8"></path>
    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
  </svg>
</template>
