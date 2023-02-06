import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('returns data', () => {
    const data = {
      first: 'Иван',
      lastname: 'Петров',
      age: 32,
      country: Country.Russia,
      city: 'Москва',
      username: 'admin',
      currency: Currency.RUB,
    };
    const state:DeepPartial<StateSchema> = { profile: { data } };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('works with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
