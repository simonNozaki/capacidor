import { ref } from 'vue'

export type TodoStatus = ['unprocessed', '未対応'] | ['in progress', '処理中'] | ['done', '完了'] | ['gone', '対処しない']

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
