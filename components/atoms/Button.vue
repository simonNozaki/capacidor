<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
export type ButtonSize = 'small' | 'medium'
export type ButtonStyleOrder = 'primary' | 'secondary'

export interface Props {
  order?: ButtonStyleOrder
  size?: ButtonSize
}

export interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const click = () => {
  emits('click')
}

const classes = computed(() => ({
  [props.order ? props.order : 'primary']: true,
  [props.size ? props.size : 'medium']: true
}))
</script>

<template>
  <button class="button" :class="classes" @click="click">
    <span class="button-text">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply rounded bg-teal-600
  hover:bg-teal-400 focus:outline-none;
}

.medium {
  @apply px-3 py-2;
}

.button-text {
  @apply font-semibold text-white;
}
</style>
