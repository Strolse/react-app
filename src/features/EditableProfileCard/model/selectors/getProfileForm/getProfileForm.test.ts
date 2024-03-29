import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('returns form', () => {
    const data = {
      first: 'Иван',
      lastname: 'Петров',
      age: 32,
      country: Country.Russia,
      city: 'Москва',
      username: 'admin',
      currency: Currency.RUB,
    };
    const state:DeepPartial<StateSchema> = { profile: { form: data } };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
