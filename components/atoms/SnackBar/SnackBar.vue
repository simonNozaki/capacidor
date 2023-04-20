<script setup lang="ts">
import { computed } from 'vue'
import Button from '../Button/Button.vue'
import { useSnackBar } from '../../../composables/useSnackBar'
const { snackbar } = useSnackBar()
const isOpenSnackbar = snackbar.isOpenSnackBar
const current = snackbar.current

const classes = computed(() => ({
  [['success', 'info', 'error'].filter(l => l === current.value.type).at(0) ?? '']: true
}))
</script>

<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div v-if="isOpenSnackbar" class="toast" :class="classes">
      <p>
        {{ current.message }}
      </p>
      <Button order="secondary" size="small" @click="snackbar.pop()">
        閉じる
      </Button>
    </div>
  </transition>
</template>

<style scoped>
.toast {
  @apply fixed bottom-3 flex justify-between w-full max-w-xs p-4 left-1/2 -translate-x-1/2 z-50 text-gray-500 bg-white rounded shadow;
}

.success {
  @apply bg-emerald-500 text-white;
}

.info {
  @apply bg-sky-500 text-white;
}

.error {
  @apply bg-rose-500 text-white;
}
</style>
