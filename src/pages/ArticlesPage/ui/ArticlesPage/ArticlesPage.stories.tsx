import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [StoreDecorator({
  articlesPage: {
    ids: [],
    entities: {},
    isLoading: false,
    hasMore: false,
    limit: 5,
    page: 1,
  },
  scrollRestoration: {
    scroll: {},
  },
})];
