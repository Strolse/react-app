import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Иван',
    lastname: 'Петров',
    age: 32,
    country: Country.Russia,
    city: 'Москва',
    username: 'admin',
    currency: Currency.RUB,
    avatar: Avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [StoreDecorator({
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  data: {
    first: 'Иван',
    lastname: 'Петров',
    age: 32,
    country: Country.Russia,
    city: 'Москва',
    username: 'admin',
    currency: Currency.RUB,
    avatar: Avatar,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
