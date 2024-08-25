import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import Audio from "./components/ui/audio";

const meta: Meta<typeof Audio> = {
  title: "UI/Audio",
  component: Audio,
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    className: { control: 'text' },
    onPlay: { action: 'played' },
    onPause: { action: 'paused' },
    onEnded: { action: 'ended' },
    onTimeUpdate: { action: 'time updated' },
    onVolumeChange: { action: 'volume changed' },
  },
};

export default meta;

const Template: StoryFn<typeof Audio> = (args) => <Audio {...args} />;

export const Default: StoryFn<typeof Audio> = Template.bind({});
Default.args = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'Sample Audio',
};

export const CustomTitle: StoryFn<typeof Audio> = Template.bind({});
CustomTitle.args = {
  ...Default.args,
  title: 'Custom Audio Title',
};

export const CustomClass: StoryFn<typeof Audio> = Template.bind({});
CustomClass.args = {
  ...Default.args,
  className: 'bg-blue-100 p-4 rounded-lg',
};