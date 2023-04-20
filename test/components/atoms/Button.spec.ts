import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../../components/atoms/Button/Button.vue'

describe('Button specs', () => {
  const wrapper = mount(Button)

  it('ラッパ確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('buttonが存在するはず', () => {
    expect(wrapper.find('.button')).toBeTruthy()
  })

  it('clickイベントがemitされるはず', () => {
    wrapper.find('.button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  describe('styles', () => {
    it('buttonのテキストを設定できる', () => {
      const wrapper = mount(Button, {
        slots: {
          default: '保存'
        }
      })
      expect(wrapper.html()).toContain('保存')
    })

    it('primaryになるはず', () => {
      const wrapper = mount(Button, {
        props: {
          order: 'primary'
        }
      })
      expect(wrapper.find('.primary').exists()).toBeTruthy()
    })

    it('secondary smallになるはず', () => {
      const wrapper = mount(Button, {
        props: {
          order: 'secondary',
          size: 'small'
        }
      })
      expect(wrapper.find('.secondary').exists()).toBeTruthy()
      expect(wrapper.find('.small').exists()).toBeTruthy()
    })
  })
})
