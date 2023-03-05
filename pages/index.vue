<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { TodoItem, TodoStatus, useTodo } from '@/composables/useTodo'
import Button from '@/components/atoms/Button.vue'
import TextInput from '~~/components/atoms/TextInput.vue'
const { todos } = useTodo()
const newTodoTitle = ref('')

const addTodo = () => {
  const now = new Date()
  const newTodoItem: TodoItem = {
    id: uuidv4(),
    title: newTodoTitle.value,
    status: 'unprocessed',
    description: '',
    createdAt: now,
    updatedAt: now
  }
  todos.value.push(newTodoItem)
}

const makeTodoDone = (id: string) => {
  const done = todos.value
    .filter(t => t.id === id)
    .map(t => ({ ...t, status: 'done' as TodoStatus }))
    .at(0)
  if (done) {
    // idで消して更新したものを戻す
    todos.value = todos.value.filter(t => t.id !== id)
  }
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
</style>
