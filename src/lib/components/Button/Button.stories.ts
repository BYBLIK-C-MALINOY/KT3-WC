import './Button'
import type { ButtonMeta, ButtonStory } from './types'
// @ts-ignore
import iconX from './assets/icon-x.svg'

export const PrimaryButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "primary"
  }
}

export const SecondaryButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "secondary"
  }
}

export const IconButton: ButtonStory = {
  args: {
    label: "Submit",
    variant: "icon"
  }
}

export default {
  title: "Components/Button",
  render: ({ label, variant }) => variant === "icon"
    ? `<button is="button-component" class="button--${variant}">
          <img src="${iconX}" alt="button icon" />
      </button>`
    : `<button is="button-component" class="button--${variant}">${label}</button>`
} satisfies ButtonMeta
