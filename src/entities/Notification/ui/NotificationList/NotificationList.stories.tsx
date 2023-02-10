import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({})];
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

export const PrimaryWithLink = Template.bind({});
PrimaryWithLink.args = {};
PrimaryWithLink.decorators = [
  StoreDecorator({})];
PrimaryWithLink.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [{
        id: '1',
        title: 'Уведомление 1',
        description: 'Текст уведомления 1',
        href: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614531242_39-p-smailik-na-belom-fone-41.png',
      },
      {
        id: '2',
        title: 'Уведомление 2',
        description: 'Текст уведомления 2',
        href: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614531242_39-p-smailik-na-belom-fone-41.png',
      }],
    },
  ],
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [
  StoreDecorator({})];
PrimaryLoading.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      delay: 10000000000000,
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
