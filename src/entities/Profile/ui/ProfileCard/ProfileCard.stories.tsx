import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
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
    avatar: 'https://wp-s.ru/wallpapers/12/12/372677389259771/logotip-vzglyad-devushki.jpg',
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
    avatar: 'https://wp-s.ru/wallpapers/12/12/372677389259771/logotip-vzglyad-devushki.jpg',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
