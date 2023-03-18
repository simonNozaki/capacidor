<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import Button from './atoms/Button.vue'

export interface Emits {
  (e: 'close'): () => void
  (e: 'onSetDescription', text: string): () => void
}
export interface Props {
  isOpen: boolean;
}
withDefaults(defineProps<Props>(), {
  isOpen: false
})
const emits = defineEmits<Emits>()
const closeDialog = () => {
  emits('close')
}
const description = ref('')
const setDescription = () => {
  emits('onSetDescription', description.value)
  emits('close')
}
</script>

<template>
  <TransitionRoot :show="isOpen">
    <Dialog as="div" :open="isOpen" @close="closeDialog">
      <div
        class="fixed inset-0 bg-black/30 flex justify-center"
      >
        <TransitionChild
          enter="duration-[400ms] ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-[400ms] ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogPanel class="dialog-panel flex flex-col">
            <div>
              <textarea v-model="description" rows="3" />
            </div>
            <Button @click="setDescription">
              保存
            </Button>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>

.dialog-panel {
  @apply m-4 p-2 lg:p-4 rounded-md bg-stone-100;
}
</style>
