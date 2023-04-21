import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SnackBar from '../../../components/atoms/SnackBar/SnackBar.vue'
import { useSnackBar } from '../../../composables/useSnackBar'

describe('SnackBar specs', () => {
  it('引数なしでは要素が存在しないはず', () => {
    expect(mount(SnackBar).find('.toast').exists()).toBeFalsy()
  })

  describe('スナックバーが出現する', () => {
    it('成功の表示ができる', () => {
      const snackbar = useSnackBar().snackbar
      snackbar.isOpenSnackBar.value = true
      expect(mount(SnackBar).find('.toast').exists()).toBeTruthy()
    })

    it('トーストを閉じることができる', () => {
      const wrapper = mount(SnackBar)
      const snackbar = useSnackBar().snackbar
      snackbar.isOpenSnackBar.value = true
      expect(wrapper.find('.toast').exists()).toBeTruthy()
      wrapper.find('.button').trigger('click')
      expect(snackbar.isOpenSnackBar.value).toBeFalsy()
    })

    it('複数回スナックバーを出すこともできる', () => {
      const snackbar = useSnackBar().snackbar
      snackbar.push({ message: 'success1', type: 'success' })
      expect(mount(SnackBar).find('.toast').exists()).toBeTruthy()
      snackbar.push({ message: 'success2', type: 'success' })
      snackbar.push({ message: 'success3', type: 'success' })
      expect(mount(SnackBar).find('.toast').exists()).toBeTruthy()
      expect(snackbar.current.value.message).toBe('success3')
    })
  })

  describe('スタイル', () => {
    it('infoのスタイルになるはず', () => {
      const snackbar = useSnackBar().snackbar
      snackbar.push({ message: 'info', type: 'info' })
      expect(mount(SnackBar).find('.info').exists()).toBeTruthy()
    })

    it('errorのスタイルになるはず', () => {
      const snackbar = useSnackBar().snackbar
      snackbar.push({ message: 'error', type: 'error' })
      expect(mount(SnackBar).find('.error').exists()).toBeTruthy()
    })
  })
})
