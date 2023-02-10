import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ display: 'flex', paddingLeft: '600px' }}><Story /></div>,
    withMock,
  ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [{
        id: '1',
        title: 'Уведомление 1',
        description: 'Текст уведомления 1',
      },
      {
        id: '2',
        title: 'Уведомление 2',
        description: 'Текст уведомления 2',
      }],
    },
  ],
};
