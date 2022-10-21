import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('GetLoginIsLoading', () => {
  test('returns true', () => {
    const state:DeepPartial<StateSchema> = { loginForm: { isLoading: true } };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('works with empty state and returns false', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
