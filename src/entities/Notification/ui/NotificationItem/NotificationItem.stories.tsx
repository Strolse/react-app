import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  item: {
    id: '1',
    title: 'Уведомление 1',
    description: 'Текст уведомления 1',
  },
};

export const PrimaryWithLink = Template.bind({});
PrimaryWithLink.args = {
  item: {
    id: '1',
    title: 'Уведомление 1 (ссылка)',
    description: 'Текст уведомления 1',
    href: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614531242_39-p-smailik-na-belom-fone-41.png',
  },
};
