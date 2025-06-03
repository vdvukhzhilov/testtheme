import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const VARIANT_OPTIONS = ['primary', 'secondary', 'link'] as const;
const SIZE_OPTIONS = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

const meta = {
  title: 'UI/Kit/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANT_OPTIONS,
    },
    size: {
      control: 'select',
      options: SIZE_OPTIONS,
    },
    asChild: {
      control: 'boolean',
      hidden: true,
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args) => (
  <Button {...args}>Primary Button</Button>
);
