import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from '.';

const meta = {
  title: 'UI/Kit/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => (
  <NavigationMenu orientation="horizontal">
    <NavigationMenu.FirstLevel>
      <NavigationMenu.FirstLevelItem label="Home" active href="/" />
      <NavigationMenu.FirstLevelItem label="Components">
        <NavigationMenu.SecondLevel>
          <NavigationMenu.SecondLevelItem href="/docs/installation">
            Installation
          </NavigationMenu.SecondLevelItem>
          <NavigationMenu.SecondLevelItem href="/docs/usage">
            Usage
          </NavigationMenu.SecondLevelItem>
        </NavigationMenu.SecondLevel>
      </NavigationMenu.FirstLevelItem>
    </NavigationMenu.FirstLevel>
  </NavigationMenu>
);
