<template>
  <div>
    <h2>Counter</h2>
    <p class="text-red-500">You clicked {{ count }} times!</p>
    <button @click="inc">Click!</button>
  </div>
</template>
<script setup lang="ts">
import '~/assets/css/tailwind.css';

const count = ref<number>(0);
const inc = () => count.value++;
</script>
<style lang="postcss">
h2 {
  @apply text-lg text-red-500;
}
</style>
