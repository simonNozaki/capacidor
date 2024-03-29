/* eslint-disable vue/one-component-per-file */
/* eslint-disable vue/no-reserved-component-names */
import { defineComponent } from 'vue'
import type { Meta, Story } from '@storybook/vue3'

import Button, { ButtonStyleOrder, ButtonSize } from './Button.vue'

export interface Props {
  order?: ButtonStyleOrder
  size?: ButtonSize
}

const meta: Meta = {
  component: Button,
  title: 'Atoms/Button'
}

export default meta

export const Default: Story<Props> = args =>
  defineComponent({
    components: { Button },
    setup () {
      return args
    },
    template: '<Button>ボタン</Button>'
  })

export const Secondary: Story<Props> = args =>
  defineComponent({
    components: { Button },
    setup () {
      return args
    },
    template: '<Button order="secondary">ボタン</Button>'
  })

export const Small: Story<Props> = args =>
  defineComponent({
    components: { Button },
    setup () {
      return args
    },
    template: '<Button size="small">ボタン</Button>'
  })
