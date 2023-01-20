import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfilePageHeader } from './EditableProfilePageHeader';

export default {
  title: 'features/EditableProfileCard/EditableProfilePageHeader',
  component: EditableProfilePageHeader,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfilePageHeader>;

const Template: ComponentStory<typeof EditableProfilePageHeader> = (args) => <EditableProfilePageHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
