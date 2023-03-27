<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import Button from './atoms/Button/Button.vue'

export interface Emits {
  (e: 'setDescription', text: string): () => void
}
const emits = defineEmits<Emits>()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}

const description = ref('')
const setDescription = () => {
  emits('setDescription', description.value)
  closeModal()
}
</script>

<template>
  <div>
    <button @click="openModal">
      <svg :width="24" :height="24">
        <title>comment-outline</title>
        <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
      </svg>
    </button>
    <TransitionRoot :show="isModalOpen">
      <Dialog as="div" :open="isModalOpen" @close="closeModal">
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
  </div>
</template>

<style scoped>

.dialog-panel {
  @apply m-4 p-2 lg:p-4 rounded-md bg-stone-100;
}
</style>
