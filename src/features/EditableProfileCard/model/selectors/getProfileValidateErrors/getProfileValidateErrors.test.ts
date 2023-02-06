import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('returns error', () => {
    const state:DeepPartial<StateSchema> = { profile: { validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY] } };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
