<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', newValue: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const value = computed({
  get (): string {
    return props.modelValue
  },
  set (value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" type="text" class="text-input">
</template>

<style scoped>
  .text-input {
    @apply block p-2 w-full rounded border border-gray-200
  }
</style>
