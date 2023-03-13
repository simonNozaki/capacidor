<script setup lang="ts">
import Button from './Button.vue'
export interface Props {
  message: string
}
withDefaults(defineProps<Props>(), {
  message: 'message'
})

interface Emits {
  (e: 'close'): void
}
const emits = defineEmits<Emits>()

const closeSnackBar = () => {
  emits('close')
}
</script>

<template>
  <div class="toast">
    <div class="pl-4">
      <p>
        {{ message }}
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
