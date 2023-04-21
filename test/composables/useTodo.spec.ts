import { describe, it, expect } from 'vitest'
import { useTodo } from '../../composables/useTodo'

describe('useTodo specs', () => {
  it('todoを追加できるはず', () => {
    const todos = useTodo().todos
    todos.value.push({
      id: '1',
      title: 'todo',
      status: ['in progress', '処理中'],
      description: 'none',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    expect(todos.value.length).toBe(1)
  })
})
