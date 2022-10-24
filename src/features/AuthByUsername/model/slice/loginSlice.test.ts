import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('LoginSlice', () => {
  test('sets username', () => {
    const state:DeepPartial<LoginSchema> = { username: 'user' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('username'),
    )).toEqual({ username: 'username' });
  });

  test('sets password', () => {
    const state:DeepPartial<LoginSchema> = { password: '1' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });
});
