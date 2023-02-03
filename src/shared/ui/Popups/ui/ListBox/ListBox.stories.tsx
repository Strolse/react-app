import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/Popups/ListBox',
  component: ListBox,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    items: [
      { value: '1', content: 'Москва' },
      { value: '2', content: 'Санкт-Петербург' },
      { value: '3', content: 'Ярославль' },
    ],
    value: '1',
  },
  decorators: [
    (Story) => <div style={{ padding: 200 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Укажите город',
};

export const topLeft = Template.bind({});
topLeft.args = {
  defaultValue: 'Укажите город',
  direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
  defaultValue: 'Укажите город',
  direction: 'top right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  defaultValue: 'Укажите город',
  direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  defaultValue: 'Укажите город',
  direction: 'bottom right',
};
