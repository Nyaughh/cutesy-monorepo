import { Button } from "./components/ui/button";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
    asChild: false,
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
};

export const Outline: StoryFn<typeof Button> = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
  className: 'border-pink-400'
};

export const Ghost: StoryFn<typeof Button> = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
};

export const Link: StoryFn<typeof Button> = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Link Button',
};

export const Small: StoryFn<typeof Button> = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button',
};

export const Large: StoryFn<typeof Button> = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};

export const Icon: StoryFn<typeof Button> = Template.bind({});
Icon.args = {
  size: 'icon',
  children: '🌟',
};

export const Disabled: StoryFn<typeof Button> = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

export const CustomClass: StoryFn<typeof Button> = Template.bind({});
CustomClass.args = {
  className: 'bg-purple-500 hover:bg-purple-600 text-white',
  children: 'Custom Class Button',
};