import { Meta, StoryFn } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, ExpandableCard } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default {
  title: "UI/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card className="w-[350px] border-pink-400" {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
);

export const Default: StoryFn<typeof Card> = Template.bind({});
Default.args = {};

export const WithCustomContent: StoryFn<typeof Card> = () => (
  <Card className="w-[350px] border-pink-400">
    <CardHeader>
      <CardTitle>Notification</CardTitle>
      <CardDescription>You have a new message</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Hello! This is a sample message in your new Card component.</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Dismiss</Button>
      <Button>View</Button>
    </CardFooter>
  </Card>
);

export const ExpandableCardStory: StoryFn<typeof ExpandableCard> = () => (
  <ExpandableCard
    className="w-[350px] border-pink-400"
    imageUrl="https://japan-figure.com/cdn/shop/articles/kuromi_800x800.jpg?v=1702464902"
    title="Kuromi"
    description="Sanrio's mischievous bunny"
  >
    <p>Kuromi is a cute but naughty bunny character from Sanrio.</p>
    <p>Born on October 31st, she loves mischief and collecting skulls.</p>
    <p>Her best friend is My Melody, despite their contrasting personalities.</p>
    <Button className="mt-4">Learn More</Button>
  </ExpandableCard>
);
ExpandableCardStory.storyName = "Kuromi Card";