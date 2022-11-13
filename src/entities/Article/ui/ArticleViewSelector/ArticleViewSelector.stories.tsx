import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/types/article';

export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const ListSelected = Template.bind({});
ListSelected.args = {
  view: ArticleView.BIG,
};

export const TileSelected = Template.bind({});
TileSelected.args = {
  view: ArticleView.SMALL,
};
