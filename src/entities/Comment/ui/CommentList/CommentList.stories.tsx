import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'some comment',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://wp-s.ru/wallpapers/12/12/372677389259771/logotip-vzglyad-devushki.jpg',

      },
    },
    {
      id: '2',
      text: 'some comment 2',
      user: {
        id: '2',
        username: 'user',
        avatar: 'https://bumper-stickers.ru/33977-thickbox_default/chelovechek-v-jeltoy-odejde.jpg',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};

export const NoComments = Template.bind({});
NoComments.args = {
  comments: [],
};
