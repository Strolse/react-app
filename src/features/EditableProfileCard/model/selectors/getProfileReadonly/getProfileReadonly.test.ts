import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('returns readonly value', () => {
    const state:DeepPartial<StateSchema> = { profile: { readonly: true } };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
