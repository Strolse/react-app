import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('GetCounterValue', () => {
  test('returns value', () => {
    const state: DeepPartial<StateShema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateShema)).toEqual(10);
  });
});
