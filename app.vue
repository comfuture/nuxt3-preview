<template>
  <div>
    <h2 class="text-green-500">Counter</h2>
    <p>You clicked {{ count }} times!</p>
    <button @click="inc">Click!</button>
  </div>
</template>
<script setup lang="ts">
import '~/assets/css/tailwind.css';
const count = ref<number>(0);
const inc = () => count.value++;
</script>
