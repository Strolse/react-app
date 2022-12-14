import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: [
    { value: '1', content: 'Москва' },
    { value: '2', content: 'Санкт-Петербург' },
    { value: '3', content: 'Ярославль' },
  ],
  defaultValue: 'Укажите город',
};
