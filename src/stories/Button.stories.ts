import { Button } from '@/stories/Button';
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';


type StoryProps = ComponentProps<typeof Button>;

const meta:Meta<StoryProps>={
  component: Button,
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
    backgroundColor: '#1ea7fd',
    size: "large",
  },
};
