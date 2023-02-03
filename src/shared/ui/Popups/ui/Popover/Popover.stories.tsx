import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  trigger: <Button>Some trigger</Button>,
  children: (
    <div>
      <div>Some element 1</div>
      <div>Some element 2</div>
      <div>Some element 3</div>
    </div>
  ),
};
