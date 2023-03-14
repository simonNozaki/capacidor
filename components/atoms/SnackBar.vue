<script setup lang="ts">
import Button from './Button.vue'
import { useSnackBar } from '@/composables/useSnackBar'
const { snackbar } = useSnackBar()
const isOpenSnackbar = snackbar.isOpenSnackBar
const current = snackbar.current

const closeSnackBar = () => {
  snackbar.pop()
}
</script>

<template>
  <div v-if="isOpenSnackbar" class="toast">
    <div class="pl-4">
      <p>
        {{ current.message }}
      </p>
    </div>
    <Button order="secondary" size="small" @click="closeSnackBar">
      閉じる
    </Button>
  </div>
</template>

<style scoped>
.toast {
  @apply absolute top-0 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white divide-x divide-gray-200 rounded shadow;
}
</style>
