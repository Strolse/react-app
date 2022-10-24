import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('GetLoginUsername', () => {
  test('returns username', () => {
    const state:DeepPartial<StateSchema> = { loginForm: { username: 'username' } };

    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
