<template>
  <div>
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
h2 {
  color: red;
}
</style>
