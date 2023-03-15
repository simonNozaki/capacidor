<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem, TodoStatus, useTodo } from '@/composables/useTodo'
import Button from '@/components/atoms/Button.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import ChevronDown from '@/components/atoms/ChevronDown.vue'
import { useSnackBar } from '@/composables/useSnackBar'
const { snackbar } = useSnackBar()
const { todos } = useTodo()
const newTodoTitle = ref('')

const addTodo = () => {
  const now = new Date()
  const newTodoItem: TodoItem = {
    id: uuidv4(),
    title: newTodoTitle.value === '' ? '無題' : newTodoTitle.value,
    status: ['unprocessed', '未対応'],
    description: '',
    createdAt: now,
    updatedAt: now
  }
  todos.value.push(newTodoItem)
  snackbar.push({ message: 'TODOを追加しました', type: 'success' })
}

const makeTodoDone = (id: string) => {
  const done = getUpdatedTodoOrNull(id, ['done', '完了'])
  if (done) {
    // idで消して更新したものを戻す
    todos.value = todos.value.filter(t => t.id !== id)
    snackbar.push({ message: 'TODOを完了しました', type: 'success' })
  }
}

const setStatus = (id: string, status: TodoStatus) => {
  const updated = getUpdatedTodoOrNull(id, status)
  if (updated) {
    todos.value = todos.value.filter(t => t.id !== id)
    todos.value.push(updated)
    snackbar.push({ message: `ステータスを${status[1]}に変更しました`, type: 'success' })
  }
}

/**
 * ステータスを更新したToDo要素を返す
 */
const getUpdatedTodoOrNull = (id: string, status: TodoStatus): TodoItem | undefined => {
  return todos.value
    .filter(t => t.id === id)
    .map(t => ({ ...t, status: status as TodoStatus }))
    .at(0)
}

const getActiveStatusClasses = (isActive: boolean): string[] => {
  const activeStyle = isActive ? 'todo-list-card-status-button__active' : 'todo-list-card-status-button__inactive'
  return [activeStyle, 'todo-list-card-status-button']
}
</script>

<template>
  <div>
    <div>
      <TextInput v-model="newTodoTitle" placeholder="今、気になっていることはなんですか？" />
      <div class="todo-save-button">
        <Button @click="addTodo">
          保存
        </Button>
      </div>
    </div>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id">
        <div class="todo-list-card">
          <div>
            <p class="todo-list-card-caption-title">
              {{ todo.title }}
            </p>
            <div class="top-16 w-56">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton as="div" class="status-menu-button">
                    <Button size="small" order="secondary">
                      <span> {{ todo.status[1] }} </span> <span class="inline-block ml-1"> <ChevronDown size="12" /> </span>
                    </Button>
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="px-1 py-1">
                      <MenuItem v-slot="{ active }">
                        <button :class="getActiveStatusClasses(active)" @click="setStatus(todo.id, ['unprocessed', '未対応'])">
                          未対応
                        </button>
                      </MenuItem>
                    </div>
                    <div class="px-1 py-1">
                      <MenuItem v-slot="{ active }">
                        <button :class="getActiveStatusClasses(active)" @click="setStatus(todo.id, ['in progress', '処理中'])">
                          処理中
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="todo-list-card-button">
            <Button @click="makeTodoDone(todo.id)">
              完了
            </Button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-save-button {
  @apply mt-2
}

.todo-list {
  @apply mt-5;
}

.todo-list li {
  @apply mt-2;
}

.todo-list-card {
  @apply w-full rounded bg-white flex flex-col p-2;
}

.todo-list-card-button {
  @apply flex justify-end
}

.todo-list-card-caption-title {
  @apply text-lg font-semibold text-stone-800;
}

.status-menu-button {
  @apply w-full rounded-md text-stone-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;
}

.todo-list-card-status-button__inactive {
  @apply text-stone-800;
}

.todo-list-card-status-button__active {
  @apply bg-teal-800 text-white font-semibold;
}

.todo-list-card-status-button {
  @apply flex w-full items-center rounded-md px-2 py-2 text-sm;
}
</style>
