import { StoryObj, Meta } from '@storybook/react';
import { Button, IButtonProps } from '@embark-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Label'
  }
} as Meta<IButtonProps>;

export const Primary: StoryObj<IButtonProps> = {}