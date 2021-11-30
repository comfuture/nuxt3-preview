<template>
  <div class="app">
    <h2>Counter</h2>
    <p>You clicked {{ count }} times!</p>
    <button @click="inc">Click!</button>
  </div>
</template>
<script setup lang="ts">
const count = ref<number>(0);
const inc = () => count.value++;
</script>
<style lang="postcss">
.app {
  h2 {
    @apply text-gray-600;
  }
}
</style>
