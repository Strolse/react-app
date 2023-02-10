import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRoles } from '@/entities/User';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(Story) => <div style={{ display: 'flex', paddingLeft: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        avatar: 'https://wp-s.ru/wallpapers/12/12/372677389259771/logotip-vzglyad-devushki.jpg',
      },
    },
  })];

export const UserWithAdminRole = Template.bind({});
UserWithAdminRole.args = {};
UserWithAdminRole.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        avatar: 'https://wp-s.ru/wallpapers/12/12/372677389259771/logotip-vzglyad-devushki.jpg',
        roles: [UserRoles.ADMIN, UserRoles.USER],
      },
    },
  })];
