import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Как Вам статья?',
};

export const PrimaryWithFeedback = Template.bind({});
PrimaryWithFeedback.args = {
  title: 'Как Вам статья?',
  hasFeedback: true,
  feedbackTitle: 'Оставьте отзыв о статье',
};

export const WithRate = Template.bind({});
WithRate.args = {
  rate: 5,
};
