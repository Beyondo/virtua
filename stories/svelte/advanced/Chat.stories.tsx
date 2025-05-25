import type { Meta, StoryObj } from "@storybook/svelte";
import { VList } from "../../../src/svelte";
import ChatComponent from "./Chat.stories.svelte";

export default {
  component: VList,
} satisfies Meta;

export const Default: StoryObj = {
  name: "Chat",
  render: () => ({
    Component: ChatComponent,
  }),
};
