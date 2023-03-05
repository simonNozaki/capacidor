<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
export interface Emits {
  (e: 'click'): void
}

const emits = defineEmits<Emits>()

const click = () => {
  emits('click')
}
</script>

<template>
  <button class="button" @click="click">
    <span class="button-text">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply rounded px-3 py-2 bg-teal-600
  hover:bg-teal-400 focus:outline-none;
}

.button-text {
  @apply font-semibold text-white;
}
</style>
