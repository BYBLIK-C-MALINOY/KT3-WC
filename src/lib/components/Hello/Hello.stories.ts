import './Hello'
import type { Meta, StoryObj } from '@storybook/web-components-vite'

export const Hello: StoryObj = {}

export default {
  title: "Components/Hello",
  render: () => `<hello-component> </hello-component>`
} satisfies Meta
