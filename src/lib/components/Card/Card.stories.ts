import "./Card";
import type { Meta, StoryObj } from "@storybook/web-components-vite";

type DefaultArgs = {
  title: string;
  content: string;
  imageSrc?: string;
};

type ImageArgs =
  | {
    hasImage: true;
    imageSrc: string;
  }
  | { hasImage: false };

type Args = DefaultArgs & ImageArgs;

const defaultArgs = {
  title: "Food",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

export const CardDefault: StoryObj<Args> = {
  args: {
    ...defaultArgs,
    hasImage: true,
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Stereogram_Tut_Random_Dot_Shark.png",
  },
};

export const CardWithoutImage: StoryObj<Args> = {
  args: {
    ...defaultArgs,
    hasImage: false,
  },
};

export default {
  title: "Components/Card",
  argTypes: {
    hasImage: {
      table: {
        disable: true,
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
  render: ({ imageSrc, hasImage, title, content }) => {
    if (hasImage) {
      return `
        <card-component>
          <img slot="image" src=${imageSrc} alt="stereogram" />
          <h3 slot="title">${title}</h3>
          <p slot="content">${content}</p>
          <a slot="ui" href="https://ya.ru">Read</a>
        </card-component>
      `;
    }

    return `
      <card-component>
        <h3 slot="title">${title}</h3>
        <p slot="content">${content}</p>     
        <button slot="ui">Submit</button> 
      </card-component>
    `;
  },
} satisfies Meta<Args>;
