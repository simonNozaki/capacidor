<script setup lang="ts">
import SnackBar from '@/components/atoms/SnackBar.vue'
</script>

<template>
  <div class="app">
    <SnackBar />
    <ApplicationHeader />
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.app {
  @apply m-3;
}

.main {
  @apply mt-5;
}
</style>
