import { ref } from 'vue'

export type TodoStatus = 'unprocessed' | 'in progress' | 'done' | 'gone'

export interface TodoItem {
  id: string,
  title: string,
  status: TodoStatus,
  description: string,
  createdAt: Date,
  updatedAt: Date
}

const todos = ref<TodoItem[]>([])

export const useTodo = () => {
  return {
    todos
  }
}
