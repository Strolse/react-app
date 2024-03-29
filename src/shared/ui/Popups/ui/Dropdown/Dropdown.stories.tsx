import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  trigger: <Button>Open</Button>,
  items: [
    { content: 'one' },
    { content: 'two' },
    { content: 'three' },
  ],
};
