import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  first: 'Иван',
  lastname: 'Петров',
  age: 32,
  country: Country.Russia,
  city: 'Москва',
  username: 'admin',
  currency: Currency.RUB,
};

describe('ProfileSlice', () => {
  test('sets readonly', () => {
    const state:DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false),
    )).toEqual({ readonly: false });
  });

  test('cancels editable data', () => {
    const state:DeepPartial<ProfileSchema> = { data, form: { ...data, age: 33 }, readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit,
    )).toEqual({
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('updates profile data', () => {
    const state:DeepPartial<ProfileSchema> = { form: { age: 32 } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ age: 33 }),
    )).toEqual({ form: { age: 33 } });
  });

  test('updates profile service pending', () => {
    const state:DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('updates profile service fulfilled', () => {
    const state:DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
