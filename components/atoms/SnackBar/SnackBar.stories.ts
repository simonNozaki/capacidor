import { defineComponent } from 'vue'
import type { Meta, Story } from '@storybook/vue3'

import SnackBar from './SnackBar.vue'

const meta: Meta = {
  component: SnackBar,
  title: 'Atoms/SnackBar'
}

export default meta

export const Default: Story = args =>
  defineComponent({
    components: { SnackBar },
    setup () {
      return args
    },
    template: '<SnackBar >ボタン</SnackBar>'
  })
