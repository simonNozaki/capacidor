/* eslint-disable vue/one-component-per-file */
/* eslint-disable vue/no-reserved-component-names */
import { defineComponent } from 'vue'
import type { Meta, Story } from '@storybook/vue3'

import TextInput from './TextInput.vue'

export interface Props {
}

const meta: Meta = {
  component: TextInput,
  title: 'Atoms/TextInput'
}

export default meta

export const Default: Story<Props> = args =>
  defineComponent({
    components: { TextInput },
    setup () {
      return args
    },
    template: '<TextInput placeholder="placeholder" />'
  })
