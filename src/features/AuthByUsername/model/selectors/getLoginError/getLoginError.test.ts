import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('GetLoginError', () => {
  test('returns error', () => {
    const state:DeepPartial<StateSchema> = { loginForm: { error: 'error' } };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
