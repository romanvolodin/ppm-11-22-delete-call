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
    class="icon icon-tabler icon-tabler-arrow-left"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
    <path d="M5 12l14 0"></path>
    <path d="M13 18l6 -6"></path>
    <path d="M13 6l6 6"></path>
  </svg>
</template>
