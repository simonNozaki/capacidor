import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextInput from '../../../components/atoms/TextInput/TextInput.vue'

describe('TextInput specs', () => {
  const wrapper = mount(TextInput)

  it('ラッパ確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('inputが存在するはず', () => {
    expect(wrapper.find('.text-input').exists()).toBeTruthy()
  })

  it('inputから入力に応じてイベントがemitされるはず', () => {
    wrapper.find('.text-input').trigger('input')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('inputイベントでv-modelが更新されるはず', async () => {
    const textInput = wrapper.find('.text-input')
    await textInput.setValue('new todo')

    expect(textInput.element.value).toBe('new todo')
  })
})
