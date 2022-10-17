import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (store: DeepPartial<StateShema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={store}>
    <StoryComponent />
  </StoreProvider>
);
