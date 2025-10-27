import type { Meta, StoryObj } from '@storybook/web-components-vite'

type Args = {
  label: string,
  variant: "primary" | "secondary" | "icon" | "link"
}

export type ButtonStory = StoryObj<Args>
export type ButtonMeta = Meta<Args>
